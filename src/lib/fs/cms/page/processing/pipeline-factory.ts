import { TppStatusService } from '../tpp-status-service';
import { PipelineStep } from './pipeline-step';
import { map } from 'rxjs/operators';
import { Pipeline } from './pipeline';
import { Injectable, InjectionToken, Injector } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * The InjectionToken for steps that are executed in the preview mode.
 */
export const PREVIEW_PIPELINE_STEP = new InjectionToken<PipelineStep>('PreviewPipelineStep');
/**
 * The InjectionToken for steps that are executed in the live mode.
 */
export const LIVE_PIPELINE_STEP = new InjectionToken<PipelineStep>('LivePipelineStep');

/**
 * This PipelineFactory creates the pipeline based on the configured providers and the state
 * of the app (preview mode, live mode).
 *
 * @export
 */
@Injectable({
  providedIn: 'root',
})
export class PipelineFactory {
  private readonly pipeline: Observable<Pipeline>;

  constructor(private injector: Injector, private tppStatusService: TppStatusService) {
    this.pipeline = this.selectPipelineStepsInjectionToken().pipe(
      map((injectionToken) => this.injector.get<PipelineStep[]>(injectionToken)),
      map((pipelineSteps) => new Pipeline(pipelineSteps))
    );
  }

  private selectPipelineStepsInjectionToken() {
    return this.tppStatusService.isFirstSpiritPreview().pipe(map((preview) => (preview ? PREVIEW_PIPELINE_STEP : LIVE_PIPELINE_STEP)));
  }

  /**
   * This method returns the pipeline corresponding to the mode and configuration.
   *
   * @return Pipeline The pipeline with the necessary steps for the current app state.
   */
  createPipeline(): Observable<Pipeline> {
    return this.pipeline;
  }
}
