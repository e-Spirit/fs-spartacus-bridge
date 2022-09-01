import { TppEventHandlerService } from './tpp-event-handler-service';
import { CmsPageAdapter, CmsPageConnector, CmsStructureConfigService, CmsStructureModel, PageContext } from '@spartacus/core';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Pipeline } from './processing/pipeline';
import { PipelineFactory } from './processing/pipeline-factory';
import { FsCmsPageAdaptersFacade } from './fs-cms-page-adapters-facade';
import { FsDrivenPageService } from './fs-driven-page-service';

/**
 * This class prepares the content from FirstSpirit and SAP Commerce and executes the {@link Pipeline}.
 *
 * @export
 * @class FsCmsPageConnector
 */
@Injectable({
  providedIn: 'root',
})
export class FsCmsPageConnector extends CmsPageConnector {
  private pipeline: Observable<Pipeline>;

  constructor(
    private occCmsPageAdapter: CmsPageAdapter,
    private fsCmsPageAdaptersFacade: FsCmsPageAdaptersFacade,
    cmsStructureConfigService: CmsStructureConfigService,
    pipelineFactory: PipelineFactory,
    private fsDrivenPageService: FsDrivenPageService,
    private tppEventHandlerService: TppEventHandlerService
  ) {
    super(occCmsPageAdapter, cmsStructureConfigService);
    this.tppEventHandlerService.initialize();
    this.pipeline = pipelineFactory.createPipeline();
  }

  /**
   * This method prepares the CMS data for display.
   *
   * @param pageContext The page for which the content should be prepared for.
   * @return The page with the combined data from FirstSpirit and SAP Commerce.
   */
  get(pageContext: PageContext): Observable<CmsStructureModel> {
    const occCmsPage$ = this.occCmsPageAdapter.load(pageContext);
    const fsCmsPage$ = this.fsCmsPageAdaptersFacade.load(pageContext);

    return combineLatest([fsCmsPage$, this.pipeline]).pipe(
      switchMap(([fs, pipeline]) => {
        return occCmsPage$.pipe(
          catchError((error) => {
            const fsDrivenPageResult$ = this.fsDrivenPageService.process(fs);
            return fsDrivenPageResult$ ? fsDrivenPageResult$ : occCmsPage$;
          }),
          map((occ) => ({ fs, occ, pipeline }))
        );
      }),
      map(({ fs, occ, pipeline }) => pipeline.execute(occ, fs)),
      catchError((error) => {
        this.logError(error, pageContext);
        return occCmsPage$;
      })
    );
  }

  private logError(error: any, pageContext: PageContext): void {
    console.error(`Integrating content from CaaS failed for page '${pageContext.id}' of type '${pageContext.type}'. Cause:`);
    console.error(this.extractErrorCause(error));
  }

  private extractErrorCause(error: any): string | undefined {
    if (error instanceof Error) {
      return error.stack;
    } else if (error instanceof Object) {
      return JSON.stringify(error, null, 2);
    } else {
      return error;
    }
  }
}
