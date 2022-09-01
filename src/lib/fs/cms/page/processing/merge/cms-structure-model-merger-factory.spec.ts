import { CmsStructureModelMergerFactory } from './cms-structure-model-merger-factory';
import { FirstSpiritManagedPage } from 'fs-spartacus-common';
import { CmsStructureModelMerger } from './cms-structure-model-merger';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { FsSpartacusBridgeModule } from '../../../../../fs-spartacus-bridge.module';
import { BaseSiteService, ConfigModule } from '@spartacus/core';
import { Injector } from '@angular/core';
import createSpy = jasmine.createSpy;

export class MockBaseSiteService {
  getActive = createSpy('getActive').and.returnValue(of('test'));
}

describe('CmsStructureModelMergerFactory', () => {
  let fsCmsPageMergerFactory: CmsStructureModelMergerFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FsSpartacusBridgeModule.withConfig({
          bridge: {
            test: {
              caas: { baseUrl: '', project: '', apiKey: '', tenantId: '' },
              firstSpiritManagedPages: [FirstSpiritManagedPage.enhanceSapPages('myOccTemplate', [])],
            },
          },
        }),
        ConfigModule.forRoot(),
      ],
      providers: [
        { provide: BaseSiteService, useClass: MockBaseSiteService },
        { provide: Injector, useValue: { get: () => null } },
      ],
    });

    fsCmsPageMergerFactory = TestBed.inject(CmsStructureModelMergerFactory);
  });

  it('returns undefined, if a page is not managed by FirstSpirit, ', () => {
    const fsCmsPageMerger = fsCmsPageMergerFactory.createFsCmsPageMerger('myOtherTemplate');
    expect(fsCmsPageMerger).toBeUndefined();
  });

  it('returns a merger, if a page is managed by FirstSpirit, ', () => {
    const fsCmsPageMerger = fsCmsPageMergerFactory.createFsCmsPageMerger('myOccTemplate');
    expect(fsCmsPageMerger).toBeDefined();
    expect(fsCmsPageMerger).toBeInstanceOf(CmsStructureModelMerger);
  });
});
