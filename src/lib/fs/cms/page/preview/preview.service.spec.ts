import { Observable, of } from 'rxjs';
import { REPLACE } from '../processing/merge/strategies/replace';
import { FsSpartacusBridgeModule } from '../../../../fs-spartacus-bridge.module';
import { PreviewDialogService } from './preview-dialog.service';
import { TestBed } from '@angular/core/testing';

import { PreviewService } from './preview.service';
import { PreviewTranslationService, PreviewTranslationKey as TranslationKey } from './preview-translation.service';
import { TppWrapperService } from '../tpp-wrapper-service';
import { BaseSiteService, ConfigModule } from '@spartacus/core';
import createSpy = jasmine.createSpy;
import { FirstSpiritManagedPage } from 'fs-spartacus-common';
import { MockBaseSiteService } from '../processing/merge/cms-structure-model-merger-factory.spec';

describe('PreviewService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
      providers: [
        {
          provide: TppWrapperService,
          useValue: {
            getElementStatus: (previewId: string) => Promise.resolve({ id: 'foo', uid: 'foobar', name: 'name' }),
            createSection: (previewElementId: string, options: any) => Promise.resolve({ identifier: 'mySectionId', name: 'mySectionId' }),
            triggerRerenderView: createSpy('TppWrapperService.triggerRerenderView').and.returnValue(Promise.resolve()),
          },
        },
        {
          provide: PreviewTranslationService,
          useValue: {
            resolveDialogTexts: (key: TranslationKey, replacements?: { [key: string]: string }) => [
              of('title'),
              of('message'),
              of('detailedMessage'),
            ],
          },
        },
        {
          provide: PreviewDialogService,
          useValue: {
            showDetailedErrorDialog: (title$: Observable<string>, message$: Observable<string>, detailedMessage$?: Observable<string>) =>
              Promise.resolve(),
            showErrorDialog: (title$: Observable<string>, message$: Observable<string>) => Promise.resolve(),
          },
        },
        {
          provide: BaseSiteService,
          useClass: MockBaseSiteService,
        },
      ],
    }).compileComponents();
  });

  it('should be created', () => {
    const service: PreviewService = TestBed.inject(PreviewService);
    expect(service).toBeTruthy();
  });

  it('should treat the site as managed by FS', async () => {
    const service: PreviewService = TestBed.inject(PreviewService);
    expect(await service.isFirstSpiritManagedPage('myPreviewId')).toBeTrue();
  });

  it('should not treat the site as managed by FS', async () => {
    TestBed.overrideProvider(TppWrapperService, {
      useValue: { getElementStatus: (previewId: string) => Promise.resolve({}) },
    });
    const service: PreviewService = TestBed.inject(PreviewService);
    expect(await service.isFirstSpiritManagedPage('myPreviewId')).toBeFalse();
  });

  it('should not treat the site as managed by FS', async () => {
    const service: PreviewService = TestBed.inject(PreviewService);
    expect(await service.isFirstSpiritManagedPage(null)).toBeFalse();
  });

  it('should create a new section for a given slot', async () => {
    const service: PreviewService = TestBed.inject(PreviewService);
    const tppWrapperService: TppWrapperService = TestBed.inject(TppWrapperService);
    await service.createSection('myPreviewElementId', { slotName: 'BottomHeaderSlot' });
    expect(tppWrapperService.triggerRerenderView).toHaveBeenCalled();
  });
});
