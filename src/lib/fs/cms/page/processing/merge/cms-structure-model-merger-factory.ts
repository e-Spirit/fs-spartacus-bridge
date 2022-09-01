import { Injectable, Injector } from '@angular/core';
import { CmsStructureModelMerger } from './cms-structure-model-merger';
import { getFsManagedPageConfigByTemplateId } from '../../../../util/helper';
import { FsSpartacusBridgeConfig } from 'fs-spartacus-common';
import { BaseSiteService } from '@spartacus/core';
import { first } from 'rxjs/operators';

/**
 * This factory creates a {@link CmsStructureModelMerger} for the given page template.
 *
 * @export
 * @class CmsStructureModelMergerFactory
 */
@Injectable({
  providedIn: 'root',
})
export class CmsStructureModelMergerFactory {
  constructor(
    private fsSpartacusBridgeConfig: FsSpartacusBridgeConfig,
    private baseSiteService: BaseSiteService,
    private injector: Injector
  ) {}

  /**
   * This method creates a CmsStructureModelMerger for a given page template.
   * If the given ID of the page template cannot be resolved it returns "undefined".
   *
   * @param {string} pageTemplate The ID of the page template to create a CmsStructureModelMerger for.
   * @return {(CmsStructureModelMerger | undefined)} The created instance or undefined if no corresponding page can be found.
   * @memberof CmsStructureModelMergerFactory
   */
  createFsCmsPageMerger(pageTemplate: string): CmsStructureModelMerger | undefined {
    let baseSite;
    this.baseSiteService
      .getActive()
      .pipe(first())
      .subscribe((activeBaseSite) => (baseSite = activeBaseSite));
    const firstSpiritManagedPage = getFsManagedPageConfigByTemplateId(
      this.fsSpartacusBridgeConfig.bridge[baseSite].firstSpiritManagedPages,
      pageTemplate
    );
    return firstSpiritManagedPage ? new CmsStructureModelMerger(firstSpiritManagedPage, this.injector) : undefined;
  }
}
