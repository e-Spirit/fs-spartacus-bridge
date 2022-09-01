import { CmsStructureModel, ContentSlotData } from '@spartacus/core';

/**
 * This function gets the ContentSlotData for a given page and the content slot name while ignoring its case.
 *
 * @param cmsPage The page from which the date will be retrieved.
 * @param slotName The name of the slot which will be retrieved.
 */
export function getSlotIgnoreCase(cmsPage: CmsStructureModel, slotName: string): ContentSlotData | undefined {
  if (cmsPage && cmsPage.page && cmsPage.page.slots) {
    const matchingKeys = Object.keys(cmsPage.page.slots).filter((key) => key.toLocaleLowerCase() === slotName.toLocaleLowerCase());
    return matchingKeys.length > 0 ? getSlot(cmsPage, matchingKeys[0]) : undefined;
  }
  return undefined;
}

/**
 * This function gets the ContentSlotData for a given page and content slot name.
 *
 * @param cmsPage The page from which the data will be retrieved.
 * @param slotName The name of the slot which will be retrieved.
 */
export function getSlot(cmsPage: CmsStructureModel, slotName: string): ContentSlotData | undefined {
  if (cmsPage && cmsPage.page && cmsPage.page.slots) {
    return cmsPage.page.slots[slotName];
  }
  return undefined;
}
