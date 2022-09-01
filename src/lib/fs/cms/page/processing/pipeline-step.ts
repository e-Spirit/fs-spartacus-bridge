import { CmsStructureModel } from '@spartacus/core';

/**
 * An interface to represent a {@link Pipeline} step.
 */
export interface PipelineStep {
  /**
   * Executes an action on OccCmsStructureModel and returns the result.
   */
  execute(occCmsStructureModel: CmsStructureModel, fsCmsStructureModel?: CmsStructureModel | null): CmsStructureModel;
}
