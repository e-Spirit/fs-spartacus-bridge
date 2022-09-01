import { Prepend } from './prepend';
import { ContentSlotData } from '@spartacus/core';

describe('Prepend', () => {
  let aContentSlot: ContentSlotData;
  let anotherContentSlot: ContentSlotData;

  beforeEach(() => {
    aContentSlot = {
      components: [{ uid: 'aComponent1', flexType: 'aFlexType1' }],
      properties: { prop1: 'aProp1Value' },
    };

    anotherContentSlot = {
      components: [{ uid: 'anotherComponent1', flexType: 'anotherFlexType1' }],
      properties: { prop2: 'anotherProp2Value' },
    };
  });

  it('should merge components and properties', () => {
    const prepender = new Prepend();
    const mergedSlotData = prepender.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual({
      components: [
        { uid: 'anotherComponent1', flexType: 'anotherFlexType1' },
        { uid: 'aComponent1', flexType: 'aFlexType1' },
      ],
      properties: { prop2: 'anotherProp2Value', prop1: 'aProp1Value' },
    });

    // The original slots must not have been altered.
    expect(aContentSlot).toEqual({
      components: [{ uid: 'aComponent1', flexType: 'aFlexType1' }],
      properties: { prop1: 'aProp1Value' },
    });
    expect(anotherContentSlot).toEqual({
      components: [{ uid: 'anotherComponent1', flexType: 'anotherFlexType1' }],
      properties: { prop2: 'anotherProp2Value' },
    });
  });

  it('should override equal properties', () => {
    const prepender = new Prepend();
    anotherContentSlot.properties.prop1 = 'prop1.1Value';

    const mergedSlotData = prepender.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual({
      components: [
        { uid: 'anotherComponent1', flexType: 'anotherFlexType1' },
        { uid: 'aComponent1', flexType: 'aFlexType1' },
      ],
      properties: {
        prop2: 'anotherProp2Value',
        prop1: 'prop1.1Value',
      },
    });
  });

  it('should handle an undefined components array in the first slot', () => {
    const prepender = new Prepend();
    aContentSlot.components = undefined;

    const mergedSlotData = prepender.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual({
      components: [{ uid: 'anotherComponent1', flexType: 'anotherFlexType1' }],
      properties: {
        prop2: 'anotherProp2Value',
        prop1: 'aProp1Value',
      },
    });
  });

  it('should handle an undefined components array in the second slot', () => {
    const prepender = new Prepend();
    anotherContentSlot.components = undefined;

    const mergedSlotData = prepender.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual({
      components: [{ uid: 'aComponent1', flexType: 'aFlexType1' }],
      properties: {
        prop2: 'anotherProp2Value',
        prop1: 'aProp1Value',
      },
    });
  });

  it('should handle an undefined properties object in the first slot', () => {
    const prepender = new Prepend();
    aContentSlot.properties = undefined;

    const mergedSlotData = prepender.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual({
      components: [
        { uid: 'anotherComponent1', flexType: 'anotherFlexType1' },
        { uid: 'aComponent1', flexType: 'aFlexType1' },
      ],
      properties: {
        prop2: 'anotherProp2Value',
      },
    });
  });

  it('should handle an undefined components array in the second slot', () => {
    const prepender = new Prepend();
    anotherContentSlot.properties = undefined;

    const mergedSlotData = prepender.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual({
      components: [
        { uid: 'anotherComponent1', flexType: 'anotherFlexType1' },
        { uid: 'aComponent1', flexType: 'aFlexType1' },
      ],
      properties: {
        prop1: 'aProp1Value',
      },
    });
  });
});
