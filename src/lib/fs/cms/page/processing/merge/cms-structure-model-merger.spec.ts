import { Injector } from '@angular/core';
import { CmsStructureModel } from '@spartacus/core';
import { CmsStructureModelMerger } from './cms-structure-model-merger';
import { Append, APPEND, Replace, REPLACE } from './strategies';
import { FirstSpiritManagedPage } from 'fs-spartacus-common';

class MockInjector extends Injector {
  get(token: any, notFoundValue?: any): any {
    switch (token) {
      case APPEND: {
        return new Append();
      }
      case REPLACE:
        return new Replace();
    }
  }
}

describe('FsCmsPageMerger', () => {
  let mergedCmsPage: CmsStructureModel;
  let fsManagedPage: FirstSpiritManagedPage;
  let occCmsPage: CmsStructureModel;
  let fsCmsPage: CmsStructureModel;
  let fsCmsPageMerger: CmsStructureModelMerger;

  beforeEach(() => {
    fsManagedPage = FirstSpiritManagedPage.enhanceSapPages('myTemplate', [
      { name: 'Slot1', mergeStrategy: REPLACE },
      { name: 'Slot3', mergeStrategy: APPEND },
      { name: 'CaaSOnlySlot', mergeStrategy: APPEND },
      { name: 'OrphanSlot', mergeStrategy: APPEND },
      { name: 'FsManagedOccOnlySlot', mergeStrategy: REPLACE },
      { name: 'DefaultMergeStrategySlot' },
    ]);

    occCmsPage = {
      page: {
        template: 'myTemplate',
        slots: {
          Slot1: {
            components: [{ uid: 'slot1Component1' }, { uid: 'slot1Component2' }],
          },
          Slot2: {
            components: [{ uid: 'slot2Component1' }],
          },
          Slot3: {
            components: [{ uid: 'Slot3Component1' }],
          },
          DefaultMergeStrategySlot: {
            components: [{ uid: 'DefaultMergeStrategySlotComponent1' }],
          },
          OccOnlySlot: {
            components: [{ uid: 'OccOnlySlotComponent1' }],
          },
          FsManagedOccOnlySlot: {
            components: [{ uid: 'FsManagedOccOnlySlotComponent1' }],
          },
        },
        properties: {
          occOnlyProperty: 'myOccOnlyProperty',
          commonProperty: 'myCommonPropertyOcc',
        },
      },
      components: [
        { uid: 'slot1Component1' },
        { uid: 'slot1Component2' },
        { uid: 'slot2Component1' },
        { uid: 'Slot3Component1' },
        { uid: 'DefaultMergeStrategySlotComponent1' },
      ],
    };

    fsCmsPage = {
      page: {
        template: 'myTemplate',
        loadTime: 1583402860713,
        slots: {
          slot1: {
            components: [{ uid: 'muchBetterSlot1Component1' }, { uid: 'muchBetterSlot1Component2' }],
          },
          slot2: {
            components: [{ uid: 'muchBetterSlot2Component1' }],
          },
          slot3: {
            components: [{ uid: 'muchBetterSlot3Component1' }],
          },
          defaultmergestrategyslot: {
            components: [{ uid: 'muchBetterDefaultMergeStrategySlotComponent1' }],
          },
          caasOnlySlot: {
            components: [{ uid: 'caasOnlySlotComponent' }],
          },
          thirdPartySlot: {
            components: [{ uid: 'thirdPartySlotComponent' }],
          },
        },
        properties: {
          fsOnlyProperty: 'myFsOnlyProperty',
          commonProperty: 'myCommonPropertyFs',
        },
      },
      components: [
        { uid: 'muchBetterSlot1Component1' },
        { uid: 'muchBetterSlot1Component2' },
        { uid: 'muchBetterSlot2Component1' },
        { uid: 'muchBetterSlot3Component1' },
        { uid: 'caasOnlySlotComponent' },
        { uid: 'muchBetterDefaultMergeStrategySlotComponent1' },
      ],
    };

    fsCmsPageMerger = new CmsStructureModelMerger(fsManagedPage, new MockInjector());
    mergedCmsPage = fsCmsPageMerger.merge(occCmsPage, fsCmsPage);
  });

  it('should handle occ page found[ ], fs page found [ ] => by throwing an error', () => {
    expect(() => fsCmsPageMerger.merge(null, null)).toThrow(
      new Error('At least one given CmsStructureModel must not be null to perform merging.')
    );
  });

  describe('should merge equally named slots, ignoring case of the fs slot', () => {
    it('if occ page not found', () => {
      const mergeResult = fsCmsPageMerger.merge({}, fsCmsPage);
      expect(mergeResult).toEqual({
        page: {
          template: 'myTemplate',
          loadTime: 1583402860713,
          slots: {
            Slot1: {
              components: [{ uid: 'muchBetterSlot1Component1' }, { uid: 'muchBetterSlot1Component2' }],
            },
            Slot3: {
              components: [{ uid: 'muchBetterSlot3Component1' }],
            },
            CaaSOnlySlot: {
              components: [{ uid: 'caasOnlySlotComponent' }],
            },
            DefaultMergeStrategySlot: {
              components: [{ uid: 'muchBetterDefaultMergeStrategySlotComponent1' }],
            },
          },
          properties: {
            fsOnlyProperty: 'myFsOnlyProperty',
            commonProperty: 'myCommonPropertyFs',
          },
        },
        components: [
          { uid: 'muchBetterSlot1Component1' },
          { uid: 'muchBetterSlot1Component2' },
          { uid: 'muchBetterSlot2Component1' },
          { uid: 'muchBetterSlot3Component1' },
          { uid: 'caasOnlySlotComponent' },
          { uid: 'muchBetterDefaultMergeStrategySlotComponent1' },
        ],
      } as CmsStructureModel);
    });

    it('if both pages are found', () => {
      // In Spartacus, Sections are written with a capital letter
      // Bodies are always lower case in FS
      expect(mergedCmsPage.page.slots.Slot1).toEqual({
        components: [{ uid: 'muchBetterSlot1Component1' }, { uid: 'muchBetterSlot1Component2' }],
      });

      expect(mergedCmsPage.page.slots.Slot3).toEqual({
        components: [{ uid: 'Slot3Component1' }, { uid: 'muchBetterSlot3Component1' }],
        properties: {}, // The APPEND strategy always creates this property.
      });
    });
  });

  describe('should merge page properties', () => {
    it('if fs page not found', () => {
      const mergeResult = fsCmsPageMerger.merge(occCmsPage, {});
      expect(mergeResult.page.properties).toEqual({
        occOnlyProperty: 'myOccOnlyProperty',
        commonProperty: 'myCommonPropertyOcc',
      });
    });

    it('if occ page not found', () => {
      const mergeResult = fsCmsPageMerger.merge({}, fsCmsPage);
      expect(mergeResult.page.properties).toEqual({
        fsOnlyProperty: 'myFsOnlyProperty',
        commonProperty: 'myCommonPropertyFs',
      });
    });

    it('if neither page has page properties', () => {
      const mergeResult = fsCmsPageMerger.merge({ page: { slots: {} } }, { page: { slots: {} } });
      expect(mergeResult.page.properties).toEqual({});
    });

    it('if occ page has no page properties', () => {
      const mergeResult = fsCmsPageMerger.merge({ page: { slots: {} } }, fsCmsPage);
      expect(mergeResult.page.properties).toEqual({
        fsOnlyProperty: 'myFsOnlyProperty',
        commonProperty: 'myCommonPropertyFs',
      });
    });

    it('if fs page has no page properties', () => {
      const mergeResult = fsCmsPageMerger.merge(occCmsPage, { page: { slots: {} } });
      expect(mergeResult.page.properties).toEqual({
        occOnlyProperty: 'myOccOnlyProperty',
        commonProperty: 'myCommonPropertyOcc',
      });
    });

    it('if both pages have page properties', () => {
      expect(mergedCmsPage.page.properties).toEqual({
        occOnlyProperty: 'myOccOnlyProperty',
        fsOnlyProperty: 'myFsOnlyProperty',
        commonProperty: 'myCommonPropertyFs',
      });
    });
  });

  it('should handle occ page found[ ], fs page found [x] => by returning the fs page cleaned by all slots that are not managed by fs', () => {
    mergedCmsPage = fsCmsPageMerger.merge(null, fsCmsPage);
    expect(mergedCmsPage).toEqual({
      page: {
        template: 'myTemplate',
        loadTime: 1583402860713,
        slots: {
          Slot1: {
            // Slot names need to equal the ones in the configuration
            components: [{ uid: 'muchBetterSlot1Component1' }, { uid: 'muchBetterSlot1Component2' }],
          },
          Slot3: {
            components: [{ uid: 'muchBetterSlot3Component1' }],
          },
          CaaSOnlySlot: {
            components: [{ uid: 'caasOnlySlotComponent' }],
          },
          DefaultMergeStrategySlot: {
            components: [{ uid: 'muchBetterDefaultMergeStrategySlotComponent1' }],
          },
        },
        properties: {
          fsOnlyProperty: 'myFsOnlyProperty',
          commonProperty: 'myCommonPropertyFs',
        },
      },
      components: [
        { uid: 'muchBetterSlot1Component1' },
        { uid: 'muchBetterSlot1Component2' },
        { uid: 'muchBetterSlot2Component1' }, // TODO It is redundant, but does not harm. Remove?
        { uid: 'muchBetterSlot3Component1' },
        { uid: 'caasOnlySlotComponent' },
        { uid: 'muchBetterDefaultMergeStrategySlotComponent1' },
      ],
    });
  });

  it('should handle occ page found[x], fs page found [ ] => by returning the occ page as is', () => {
    mergedCmsPage = fsCmsPageMerger.merge(occCmsPage, null);
    expect(mergedCmsPage).toEqual(occCmsPage);
  });

  it('should handle slot in occ[], slot in fs [], slot configured as managed by fs[x] => by ignoring it', () => {
    expect(mergedCmsPage.page.slots.hasOwnProperty('OrphanSlot')).toBeFalsy();
  });

  it('should handle slot in occ[], slot in fs [x], slot configured as managed by fs[ ] => by excluding it', () => {
    expect(mergedCmsPage.page.slots.hasOwnProperty('thirdPartySlot')).toBeFalsy();
  });

  it('should handle slot in occ[], slot in fs [x], slot configured as managed by fs[x] => by adopting it', () => {
    expect(mergedCmsPage.page.slots.CaaSOnlySlot).toEqual({
      components: [{ uid: 'caasOnlySlotComponent' }],
    });
  });

  it('should handle slot in occ[x], slot in fs [ ], slot configured as managed by fs[ ] => by adopting it', () => {
    expect(mergedCmsPage.page.slots.OccOnlySlot).toEqual({
      components: [{ uid: 'OccOnlySlotComponent1' }],
    });
  });

  it('should handle slot in occ[x], slot in fs [ ], slot configured as managed by fs[x] => by adopting it', () => {
    expect(mergedCmsPage.page.slots.FsManagedOccOnlySlot).toEqual({
      components: [{ uid: 'FsManagedOccOnlySlotComponent1' }],
    });
  });

  it('should handle slot in occ[x], slot in fs [x], slot configured as managed by fs[ ] => by adopting the occ slot', () => {
    expect(mergedCmsPage.page.slots.Slot2).toEqual({
      components: [{ uid: 'slot2Component1' }],
    });
  });

  it('should handle slot in occ[x], slot in fs [x], slot configured as managed by fs[x] => by applying the right merge strategy', () => {
    // In Spartacus, Sections are written with a capital letter
    // Bodies are always lower case in FS
    expect(mergedCmsPage.page.slots.Slot1).toEqual({
      components: [{ uid: 'muchBetterSlot1Component1' }, { uid: 'muchBetterSlot1Component2' }],
    });

    expect(mergedCmsPage.page.slots.Slot3).toEqual({
      components: [{ uid: 'Slot3Component1' }, { uid: 'muchBetterSlot3Component1' }],
      properties: {}, // The APPEND strategy always creates this property.
    });
  });

  describe('should concat the top level components', () => {
    it('if neither page has components', () => {
      const mergeResult = fsCmsPageMerger.merge({ page: { slots: {} } }, { page: { slots: {} } });
      expect(mergeResult.components).toEqual([]);
    });

    it('if occ page has no components', () => {
      const mergeResult = fsCmsPageMerger.merge({ page: { slots: {} } }, fsCmsPage);
      expect(mergeResult.components).toEqual([
        { uid: 'muchBetterSlot1Component1' },
        { uid: 'muchBetterSlot1Component2' },
        { uid: 'muchBetterSlot2Component1' },
        { uid: 'muchBetterSlot3Component1' },
        { uid: 'caasOnlySlotComponent' },
        { uid: 'muchBetterDefaultMergeStrategySlotComponent1' },
      ]);
    });

    it('if fs page has no components', () => {
      const mergeResult = fsCmsPageMerger.merge(occCmsPage, { page: { slots: {} } });
      expect(mergeResult.components).toEqual([
        { uid: 'slot1Component1' },
        { uid: 'slot1Component2' },
        { uid: 'slot2Component1' },
        { uid: 'Slot3Component1' },
        { uid: 'DefaultMergeStrategySlotComponent1' },
      ]);
    });

    it('if both pages have components', () => {
      expect(mergedCmsPage.components).toEqual([
        { uid: 'slot1Component1' },
        { uid: 'slot1Component2' },
        { uid: 'slot2Component1' },
        { uid: 'Slot3Component1' },
        { uid: 'DefaultMergeStrategySlotComponent1' },
        { uid: 'muchBetterSlot1Component1' },
        { uid: 'muchBetterSlot1Component2' },
        // Although no merge strategy for slot 2 was defined, its components are included in the merged result.
        { uid: 'muchBetterSlot2Component1' },
        { uid: 'muchBetterSlot3Component1' },
        { uid: 'caasOnlySlotComponent' },
        { uid: 'muchBetterDefaultMergeStrategySlotComponent1' },
      ]);
    });
  });

  it('should adopt other page properties', () => {
    expect(mergedCmsPage.page.template).toEqual('myTemplate');
  });
});

describe('should use default merge strategy', () => {
  let mergedCmsPage: CmsStructureModel;
  let fsManagedPage: FirstSpiritManagedPage;
  let occCmsPage: CmsStructureModel;
  let fsCmsPage: CmsStructureModel;
  let fsCmsPageMerger: CmsStructureModelMerger;

  fsManagedPage = FirstSpiritManagedPage.enhanceSapPages('myTemplate', [{ name: 'DefaultMergeStrategySlot' }]);

  occCmsPage = {
    page: {
      template: 'myTemplate',
      slots: {
        DefaultMergeStrategySlot: {
          components: [{ uid: 'DefaultMergeStrategySlotComponent1' }],
        },
      },
    },
    components: [{ uid: 'DefaultMergeStrategySlotComponent1' }],
  };

  fsCmsPage = {
    page: {
      template: 'myTemplate',
      loadTime: 1583402860713,
      slots: {
        defaultmergestrategyslot: {
          components: [{ uid: 'muchBetterDefaultMergeStrategySlotComponent1' }],
        },
      },
    },
    components: [{ uid: 'muchBetterDefaultMergeStrategySlotComponent1' }],
  };

  fsCmsPageMerger = new CmsStructureModelMerger(fsManagedPage, new MockInjector());
  mergedCmsPage = fsCmsPageMerger.merge(occCmsPage, fsCmsPage);

  it('if none is provided', () => {
    expect(mergedCmsPage.page.slots.DefaultMergeStrategySlot).toEqual({
      components: [{ uid: 'muchBetterDefaultMergeStrategySlotComponent1' }],
    });
  });
});
