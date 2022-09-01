import { PreviewTranslationKey as TranslationKey } from '../fs/cms/page/preview/preview-translation.service';
import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CmsComponent, CmsService, RoutingService, Page, RouterState, PageType } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { combineLatest, Observable, from, of, Subscription } from 'rxjs';
import { map, switchMap, take, withLatestFrom } from 'rxjs/operators';
import { TppWrapperService } from '../fs/cms/page/tpp-wrapper-service';
import { nullSafe, errorToString } from 'fs-spartacus-common';
import { PreviewService } from '../fs/cms/page/preview/preview.service';
import { extractPageUniqueId } from '../fs/util/occ-cms-pages';
import { CreatePageResult } from '../fs/cms/page/fs-tpp-api.data';

/**
 * This overlay component marks empty slots in that content can be added.
 */
@Component({
  selector: 'fs-fs-editing-overlay',
  templateUrl: './fs-editing-overlay.component.html',
  styleUrls: ['./fs-editing-overlay.component.css'],
})
export class FsEditingOverlayComponent implements OnDestroy {
  static readonly TYPE_CODE = 'FsEditingOverlay';
  isButtonDisabled = false;
  private subs$ = new Subscription();

  constructor(
    private componentData: CmsComponentData<FsEditingOverlay>,
    private cmsService: CmsService,
    private tppWrapperService: TppWrapperService,
    private previewService: PreviewService,
    private routingService: RoutingService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  // components$ and getComponentDataWithFlexType were copied from 'tab-paragraph-container.component.ts'
  // in the Spartacus storefrontlib.
  components$: Observable<any[]> = this.componentData.data$.pipe(
    switchMap((data) =>
      combineLatest([
        data != null
          ? data.components
              .split(',')
              .map((component) => component.trim())
              .filter((component) => '' !== component)
              .map((component) => this.getComponentDataWithFlexType(component))
          : of([]),
      ])
    )
  );

  ngOnDestroy(): void {
    if (this.subs$) {
      this.subs$.unsubscribe();
    }
  }

  private getComponentDataWithFlexType(componentUid: string) {
    return this.cmsService.getComponentData<any>(componentUid).pipe(
      map((componentData) => {
        if (!componentData.flexType) {
          componentData = {
            ...componentData,
            flexType: componentData.typeCode,
          };
        }
        return {
          ...componentData,
        };
      })
    );
  }

  private async createSection(previewElement: string, componentData: FsEditingOverlay): Promise<void> {
    return this.previewService.createSection(previewElement, componentData);
  }

  private async createPage(page: Page, routerState: RouterState): Promise<CreatePageResult | void> {
    if (page != null && routerState != null && routerState.state != null && routerState.state.context != null) {
      const pageData = extractPageUniqueId(routerState.state.context);
      if (pageData != null) {
        return this.previewService
          .createPage(pageData.pageId?.toLocaleLowerCase(), page.template, routerState.state.context.type)
          .catch((createPageError) => {
            this.previewService.showDetailedErrorDialog(TranslationKey.CREATE_PAGE_UNEXPECTED_ERROR, {
              errorMessage: errorToString(createPageError),
            });
          });
      } else {
        this.previewService.showErrorDialog(TranslationKey.MISSING_ROUTING_DATA);
      }
    } else {
      this.previewService.showErrorDialog(TranslationKey.MISSING_PAGE_DATA);
    }
  }

  private getLatestPagePreviewData(): Observable<[string, [FsEditingOverlay, Page, RouterState]]> {
    // In theory, this.tppWrapperService.getPreviewElement() and this.componentData.data$ could emit more than one value.
    // But of course we only want to create a section once.
    // Therefore we get the latest value from each Observable, but only subscribe to one combination of the results.
    const previewElement$ = from(this.tppWrapperService.getPreviewElement());
    const currentPage$ = this.cmsService.getCurrentPage();
    return previewElement$.pipe(
      withLatestFrom(combineLatest([this.componentData.data$, currentPage$, this.routingService.getRouterState()])),
      take(1)
    );
  }

  async addContent(): Promise<void> {
    if (!this.isButtonDisabled) {
      this.isButtonDisabled = true;
      this.subs$.add(
        this.getLatestPagePreviewData().subscribe(async (pagePreviewData) => {
          const [previewElement, componentDataAndPage] = nullSafe(pagePreviewData, []);
          const [componentData, page, routerState] = nullSafe(componentDataAndPage, []);
          if (await this.previewService.isFirstSpiritManagedPage(previewElement)) {
            await this.createSection(previewElement, componentData);
          } else {
            const createPageResult = (await this.createPage(page, routerState)) as CreatePageResult;
            if (createPageResult != null && createPageResult.identifier != null) {
              const { uid, identifier, displayname, name } = createPageResult;
              console.log(
                `Successfully created the page '${displayname || name}' (template: ${
                  page.template
                }, uid: ${uid}, identifier: ${identifier})`
              );
              const hybrisPageId = `${routerState.state.context.type || PageType.CONTENT_PAGE}:${routerState.state.context.id}`;
              await this.tppWrapperService.setHybrisPageId(uid, hybrisPageId);
              await this.tppWrapperService.setPreviewElement(identifier);
              await this.tppWrapperService.triggerRerenderView();
              await this.createSection(identifier, componentData);
            } else {
              console.log('The creation of the page was cancelled.');
            }
          }
          this.isButtonDisabled = false;
          this.changeDetectorRef.detectChanges();
        })
      );
    }
  }
}

export interface FsEditingOverlay extends CmsComponent {
  components?: string;
  slotName: string;
}
