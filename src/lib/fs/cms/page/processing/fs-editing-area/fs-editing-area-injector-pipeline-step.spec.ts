import { REPLACE } from '../merge/strategies';
import { FsCmsPageComponentInjector } from '../fs-cms-page-component-injector';
import { BaseSiteService, CmsStructureModel, PageType } from '@spartacus/core';

import { APPEND } from '../merge/strategies';
import { FsEditingAreaInjectorPipelineStep } from './fs-editing-area-injector-pipeline-step';
import { FsEditingAreaComponent } from '../../../../../fs-editing-area/fs-editing-area.component';
import { FsSpartacusBridgeConfig, FirstSpiritManagedPage } from 'fs-spartacus-common';
import { TestBed } from '@angular/core/testing';
import { MockBaseSiteService } from '../merge/cms-structure-model-merger-factory.spec';

describe('FsEditingAreaInjectorPipelineStep', () => {
  function createTestPage(slots: any) {
    return {
      page: {
        template: 'LandingPage2Template',
        slots,
      },
    } as CmsStructureModel;
  }

  const occCmsStructureModel = createTestPage({});
  let fsEditingAreaPipelineStep: FsEditingAreaInjectorPipelineStep;
  let fsEditingAreaWrapperSpy;
  let fsSpartacusBridgeConfig: FsSpartacusBridgeConfig;

  beforeEach(() => {
    fsSpartacusBridgeConfig = {
      bridge: {
        test: {
          caas: { baseUrl: '', project: '', apiKey: '', tenantId: '' },
          firstSpiritManagedPages: [
            FirstSpiritManagedPage.enhanceSapPages('LandingPage2Template', [
              { name: 'Section1', mergeStrategy: APPEND },
              { name: 'BottomHeaderSlot', mergeStrategy: REPLACE },
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

    const fsComponentWrapper = new FsCmsPageComponentInjector(FsEditingAreaComponent.TYPE_CODE);
    fsEditingAreaWrapperSpy = spyOn(fsComponentWrapper, 'addCmsPageComponents');
    const baseSiteService = TestBed.inject(BaseSiteService);
    fsEditingAreaPipelineStep = new FsEditingAreaInjectorPipelineStep(fsComponentWrapper, fsSpartacusBridgeConfig, baseSiteService);
  });

  it('should inject the editing area component in all fs managed slots, if the fs page is undefined', () => {
    fsEditingAreaPipelineStep.execute(occCmsStructureModel, null);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1', 'BottomHeaderSlot']);
  });

  it('should not inject the editing area into the slot if the fs page is undefined but the OCC slot has content', () => {
    const occTestPage = createTestPage({ Section1: { components: [{ uid: 'component1' }] } });
    fsEditingAreaPipelineStep.execute(occTestPage, null);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(occTestPage, ['BottomHeaderSlot']);
  });

  it('should not add the editing area component in any slot, if the page is not managed by fs', () => {
    const testPage = createTestPage({});
    const fsCmsStructureModel = createTestPage({ Section1: { components: [{}] }, BottomHeaderSlot: { components: [] } });
    testPage.page.template = 'anotherTemplate';
    fsEditingAreaPipelineStep.execute(testPage, fsCmsStructureModel);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(testPage, []);
  });

  it('should inject the editing area in all empty slots that are managed by fs', () => {
    const fsCmsStructureModel = createTestPage({ Section1: { components: [{}] }, BottomHeaderSlot: { components: [] } });
    fsEditingAreaPipelineStep.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['BottomHeaderSlot']);
    // Expect the same result if BottomHeaderSlot.components is undefined
    fsCmsStructureModel.page.slots.BottomHeaderSlot = {};
    fsEditingAreaPipelineStep.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['BottomHeaderSlot']);
  });

  it('should inject the editing area only into slots that are managed by FS', () => {
    const fsCmsStructureModel = createTestPage({ Section1: {}, UnknownSlot1: {}, UnknownSlot2: {} });
    fsEditingAreaPipelineStep.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1']);
  });

  it('should inject the editing area only into empty slots that are managed by FS', () => {
    const fsCmsStructureModel = createTestPage({
      Section1: {},
      Section2: { components: [{}] },
      BottomHeaderSlot: { components: [{ uid: 'component1' }] },
    });
    fsEditingAreaPipelineStep.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1']);
  });

  it('should inject the editing area into all empty slots that are managed by FS, regardless of the case of the slotname.', () => {
    const fsCmsStructureModel = createTestPage({ section1: {}, bottomHEADERslot: {} });
    fsEditingAreaPipelineStep.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1', 'BottomHeaderSlot']);
  });

  it('should inject the editing area into the slot when the slot is empty in both systems', () => {
    const fsCmsStructureModel = createTestPage({ Section1: {} });
    const occTestPage = createTestPage({ section1: {} });
    fsEditingAreaPipelineStep.execute(occTestPage, fsCmsStructureModel);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(occTestPage, ['Section1']);
  });

  it('should not inject the editing area into the slot if the FS slot has content', () => {
    const fsCmsStructureModel = createTestPage({ Section1: { components: [{ uid: 'component1' }] } });
    const occTestPage = createTestPage({ section1: {} });
    fsEditingAreaPipelineStep.execute(occTestPage, fsCmsStructureModel);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(occTestPage, []);
  });

  it('should not inject the editing area into the slot if the OCC slot has content', () => {
    const fsCmsStructureModel = createTestPage({ Section1: {} });
    const occTestPage = createTestPage({ section1: { components: [{ uid: 'component1' }] } });
    fsEditingAreaPipelineStep.execute(occTestPage, fsCmsStructureModel);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(occTestPage, []);
  });

  it('should not inject the editing area if both pages are null', () => {
    fsEditingAreaPipelineStep.execute(null, null);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(null, []);
  });

  it('should inject the editing area even if the occ page is null', () => {
    const fsCmsStructureModel = createTestPage({ Section1: {} });
    fsEditingAreaPipelineStep.execute(null, fsCmsStructureModel);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(null, ['Section1']);
  });

  it('should inject the editing area into managed slots that do not exist in the occ page', () => {
    const fsCmsStructureModel = createTestPage({ Section1: { components: [] }, BottomHeaderSlot: { components: [] } });
    fsEditingAreaPipelineStep.execute(occCmsStructureModel, fsCmsStructureModel);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(occCmsStructureModel, ['Section1', 'BottomHeaderSlot']);
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
    expect((fsEditingAreaPipelineStep as any).tryGetPageTemplate(fakeOccTestPage)).toEqual('MyFirstSpiritDrivenPageTemplate');
    expect((fsEditingAreaPipelineStep as any).tryGetPageTemplate(fsCmsStructureModel)).toEqual('LandingPage2Template');
  });

  it('should inject the editing area only in managed slots when integrating into SAP skeletons', () => {
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
    fsEditingAreaPipelineStep.execute(fakeOccTestPage, fsCmsStructureModel);
    expect(fsEditingAreaWrapperSpy).toHaveBeenCalledWith(fakeOccTestPage, ['Section1']);
  });
});
