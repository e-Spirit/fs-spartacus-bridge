import { TppStatusService } from './tpp-status-service';
import {
  occCmsStructureModel,
  fsCmsStructureModel,
  fsDrivenCmsStructureModel,
  occResponseWithSapSkeleton,
} from './fs-cms-page.connector.spec.data';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  CmsPageAdapter,
  CmsStructureConfigService,
  CmsStructureModel,
  ConfigModule,
  PageContext,
  PageType,
  LanguageService,
  TranslationService,
  BaseSiteService,
} from '@spartacus/core';
import { of, throwError, isObservable, Observable } from 'rxjs';

import { FsSpartacusBridgeModule } from '../../../fs-spartacus-bridge.module';
import { FsCmsPageConnector } from './fs-cms-page.connector';
import { Pipeline } from './processing/pipeline';
import { PipelineFactory } from './processing/pipeline-factory';

import createSpy = jasmine.createSpy;
import { FsCmsPageAdaptersFacade } from './fs-cms-page-adapters-facade';
import { FirstSpiritManagedPage } from 'fs-spartacus-common';
import { FsDrivenPageService } from './fs-driven-page-service';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBaseSiteService } from './processing/merge/cms-structure-model-merger-factory.spec';

class MockCmsPageAdapter implements CmsPageAdapter {
  constructor(
    private name: string,
    private loadResult: ((pageContext: PageContext) => Observable<CmsStructureModel>) | Observable<CmsStructureModel>
  ) {}

  load = createSpy(`${this.name}.load`).and.callFake((pageContext) => {
    if (isObservable(this.loadResult)) {
      return this.loadResult;
    }
    return typeof this.loadResult === 'function' ? this.loadResult(pageContext) : this.loadResult;
  });
}

class MockPipelineFactory {
  constructor(private pipeline: Pipeline) {}
  createPipeline = createSpy('PipelineFactory.createPipeline').and.returnValue(of(this.pipeline));
}

class MockFsDrivenPageService {
  constructor(private processResult: null | CmsStructureModel) {}
  process = createSpy('FsDrivenPageService.process').and.returnValue(of(this.processResult));
}

describe('FsCmsPageConnector', () => {
  const homepageContext: PageContext = { id: 'homepage', type: PageType.CONTENT_PAGE };
  const fsDrivenHomepageContext: PageContext = { id: '/firstspiritdrivenpage_seo', type: PageType.CONTENT_PAGE };
  const pipeline = new Pipeline([]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FsSpartacusBridgeModule.withConfig({
          bridge: {
            test: {
              caas: {
                baseUrl: '',
                project: '',
                apiKey: '',
                tenantId: '',
              },
              firstSpiritManagedPages: [
                FirstSpiritManagedPage.enhanceSapPages('LandingPage2Template', []),
                FirstSpiritManagedPage.integrateFsDrivenPages('FsDrivenPageTemplate', []),
                FirstSpiritManagedPage.integrateFsDrivenPagesIntoSapSkeleton(
                  'homepage',
                  PageType.CONTENT_PAGE,
                  'FsDrivenLandingPage2Template',
                  []
                ),
              ],
            },
          },
        }),
        ConfigModule.forRoot(),
      ],
      providers: [
        TranslationService,
        { provide: LanguageService, useValue: {} },
        { provide: CmsPageAdapter, useValue: new MockCmsPageAdapter('OccCmsPageAdapter', of(occCmsStructureModel)) },
        { provide: FsCmsPageAdaptersFacade, useValue: new MockCmsPageAdapter('FsCmsPageAdapter', of(fsCmsStructureModel)) },
        { provide: CmsStructureConfigService, useValue: {} },
        { provide: PipelineFactory, useValue: new MockPipelineFactory(pipeline) },
        { provide: TppStatusService, useValue: {} },
        { provide: BaseSiteService, useValue: MockBaseSiteService },
      ],
    });

    spyOn(pipeline, 'execute').and.callThrough();
  });

  it('should call the cms page adapter', () => {
    const connector = TestBed.inject(FsCmsPageConnector as Type<FsCmsPageConnector>);
    const cmsPageAdapter = TestBed.inject(CmsPageAdapter as Type<CmsPageAdapter>);
    connector.get(homepageContext);
    expect(cmsPageAdapter.load).toHaveBeenCalledWith(homepageContext);
  });

  it('should call the fs cms page adapter', () => {
    const connector = TestBed.inject(FsCmsPageConnector as Type<FsCmsPageConnector>);
    const fsCmsPageAdapter = TestBed.inject(FsCmsPageAdaptersFacade as Type<FsCmsPageAdaptersFacade>);
    connector.get(homepageContext);
    expect(fsCmsPageAdapter.load).toHaveBeenCalledWith(homepageContext);
  });

  it('should trigger processing of the adapter results', (done) => {
    const connector = TestBed.inject(FsCmsPageConnector as Type<FsCmsPageConnector>);
    const pipelineFactory = TestBed.inject(PipelineFactory as Type<PipelineFactory>);
    connector.get(homepageContext).subscribe((result) => {
      expect(pipelineFactory.createPipeline).toHaveBeenCalled();
      expect(pipeline.execute).toHaveBeenCalledWith(occCmsStructureModel, fsCmsStructureModel);
      done();
    });
  });

  it('should handle first spirit driven pages that do not exist in SAP', (done) => {
    TestBed.overrideProvider(CmsPageAdapter, {
      useValue: new MockCmsPageAdapter('OccCmsPageAdapter', (pageContext: PageContext) => {
        return throwError(new Error(`No content page found matching the provided label or id: ${pageContext.id}`)) as any;
      }),
    });
    TestBed.overrideProvider(FsCmsPageAdaptersFacade, {
      useValue: new MockCmsPageAdapter('FsCmsPageAdapter', of(fsDrivenCmsStructureModel)),
    });
    TestBed.overrideProvider(FsDrivenPageService, {
      useValue: new MockFsDrivenPageService(occResponseWithSapSkeleton),
    });
    const connector = TestBed.inject(FsCmsPageConnector as Type<FsCmsPageConnector>);
    connector.get(fsDrivenHomepageContext).subscribe((result) => {
      expect((connector as any).fsDrivenPageService.process).toHaveBeenCalledWith(fsDrivenCmsStructureModel);
      expect(pipeline.execute).toHaveBeenCalledWith(occResponseWithSapSkeleton, fsDrivenCmsStructureModel);
      done();
    });
  });

  describe('should handle errors', () => {
    it('in the adapter', (done) => {
      class ErrorFsCmsPageAdapter implements CmsPageAdapter {
        load = createSpy('ErrorFsCmsPageAdapter.load').and.returnValue(
          throwError(new Error("Don't worry, this is a test and this error is expected. Error in FsCmsPageAdapter.load"))
        );
      }

      TestBed.overrideProvider(FsCmsPageAdaptersFacade, {
        useValue: new ErrorFsCmsPageAdapter(),
      });
      const connector = TestBed.inject(FsCmsPageConnector as Type<FsCmsPageConnector>);
      spyOn(connector as any, 'logError').and.callThrough();
      connector.get(homepageContext).subscribe((result) => {
        expect(result).toEqual(occCmsStructureModel);
        expect(pipeline.execute).not.toHaveBeenCalled();
        expect((connector as any).logError).toHaveBeenCalled();
        done();
      });
    });

    it('in the pipeline', (done) => {
      class ErrorPipelineFactory {
        createPipeline = createSpy('PipelineFactory.createPipeline').and.returnValue(
          throwError(new Error("Don't worry, this is a test and this error is expected. " + 'Error in PipelineFactory.createPipeline'))
        );
      }

      TestBed.overrideProvider(PipelineFactory, {
        useValue: new ErrorPipelineFactory(),
      });

      const connector = TestBed.inject(FsCmsPageConnector as Type<FsCmsPageConnector>);
      spyOn(connector as any, 'logError').and.callThrough();
      connector.get(homepageContext).subscribe((result) => {
        expect(result).toEqual(occCmsStructureModel);
        expect((connector as any).logError).toHaveBeenCalled();
        done();
      });
    });
  });
});
