import { PreviewTranslationKey } from './preview/preview-translation.service';
import { PreviewService } from './preview/preview.service';
import { FsCmsPageInterface } from './fs-cms-page.interface';
import { TppWrapperService } from './tpp-wrapper-service';
import { Injectable, NgZone } from '@angular/core';
import { CaasClientFactory } from '../../caas/caas-client.factory';
import { combineLatest } from 'rxjs';
import { LanguageService, PageType } from '@spartacus/core';
import { first, map, switchMap, take } from 'rxjs/operators';
import { PreviewPageService } from './preview/preview-page.service';
import { findDocumentsInCaasResponse } from '../../util/helper';

/**
 * This service handles events fired by the fs-tpp-api/snap implementation.
 *
 * @export
 * @class TppEventHandlerService
 */
@Injectable({
  providedIn: 'root',
})
export class TppEventHandlerService {
  constructor(
    private tppWrapperService: TppWrapperService,
    private previewPageService: PreviewPageService,
    private languageService: LanguageService,
    private caasClientFactory: CaasClientFactory,
    private ngZone: NgZone,
    private previewService: PreviewService
  ) {}

  /**
   * This method initializes the listening on the RequestPreviewElement event.
   */
  initialize() {
    this.tppWrapperService.onRequestPreviewElement((previewId: string) => {
      this.ngZone.run(async () => {
        const currentPreviewId = await this.tppWrapperService.getPreviewElement();
        if (previewId != null && currentPreviewId !== previewId) {
          console.log(`Requesting to display the element with previewId '${previewId}'...`);
          const elementStatus = await this.tppWrapperService.getElementStatus(previewId);
          if (elementStatus?.uid != null) {
            console.log(
              `... element status: displayName '${elementStatus?.displayName || elementStatus?.name || '<not available>'}' and uid '${
                elementStatus?.uid
              }' `
            );
            let hybrisPageId = await this.tppWrapperService.getHybrisPageId(elementStatus.uid);
            console.log(`GetHybrisPageId script execution result = ${JSON.stringify(hybrisPageId)}`);
            if (hybrisPageId != null) {
              const showPageNotAvailableErrorMessage = () =>
                this.previewService.showDetailedErrorDialog(PreviewTranslationKey.REQUESTED_CAAS_PAGE_NOT_AVAILABLE_YET, {
                  pageUid: elementStatus.uid,
                });
              // The function tppWrapperService.getHybrisPageId() returns its passed argument (=page uid in this case)
              // if no hybrisPageId can be found in the form of the page. This is always the case when we create a new page
              // via the CC, because we don't call the function tppWrapperService.setHybrisPageId() in this case. If the
              // hybrisPageId equals the elementStatus.uid, then we assume that we just created a new page using the CC.
              // Since it takes a few seconds for this page to be available in the CaaS, we call this.fetchPageFromCaas() for this case.
              // This function tries to fetch the page in the CaaS. If it is found, it navigates to it.
              // Otherwise, an error message is displayed.
              if (hybrisPageId === elementStatus.uid) {
                const caasResult = (await this.fetchPageFromCaas(hybrisPageId)) as FsCmsPageInterface;
                if (caasResult?.uid == null) {
                  showPageNotAvailableErrorMessage();
                  return;
                } else {
                  hybrisPageId = `${PageType.CONTENT_PAGE}:${elementStatus.uid}`;
                  await this.tppWrapperService.setHybrisPageId(elementStatus.uid, hybrisPageId);

                  // We cannot await this, because showEditDialog doesn't return a promise.
                  this.tppWrapperService.showEditDialog(previewId);
                }
              }
              let currentElementStatus;
              let currentHybrisPageId;
              if (currentPreviewId) {
                currentElementStatus = await this.tppWrapperService.getElementStatus(currentPreviewId);
                currentHybrisPageId = await this.tppWrapperService.getHybrisPageId(currentElementStatus.uid);
              }
              if (currentHybrisPageId !== hybrisPageId && (await this.previewPageService.navigateTo(hybrisPageId)) !== true) {
                console.warn(`Could not navigate to the element with previewId '${previewId}' (hybris page id '${hybrisPageId}')`);
                showPageNotAvailableErrorMessage();
              }
            } else {
              this.previewService.showDetailedErrorDialog(PreviewTranslationKey.NAVIGATION_ERROR_HYBRIS_PAGE_ID_IS_NULL, {
                previewId,
                uid: elementStatus.uid,
              });
            }
          } else {
            this.previewService.showDetailedErrorDialog(PreviewTranslationKey.NAVIGATION_ERROR_ELEMENT_STATUS_HAS_NO_UID, {
              previewId,
              elementStatusString: JSON.stringify(elementStatus),
            });
          }
          // Set the new Preview Id and change Language.
          await this.tppWrapperService.setPreviewElement(previewId);
          const lang = await this.tppWrapperService.getPreviewLanguage();
          this.languageService.setActive(lang.toLocaleLowerCase());
        }
      });
    });
  }

  private async fetchPageFromCaas(pageUid: string): Promise<any> {
    const caasClientFactoryObservable = this.caasClientFactory.createCaasClient().pipe(take(1));
    const activeLanguageObservable = this.languageService.getActive().pipe(take(1));
    return combineLatest([caasClientFactoryObservable, activeLanguageObservable])
      .pipe(
        switchMap(([caasClient, lang]) => caasClient.getByUid(pageUid, lang)),
        map((caasResponse) => findDocumentsInCaasResponse(caasResponse)[0]),
        first()
      )
      .toPromise()
      .catch(console.error);
  }
}
