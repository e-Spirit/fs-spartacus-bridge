import { ContentSlotData } from '@spartacus/core';
import { InjectionToken, Injectable } from '@angular/core';
import { MergeStrategy } from 'fs-spartacus-common';

/**
 * The InjectionToken for the "Replace" {@link MergeStrategy}.
 */
export const REPLACE = new InjectionToken<MergeStrategy<ContentSlotData>>('ReplaceMergeStrategy');

/**
 * This merge strategy replaces the content of one slot with the content of another slot.
 *
 * @export
 * @class Replace
 * @implements {MergeStrategy<ContentSlotData>}
 */
@Injectable()
export class Replace implements MergeStrategy<ContentSlotData> {
  /**
   * This class applies the merge by replacing the contents of the first slot with the contents of the second slot.
   *
   * @param {ContentSlotData} aContentSlot First content slot to be replaced.
   * @param {ContentSlotData} anotherContentSlot Second content slot to replace the first one.
   * @return {ContentSlotData} The merged content slot data.
   * @memberof Append
   */
  merge(aContentSlot: ContentSlotData, anotherContentSlot: ContentSlotData): ContentSlotData {
    return anotherContentSlot;
  }
}
