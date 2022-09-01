import { FsCmsPageComponentInjector } from '../fs-cms-page-component-injector';
import { BaseSiteService, CmsStructureModel, PageType } from '@spartacus/core';

import { APPEND, REPLACE } from '../merge/strategies';
import { FsEditingOverlayInjectorPipelineStep } from './fs-editing-overlay-injector-pipeline-step';
import { FsEditingOverlayComponent } from '../../../../../fs-editing-overlay/fs-editing-overlay.component';
import { FirstSpiritManagedPage, FsSpartacusBridgeConfig } from 'fs-spartacus-common';
import { TestBed } from '@angular/core/testing';
import { MockBaseSiteService } from '../merge/cms-structure-model-merger-factory.spec';

describe('FsEditingOverlayInjectorPipelineStep', () => {
  function createTestPage(slots: any) {
    return {
      page: {
        template: 'LandingPage2Template',
        slots,
      },
    } as CmsStructureModel;
  }

  const occCmsStructureModel = createTestPage({});
  let fsEditingOverlayInjector: FsEditingOverlayInjectorPipelineStep;
  let fsEditingOverlayWrapperSpy;
  let fsSpartacusBridgeConfig: FsSpartacusBridgeConfig;

  beforeEach(() => {
    fsSpartacusBridgeConfig = {
      bridge: {
        test: {
          caas: { baseUrl: '', project: '', apiKey: '', tenantId: '' },
          firstSpiritManagedPages: [
            FirstSpiritManagedPage.enhanceSapPages('LandingPage2Template', [
              { name: 'Section1', mergeStrategy: APPEND },
              { name: 'Section2', mergeStrategy: APPEND },
            ]),
            FirstSpiritManagedPage.integrateFsDrivenPagesIntoSapSkeleton(
              'homepage',
              PageType.CONTENT_PAGE,
              'MyFirstSpiritDrivenPageTemplate',
              [{ name: 'Section1', mergeStrategy: REPLACE }]
            ),
          ],
        },
      },
    };
    TestBed.configureTestingModule({
      providers: [{ provide: BaseSiteService, useClass: MockBaseSiteService }],
    });

    const fsEditingOverlayWrapper = new FsCmsPageComponentInjector(FsEditingOverlayComponent.TYPE_CODE);
    fsEditingOverlayWrapperSpy = spyOn(fsEditingOverlayWrapper, 'addCmsPageComponents');
    const baseSiteService = TestBed.inject(BaseSiteService);
    fsEditingOverlayInjector = new FsEditingOverlayInjectorPipelineStep(fsEditingOverlayWrapper, fsSpartacusBridgeConfig, baseSiteService);
  });

  it('should return all configured fs managed slots, if the fs page is undefined', () => {
    fsEditingOverlayInjector.execute(occCmsStructureModel, null);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1', 'Section2']);
  });

  it('should return all configured fs managed slots, if the fs page is null', () => {
    fsEditingOverlayInjector.execute(occCmsStructureModel, null);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1', 'Section2']);
  });

  it('should return no slots, if the page is not managed by fs', () => {
    const testPage = createTestPage({});
    testPage.page.template = 'anotherTemplate';
    fsEditingOverlayInjector.execute(testPage, null);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(testPage, []);
  });

  it('should return slots with no components', () => {
    const fsCmsStructureModel = createTestPage({ Section1: { components: [{}] }, Section2: { components: [] } });
    fsEditingOverlayInjector.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section2']);
  });

  it('should return slots with undefined components', () => {
    const fsCmsStructureModel = createTestPage({ Section1: {}, Section2: { components: [{}] } });
    fsEditingOverlayInjector.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1']);
  });

  it('should not return unknown slots', () => {
    const fsCmsStructureModel = createTestPage({ Section1: {}, Section2: {}, Section3: {} });
    fsEditingOverlayInjector.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1', 'Section2']);
  });

  it('should not return slots with components', () => {
    const fsCmsStructureModel = createTestPage({ Section1: {}, Section2: { components: [{ uid: 'component1' }] } });
    fsEditingOverlayInjector.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1']);
  });

  it('should compare slot names case insensitive', () => {
    const fsCmsStructureModel = createTestPage({ section1: {}, section2: {} });
    fsEditingOverlayInjector.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1', 'Section2']);
  });

  it('should not return configured fs managed slots, that are undefined in the fs page', () => {
    const fsCmsStructureModel = createTestPage({ Section1: {} });
    fsEditingOverlayInjector.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1']);
  });

  it('should not inject the overlay if both pages are null', () => {
    fsEditingOverlayInjector.execute(null, null);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(null, []);
  });

  it('should inject the overlay even if the occ page is null', () => {
    const fsCmsStructureModel = createTestPage({ Section1: {} });
    fsEditingOverlayInjector.execute(null, fsCmsStructureModel);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(null, ['Section1']);
  });

  it('should inject the overlay into managed slots that do not exist in the occ page', () => {
    const fsCmsStructureModel = createTestPage({ Section1: { components: [] }, Section2: { components: [] } });
    fsEditingOverlayInjector.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1', 'Section2']);
  });

  it('should use the FS page template id located under page.properties.fsPageTemplate, if present', () => {
    const fsCmsStructureModel = createTestPage({ Section1: { components: [{ uid: 'component1' }] } });
    const fakeOccTestPage: CmsStructureModel = {
      page: {
        template: 'LandingPage2Template',
        slots: { Section1: { components: [{ uid: 'component1' }] } },
        properties: {
          fsPageTemplate: 'MyFirstSpiritDrivenPageTemplate',
        },
      },
    };
    expect((fsEditingOverlayInjector as any).tryGetPageTemplate(fakeOccTestPage)).toEqual('MyFirstSpiritDrivenPageTemplate');
    expect((fsEditingOverlayInjector as any).tryGetPageTemplate(fsCmsStructureModel)).toEqual('LandingPage2Template');
  });

  it('should inject the overlay only in managed slots when integrating into SAP skeletons', () => {
    const fsCmsStructureModel: CmsStructureModel = {
      page: {
        template: 'MyFirstSpiritDrivenPageTemplate',
        slots: {
          BottomHeaderSlot: { components: [] },
          Section1: { components: [] },
        },
      },
    };
    const fakeOccTestPage: CmsStructureModel = {
      page: {
        template: 'LandingPage2Template',
        slots: {
          BottomHeaderSlot: { components: [] },
          Section1: { components: [] },
        },
        properties: {
          fsPageTemplate: 'MyFirstSpiritDrivenPageTemplate',
        },
      },
    };
    fsEditingOverlayInjector.execute(fakeOccTestPage, fsCmsStructureModel);
    expect(fsEditingOverlayWrapperSpy).toHaveBeenCalledWith(fakeOccTestPage, ['Section1']);
  });
});
