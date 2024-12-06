import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { Inject, Injectable, NgZone, OnDestroy, RendererFactory2 } from '@angular/core';
import { BaseSiteService, CmsService, Page } from '@spartacus/core';
import { distinctUntilChanged, takeWhile } from 'rxjs/operators';
import { NavigationMessageHandlerService } from './navigation-message-handler.service';
import { DOCUMENT } from '@angular/common';
import { TppLoaderService } from './tpp-loader.service';
import { ButtonScope, SNAP, SNAPButtonScope } from './fs-tpp-api.data';
import { FsSpartacusBridgeConfig } from 'fs-spartacus-common';
import { createCaasAccessData } from '../../util/helper';
import { WsProvider } from './ws-provider';

/**
 * This service checks if the application should display preview content or live content and
 * initializes the preview view if necessary.
 *
 * @export
 * @class TppStatusService
 */
@Injectable({
  providedIn: 'root',
})
export class TppStatusService implements OnDestroy {
  private firstSpiritPreview: Observable<boolean>;
  private subs$ = new Subscription();
  private TPP_SNAP: SNAP;

  constructor(
    private cmsService: CmsService,
    private ngZone: NgZone,
    private navigationMessageHandlerService: NavigationMessageHandlerService,
    private rendererFactory: RendererFactory2,
    private tppLoaderService: TppLoaderService,
    private baseSiteService: BaseSiteService,
    private config: FsSpartacusBridgeConfig,
    @Inject(DOCUMENT) private document,
  ) {
    const isConnected = new BehaviorSubject(false);
    const renderer = this.rendererFactory.createRenderer(null, null);
    this.firstSpiritPreview = isConnected.pipe(distinctUntilChanged());
    this.tppLoaderService.getSnap()?.then((snap) => {
      this.TPP_SNAP = snap;
      WsProvider.snap = snap;
      if (this.TPP_SNAP) {
        this.TPP_SNAP.onInit((success: boolean) => this.ngZone.run(() => isConnected.next(success)));
      } else {
        isConnected.next(false);
      }
      this.subs$.add(
        this.firstSpiritPreview.subscribe(async (isFirstSpiritPreview) => {
          if (isFirstSpiritPreview) {
            renderer.setAttribute(this.document.body, 'dnd-orient', 'horizontal');
            this.addTranslateButton();
            this.addSiblingSectionButton();
            this.navigationMessageHandlerService.initialize();
            this.activateCaasMode(isFirstSpiritPreview);
          } else {
            renderer.removeAttribute(this.document.body, 'dnd-orient');
            this.navigationMessageHandlerService.destroy();
          }
        }),
      );

      combineLatest([this.firstSpiritPreview, this.cmsService.getCurrentPage()])
        .pipe(takeWhile(([isPreview]) => isPreview))
        .subscribe(async ([, page]) => {
          await this.setPagePreviewElementInPreview(page);
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subs$) {
      this.subs$.unsubscribe();
    }
    WsProvider.closeWS();
  }

  private async setPagePreviewElementInPreview(page: Page): Promise<void> {
    if (page && this.TPP_SNAP) {
      await this.TPP_SNAP.setPreviewElement((page.properties || {}).previewId || null);
    }
  }

  /**
   * This method returns an Observable which contains the information if the application should run in preview mode.
   *
   * @return An Observable containing a boolean: True means the application should run in preview mode.
   */
  isFirstSpiritPreview(): Observable<boolean> {
    return this.firstSpiritPreview;
  }

  // Overrides the default "Create Section" button in the tpp frame.
  private addSiblingSectionButton(): void {
    this.TPP_SNAP.registerButton(
      {
        label: 'Add Section',
        css: 'tpp-icon-add-section',
        isEnabled: async (scope: ButtonScope) => Promise.resolve(true),
        execute: async ({ $node, previewId }: ButtonScope) => {
          console.log('execute', $node, previewId);
          return await this.addSiblingSection($node, previewId);
        },
      },
      1,
    );
  }

  private async addSiblingSection(node: HTMLElement, siblingPreviewId: string) {
    await this.TPP_SNAP.createSection(siblingPreviewId);
  }

  private async getProjectApps(): Promise<any> {
    return await this.TPP_SNAP.execute('script:tpp_list_projectapps');
  }

  private addTranslateButton(): void {
    this.getProjectApps().then((projectApps) => {
      if (Array.isArray(projectApps) && projectApps.some((projectApp) => projectApp.includes('TranslationStudio'))) {
        this.TPP_SNAP.registerButton(
          {
            _name: 'translation_studio',
            label: 'Translate',
            css: 'tpp-icon-translate',
            isEnabled: async (scope: SNAPButtonScope): Promise<boolean> => Promise.resolve(true),
            execute: async ({ status: { id: elementId }, language }) =>
              this.TPP_SNAP.execute('script:translationstudio_ocm_translationhelper', { language, elementId }),
          },
          2,
        );
      }
    })
  }

  private activateCaasMode(isPreview: boolean): void {
    this.baseSiteService.getActive().subscribe((activeBaseSite: string) => {
      const caasAccessData = createCaasAccessData(this.config, activeBaseSite, isPreview);
      const { apiKeyPreview } = this.config.bridge[activeBaseSite].caas;

      WsProvider.init(caasAccessData, apiKeyPreview);
    });
  }
}
