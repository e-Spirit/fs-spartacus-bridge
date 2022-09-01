import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FsEditingOverlayComponent } from './fs-editing-overlay.component';
import { CmsComponentData, OutletModule, PageComponentModule } from '@spartacus/storefront';
import { CommonModule } from '@angular/common';
import { CmsService, TranslationService, RoutingService, BaseSiteService } from '@spartacus/core';
import { of } from 'rxjs';
import { FsSpartacusBridgeConfig } from 'fs-spartacus-common';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBaseSiteService } from '../fs/cms/page/processing/merge/cms-structure-model-merger-factory.spec';

describe('FsEditingOverlayComponent', () => {
  let component: FsEditingOverlayComponent;
  let fixture: ComponentFixture<FsEditingOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FsEditingOverlayComponent],
      imports: [RouterTestingModule, CommonModule, PageComponentModule, OutletModule],
      providers: [
        {
          provide: CmsComponentData,
          useValue: {
            data$: {
              pipe: () => {},
            },
          },
        },
        {
          provide: FsSpartacusBridgeConfig,
          useValue: {
            caas: { project: '', baseUrl: '', apiKey: '', tenantId: '' },
            firstSpiritManagedPages: [],
          } as FsSpartacusBridgeConfig,
        },
        {
          provide: CmsService,
          useValue: { getCurrentPage: () => of({}) },
        },
        {
          provide: TranslationService,
          useValue: { translate: (key: string) => of(`Translation for key ${key}`) },
        },
        {
          provide: RoutingService,
          useValue: {},
        },
        {
          provide: BaseSiteService,
          useValue: MockBaseSiteService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsEditingOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
