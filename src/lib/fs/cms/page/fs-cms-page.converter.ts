import { InjectionToken } from '@angular/core';
import { CmsStructureModel, Converter } from '@spartacus/core';

import { FsCmsPageInterface } from './fs-cms-page.interface';
import { Observable } from 'rxjs';

export const FS_CMS_PAGE_NORMALIZER = new InjectionToken<Converter<FsCmsPageInterface, CmsStructureModel>>('FsCmsPageNormalizer');

export const FS_CMS_PAGE_PREPARER = new InjectionToken<Converter<FsCmsPageInterface, Observable<FsCmsPageInterface>>>('FsCmsPagePreparer');

export const FS_CMS_PAGE_LANGUAGE_FALLBACK_REPLACER = new InjectionToken<Converter<FsCmsPageInterface, Observable<FsCmsPageInterface>>>(
  'FsCmsPageLanguageFallbackReplacer'
);
