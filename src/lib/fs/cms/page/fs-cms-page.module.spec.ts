import { TppStatusService } from './tpp-status-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  BaseSiteService,
  CmsPageAdapter,
  CmsStructureConfigService,
  ConfigModule,
  LanguageService,
  PageType,
  TranslationService,
} from '@spartacus/core';
import { of } from 'rxjs';

import { FsSpartacusBridgeModule } from '../../../fs-spartacus-bridge.module';
import { FsCmsPageConnector } from './fs-cms-page.connector';
import { caasResult, occCmsStructureModel } from './fs-cms-page.module.spec.data';
import { APPEND, REPLACE } from './processing/merge/strategies';

import createSpy = jasmine.createSpy;
import { FsEditingOverlayComponent } from '../../../fs-editing-overlay/fs-editing-overlay.component';
import { FsEditingAreaComponent } from '../../../fs-editing-area/fs-editing-area.component';
import { FirstSpiritManagedPage } from 'fs-spartacus-common';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBaseSiteService } from './processing/merge/cms-structure-model-merger-factory.spec';
class MockOccCmsPageAdapter implements CmsPageAdapter {
  load = createSpy('OccCmsPageAdapter').and.returnValue(of(occCmsStructureModel));
}

describe('All components in the FsCmsPageModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FsSpartacusBridgeModule.withConfig({
          bridge: {
            test: {
              caas: { baseUrl: 'https://caas', project: 'project', apiKey: 'apiKey', tenantId: 'defaultTenant' },
              firstSpiritManagedPages: [
                FirstSpiritManagedPage.enhanceSapPages('LandingPage2Template', [
                  { name: 'stage_body', mergeStrategy: REPLACE },
                  { name: 'main_body', mergeStrategy: APPEND },
                  { name: 'tiles_body', mergeStrategy: REPLACE },
                  { name: 'main_navigation', mergeStrategy: APPEND },
                  { name: 'new_fs_content_slot', mergeStrategy: REPLACE },
                ]),
              ],
            },
          },
        }),
        ConfigModule.forRoot(),
      ],
      providers: [
        TranslationService,
        { provide: CmsPageAdapter, useClass: MockOccCmsPageAdapter },
        { provide: LanguageService, useValue: { getActive: () => of('de') } },
        { provide: CmsStructureConfigService, useValue: {} },
        { provide: TppStatusService, useValue: { isFirstSpiritPreview: () => of(false), onRerenderView: () => {} } },
        { provide: BaseSiteService, useClass: MockBaseSiteService },
      ],
    });
  });

  describe('should work together correctly', () => {
    it('in the preview', (done) => {
      TestBed.overrideProvider(TppStatusService, {
        useValue: { isFirstSpiritPreview: () => of(true), onRerenderView: () => {} },
      });
      const service = TestBed.inject(FsCmsPageConnector as Type<FsCmsPageConnector>);
      const httpMock = TestBed.inject(HttpTestingController);

      service.get({ id: 'homepage', type: PageType.CONTENT_PAGE }).subscribe((cmsStructureModel) => {
        expect(cmsStructureModel).toBeDefined();
        expect(cmsStructureModel.page.slots['stage_body'].components.length).toEqual(1);
        expect(cmsStructureModel.page.slots['main_body'].components.length).toEqual(3);
        expect(cmsStructureModel.page.slots['tiles_body'].components.length).toEqual(1);
        expect(cmsStructureModel.page.slots['main_navigation'].components.length).toEqual(1);
        expect(cmsStructureModel.components.length).toEqual(12);
        const newContentSlotEditingOverlay = cmsStructureModel.components.find(
          (component) => component.uid === 'FsEditingOverlay_new_fs_content_slot'
        );
        expect(newContentSlotEditingOverlay).toBeDefined();
        expect(newContentSlotEditingOverlay.typeCode).toEqual(FsEditingOverlayComponent.TYPE_CODE);
        const newContentSlotEditingArea = cmsStructureModel.components.find(
          (component) => component.uid === 'FsEditingArea_new_fs_content_slot'
        );
        expect(newContentSlotEditingArea).toBeDefined();
        expect(newContentSlotEditingArea.typeCode).toEqual(FsEditingAreaComponent.TYPE_CODE);
        const tilesBodyEditingComponent = cmsStructureModel.components.find((component) => component.uid === 'FsEditingArea_tiles_body');
        expect(tilesBodyEditingComponent).toBeDefined();
        const tilesBodyOverlayComponent = cmsStructureModel.components.find((component) => component.uid === 'FsEditingOverlay_tiles_body');
        expect(tilesBodyOverlayComponent).toBeDefined();
        expect((tilesBodyOverlayComponent as any).components).toEqual('FsEditingArea_tiles_body');
        const mainNavigationComponent = cmsStructureModel.components.find(
          (component) => component.uid === 'FsEditingOverlay_main_navigation'
        );
        expect(mainNavigationComponent).toBeDefined();
        expect((mainNavigationComponent as any).components).toEqual('main_navigation_component');
        done();
      });

      const testRequest = httpMock.expectOne((request) => request.url.startsWith('https://caas/defaultTenant/project.preview.content'));
      testRequest.flush(caasResult);

      const testRequest2 = httpMock.expectOne((request) => request.url.startsWith('https://caas/defaultTenant/project.preview.content'));
      testRequest2.flush({});
    });

    it('in the live storefront', (done) => {
      const service = TestBed.inject(FsCmsPageConnector as Type<FsCmsPageConnector>);
      const httpMock = TestBed.inject(HttpTestingController);

      service.get({ id: 'homepage', type: PageType.CONTENT_PAGE }).subscribe((cmsStructureModel) => {
        expect(cmsStructureModel).toBeDefined();
        expect(cmsStructureModel.page.slots['stage_body'].components.length).toEqual(1);
        expect(cmsStructureModel.page.slots['main_body'].components.length).toEqual(3);
        expect(cmsStructureModel.page.slots['tiles_body'].components.length).toEqual(0);
        expect(cmsStructureModel.page.slots['main_navigation'].components.length).toEqual(1);
        expect(cmsStructureModel.page.slots['main_navigation'].components[0].uid).toEqual('main_navigation_component');
        expect(cmsStructureModel.components.length).toEqual(7);
        done();
      });

      const testRequest = httpMock.expectOne((request) => request.url.startsWith('https://caas/defaultTenant/project.release.content'));
      testRequest.flush(caasResult);

      const testRequest2 = httpMock.expectOne((request) => request.url.startsWith('https://caas/defaultTenant/project.release.content'));
      testRequest2.flush({});
    });
  });
});
