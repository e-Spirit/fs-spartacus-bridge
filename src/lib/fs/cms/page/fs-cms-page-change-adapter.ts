import { switchAll } from 'rxjs/operators';
import { CmsPageAdapter, CmsStructureModel, ConverterService, PageContext } from '@spartacus/core';
import { TppWrapperService } from './tpp-wrapper-service';
import { Observable, Subject } from 'rxjs';
import { FsCmsPageInterface } from './fs-cms-page.interface';
import { FS_CMS_PAGE_LANGUAGE_FALLBACK_REPLACER, FS_CMS_PAGE_NORMALIZER, FS_CMS_PAGE_PREPARER } from './fs-cms-page.converter';
import { Injectable, NgZone } from '@angular/core';

/**
 * This adapter reloads the CMS data when a change in the FirstSpirit content was triggered.
 *
 * @export
 * @class FsCmsPageChangeAdapter
 */
@Injectable({
  providedIn: 'root',
})
export class FsCmsPageChangeAdapter extends CmsPageAdapter {
  private pageSubject: Subject<FsCmsPageInterface>;

  constructor(private tppWrapperService: TppWrapperService, private converter: ConverterService, private ngZone: NgZone) {
    super();
    this.pageSubject = new Subject();
    this.tppWrapperService.onRerenderView(async () => {
      await this.ngZone.run(async () => {
        const previewElement = await this.tppWrapperService.getPreviewElement();
        // Let the FS render the updated page content and do not fetch it from the CaaS,
        // because it might not have been deployed yet.
        const renderResult = await this.tppWrapperService.renderElement(previewElement);
        this.pageSubject.next(renderResult);
      });
    });
  }

  load(pageContext: PageContext): Observable<CmsStructureModel> {
    return this.pageSubject.pipe(
      this.converter.pipeable(FS_CMS_PAGE_LANGUAGE_FALLBACK_REPLACER),
      switchAll(),
      this.converter.pipeable(FS_CMS_PAGE_PREPARER),
      switchAll(),
      this.converter.pipeable(FS_CMS_PAGE_NORMALIZER)
    );
  }
}
