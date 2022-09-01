import { CmsStructureModelMergerFactory } from './cms-structure-model-merger-factory';
import { CmsStructureModelMergerPipelineStep } from './cms-structure-model-merger-pipeline-step';
import { CmsStructureModel } from '@spartacus/core';
import { CmsStructureModelMerger } from './cms-structure-model-merger';
import { FirstSpiritManagedPage } from 'fs-spartacus-common';

describe('CmsStructureModelMergerPipelineStep', () => {
  it('should call the merger and return its result', () => {
    const firstSpiritManagedPage = { template: '', slots: [] } as FirstSpiritManagedPage;
    const merger = new (class MockCmsStructureModelMerger extends CmsStructureModelMerger {
      merge = (occPage: CmsStructureModel, fsPage: CmsStructureModel) => {
        return {
          page: {
            template: `${occPage.page.template}_updated`,
          },
        } as CmsStructureModel;
      };
    })(firstSpiritManagedPage, null);

    const factory = new (class MockCmsStructureModelMergerFactory extends CmsStructureModelMergerFactory {
      createFsCmsPageMerger = () => merger;
    })(null, null, null);

    const pipelineStep = new CmsStructureModelMergerPipelineStep(factory);
    const originalPage = { page: { template: 'MyPageTemplate' } } as CmsStructureModel;
    const updatedPage = pipelineStep.execute(originalPage, null);
    expect(updatedPage).toEqual({ page: { template: 'MyPageTemplate_updated' } } as CmsStructureModel);
  });

  it('should return the original page, if the merger factory returns no result', () => {
    const factory = new (class MockCmsStructureModelMergerFactory extends CmsStructureModelMergerFactory {
      createFsCmsPageMerger = () => undefined;
    })(null, null, null);

    const pipelineStep = new CmsStructureModelMergerPipelineStep(factory);
    const originalPage = { page: { template: 'MyPageTemplate' } } as CmsStructureModel;
    const updatedPage = pipelineStep.execute(originalPage, null);
    expect(updatedPage).toEqual(originalPage);
  });

  it('should use the FS page template id located under page.properties.fsPageTemplate, if present', () => {
    const firstSpiritManagedPage = { template: '', slots: [] } as FirstSpiritManagedPage;
    const merger = new CmsStructureModelMerger(firstSpiritManagedPage, null);
    const factory = new (class MockCmsStructureModelMergerFactory extends CmsStructureModelMergerFactory {
      createFsCmsPageMerger = () => merger;
    })(null, null, null);

    const pipelineStep = new CmsStructureModelMergerPipelineStep(factory);
    spyOn((pipelineStep as any).fsCmsPageMergerFactory, 'createFsCmsPageMerger' as any).and.callThrough();
    const originalPage = {
      page: {
        template: 'MyPageTemplate',
        slots: {},
        properties: {
          fsPageTemplate: 'MyFirstSpiritDrivenPageTemplate',
        },
      },
    } as CmsStructureModel;
    pipelineStep.execute(originalPage, null);
    expect((pipelineStep as any).fsCmsPageMergerFactory.createFsCmsPageMerger).toHaveBeenCalledWith('MyFirstSpiritDrivenPageTemplate');
    delete originalPage.page.properties;
    pipelineStep.execute(originalPage, null);
    expect((pipelineStep as any).fsCmsPageMergerFactory.createFsCmsPageMerger).toHaveBeenCalledWith('MyPageTemplate');
  });
});
