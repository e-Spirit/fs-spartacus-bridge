import { TppStatusService } from './tpp-status-service';
import { CmsStructureModelResponseFactory } from './cms-structure-model-response-factory';
import { FsCmsPagePreparer } from './fs-cms-page.preparer';
import { NgModule } from '@angular/core';
import { CmsPageConnector } from '@spartacus/core';
import { FsComponentConverter } from 'fs-spartacus-common';

import { CaasClientFactory } from '../../caas/caas-client.factory';
import { TppWrapperService } from './tpp-wrapper-service';
import { FsCmsPageAdapter } from './fs-cms-page.adapter';
import { FsCmsPageConnector } from './fs-cms-page.connector';
import { FS_CMS_PAGE_NORMALIZER, FS_CMS_PAGE_PREPARER, FS_CMS_PAGE_LANGUAGE_FALLBACK_REPLACER } from './fs-cms-page.converter';
import { FsCmsPageNormalizer } from './fs-cms-page.normalizer';
import { FsCmsPageProcessingModule } from './processing/fs-cms-page-processing-module';
import { FsCmsPageChangeAdapter } from './fs-cms-page-change-adapter';
import { FsCmsPageAdaptersFacade, LIVE_FS_CMS_PAGE_ADAPTER, PREVIEW_FS_CMS_PAGE_ADAPTER } from './fs-cms-page-adapters-facade';
import { FsCmsPageContextFactory } from './fs-cms-page.context-factory';
import { FsCmsPageLanguageFallbackReplacer } from './fs-cms-page-language-fallback.replacer';

/**
 * This module configures the page adapters and other dependencies needed to process a FirstSpirit page.
 *
 * @export
 * @class FsCmsPageModule
 */
@NgModule({
  imports: [FsCmsPageProcessingModule],
  providers: [
    {
      provide: CmsPageConnector,
      useClass: FsCmsPageConnector,
    },
    {
      provide: PREVIEW_FS_CMS_PAGE_ADAPTER,
      useClass: FsCmsPageAdapter,
      multi: true,
    },
    {
      provide: PREVIEW_FS_CMS_PAGE_ADAPTER,
      useClass: FsCmsPageChangeAdapter,
      multi: true,
    },
    {
      provide: LIVE_FS_CMS_PAGE_ADAPTER,
      useClass: FsCmsPageAdapter,
      multi: true,
    },
    {
      provide: FsComponentConverter,
      useValue: {},
      multi: true,
    },
    FsCmsPageAdaptersFacade,
    {
      provide: FS_CMS_PAGE_NORMALIZER,
      useExisting: FsCmsPageNormalizer,
      multi: true,
    },
    {
      provide: FS_CMS_PAGE_PREPARER,
      useExisting: FsCmsPagePreparer,
      multi: true,
    },
    {
      provide: FS_CMS_PAGE_LANGUAGE_FALLBACK_REPLACER,
      useExisting: FsCmsPageLanguageFallbackReplacer,
      multi: true,
    },
    CaasClientFactory,
    TppWrapperService,
    TppStatusService,
    FsCmsPageContextFactory,
    CmsStructureModelResponseFactory,
  ],
})
export class FsCmsPageModule {}
