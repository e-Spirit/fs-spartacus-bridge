import { CmsStructureModel, ContentSlotComponentData, ContentSlotData, CmsComponent } from '@spartacus/core';
import { merge, setIn } from 'immutable';

/**
 * This injector handles the adding of the FirstSpirit components to the configured slots.
 *
 * @export
 * @class FsCmsPageComponentInjector
 */
export class FsCmsPageComponentInjector {
  constructor(private typeCode: string) {}

  /**
   * This method adds the FirstSpirit components to the provided cms page and slots list.
   *
   * @param {CmsStructureModel} cmsPage The page to which the components will be added.
   * @param {string[]} slots The array of slots to which the components will be added.
   * @return {CmsStructureModel} The merged page.
   * @memberof FsCmsPageComponentInjector
   */
  addCmsPageComponents(cmsPage: CmsStructureModel, slots: string[]): CmsStructureModel {
    if (cmsPage) {
      const adaptedSlots = this.adaptSlots(cmsPage, slots);
      const adaptedPageComponents = this.adaptPageComponents(cmsPage, slots);

      return merge(cmsPage, {
        page: setIn(cmsPage.page, ['slots'], adaptedSlots),
        components: adaptedPageComponents,
      } as CmsStructureModel);
    } else {
      return cmsPage;
    }
  }

  private adaptSlots(cmsStructureModel: CmsStructureModel, slots: string[]) {
    const updatedSlots = this.addSlotComponents(cmsStructureModel, slots);
    return merge(cmsStructureModel.page.slots, updatedSlots);
  }

  private adaptPageComponents(cmsStructureModel: CmsStructureModel, relevantSlots: string[]) {
    const updatedPageComponents = this.getFsPageComponents(cmsStructureModel, relevantSlots);
    return merge(cmsStructureModel.components || [], updatedPageComponents);
  }

  private addSlotComponents(cmsStructureModel: CmsStructureModel, slots: string[]) {
    return slots
      .map((slotName) => {
        const fsEditingAreaSlotComponent = this.createSlotComponentData(slotName);
        const updatedSlot = this.addContentSlotComponent(cmsStructureModel.page.slots[slotName], fsEditingAreaSlotComponent);
        return this.createEmptyObjectWithProperty(slotName, updatedSlot);
      })
      .reduce((accumulatedSlotsProperties, slotProperty) => Object.assign(accumulatedSlotsProperties, slotProperty), {});
  }

  private createSlotComponentData(slotName: string) {
    return {
      uid: this.createFsComponentUid(slotName),
      typeCode: this.typeCode,
      flexType: this.typeCode,
    };
  }

  private createFsComponentUid(slotName: string) {
    return `${this.typeCode}_${slotName}`;
  }

  private addContentSlotComponent(slot: ContentSlotData, component: ContentSlotComponentData) {
    return merge(slot || { components: [] }, {
      components: [component],
    } as ContentSlotData);
  }

  private createEmptyObjectWithProperty<T>(propertyName: string, propertyValue: T): { [key: string]: T } {
    const object = {};
    object[propertyName] = propertyValue;
    return object;
  }

  private getFsPageComponents(cmsStructureModel: CmsStructureModel, firstSpiritManagedSlot: string[]): CmsComponent[] {
    return firstSpiritManagedSlot.map((slot) => {
      const componentUid = this.createFsComponentUid(slot);
      const slotData = cmsStructureModel.page.slots[slot] || { components: [] };
      return {
        typeCode: this.typeCode,
        uid: componentUid,
        name: componentUid,
        components: this.joinComponentUids(slotData.components),
        slotName: slot,
      };
    });
  }

  private joinComponentUids(data: ContentSlotComponentData[]) {
    return data ? data.map((comp) => comp.uid).join(',') : '';
  }
}
