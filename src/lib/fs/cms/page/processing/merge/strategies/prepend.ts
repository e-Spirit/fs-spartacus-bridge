import { ContentSlotData } from '@spartacus/core';
import { InjectionToken, Injectable } from '@angular/core';
import { merge } from 'immutable';
import { MergeStrategy } from 'fs-spartacus-common';
/**
 * The InjectionToken for the "Prepend" {@link MergeStrategy}.
 */
export const PREPEND = new InjectionToken<MergeStrategy<ContentSlotData>>('PrependMergeStrategy');

/**
 * This merge strategy appends the content of one slot before the content of another slot.
 */
@Injectable()
export class Prepend implements MergeStrategy<ContentSlotData> {
  /**
   * This class applies the merge by prepending the contents of the second slot to the first slot.
   *
   * @param {ContentSlotData} aContentSlot First content slot to prepend to.
   * @param {ContentSlotData} anotherContentSlot Second content slot to be prepended.
   * @return {ContentSlotData} The merged content slot data.
   * @memberof Prepend
   */
  merge(aContentSlot: ContentSlotData, anotherContentSlot: ContentSlotData): ContentSlotData {
    return {
      components: merge(anotherContentSlot.components || [], aContentSlot.components || []),
      properties: merge(aContentSlot.properties || {}, anotherContentSlot.properties || {}),
    };
  }
}
