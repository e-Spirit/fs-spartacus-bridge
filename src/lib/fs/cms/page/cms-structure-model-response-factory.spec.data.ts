export const fsDrivenPageCmsStructureModel = {
  page: {
    loadTime: 1602835807914,
    name: 'firstspiritdrivenpagetemplate',
    type: 'PageRef',
    pageId: 'firstspiritdrivenpagetemplate',
    slots: {
      bottomheaderslot: { components: [] },
      content: {
        components: [
          {
            uid: 'teaser',
            typeCode: 'teaser',
            flexType: 'teaser',
            properties: { previewId: '027ee81f-8d6f-4c7b-82fd-f23b848a6368.en_GB' },
          },
        ],
      },
    },
    properties: {
      previewId: 'd55049a7-f633-4e5c-a35f-2fc52185131b.en_GB',
      formData: { pt_seoUrl: { fsType: 'CMS_INPUT_TEXT', name: 'pt_seoUrl', value: 'firstspiritdrivenpage_seo' } },
      metaFormData: {},
    },
    template: 'firstspiritdrivenpage',
  },
  components: [],
};

export const expectedOccResponse = {
  page: {
    loadTime: 1602835807914,
    name: 'firstspiritdrivenpagetemplate',
    pageId: 'firstspiritdrivenpagetemplate',
    type: 'ContentPage',
    template: 'FirstSpiritDrivenPage',
    slots: { MySlot: { components: [] }, MyOtherSlot: { components: [] } },
  },
  components: [],
};
