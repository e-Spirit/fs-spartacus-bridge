import { ContentSlotData } from '@spartacus/core';
import { InjectionToken, Injectable } from '@angular/core';
import { merge } from 'immutable';
import { MergeStrategy } from 'fs-spartacus-common';

/**
 * The InjectionToken for the "Append" {@link MergeStrategy}.
 */
export const APPEND = new InjectionToken<MergeStrategy<ContentSlotData>>('AppendMergeStrategy');

/**
 * This merge strategy appends the content of one slot after the content of another slot.
 */
@Injectable()
export class Append implements MergeStrategy<ContentSlotData> {
  /**
   * This class applies the merge by appending the contents of the second slot to the first slot.
   *
   * @param {ContentSlotData} aContentSlot First content slot to append to.
   * @param {ContentSlotData} anotherContentSlot Second content slot to be appended.
   * @return {ContentSlotData} The merged content slot data.
   * @memberof Append
   */
  merge(aContentSlot: ContentSlotData, anotherContentSlot: ContentSlotData): ContentSlotData {
    return {
      components: merge(aContentSlot.components || [], anotherContentSlot.components || []),
      properties: merge(aContentSlot.properties || {}, anotherContentSlot.properties || {}),
    };
  }
}
