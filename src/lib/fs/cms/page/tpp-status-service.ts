import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { Inject, Injectable, NgZone, OnDestroy, RendererFactory2 } from '@angular/core';
import { BaseSiteService, CmsService, Page } from '@spartacus/core';
import { distinctUntilChanged, first, map, takeWhile } from 'rxjs/operators';
import { NavigationMessageHandlerService } from './navigation-message-handler.service';
import { DOCUMENT } from '@angular/common';
import { TppLoaderService } from './tpp-loader.service';
import { SNAP } from './fs-tpp-api.data';
import { FsSpartacusBridgeConfig } from 'fs-spartacus-common';
import { createCaasAccessData } from '../../util/helper';

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
    @Inject(DOCUMENT) private document
  ) {
    const isConnected = new BehaviorSubject(false);
    const renderer = this.rendererFactory.createRenderer(null, null);
    this.firstSpiritPreview = isConnected.pipe(distinctUntilChanged());
    this.tppLoaderService.getSnap()?.then((snap) => {
      this.TPP_SNAP = snap;
      if (this.TPP_SNAP) {
        this.TPP_SNAP.onInit((success: boolean) => this.ngZone.run(() => isConnected.next(success)));
      } else {
        isConnected.next(false);
      }
      this.subs$.add(
        this.firstSpiritPreview.subscribe(async (isFirstSpiritPreview) => {
          if (isFirstSpiritPreview) {
            renderer.setAttribute(this.document.body, 'dnd-orient', 'horizontal');
            this.overrideTranslateButton();
            this.adjustCreateComponentPosition();
            this.navigationMessageHandlerService.initialize();
            this.activateCaasMode(isFirstSpiritPreview);
          } else {
            renderer.removeAttribute(this.document.body, 'dnd-orient');
            this.navigationMessageHandlerService.destroy();
          }
        })
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

  private async getProjectApps(): Promise<any> {
    return await this.TPP_SNAP.execute('script:tpp_list_projectapps');
  }

  private async overrideTranslateButton(): Promise<void> {
    const projectApps = await this.getProjectApps();
    if (projectApps.some((projectApp) => projectApp.includes('TranslationStudio'))) {
      this.TPP_SNAP.overrideDefaultButton('translate', {
        getItems: () => [],
        execute: ({ status: { id: elementId }, language }) =>
          this.TPP_SNAP.execute('script:translationstudio_ocm_translationhelper', { language, elementId }),
      });
    }
  }

  /*
  add style classes and corresponding styles to DOM to position the CreateComponentButton on the Left of the component.
  This method is only called once so there is no overflow in style tags.
  */
  private async adjustCreateComponentPosition(): Promise<void> {
    this.document.head.appendChild(document.createElement('style')).innerHTML = `
      .tpp-buttons.is-component { right: auto; }
      .tpp-buttons.is-component .tpp-icon-edit { background: none; }
    `;
    const originalMethod = this.TPP_SNAP._buttons.find(({ _name }) => _name === 'create-component').isEnabled;
    this.TPP_SNAP.overrideDefaultButton('create-component', {
      isEnabled: async (scope) => {
        const enabled = originalMethod(scope);
        if (enabled && !scope.$button.parentElement.matches('.is-component')) scope.$button.parentElement.classList.add('is-component');
        return enabled;
      },
    });
  }

  private activateCaasMode(isPreview: boolean): void {
    this.baseSiteService.getActive().pipe(
      first(),
      map((activeBaseSite: string) => {
        const caasAccessData = createCaasAccessData(this.config, activeBaseSite, isPreview);
        this.TPP_SNAP.enableCaasMode(caasAccessData.collectionUrl(), this.config.bridge[activeBaseSite].caas.apiKey);
      })
    );
  }
}
