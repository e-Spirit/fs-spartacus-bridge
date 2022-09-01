import { REPLACE } from '../cms/page/processing/merge/strategies/replace';
import { FsSpartacusBridgeModule } from '../../fs-spartacus-bridge.module';
import { TestBed } from '@angular/core/testing';

import { ConfigModule } from '@spartacus/core';
import { getFsManagedPageConfigByTemplateId, findDocumentsInCaasResponse, reExecutable } from './helper';
import { FirstSpiritManagedPage, FsSpartacusBridgeConfig } from 'fs-spartacus-common';
import { iif, throwError, of, Observable } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

const firstManagedPage: FirstSpiritManagedPage = FirstSpiritManagedPage.enhanceSapPages('LandingPage2Template', [
  { name: 'bottomheaderslot', mergeStrategy: REPLACE },
]);

export const fakeCaasResponse = {
  _id: 'release.content',
  _etag: {
    $oid: '5f22a473d45def064a7cb081',
  },
  _returned: 3,
  _embedded: {
    'rh:doc': [
      {
        identifier: 'bad0cbe3-5cad-4d80-99e8-db2d2013ef2e',
      },
      {
        identifier: '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
      },
      {
        identifier: 'b857d839-0683-4a30-a7bb-983907a2303c',
      },
    ],
  },
};

describe('Helper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        FsSpartacusBridgeModule.withConfig({
          bridge: {
            test: {
              caas: { baseUrl: 'https://caas', project: 'project', apiKey: 'apiKey', tenantId: 'defaultTenant' },
              firstSpiritManagedPages: [
                FirstSpiritManagedPage.enhanceSapPages('OtherLandingPage2Template', [{ name: 'bottomheaderslot', mergeStrategy: REPLACE }]),
                FirstSpiritManagedPage.enhanceSapPages('MyCustomOccTemplate', [{ name: 'bottomheaderslot', mergeStrategy: REPLACE }]),
                FirstSpiritManagedPage.enhanceSapPages('LandingPage2Template', [{ name: 'bottomheaderslot', mergeStrategy: REPLACE }]),
              ],
            },
          },
        }),
        ConfigModule.forRoot(),
      ],
      providers: [],
    });
  });

  describe('should find the correct page configuration of the bridge for a given OCC template', () => {
    it('in any case (matching, lower, upper)', () => {
      const fsSpartacusBridgeConfig: FsSpartacusBridgeConfig = TestBed.inject(FsSpartacusBridgeConfig);
      expect(
        getFsManagedPageConfigByTemplateId(fsSpartacusBridgeConfig.bridge['test'].firstSpiritManagedPages, 'LandingPage2Template')
      ).toEqual(firstManagedPage);
      expect(
        getFsManagedPageConfigByTemplateId(fsSpartacusBridgeConfig.bridge['test'].firstSpiritManagedPages, 'landingpage2template')
      ).toEqual(firstManagedPage);
      expect(
        getFsManagedPageConfigByTemplateId(fsSpartacusBridgeConfig.bridge['test'].firstSpiritManagedPages, 'LANDINGPAGE2TEMPLATE')
      ).toEqual(firstManagedPage);
    });
  });

  describe('should not return a page configuration', () => {
    it('if no configuration entry exists in the bridge for this OCC template', () => {
      const fsSpartacusBridgeConfig: FsSpartacusBridgeConfig = TestBed.inject(FsSpartacusBridgeConfig);
      expect(
        getFsManagedPageConfigByTemplateId(fsSpartacusBridgeConfig.bridge['test'].firstSpiritManagedPages, 'UnknownPageTemplate')
      ).toBeUndefined();
    });

    it('if the OCC template is empty', () => {
      const fsSpartacusBridgeConfig: FsSpartacusBridgeConfig = TestBed.inject(FsSpartacusBridgeConfig);
      expect(getFsManagedPageConfigByTemplateId(fsSpartacusBridgeConfig.bridge['test'].firstSpiritManagedPages, '')).toBeUndefined();
      expect(getFsManagedPageConfigByTemplateId(fsSpartacusBridgeConfig.bridge['test'].firstSpiritManagedPages, null)).toBeUndefined();
      expect(getFsManagedPageConfigByTemplateId(fsSpartacusBridgeConfig.bridge['test'].firstSpiritManagedPages, undefined)).toBeUndefined();
    });
  });

  it('should extract all media documents from the caas response', () => {
    expect(findDocumentsInCaasResponse(fakeCaasResponse)).toBeDefined();
    expect(findDocumentsInCaasResponse(fakeCaasResponse).length).toBe(3);
    expect(findDocumentsInCaasResponse(fakeCaasResponse)[0]).toEqual({
      identifier: 'bad0cbe3-5cad-4d80-99e8-db2d2013ef2e',
    } as any);
    expect(findDocumentsInCaasResponse(fakeCaasResponse)[1]).toEqual({
      identifier: '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
    } as any);
    expect(findDocumentsInCaasResponse(fakeCaasResponse)[2]).toEqual({
      identifier: 'b857d839-0683-4a30-a7bb-983907a2303c',
    } as any);
  });

  it('should return an empty array if the caas response is faulty or empty', () => {
    expect(findDocumentsInCaasResponse(null)).toEqual([]);
    expect(findDocumentsInCaasResponse(undefined)).toEqual([]);
    expect(findDocumentsInCaasResponse({})).toEqual([]);
    expect(findDocumentsInCaasResponse([])).toEqual([]);
    expect(findDocumentsInCaasResponse('')).toEqual([]);
    expect(findDocumentsInCaasResponse({ _embedded: {} })).toEqual([]);
    expect(findDocumentsInCaasResponse({ _embedded: { 'rh:doc': [] } })).toEqual([]);
  });

  describe('reExecutable', () => {
    it('should execute a given function till predicate is fulfilled or return undefined', async (done) => {
      const config = { intialDelay: 3, retryDelay: 5 };
      const unary = (param1: string) => of(param1);
      const binary = (param1: string, param2: string) => of(`${param1}-${param2}`);
      const responseHandler = (expectedResponse: string) => {
        let counter = 0;
        return (response: string) => {
          const responseWithCounterValue = `${response}-${counter++}`;
          return iif(
            () => responseWithCounterValue === expectedResponse,
            of(responseWithCounterValue),
            throwError('Response did not match expectations')
          );
        };
      };
      const toPromise = async (observable: Observable<Observable<string>>): Promise<string | void> => {
        return observable
          .pipe(
            switchMap((result) => result),
            first()
          )
          .toPromise()
          .catch(console.error);
      };

      expect(unary.length).toBe(1);
      expect(binary.length).toBe(2);

      const unaryHof = reExecutable(unary, responseHandler('unary-call-2'), config);
      const unaryResult = await toPromise(unaryHof('unary-call'));
      expect(unaryResult).toBe('unary-call-2');

      const binaryHof = reExecutable(binary, responseHandler('binary-call-1'), config);
      const binaryResult = await toPromise(binaryHof('binary', 'call'));
      expect(binaryResult).toBe('binary-call-1');

      const unaryHof2 = reExecutable(unary, responseHandler('unary-call-2'), { ...config, maxRetries: 1 });
      const unaryResult2 = await toPromise(unaryHof2('unary-call'));
      expect(unaryResult2).toBeUndefined();
      done();
    });
  });
});
