import { TestBed } from '@angular/core/testing';
import { BaseSiteService, ConfigModule, LanguageService } from '@spartacus/core';
import { of } from 'rxjs';

import { FsSpartacusBridgeModule } from '../../../fs-spartacus-bridge.module';
import { CaasClientFactory } from '../../caas/caas-client.factory';
import { FS_CMS_PAGE_PREPARER } from './fs-cms-page.converter';
import {
  caasFilterResult,
  caasFilterResultWithDataset,
  caasFilterResultWithoutMedia,
  fsCmsPageInterfaceJson,
  fsCmsPageInterfaceJsonWithFallbacks,
  fsCmsPageInterfaceJsonWithoutMedia,
} from './fs-cms-page.preparer.spec.data';
import { copy } from 'fs-spartacus-common';

import createSpy = jasmine.createSpy;
import Spy = jasmine.Spy;
import { MockBaseSiteService } from './processing/merge/cms-structure-model-merger-factory.spec';

const testDataA = copy(fsCmsPageInterfaceJson);
const testDataB = copy(fsCmsPageInterfaceJson);
const testDataC = copy(fsCmsPageInterfaceJson);
const testDataD = copy(fsCmsPageInterfaceJsonWithoutMedia);
const testDataE = copy(fsCmsPageInterfaceJson);
const testDataF = copy(fsCmsPageInterfaceJsonWithFallbacks);
const testDataG = copy(fsCmsPageInterfaceJsonWithFallbacks);
const testDataH = copy(fsCmsPageInterfaceJsonWithFallbacks);

class MockCaasClient {
  getByUid: Spy;
  getByIds: Spy;

  constructor(result) {
    this.getByUid = createSpy('CaasClient.getByUid').and.returnValue(of({}));
    this.getByIds = createSpy('CaaSclient.getByIds').and.returnValue(of(result));
  }
}

function caasClientFactory(client) {
  return () => ({
    createCaasClient: () => of(client),
  });
}

function languageServiceFactory(language) {
  return () => ({
    getActive: () => of(language),
  });
}

const imageIdentifiers = [
  'bad0cbe3-5cad-4d80-99e8-db2d2013ef2e',
  '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
  'b857d839-0683-4a30-a7bb-983907a2303c',
  '4d5e3ba2-a282-47be-872b-1c8a8d48d30a',
  '5925413f-2b79-4030-8b06-b5209c4eef41',
  '3fd41ea5-0ac6-4ae0-a984-20f6d618773b',
  '7a36d14d-6b4f-409f-bfa8-807d307f6c1e',
  'b5c1ab9c-438f-46cf-b34a-e98f9d7277d5',
];
const datasetIdentifiers = ['7142c7ff-0951-4502-91f9-228dabaa0ddc'];

const imageIdentifiersPageLanguage = [
  '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
  '7a36d14d-6b4f-409f-bfa8-807d307f6c1e',
  '5925413f-2b79-4030-8b06-b5209c4eef41',
  '4d5e3ba2-a282-47be-872b-1c8a8d48d30a',
  'b5c1ab9c-438f-46cf-b34a-e98f9d7277d5',
];

const imageIdentifiersFallbackLanguage = [
  'bad0cbe3-5cad-4d80-99e8-db2d2013ef2e',
  '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
  'b857d839-0683-4a30-a7bb-983907a2303c',
  '4d5e3ba2-a282-47be-872b-1c8a8d48d30a',
  '5925413f-2b79-4030-8b06-b5209c4eef41',
  '3fd41ea5-0ac6-4ae0-a984-20f6d618773b',
];
const datasetIdentifiersFallbackLanguage = ['7142c7ff-0951-4502-91f9-228dabaa0ddc'];

describe('FsCmsPagePreparer', () => {
  const caasClient = new MockCaasClient(caasFilterResult);
  const anotherCaasClient = new MockCaasClient(caasFilterResultWithoutMedia);
  const caasClientReturnsDataset = new MockCaasClient(caasFilterResultWithDataset);

  beforeEach(() => {
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
        { provide: LanguageService, useFactory: languageServiceFactory('de') },
        { provide: CaasClientFactory, useFactory: caasClientFactory(caasClient) },
        { provide: BaseSiteService, useClass: MockBaseSiteService },
      ],
    });
  });

  it('should request media and data documents for all images and datasets', (done) => {
    const converters = TestBed.inject(FS_CMS_PAGE_PREPARER);
    const convertResult$ = converters[0].convert(testDataA);
    convertResult$.subscribe((convertedResult) => {
      expect(caasClient.getByIds).toHaveBeenCalledWith(
        imageIdentifiers.concat(datasetIdentifiers).map((identifier) => `'${identifier}.en_GB'`)
      );
      done();
    });
  });

  it('should request media documents only if media elements exists', (done) => {
    TestBed.overrideProvider(CaasClientFactory, {
      useFactory: caasClientFactory(anotherCaasClient),
    });
    const converters = TestBed.inject(FS_CMS_PAGE_PREPARER);
    const convertResult$ = converters[0].convert(testDataD);
    convertResult$.subscribe((convertedResult) => {
      expect(anotherCaasClient.getByIds).not.toHaveBeenCalled();
      done();
    });
  });

  it('should enhance the caas document with resolutions for all images', (done) => {
    const sourceJson = JSON.stringify(testDataB).replace(/[\s\\\r\n]/gm, '');
    imageIdentifiers.forEach((identifier) => {
      expect(sourceJson.includes(`"resolutions":{"identifier":"${identifier}"}`)).toBeFalse();
    });
    const converters = TestBed.inject(FS_CMS_PAGE_PREPARER);
    const convertResult$ = converters[0].convert(testDataB);
    convertResult$.subscribe((convertedResult) => {
      const targetJson = JSON.stringify(convertedResult).replace(/[\s\\\r\n]/gm, '');
      imageIdentifiers.forEach((identifier) => {
        expect(targetJson.includes(`"resolutions":{"identifier":"${identifier}"}`)).toBeTrue();
      });
      done();
    });
  });

  it('should not enhance the caas document with resolutions for fake image ids', (done) => {
    const sourceJson = JSON.stringify(testDataC).replace(/[\s\\\r\n]/gm, '');
    const notExistingIdentifiers = [
      '111111-111111111-111111111-111111111',
      '222222-222222222-222222222-222222222',
      '333333-333333333-333333333-333333333',
      '444444-444444444-444444444-444444444',
    ];
    notExistingIdentifiers.forEach((notExistingIdentifier) => {
      expect(sourceJson.includes(`"resolutions":{"identifier":"${notExistingIdentifier}"}`)).toBeFalse();
    });
    const converters = TestBed.inject(FS_CMS_PAGE_PREPARER);
    const convertResult$ = converters[0].convert(testDataC);
    convertResult$.subscribe((convertedResult) => {
      const targetJson = JSON.stringify(convertedResult).replace(/[\s\\\r\n]/gm, '');
      notExistingIdentifiers.forEach((notExistingIdentifier) => {
        expect(targetJson.includes(`"resolutions":{"identifier":"${notExistingIdentifier}"}`)).toBeFalse();
      });
      done();
    });
  });

  it('should enhance the caas document with data of referenced datasets', (done) => {
    const sourceJson = JSON.stringify(testDataE).replace(/[\s\\\r\n]/gm, '');
    datasetIdentifiers.forEach((identifier) => {
      expect(sourceJson.includes(`"dataset":{"identifier":"${identifier}"}`)).toBeFalse();
    });
    TestBed.overrideProvider(CaasClientFactory, {
      useFactory: caasClientFactory(caasClientReturnsDataset),
    });
    const converters = TestBed.inject(FS_CMS_PAGE_PREPARER);
    const convertResult = converters[0].convert(testDataE);
    convertResult.subscribe((convertedResult) => {
      const targetJson = JSON.stringify(convertedResult).replace(/[\s\\\r\n]/gm, '');
      datasetIdentifiers.forEach((identifier) => {
        expect(targetJson.includes(`"dataset":{"`)).toBeTrue();
      });
      done();
    });
  });

  it('should not enhance the caas document with data for fake dataset ids', (done) => {
    const sourceJson = JSON.stringify(testDataE).replace(/[\s\\\r\n]/gm, '');
    const notExistingIdentifiers = [
      '111111-111111111-111111111-111111111',
      '222222-222222222-222222222-222222222',
      '333333-333333333-333333333-333333333',
      '444444-444444444-444444444-444444444',
    ];
    notExistingIdentifiers.forEach((notExistingIdentifier) => {
      expect(sourceJson.includes(`"dataset":{"identifier":"${notExistingIdentifier}"}`)).toBeFalse();
    });
    const converters = TestBed.inject(FS_CMS_PAGE_PREPARER);
    const convertResult$ = converters[0].convert(testDataE);
    convertResult$.subscribe((convertedResult) => {
      const targetJson = JSON.stringify(convertedResult).replace(/[\s\\\r\n]/gm, '');
      notExistingIdentifiers.forEach((notExistingIdentifier) => {
        expect(targetJson.includes(`"dataset":{"identifier":"${notExistingIdentifier}"}`)).toBeFalse();
      });
      done();
    });
  });

  describe('in case of fallback', () => {
    beforeEach(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          FsSpartacusBridgeModule.withConfig({
            bridge: {
              test: {
                fallbackLanguage: 'de_DE',
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
          { provide: LanguageService, useFactory: languageServiceFactory('de') },
          { provide: CaasClientFactory, useFactory: caasClientFactory(caasClient) },
          { provide: BaseSiteService, useClass: MockBaseSiteService },
        ],
      });
    });

    it('should request media and data documents for images and datasets in page language and fallback language', (done) => {
      TestBed.overrideProvider(CaasClientFactory, {
        useFactory: caasClientFactory(caasClient),
      });
      const converters = TestBed.inject(FS_CMS_PAGE_PREPARER);
      const convertResult$ = converters[0].convert(testDataF);
      convertResult$.subscribe((_convertedResult) => {
        expect(caasClient.getByIds).toHaveBeenCalledWith(
          imageIdentifiersPageLanguage
            .map((identifier) => `'${identifier}.en_GB'`)
            .concat(
              imageIdentifiersFallbackLanguage.concat(datasetIdentifiersFallbackLanguage).map((identifier) => `'${identifier}.de_DE'`)
            )
        );
        done();
      });
    });

    it('should enhance the caas document with resolutions for all images', (done) => {
      const sourceJson = JSON.stringify(testDataG).replace(/[\s\\\r\n]/gm, '');
      imageIdentifiersPageLanguage.forEach((identifier) => {
        expect(sourceJson.includes(`"resolutions":{"identifier":"${identifier}"}`)).toBeFalse();
      });
      imageIdentifiersFallbackLanguage.forEach((identifier) => {
        expect(sourceJson.includes(`"resolutions":{"identifier":"${identifier}"}`)).toBeFalse();
      });
      const converters = TestBed.inject(FS_CMS_PAGE_PREPARER);
      const convertResult$ = converters[0].convert(testDataG);
      convertResult$.subscribe((convertedResult) => {
        const targetJson = JSON.stringify(convertedResult).replace(/[\s\\\r\n]/gm, '');
        imageIdentifiersPageLanguage.forEach((identifier) => {
          expect(targetJson.includes(`"resolutions":{"identifier":"${identifier}"}`)).toBeTrue();
        });
        imageIdentifiersFallbackLanguage.forEach((identifier) => {
          expect(targetJson.includes(`"resolutions":{"identifier":"${identifier}"}`)).toBeTrue();
        });
        done();
      });
    });

    it('should enhance the caas document with data of referenced datasets', (done) => {
      const sourceJson = JSON.stringify(testDataH).replace(/[\s\\\r\n]/gm, '');
      datasetIdentifiersFallbackLanguage.forEach((identifier) => {
        expect(sourceJson.includes(`"dataset":{"identifier":"${identifier}"}`)).toBeFalse();
      });
      TestBed.overrideProvider(CaasClientFactory, {
        useFactory: caasClientFactory(caasClientReturnsDataset),
      });
      const converters = TestBed.inject(FS_CMS_PAGE_PREPARER);
      const convertResult = converters[0].convert(testDataH);
      convertResult.subscribe((convertedResult) => {
        const targetJson = JSON.stringify(convertedResult).replace(/[\s\\\r\n]/gm, '');
        datasetIdentifiersFallbackLanguage.forEach((identifier) => {
          expect(targetJson.includes(`"dataset":{"`)).toBeTrue();
        });
        done();
      });
    });
  });
});
