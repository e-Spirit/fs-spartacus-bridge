import { NgModule } from '@angular/core';
import { LIVE_PIPELINE_STEP, PipelineFactory, PREVIEW_PIPELINE_STEP } from './pipeline-factory';
import { CmsStructureModelMergerPipelineStep } from './merge/cms-structure-model-merger-pipeline-step';
import { CmsStructureModelMergerFactory } from './merge/cms-structure-model-merger-factory';
import { Append, APPEND, PREPEND, Prepend, Replace, REPLACE } from './merge/strategies';
import { createFsEditingAreaInjectorPipelineStep } from './fs-editing-area/fs-editing-area-injector-pipeline-step';
import { createFsEditingOverlayInjectorPipelineStep } from './fs-editing-overlay/fs-editing-overlay-injector-pipeline-step';
import { FsSpartacusBridgeConfig } from 'fs-spartacus-common';
import { BaseSiteService } from '@spartacus/core';


/**
 * This module defines the merge strategies and configures the processing {@link Pipeline}.
 *
 * @export
 * @class FsCmsPageProcessingModule
 */
@NgModule({
  providers: [
    CmsStructureModelMergerFactory,
    { provide: APPEND, useClass: Append },
    { provide: PREPEND, useClass: Prepend },
    { provide: REPLACE, useClass: Replace },

    PipelineFactory,
    // The order in which the pipeline steps are listed is also the order
    // in which they will be executed!
    // The order is important for the correct result:
    // - The editing area pipeline step checks for empty slots.
    //    So this step needs to be executed before the overlay step.
    {
      provide: PREVIEW_PIPELINE_STEP,
      useClass: CmsStructureModelMergerPipelineStep,
      multi: true,
    },
    {
      provide: PREVIEW_PIPELINE_STEP,
      useFactory: createFsEditingAreaInjectorPipelineStep,
      deps: [FsSpartacusBridgeConfig, BaseSiteService],
      multi: true,
    },
    {
      provide: PREVIEW_PIPELINE_STEP,
      useFactory: createFsEditingOverlayInjectorPipelineStep,
      deps: [FsSpartacusBridgeConfig, BaseSiteService],
      multi: true,
    },
    {
      provide: LIVE_PIPELINE_STEP,
      useClass: CmsStructureModelMergerPipelineStep,
      multi: true,
    },
  ],
})
export class FsCmsPageProcessingModule {}
