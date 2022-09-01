import { TestBed } from '@angular/core/testing';
import { CmsStructureModel, ContentSlotComponentData } from '@spartacus/core';

import { FsSpartacusBridgeModule } from '../../../fs-spartacus-bridge.module';
import { FsCmsPageInterface } from './fs-cms-page.interface';
import { FsCmsPageNormalizer } from './fs-cms-page.normalizer';
import { fsCmsPageInterfaceJson } from './fs-cms-page.normalizer.spec.data';

describe('FsCmsPageNormalizer', () => {
  it('should create a non-empty instance of the FsCmsPageNormalizer', () => {
    const pageNormalizer = getPageNormalizer();
    expect(pageNormalizer).toBeDefined();
    expect(pageNormalizer).not.toBeNull();
  });

  const caasResponsesToTest = getCaasResponsesToTest();

  for (const caasResponseToTest of caasResponsesToTest) {
    it('should check the normalizer and check its conversion result against the requirements', () => {
      convertSingleCaasResponseAndCheckTheResult(caasResponseToTest);
    });
  }
});

function convertSingleCaasResponseAndCheckTheResult(caasResponseToTest: FsCmsPageInterface): void {
  expectResponseToBeNotEmpty(caasResponseToTest);

  const actualPageData = convertCaasResponseToPageData(caasResponseToTest);
  const expectedPageData = convertCaasResponseToExpectedPageData(caasResponseToTest);

  expectAllRequiredDataIsSetAndNotEmpty(expectedPageData, actualPageData);
  expectADifferentResultAfterConversion(caasResponseToTest, actualPageData);

  expectActualPageDataToMatchExpectedData(expectedPageData, actualPageData);

  expectAllSlotsToBeDefinedAndNotEmpty(caasResponseToTest, actualPageData);
}

function expectAllRequiredDataIsSetAndNotEmpty(expectedPageData: CmsStructureModel, actualPageData: CmsStructureModel): void {
  expectThePageDataToNotBeNull(actualPageData);
  expectThePageDataToNotBeNull(expectedPageData);
}

function expectAllSlotsToBeDefinedAndNotEmpty(caasResponseToTest: FsCmsPageInterface, actualPageData: CmsStructureModel): void {
  const actualSlotCount = Object.keys(actualPageData.page.slots).length;
  expect(actualSlotCount).toBe(getExpectedPageSlotCount(caasResponseToTest));

  getExpectedPageSlotNames(caasResponseToTest).forEach((pageSlotName) => {
    expect(actualPageData.page.slots[pageSlotName]).toBeDefined();
  });

  const actualSlotComponents: ContentSlotComponentData[] = [];
  Object.values(actualPageData.page.slots).forEach((actualSlot) => actualSlotComponents.push(...actualSlot.components));
  for (const actualSlotComponent of actualSlotComponents) {
    expectSlotComponentToBeDefinedAndNotEmpty(actualSlotComponent, actualPageData);
  }
}

function getPageNormalizer(): FsCmsPageNormalizer {
  const { pageNormalizer } = createTestBed();
  return pageNormalizer;
}

function getCaasResponsesToTest(): FsCmsPageInterface[] {
  return [fsCmsPageInterfaceJson];
}

function createTestBed() {
  TestBed.configureTestingModule({
    imports: [FsSpartacusBridgeModule],
  });

  const pageNormalizer: FsCmsPageNormalizer = TestBed.inject(FsCmsPageNormalizer);
  return { pageNormalizer };
}

function convertCaasResponseToExpectedPageData(sourceData: FsCmsPageInterface): CmsStructureModel {
  return {
    page: {
      name: sourceData.name,
      type: sourceData.fsType,
      pageId: sourceData.uid,
      template: typeof sourceData.page.template === 'string' ? sourceData.page.template : sourceData.page.template.uid,
      slots: {},
      properties: {
        previewId: '87a71729-e581-49e2-a785-4c95545cbe65.de_DE',
        ...{
          formData: sourceData.page.formData != null ? sourceData.page.formData : undefined,
          metaFormData: sourceData.page.metaFormData != null ? sourceData.page.metaFormData : undefined,
        },
      },
    },
  };
}

function getExpectedPageSlotCount(caasResponseToTest: FsCmsPageInterface): number {
  return caasResponseToTest.page.children.length;
}

function getExpectedPageSlotNames(caasResponseToTest: FsCmsPageInterface): string[] {
  return caasResponseToTest.page.children.map((child) => child.name);
}

function expectActualPageDataToMatchExpectedData(expectedPageData: CmsStructureModel, actualPageData: CmsStructureModel): void {
  expect(actualPageData.page.name).toBe(expectedPageData.page.name);
  expect(actualPageData.page.type).toBe(expectedPageData.page.type);
  expect(actualPageData.page.pageId).toBe(expectedPageData.page.pageId);
  expect(actualPageData.page.template).toBe(expectedPageData.page.template);
  expect(actualPageData.page.properties.formData).toBe(expectedPageData.page.properties.formData);
  expect(actualPageData.page.properties.metaFormData).toBe(expectedPageData.page.properties.metaFormData);
  expect(actualPageData.page.properties.previewId).toBe(expectedPageData.page.properties.previewId);
}

function expectResponseToBeNotEmpty(caasResponseToTest: FsCmsPageInterface) {
  expect(caasResponseToTest).not.toBeNull();
}

function expectADifferentResultAfterConversion(caasResponse: FsCmsPageInterface, actualPageData: CmsStructureModel) {
  expect(actualPageData === caasResponse.page).toBeFalsy();
}

function expectSlotComponentToBeDefinedAndNotEmpty(actualSlotComponent: ContentSlotComponentData, actualPageData: CmsStructureModel) {
  const component = actualPageData.components.find((element) => element.uid === actualSlotComponent.uid);
  expect(component).not.toBeNull(
    `Could not find a component with the uid '${actualSlotComponent.uid}' in the components array! Got: ${actualPageData.components.map(
      (element) => element.uid
    )}`
  );
  expect(component.typeCode).toBe(actualSlotComponent.typeCode);
  expect(component.otherProperties.previewId).toEqual(actualSlotComponent.properties.previewId);

  if (component.typeCode === 'banner_section') {
    expect(component.otherProperties.formData.st_bannerPicture.previewId).toBeDefined();
    expect(component.otherProperties.formData.st_bannerPictureSmall.previewId).toBeDefined();
  }

  if (component.typeCode === 'text_picture_section' || component.typeCode === 'text_picture_section2') {
    expect(component.otherProperties.formData.st_picture.previewId).toBeDefined();
  }
}

function expectThePageDataToNotBeNull(actualPageData: CmsStructureModel) {
  expect(actualPageData.page.name).not.toBeNull();
  expect(actualPageData.page.type).not.toBeNull();
  expect(actualPageData.page.pageId).not.toBeNull();
  expect(actualPageData.page.template).not.toBeNull();
}

function convertCaasResponseToPageData(caasResponseToTest: FsCmsPageInterface): CmsStructureModel {
  const { pageNormalizer } = createTestBed();
  const convertedData = pageNormalizer.convert(caasResponseToTest);
  return convertedData;
}
