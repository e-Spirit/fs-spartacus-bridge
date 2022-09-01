import { ContentSlotData } from '@spartacus/core';
import { Replace } from './replace';

describe('Replace', () => {
  it('should replace the first slot with the second', () => {
    const replace = new Replace();
    const aContentSlot: ContentSlotData = {
      components: [{ uid: 'aComponent1', flexType: 'aFlexType1' }],
      properties: { prop1: 'prop1Value' },
    };
    const anotherContentSlot: ContentSlotData = {
      components: [{ uid: 'anotherComponent1', flexType: 'anotherFlexType1' }],
      properties: { prop2: 'prop2Value' },
    };
    const mergedSlotData = replace.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual(anotherContentSlot);

    // The original slots must not have been altered.
    expect(aContentSlot).toEqual({
      components: [{ uid: 'aComponent1', flexType: 'aFlexType1' }],
      properties: { prop1: 'prop1Value' },
    });
    expect(anotherContentSlot).toEqual({
      components: [{ uid: 'anotherComponent1', flexType: 'anotherFlexType1' }],
      properties: { prop2: 'prop2Value' },
    });
  });

  it('should always replace the OCC slot with the FS slot and return the FS slot, even if the slot has no content', () => {
    const replace = new Replace();
    const occSlot: ContentSlotData = {
      components: [{ uid: 'aComponent1', flexType: 'aFlexType1' }],
      properties: { prop1: 'prop1Value' },
    };

    const fsSlot: ContentSlotData = { components: [] };
    const mergedSlot = replace.merge(occSlot, fsSlot);
    expect(mergedSlot).toEqual(fsSlot);
  });
});
