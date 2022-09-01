import { TestBed } from '@angular/core/testing';
import { BaseSiteService, ConfigModule } from '@spartacus/core';
import { copy } from 'fs-spartacus-common';
import { of } from 'rxjs';
import { FsSpartacusBridgeModule } from '../../../fs-spartacus-bridge.module';
import { CaasClientFactory } from '../../caas/caas-client.factory';
import {
  expectedTargetPageData,
  fallbackLanguagePageData,
  sourcePageDataWithFallbacks,
  sourcePageDataWithoutFallbacks,
} from './fs-cms-page-language-fallback.replacer.spec.data';
import { FS_CMS_PAGE_LANGUAGE_FALLBACK_REPLACER } from './fs-cms-page.converter';

import createSpy = jasmine.createSpy;
import Spy = jasmine.Spy;
import { MockBaseSiteService } from './processing/merge/cms-structure-model-merger-factory.spec';

const testDataA = copy(sourcePageDataWithFallbacks);
const testDataB = copy(sourcePageDataWithoutFallbacks);
const testDataC = copy(sourcePageDataWithFallbacks);
const testDataD = copy(sourcePageDataWithFallbacks);

class MockCaasClient {
  getByUid: Spy;
  getPageSections: Spy;

  constructor(result) {
    this.getPageSections = createSpy('CaasClient.getPageSections').and.returnValue(of(result));
  }
}

function caasClientFactory(client) {
  return () => ({
    createCaasClient: () => of(client),
  });
}

describe('FsCmsPageLanguageFallbackReplacer', () => {
  const caasClient = new MockCaasClient(fallbackLanguagePageData);
  const anotherCaasClient = new MockCaasClient(fallbackLanguagePageData);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FsSpartacusBridgeModule.withConfig({
          bridge: {
            test: {
              fallbackLanguage: 'en_GB',
              caas: {
                baseUrl: 'baseUrl',
                project: 'project',
                apiKey: 'apiKey',
                tenantId: 'defaultTenant',
              },
              firstSpiritManagedPages: [],
            },
          },
        }),
        ConfigModule.forRoot(),
      ],
      providers: [
        { provide: CaasClientFactory, useFactory: caasClientFactory(caasClient) },
        { provide: BaseSiteService, useClass: MockBaseSiteService },
      ],
    });
  });

  it('should request the page for fallback language', (done) => {
    const converters = TestBed.inject(FS_CMS_PAGE_LANGUAGE_FALLBACK_REPLACER);
    const convertResult$ = converters[0].convert(testDataA);
    convertResult$.subscribe((_convertedResult) => {
      expect(caasClient.getPageSections).toHaveBeenCalledWith('__homepage__', 'en');
      done();
    });
  });

  it('should not request a page for fallback language if no section is marked for fallback', (done) => {
    TestBed.overrideProvider(CaasClientFactory, {
      useFactory: caasClientFactory(anotherCaasClient),
    });
    const converters = TestBed.inject(FS_CMS_PAGE_LANGUAGE_FALLBACK_REPLACER);
    const convertResult$ = converters[0].convert(testDataB);
    convertResult$.subscribe((_convertedResult) => {
      expect(anotherCaasClient.getPageSections).not.toHaveBeenCalled();
      done();
    });
  });

  it('should replace fallback section with sections from fallback sections', (done) => {
    const converters = TestBed.inject(FS_CMS_PAGE_LANGUAGE_FALLBACK_REPLACER);
    const convertResult$ = converters[0].convert(testDataD);
    convertResult$.subscribe((convertedResult) => {
      expect(convertedResult).toEqual(expectedTargetPageData);
      done();
    });
  });

  it('should not replace anything if no section is marked for fallback', (done) => {
    const converters = TestBed.inject(FS_CMS_PAGE_LANGUAGE_FALLBACK_REPLACER);
    const convertResult$ = converters[0].convert(testDataB);
    convertResult$.subscribe((convertedResult) => {
      expect(convertedResult).toEqual(testDataB);
      done();
    });
  });

  it('should not replace anything if no fallback language is configured in app module', (done) => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [
        FsSpartacusBridgeModule.withConfig({
          bridge: {
            test: {
              caas: {
                baseUrl: 'baseUrl',
                project: 'project',
                apiKey: 'apiKey',
                tenantId: 'defaultTenant',
              },
              firstSpiritManagedPages: [],
            },
          },
        }),
        ConfigModule.forRoot(),
      ],
      providers: [
        { provide: CaasClientFactory, useFactory: caasClientFactory(caasClient) },
        { provide: BaseSiteService, useClass: MockBaseSiteService },
      ],
    });

    const converters = TestBed.inject(FS_CMS_PAGE_LANGUAGE_FALLBACK_REPLACER);
    const convertResult$ = converters[0].convert(testDataC);
    convertResult$.subscribe((convertedResult) => {
      expect(convertedResult).toEqual(testDataC);
      done();
    });
  });
});
