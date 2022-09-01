import { occResponse, fsCmsPageWithSapSkeleton, fsDrivenCmsPage } from './fs-driven-page-service.spec.data';
import { FsDrivenPageService } from './fs-driven-page-service';
import { TestBed } from '@angular/core/testing';
import { ConfigModule, PageType, CmsStructureModel, CmsPageAdapter, PageContext, BaseSiteService } from '@spartacus/core';
import { FsSpartacusBridgeModule } from '../../../fs-spartacus-bridge.module';
import { FirstSpiritManagedPage, copy } from 'fs-spartacus-common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LayoutConfig } from '@spartacus/storefront';
import { of, Observable } from 'rxjs';
import { MockBaseSiteService } from './processing/merge/cms-structure-model-merger-factory.spec';

class MockFsCmsPageAdapter extends CmsPageAdapter {
  constructor(private loadResult: any) {
    super();
  }
  load = (pageContext: PageContext) => this.loadResult;
}

describe('FsDrivenPageService', () => {
  let service: FsDrivenPageService;

  const setup = (loadResult: any) => {
    TestBed.overrideProvider(CmsPageAdapter, {
      useValue: new MockFsCmsPageAdapter(loadResult),
    });
    service = TestBed.inject(FsDrivenPageService);
    spyOn(service as any, 'processFsDrivenPage').and.callThrough();
    spyOn((service as any).occCmsPageAdapter, 'load').and.callThrough();
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
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
        {
          provide: LayoutConfig,
          useValue: {
            layoutSlots: {
              FsDrivenPageTemplate: { slots: [] },
            },
          },
        },
        {
          provide: BaseSiteService,
          useClass: MockBaseSiteService,
        },
      ],
    });

    spyOn(console, 'error').and.callThrough();
    spyOn(console, 'warn').and.callThrough();
  });

  describe('should integrate first spirit driven pages', () => {
    it('into pages that are based on a SAP skeleton', (done) => {
      setup(of(copy(occResponse)));
      const fsCmsPageWithSapSkeletonResult$ = service.process(copy(fsCmsPageWithSapSkeleton));
      expect(fsCmsPageWithSapSkeletonResult$).toBeDefined();
      expect(fsCmsPageWithSapSkeletonResult$).toBeInstanceOf(Observable);
      expect((service as any).occCmsPageAdapter.load).toHaveBeenCalledWith({ id: 'homepage', type: PageType.CONTENT_PAGE });
      fsCmsPageWithSapSkeletonResult$.subscribe((result) => {
        expect((service as any).processFsDrivenPage).toHaveBeenCalledWith(
          'fsdrivenlandingpage2template',
          'homepage',
          PageType.CONTENT_PAGE
        );
        expect(result).not.toEqual(copy(occResponse));
        const expectedOccResponse = copy(occResponse) as CmsStructureModel;
        Object.assign(expectedOccResponse?.page, { properties: { fsPageTemplate: 'fsdrivenlandingpage2template' } });
        expect(result).toEqual(expectedOccResponse);
        done();
      });
    });

    it('into first spirit only pages', (done) => {
      setup(of(copy(occResponse)));
      const expectedOccResponse = {
        page: {
          loadTime: 1602835807914,
          name: 'firstspiritdrivenpagetemplate',
          pageId: 'firstspiritdrivenpagetemplate',
          type: 'ContentPage',
          template: 'FirstSpiritDrivenPage',
          slots: { MySlot: { components: [] }, MyOtherSlot: { components: [] } },
        },
        components: [],
      } as CmsStructureModel;
      spyOn((service as any).occResponseFactory, 'createCmsStructureModelResponse').and.returnValue(of(expectedOccResponse));
      const fsDrivenCmsPageResult$ = service.process(copy(fsDrivenCmsPage));
      expect(fsDrivenCmsPageResult$).toBeDefined();
      expect(fsDrivenCmsPageResult$).toBeInstanceOf(Observable);
      fsDrivenCmsPageResult$.subscribe((result) => {
        expect((service as any).occResponseFactory.createCmsStructureModelResponse).toHaveBeenCalledWith(copy(fsDrivenCmsPage));
        expect(result).toEqual(expectedOccResponse);
        done();
      });
    });
  });

  describe('should not integrate first spirit driven pages', () => {
    it('that do not have all necessary properties', () => {
      setup(of(copy(occResponse)));
      const fsPage = copy(fsDrivenCmsPage);
      fsPage.page.template = 'NotExistingPageTemplate';

      expect(service.process(fsPage)).toBeNull();
      expect(console.warn).toHaveBeenCalled();

      delete fsPage.page.template;
      expect(service.process(fsPage)).toBeNull();
      expect(console.error).toHaveBeenCalled();

      expect(service.process(null)).toBeNull();
      expect(console.error).toHaveBeenCalled();
    });

    it('if the occCmsPageAdapter returns an empty result', () => {
      setup(null);
      const emptyPageWithSapSkeletonResult$ = service.process(copy(fsCmsPageWithSapSkeleton));
      expect((service as any).occCmsPageAdapter.load).toHaveBeenCalledWith({ id: 'homepage', type: PageType.CONTENT_PAGE });
      expect(emptyPageWithSapSkeletonResult$).toBeNull();
    });

    it('if the occResponseFactory returns an empty result', () => {
      setup(null);
      spyOn((service as any).occResponseFactory, 'createCmsStructureModelResponse').and.returnValue(null);
      const emptyPageResult$ = service.process(copy(fsDrivenCmsPage));
      expect((service as any).occResponseFactory.createCmsStructureModelResponse).toHaveBeenCalledWith(copy(fsDrivenCmsPage));
      expect(emptyPageResult$).toBeNull();
    });
  });
});
