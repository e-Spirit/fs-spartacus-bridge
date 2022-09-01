import { MapLike } from '../../../../../../types';
import { CmsStructureModel, ContentSlotData, Page, CmsComponent } from '@spartacus/core';
import { merge, Seq } from 'immutable';
import { Injector } from '@angular/core';
import { FirstSpiritManagedPage, FirstSpiritManagedSlot, MergeStrategy, nullSafe, toMap, uniquify, arrayify } from 'fs-spartacus-common';
import { REPLACE } from './strategies';

/**
 * This class merges the FirstSpirit CMS structure with the SAP Commerce CMS structure.
 *
 * @export
 * @class CmsStructureModelMerger
 */
export class CmsStructureModelMerger {
  private fsMangedSlotsMergeConfig: Map<string, FirstSpiritManagedSlot>;

  constructor(private firstSpiritManagedPage: FirstSpiritManagedPage, private injector: Injector) {
    this.fsMangedSlotsMergeConfig = toMap(this.firstSpiritManagedPage.slots, (slot) => slot.name);
  }

  /**
   * This method merges the two given CmsStructureModels on the basis of the merge configuration and throws an error if both parameters are invalid.
   * If the given FirstSpirit model is invalid the method returns the SAP model as is.
   *
   * @param {CmsStructureModel} occStructureModel The SAP Commerce CmsStructureModel to be merged.
   * @param {CmsStructureModel} fsStructureModel The FirstSpirit CmsStructureModel to be merged.
   * @return {CmsStructureModel} The merged page structure.
   * @memberof CmsStructureModelMerger
   */
  merge(occStructureModel: CmsStructureModel, fsStructureModel: CmsStructureModel): CmsStructureModel {
    const occPageExists = this.pageExists(occStructureModel);
    const fsPageExists = this.pageExists(fsStructureModel);
    if (!occPageExists && !fsPageExists) {
      throw new Error('At least one given CmsStructureModel must not be null to perform merging.');
    }

    if (occPageExists && !fsPageExists) {
      return occStructureModel;
    }

    const occSlots: MapLike<ContentSlotData> = occPageExists ? this.getSlots(occStructureModel) : {};
    const fsSlots: MapLike<ContentSlotData> = fsPageExists
      ? Seq(this.getSlots(fsStructureModel))
          .filter((slotData, slotName) => this.isFsManagedPage(slotName))
          .mapKeys((slotName) => this.getFsSlotNameIgnoreCase(slotName))
          .filter(Boolean)
          .toObject()
      : {};

    const occPage = this.getStructureModelNullSafe(occStructureModel);
    const fsPage = this.getStructureModelNullSafe(fsStructureModel);

    const { loadTime: fsPageLoadTime, slots: fsPageSlots, properties: fsPageProperties, ...otherFsPageProperties } = fsPage.page;

    const slots = this.mergePageSlots(occSlots, fsSlots);
    const loadTime = this.getPageLoadTime(fsPage) || this.getPageLoadTime(occPage);
    const properties = this.mergePageProperties(occPage, fsPage);
    const page = merge({ ...otherFsPageProperties } as Page, occPage.page, { loadTime, slots, properties } as Page);
    const components = this.getComponents(...arrayify(occPage.components), ...arrayify(fsPage.components));
    return merge(occPage, { page, components } as CmsStructureModel);
  }

  private mergePageSlots(occSlots: MapLike<ContentSlotData>, fsSlots: MapLike<ContentSlotData>): MapLike<ContentSlotData> {
    const occSlotNames = Object.keys(occSlots);
    const fsSlotNames = Object.keys(fsSlots);
    const allSlotNames = uniquify([...occSlotNames, ...fsSlotNames]);
    const result: MapLike<ContentSlotData> = {};

    allSlotNames.forEach((slotName) => {
      const slotExistsInOcc = occSlotNames.includes(slotName);
      const slotExistsInFs = fsSlotNames.includes(slotName);
      if (!slotExistsInOcc && slotExistsInFs) {
        result[slotName] = fsSlots[slotName];
      } else if (slotExistsInOcc && !slotExistsInFs) {
        result[slotName] = occSlots[slotName];
      } else if (slotExistsInOcc && slotExistsInFs) {
        const mergeConfiguration = this.findMergeConfiguration(slotName);
        const mergeStrategy = mergeConfiguration && this.findMergeStrategy(mergeConfiguration);
        if (mergeConfiguration && mergeStrategy) {
          result[slotName] = mergeStrategy.merge(occSlots[slotName], fsSlots[slotName]);
        } else {
          result[slotName] = occSlots[slotName];
        }
      } else {
        // This should never happen because we iterate over a list of merged slots from both worlds
        throw new Error(`At least one given ContentSlotData must not be null to perform merging. Current slot: '${slotName}'`);
      }
    });

    return result;
  }

  private getStructureModelNullSafe(cmsPage: CmsStructureModel | null | undefined): CmsStructureModel {
    if (this.pageExists(cmsPage)) {
      return cmsPage;
    }
    return merge(cmsPage || {}, { page: { slots: {} }, components: [] });
  }

  private isFsManagedPage(slotName: string): boolean {
    return !!this.getFsSlotNameIgnoreCase(slotName);
  }

  private pageExists(cmsPage: CmsStructureModel | undefined | null): boolean {
    return !!(cmsPage && cmsPage.page && cmsPage.page.slots);
  }

  private getComponents(...components: CmsComponent[]): CmsComponent[] {
    return merge(components.filter(Boolean));
  }

  private getFsSlotNameIgnoreCase(slotName: string): string | undefined {
    if (slotName) {
      if (this.fsMangedSlotsMergeConfig.has(slotName)) {
        return slotName;
      }
      // Reference names are in lower case in FirstSpirit, so we must first find the correct spelling from the configuration
      const fsConfig = Seq(this.fsMangedSlotsMergeConfig.keys()).find((key) => key?.toLocaleLowerCase() === slotName.toLocaleLowerCase());
      const slotConfig = this.fsMangedSlotsMergeConfig.get(fsConfig);
      return slotConfig?.name;
    }
  }

  private getSlots(cmsPage: CmsStructureModel): MapLike<ContentSlotData> {
    return (cmsPage && cmsPage.page && cmsPage.page.slots) || {};
  }

  private findMergeConfiguration(slotName: string | null | undefined): FirstSpiritManagedSlot | undefined {
    return this.fsMangedSlotsMergeConfig.get(slotName);
  }

  private findMergeStrategy(slotMergeConfig: FirstSpiritManagedSlot | undefined): MergeStrategy<ContentSlotData> | undefined {
    return slotMergeConfig ? this.injector.get<MergeStrategy<ContentSlotData>>(slotMergeConfig.mergeStrategy || REPLACE) : undefined;
  }

  private getPageLoadTime(cmsPage: CmsStructureModel | undefined | null): number | undefined {
    return cmsPage && cmsPage.page && cmsPage.page.loadTime;
  }

  private mergePageProperties(occPage: CmsStructureModel, fsPage: CmsStructureModel) {
    return merge(this.getPagePropertiesNullSafe(occPage.page), this.getPagePropertiesNullSafe(fsPage.page));
  }

  private getPagePropertiesNullSafe(page: Page) {
    return nullSafe(nullSafe(page, {}).properties, {});
  }
}
