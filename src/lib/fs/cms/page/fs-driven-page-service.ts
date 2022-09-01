import { FsCmsPageContextFactory } from './fs-cms-page.context-factory';
import { Observable, isObservable } from 'rxjs';
import { CmsStructureModel, CmsPageAdapter, PageType, BaseSiteService } from '@spartacus/core';
import { Injectable } from '@angular/core';
import { CmsStructureModelResponseFactory } from './cms-structure-model-response-factory';
import { FsSpartacusBridgeConfig, arrayify } from 'fs-spartacus-common';
import { first, map, take } from 'rxjs/operators';
import { getFsManagedPageConfigByTemplateId } from '../../util/helper';

/**
 * This service decides how to process FirstSpirit Driven Pages (either a page based on SAP Commerce or a pure FirstSpirit page).
 */
@Injectable({
  providedIn: 'root',
})
export class FsDrivenPageService {
  constructor(
    private occCmsPageAdapter: CmsPageAdapter,
    private occResponseFactory: CmsStructureModelResponseFactory,
    private pageContextFactory: FsCmsPageContextFactory,
    private bridgeConfig: FsSpartacusBridgeConfig,
    private baseSiteService: BaseSiteService
  ) {}

  /**
   * This method checks for a given FirstSpirit Page if an SAP Commerce counterpart exists or if it is a pure FirstSpirit page.
   *
   * @param fsCmsPage The FirstSpirit page which needs to be checked for a SAP Commerce counterpart.
   * @return An Observable which contains the CMS data for the requested page.
   */
  process(fsCmsPage: CmsStructureModel): null | Observable<CmsStructureModel> {
    if (fsCmsPage) {
      const templateId = fsCmsPage?.page?.template?.toLocaleLowerCase();
      if (templateId) {
        let baseSite;
        this.baseSiteService
          .getActive()
          .pipe(first())
          .subscribe((activeBaseSite) => (baseSite = activeBaseSite));
        const fsManagedPageConfig = getFsManagedPageConfigByTemplateId(
          arrayify(this.bridgeConfig?.bridge[baseSite].firstSpiritManagedPages),
          templateId
        );

        if (fsManagedPageConfig) {
          const { sapPageIdentifier, sapPageType } = fsManagedPageConfig;
          if (sapPageIdentifier != null && sapPageType != null) {
            // we're expecting a first spirit driven page based on an existing SAP page
            return this.processFsDrivenPage(templateId, sapPageIdentifier, sapPageType);
          }
          // We're expecting a first spirit driven page
          const fakeOccCmsPage$ = this.occResponseFactory.createCmsStructureModelResponse(fsCmsPage);
          if (fakeOccCmsPage$ && isObservable(fakeOccCmsPage$)) {
            return fakeOccCmsPage$;
          }
        } else {
          console.warn(
            `Did not find any matching firstSpiritManagedPages-configuration entry for the given FS page template id '${templateId}'`
          );
        }
      } else {
        console.error(`Tried to process a FS driven page that has no template id`);
      }
    } else {
      console.error(`Tried to process a FS driven page but the cms page data for this FS page were empty.`);
    }
    return null;
  }

  private processFsDrivenPage(templateId: string, sapPageIdentifier: string, sapPageType: PageType): Observable<CmsStructureModel> | null {
    const occCmsPage$ = this.occCmsPageAdapter.load(this.pageContextFactory.createPageContextFor(sapPageIdentifier, sapPageType));
    if (occCmsPage$ && isObservable(occCmsPage$)) {
      return occCmsPage$.pipe(
        map((occPage) => {
          if (occPage?.page) {
            if (occPage.page.properties == null) {
              occPage.page.properties = {};
            }
            occPage.page.properties.fsPageTemplate = templateId;
          }
          return occPage;
        }),
        take(1)
      );
    }
    return null;
  }
}
