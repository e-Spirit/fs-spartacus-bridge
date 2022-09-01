import { TppStatusService } from '../tpp-status-service';
import { LIVE_PIPELINE_STEP, PipelineFactory, PREVIEW_PIPELINE_STEP } from './pipeline-factory';
import { Injector } from '@angular/core';
import createSpy = jasmine.createSpy;
import { of } from 'rxjs';

describe('PipelineFactory', () => {
  describe('select the correct pipeline steps', () => {
    const injector = { get: createSpy('Injector.get') } as Injector;

    it('in the preview', (done) => {
      const tppStatusService = { isFirstSpiritPreview: () => of(true) } as TppStatusService;
      const pipelineFactory = new PipelineFactory(injector, tppStatusService);
      pipelineFactory.createPipeline().subscribe(() => {
        // linter needs to be disabled since this is not really a use of a deprecated feature
        // tslint:disable-next-line: deprecation
        expect(injector.get).toHaveBeenCalledWith(PREVIEW_PIPELINE_STEP);
        done();
      });
    });

    it('in the live storefront', (done) => {
      const tppStatusService = { isFirstSpiritPreview: () => of(false) } as TppStatusService;
      const pipelineFactory = new PipelineFactory(injector, tppStatusService);
      pipelineFactory.createPipeline().subscribe(() => {
        // linter needs to be disabled since this is not really a use of a deprecated feature
        // tslint:disable-next-line: deprecation
        expect(injector.get).toHaveBeenCalledWith(LIVE_PIPELINE_STEP);
        done();
      });
    });
  });
});
