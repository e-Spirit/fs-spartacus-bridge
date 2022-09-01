import { fsDrivenPageCmsStructureModel, expectedOccResponse } from './cms-structure-model-response-factory.spec.data';
import { CmsStructureModelResponseFactory } from './cms-structure-model-response-factory';
import { TestBed } from '@angular/core/testing';
import { ConfigModule } from '@spartacus/core';
import { FsSpartacusBridgeModule } from '../../../fs-spartacus-bridge.module';
import { FirstSpiritManagedPage, copy } from 'fs-spartacus-common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LayoutConfig } from '@spartacus/storefront';

describe('CmsStructureModelResponseFactory', () => {
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
              firstSpiritManagedPages: [FirstSpiritManagedPage.integrateFsDrivenPages('FirstSpiritDrivenPage', [])],
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
              SomeSpartacusTemplate: {
                slots: ['BottomHeaderSlot', 'Section1', 'Section2'],
              },
              FirstSpiritDrivenPage: {
                slots: ['MySlot', 'MyOtherSlot'],
              },
            },
          },
        },
      ],
    });
  });

  describe('should create and return a fake occ response', () => {
    it('if a matching entry can be found in the storefront layout configuration for the given page template (case sensitive)', (done) => {
      const responseFactory: CmsStructureModelResponseFactory = TestBed.inject(CmsStructureModelResponseFactory);
      responseFactory.createCmsStructureModelResponse(copy(fsDrivenPageCmsStructureModel)).subscribe((result) => {
        expect(result).toEqual(expectedOccResponse);
        done();
      });
    });

    it('if a matching entry can be found in the storefront layout configuration for the given page template (case insensitive)', (done) => {
      const responseFactory: CmsStructureModelResponseFactory = TestBed.inject(CmsStructureModelResponseFactory);
      const fsDrivenPage = copy(fsDrivenPageCmsStructureModel);
      fsDrivenPage.page.template = 'FiRsTsPiRiTdRiVeNpAgE';
      responseFactory.createCmsStructureModelResponse(fsDrivenPage).subscribe((result) => {
        expect(result).toEqual(expectedOccResponse);
        done();
      });
    });
  });

  describe('should return null', () => {
    it('if no matching entry can be found in the storefront layout configuration for the given page template', () => {
      const responseFactory: CmsStructureModelResponseFactory = TestBed.inject(CmsStructureModelResponseFactory);
      const fsDrivenPage = copy(fsDrivenPageCmsStructureModel);
      fsDrivenPage.page.template = 'NotExistingPageTemplate';
      expect(responseFactory.createCmsStructureModelResponse(fsDrivenPage)).toBeNull();
      fsDrivenPage.page.template = undefined;
      expect(responseFactory.createCmsStructureModelResponse(fsDrivenPage)).toBeNull();
    });

    it('if the template entry is missing in the first spirit driven page', () => {
      const responseFactory: CmsStructureModelResponseFactory = TestBed.inject(CmsStructureModelResponseFactory);
      const fsDrivenPage = Object.assign({}, copy(fsDrivenPageCmsStructureModel));
      delete fsDrivenPage.page.template;
      expect(responseFactory.createCmsStructureModelResponse(fsDrivenPage)).toBeNull();
    });

    it('if the first spirit driven page is empty or null', () => {
      const responseFactory: CmsStructureModelResponseFactory = TestBed.inject(CmsStructureModelResponseFactory);
      expect(responseFactory.createCmsStructureModelResponse(null)).toBeNull();
      expect(responseFactory.createCmsStructureModelResponse(undefined)).toBeNull();
      expect(responseFactory.createCmsStructureModelResponse({})).toBeNull();
      expect(responseFactory.createCmsStructureModelResponse([] as any)).toBeNull();
    });
  });
});
