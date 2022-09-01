import { Pipeline } from './pipeline';
import { PipelineStep } from './pipeline-step';
import { CmsStructureModel } from '@spartacus/core';

describe('Pipeline', () => {
  it('should execute all steps correctly', () => {
    const pipelineStep1 = {
      execute: (occ: CmsStructureModel, fs: CmsStructureModel): CmsStructureModel => {
        return { page: { template: `${occ.page.template}_${fs.page.template}` } } as CmsStructureModel;
      },
    } as PipelineStep;

    const pipelineStep2 = {
      execute: (occ: CmsStructureModel, fs: CmsStructureModel): CmsStructureModel => {
        return {
          page: {
            template: `${occ.page.template}_${fs.page.template.toLocaleUpperCase()}`,
          },
        } as CmsStructureModel;
      },
    } as PipelineStep;

    const oocCmsStructureModel = { page: { template: 'occ' } } as CmsStructureModel;
    const fsCmsStructureModel = { page: { template: 'fs' } } as CmsStructureModel;
    const pipeline = new Pipeline([pipelineStep1, pipelineStep2]);
    const updated = pipeline.execute(oocCmsStructureModel, fsCmsStructureModel);

    expect(updated).toEqual({ page: { template: 'occ_fs_FS' } } as CmsStructureModel);
    expect(oocCmsStructureModel).toEqual({ page: { template: 'occ' } } as CmsStructureModel);
    expect(fsCmsStructureModel).toEqual({ page: { template: 'fs' } } as CmsStructureModel);
  });

  it('should handle empty steps', () => {
    const oocCmsStructureModel = { page: { template: 'occ' } } as CmsStructureModel;
    const fsCmsStructureModel = { page: { template: 'fs' } } as CmsStructureModel;
    const pipeline = new Pipeline([]);
    const updated = pipeline.execute(oocCmsStructureModel, fsCmsStructureModel);
    expect(updated).toEqual({ page: { template: 'occ' } } as CmsStructureModel);
  });

  it('should handle undefined steps', () => {
    const oocCmsStructureModel = { page: { template: 'occ' } } as CmsStructureModel;
    const fsCmsStructureModel = { page: { template: 'fs' } } as CmsStructureModel;
    const pipeline = new Pipeline(undefined);
    const updated = pipeline.execute(oocCmsStructureModel, fsCmsStructureModel);
    expect(updated).toEqual({ page: { template: 'occ' } } as CmsStructureModel);
  });
});
