import { TppStatusService } from './tpp-status-service';
import { Injectable, InjectionToken, Injector } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { CmsPageAdapter, CmsStructureModel, PageContext } from '@spartacus/core';
import { map, switchMap } from 'rxjs/operators';

/**
 * The InjectionToken to be used for the FirstSpirit preview content.
 */
export const PREVIEW_FS_CMS_PAGE_ADAPTER = new InjectionToken<CmsPageAdapter>('PreviewFsAdapter');
/**
 * The InjectionToken to be used for FirstSpirit live content.
 */
export const LIVE_FS_CMS_PAGE_ADAPTER = new InjectionToken<CmsPageAdapter>('LiveFsAdapter');

/**
 * The Facade that selects, retrieves, and executes the CmsPageAdapters. 
 *
 * @export
 * @class FsCmsPageAdaptersFacade
 */
@Injectable({
  providedIn: 'root',
})
export class FsCmsPageAdaptersFacade extends CmsPageAdapter {
  private readonly fsAdapters: Observable<CmsPageAdapter[]>;

  constructor(private tppStatusService: TppStatusService, private injector: Injector) {
    super();
    this.fsAdapters = this.selectPipelineStepsInjectionToken().pipe(
      map((injectionToken) => this.injector.get<CmsPageAdapter[]>(injectionToken))
    );
  }

  private selectPipelineStepsInjectionToken(): Observable<InjectionToken<CmsPageAdapter>> {
    return this.tppStatusService
      .isFirstSpiritPreview()
      .pipe(map((preview) => (preview ? PREVIEW_FS_CMS_PAGE_ADAPTER : LIVE_FS_CMS_PAGE_ADAPTER)));
  }

  /**
   * This method executes the loaded [CmsPageAdapters]{@link CmsPageAdapter} and merges the results.
   *
   * @param pageContext The context of the requested page.
   * @return An Observable containing the StructureModel after the adapter was executed.
   */
  load(pageContext: PageContext): Observable<CmsStructureModel> {
    return this.fsAdapters.pipe(switchMap((fsCmsPageAdapter: CmsPageAdapter[]) => this.mergeLoadResults(fsCmsPageAdapter, pageContext)));
  }

  private mergeLoadResults(fsCmsPageAdapters: CmsPageAdapter[], pageContext: PageContext): Observable<CmsStructureModel> {
    const fsCmsPageAdapterResults: Array<Observable<CmsStructureModel>> = fsCmsPageAdapters.map((adapter) => adapter.load(pageContext));
    return merge(...fsCmsPageAdapterResults);
  }
}
