import { CmsStructureModel, ContentSlotData } from '@spartacus/core';
import { FsEditingOverlay } from '../../../../fs-editing-overlay/fs-editing-overlay.component';
import { FsCmsPageComponentInjector } from './fs-cms-page-component-injector';
import { FsEditingOverlayComponent } from '../../../../fs-editing-overlay/fs-editing-overlay.component';

describe('FsCmsPageComponentInjector', () => {
  const occCmsStructureModel: CmsStructureModel = {
    page: {
      template: 'LandingPage2Template',
      slots: {
        Section1: {
          components: [
            {
              uid: 'Section1Component1',
              flexType: 'MyComponent',
              typeCode: 'MyComponent',
              properties: {
                property1: 'property1Value',
              },
            },
          ],
        },
        Section2: {
          components: [
            {
              uid: 'Section2Component',
              flexType: 'MyComponent',
              typeCode: 'MyComponent',
              properties: {
                property1: 'property1Value',
              },
            },
          ],
        },
        Section3: {
          components: [
            {
              uid: 'Section3Component',
              flexType: 'MyComponent',
              typeCode: 'MyComponent',
              properties: {
                property1: 'property1Value',
              },
            },
          ],
        },
      },
    },
    components: [
      {
        uid: 'Section1Component1',
        name: 'Section1Component1',
        typeCode: 'MyComponent',
        otherProperties: {
          property1: 'property1Value',
        },
      },
      {
        uid: 'Section2Component',
        name: 'Section2Component',
        typeCode: 'MyComponent',
        otherProperties: {
          property1: 'property1Value',
        },
      },
      {
        uid: 'Section3Component',
        name: 'Section3Component',
        typeCode: 'MyComponent',
        otherProperties: {
          property1: 'property1Value',
        },
      },
    ],
  };

  let updatedCmsStructureModel: CmsStructureModel;

  beforeEach(() => {
    const fsEditingOverlayWrapper = new FsCmsPageComponentInjector(FsEditingOverlayComponent.TYPE_CODE);
    updatedCmsStructureModel = fsEditingOverlayWrapper.addCmsPageComponents(occCmsStructureModel, ['Section1']);
  });

  it('should adopt general page properties', () => {
    expect(updatedCmsStructureModel.page.template).toEqual('LandingPage2Template');
  });

  it('should add the overlay slot component, if appropriate', () => {
    expect(updatedCmsStructureModel.page.slots.Section1.components).toEqual([
      {
        uid: 'FsEditingOverlay_Section1',
        typeCode: 'FsEditingOverlay',
        flexType: 'FsEditingOverlay',
      } as ContentSlotData,
    ]);
  });

  it('should add the overlay page component, if appropriate', () => {
    expect(updatedCmsStructureModel.components).toContain({
      uid: 'FsEditingOverlay_Section1',
      typeCode: 'FsEditingOverlay',
      name: 'FsEditingOverlay_Section1',
      components: 'Section1Component1',
      slotName: 'Section1',
    } as FsEditingOverlay);
  });

  it('should keep the original slot component, if appropriate', () => {
    expect(updatedCmsStructureModel.page.slots.Section2.components).toEqual([
      {
        uid: 'Section2Component',
        flexType: 'MyComponent',
        typeCode: 'MyComponent',
        properties: {
          property1: 'property1Value',
        },
      },
    ]);
  });

  it('should keep the original page components', () => {
    expect(updatedCmsStructureModel.components).toContain({
      uid: 'Section1Component1',
      name: 'Section1Component1',
      typeCode: 'MyComponent',
      otherProperties: {
        property1: 'property1Value',
      },
    });

    expect(updatedCmsStructureModel.components).toContain({
      uid: 'Section2Component',
      name: 'Section2Component',
      typeCode: 'MyComponent',
      otherProperties: {
        property1: 'property1Value',
      },
    });

    expect(updatedCmsStructureModel.components).toContain({
      uid: 'Section3Component',
      name: 'Section3Component',
      typeCode: 'MyComponent',
      otherProperties: {
        property1: 'property1Value',
      },
    });
  });

  it('should not alter the original occ cms page', () => {
    expect(occCmsStructureModel).toEqual({
      page: {
        template: 'LandingPage2Template',
        slots: {
          Section1: {
            components: [
              {
                uid: 'Section1Component1',
                flexType: 'MyComponent',
                typeCode: 'MyComponent',
                properties: {
                  property1: 'property1Value',
                },
              },
            ],
          },
          Section2: {
            components: [
              {
                uid: 'Section2Component',
                flexType: 'MyComponent',
                typeCode: 'MyComponent',
                properties: {
                  property1: 'property1Value',
                },
              },
            ],
          },
          Section3: {
            components: [
              {
                uid: 'Section3Component',
                flexType: 'MyComponent',
                typeCode: 'MyComponent',
                properties: {
                  property1: 'property1Value',
                },
              },
            ],
          },
        },
      },
      components: [
        {
          uid: 'Section1Component1',
          name: 'Section1Component1',
          typeCode: 'MyComponent',
          otherProperties: {
            property1: 'property1Value',
          },
        },
        {
          uid: 'Section2Component',
          name: 'Section2Component',
          typeCode: 'MyComponent',
          otherProperties: {
            property1: 'property1Value',
          },
        },
        {
          uid: 'Section3Component',
          name: 'Section3Component',
          typeCode: 'MyComponent',
          otherProperties: {
            property1: 'property1Value',
          },
        },
      ],
    });
  });

  it('should handle null input page', () => {
    const injector = new FsCmsPageComponentInjector(FsEditingOverlayComponent.TYPE_CODE);
    const updatedPage = injector.addCmsPageComponents(null, ['Section1']);
    expect(updatedPage).toBeNull();
  });
});
