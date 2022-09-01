import { Append } from './append';
import { ContentSlotData } from '@spartacus/core';

describe('Append', () => {
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
    const appender = new Append();
    const mergedSlotData = appender.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual({
      components: [
        { uid: 'aComponent1', flexType: 'aFlexType1' },
        { uid: 'anotherComponent1', flexType: 'anotherFlexType1' },
      ],
      properties: { prop1: 'aProp1Value', prop2: 'anotherProp2Value' },
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
    const appender = new Append();
    anotherContentSlot.properties.prop1 = 'prop1.1Value';

    const mergedSlotData = appender.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual({
      components: [
        { uid: 'aComponent1', flexType: 'aFlexType1' },
        { uid: 'anotherComponent1', flexType: 'anotherFlexType1' },
      ],
      properties: {
        prop1: 'prop1.1Value',
        prop2: 'anotherProp2Value',
      },
    });
  });

  it('should handle an undefined components array in the first slot', () => {
    const appender = new Append();
    aContentSlot.components = undefined;

    const mergedSlotData = appender.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual({
      components: [{ uid: 'anotherComponent1', flexType: 'anotherFlexType1' }],
      properties: {
        prop1: 'aProp1Value',
        prop2: 'anotherProp2Value',
      },
    });
  });

  it('should handle an undefined components array in the second slot', () => {
    const appender = new Append();
    anotherContentSlot.components = undefined;

    const mergedSlotData = appender.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual({
      components: [{ uid: 'aComponent1', flexType: 'aFlexType1' }],
      properties: {
        prop1: 'aProp1Value',
        prop2: 'anotherProp2Value',
      },
    });
  });

  it('should handle an undefined properties object in the first slot', () => {
    const appender = new Append();
    aContentSlot.properties = undefined;

    const mergedSlotData = appender.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual({
      components: [
        { uid: 'aComponent1', flexType: 'aFlexType1' },
        { uid: 'anotherComponent1', flexType: 'anotherFlexType1' },
      ],
      properties: {
        prop2: 'anotherProp2Value',
      },
    });
  });

  it('should handle an undefined components array in the second slot', () => {
    const appender = new Append();
    anotherContentSlot.properties = undefined;

    const mergedSlotData = appender.merge(aContentSlot, anotherContentSlot);
    expect(mergedSlotData).toEqual({
      components: [
        { uid: 'aComponent1', flexType: 'aFlexType1' },
        { uid: 'anotherComponent1', flexType: 'anotherFlexType1' },
      ],
      properties: {
        prop1: 'aProp1Value',
      },
    });
  });
});
