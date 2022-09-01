import { TestBed } from '@angular/core/testing';
import { FsCmsPageProcessingModule } from './fs-cms-page-processing-module';
import { LIVE_PIPELINE_STEP, PREVIEW_PIPELINE_STEP } from './pipeline-factory';
import { PipelineStep } from './pipeline-step';
import { FsEditingOverlayInjectorPipelineStep } from './fs-editing-overlay/fs-editing-overlay-injector-pipeline-step';
import { CmsStructureModelMergerPipelineStep } from './merge/cms-structure-model-merger-pipeline-step';
import { FsEditingAreaInjectorPipelineStep } from './fs-editing-area/fs-editing-area-injector-pipeline-step';
import { FsSpartacusBridgeConfig } from 'fs-spartacus-common';
import { BaseSiteService } from '@spartacus/core';
import { MockBaseSiteService } from './merge/cms-structure-model-merger-factory.spec';

describe('FsCmsPageProcessingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FsCmsPageProcessingModule],
      providers: [
        {
          provide: FsSpartacusBridgeConfig,
          useValue: {
            caas: { project: '', baseUrl: '', apiKey: '', tenantId: '' },
            firstSpiritManagedPages: [],
          } as FsSpartacusBridgeConfig,
        },
        {
          provide: BaseSiteService,
          useClass: MockBaseSiteService,
        },
      ],
    });
  });

  it('should register the correct preview pipeline steps', () => {
    const previewSteps: PipelineStep[] = TestBed.inject<PipelineStep[]>(PREVIEW_PIPELINE_STEP);
    expect(previewSteps.length).toEqual(3);
    expect(previewSteps[0]).toBeInstanceOf(CmsStructureModelMergerPipelineStep);
    expect(previewSteps[1]).toBeInstanceOf(FsEditingAreaInjectorPipelineStep);
    expect(previewSteps[2]).toBeInstanceOf(FsEditingOverlayInjectorPipelineStep);
  });

  it('should register the correct live pipeline steps', () => {
    const liveSteps: PipelineStep[] = TestBed.inject<PipelineStep[]>(LIVE_PIPELINE_STEP);
    expect(liveSteps.length).toEqual(1);
    expect(liveSteps[0]).toBeInstanceOf(CmsStructureModelMergerPipelineStep);
  });
});
