import { PipelineStep } from './pipeline-step';
import { CmsStructureModel } from '@spartacus/core';

/**
 * This class holds the steps needed to merge the SAP Commerce CMS structure and the FirstSpirit CMS structure.
 *
 * @export
 * @class Pipeline
 */
export class Pipeline {
  private pipelineSteps: PipelineStep[];

  constructor(pipelineSteps: PipelineStep[]) {
    this.pipelineSteps = pipelineSteps || [];
  }

  /**
   * This method runs a number of processing tasks on an occCmsStructureModel and returns the result.
   *
   * @param occCmsStructureModel The SAP Commerce CMS structure to process.
   * @param fsCmsStructureModel The FirstSpirit CMS structure to process.
   * @return The CmsStructureModel on which the tasks are processed. 
   */
  execute(occCmsStructureModel: CmsStructureModel, fsCmsStructureModel: CmsStructureModel): CmsStructureModel {
    return this.pipelineSteps.reduce(
      (updatedOccCmsStructureModel, nextPipelineStep) => nextPipelineStep.execute(updatedOccCmsStructureModel, fsCmsStructureModel),
      occCmsStructureModel
    );
  }
}
