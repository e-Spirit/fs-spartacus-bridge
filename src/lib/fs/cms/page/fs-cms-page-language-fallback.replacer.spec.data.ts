import { FsCmsPageInterface } from './fs-cms-page.interface';

export const sourcePageDataWithFallbacks: FsCmsPageInterface = {
  _id: '1988949c-8a7f-4bcb-9649-2543cf0aa672.ja_JP',
  fsType: 'PageRef',
  name: '__homepage__',
  displayName: 'Homepage',
  identifier: '1988949c-8a7f-4bcb-9649-2543cf0aa672',
  uid: '__homepage__',
  uidType: 'SITESTORE_LEAF',
  metaFormData: {},
  page: {
    fsType: 'Page',
    name: '__homepage__',
    displayName: 'Homepage',
    identifier: '83388b06-3e10-486d-8623-4bfdbdd0968b',
    uid: '__homepage__',
    uidType: 'PAGESTORE',
    template: {
      fsType: 'PageTemplate',
      name: 'LandingPage2Template',
      displayName: 'LandingPage2Template',
      identifier: 'c086cd6a-9fd6-4303-a60c-92f2887504eb',
      uid: 'landingpage2template',
      uidType: 'TEMPLATESTORE',
    },
    formData: { pt_cc_identifier: { fsType: 'CMS_INPUT_TEXT', name: 'pt_cc_identifier', value: 'ContentPage:__HOMEPAGE__' } },
    metaFormData: {},
    children: [
      {
        fsType: 'Body',
        name: 'bottomheaderslot',
        identifier: '219964fe-fbd7-4a07-9cff-800124390547',
        children: [
          {
            fsType: 'Section',
            name: 'carousel',
            displayName: 'carousel',
            identifier: '7c6953a6-0e6e-4ac2-b536-06e6d9d3e5f5',
            template: {
              fsType: 'SectionTemplate',
              name: 'Carousel',
              displayName: 'Carousel',
              identifier: '63d4396c-dc7a-4eb4-a31c-a55692d63a4e',
              uid: 'carousel',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_autoplayEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_autoplayEnabled', value: true },
              st_autoplaySpeed: { fsType: 'CMS_INPUT_NUMBER', name: 'st_autoplaySpeed', value: 5 },
              st_carouselItems: {
                fsType: 'FS_CATALOG',
                name: 'st_carouselItems',
                value: [
                  {
                    fsType: 'Card',
                    identifier: '778a6193-4cf3-4915-a7d3-61273053b357',
                    uuid: '778a6193-4cf3-4915-a7d3-61273053b357',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Teaser',
                      displayName: 'Teaser',
                      identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                      uid: 'teaser',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
                      st_image: {
                        fsType: 'CMS_INPUT_IMAGEMAP',
                        name: 'st_image',
                        value: {
                          fsType: 'MappingMedium',
                          areas: [],
                          media: null,
                          resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                        },
                      },
                      st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '3b3d5c8c-5cae-4288-8ea2-bec0b045b01d',
                    uuid: '3b3d5c8c-5cae-4288-8ea2-bec0b045b01d',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Teaser',
                      displayName: 'Teaser',
                      identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                      uid: 'teaser',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
                      st_image: {
                        fsType: 'CMS_INPUT_IMAGEMAP',
                        name: 'st_image',
                        value: {
                          fsType: 'MappingMedium',
                          areas: [],
                          media: null,
                          resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                        },
                      },
                      st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: 'f3a5cbca-16a1-46b9-8cf9-07e9e36ebdc7',
                    uuid: 'f3a5cbca-16a1-46b9-8cf9-07e9e36ebdc7',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Teaser',
                      displayName: 'Teaser',
                      identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                      uid: 'teaser',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
                      st_image: {
                        fsType: 'CMS_INPUT_IMAGEMAP',
                        name: 'st_image',
                        value: {
                          fsType: 'MappingMedium',
                          areas: [],
                          media: null,
                          resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                        },
                      },
                      st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
                    },
                  },
                ],
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: true },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'prefooterslot',
        identifier: 'ddb4a634-cebd-46f3-a842-0c2fe7e990b8',
        children: [
          {
            fsType: 'Section',
            name: 'teaser_3',
            displayName: 'Teaser',
            identifier: 'de3f9d47-61b4-4673-95a1-b49413179c92',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: null,
                  resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                },
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: true },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'section1',
        identifier: '49d3e2d0-5c27-4f9e-a829-a675d5db1906',
        children: [
          {
            fsType: 'Section',
            name: 'teaser',
            displayName: 'Teaser',
            identifier: '818cdc2b-efc3-46df-afb4-6bd01eed4a57',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: null,
                  resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                },
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: true },
            },
          },
          {
            fsType: 'Section',
            name: 'location_overview',
            displayName: 'Location Overview',
            identifier: 'f77176b1-1290-4548-8fff-458d77b8468c',
            template: {
              fsType: 'SectionTemplate',
              name: 'Location Overview',
              displayName: 'Location Overview',
              identifier: 'f3d6556d-c45e-4a5a-b086-6290387fbf65',
              uid: 'location_overview',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_headline: { fsType: 'CMS_INPUT_TEXT', name: 'st_headline', value: null },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: true },
              st_locations: {
                fsType: 'FS_INDEX',
                name: 'st_locations',
                dapType: 'DatasetDataAccessPlugin',
                value: [
                  {
                    fsType: 'Record',
                    identifier: '{"schema":"locations","gid":"7b2001e2-291e-45c0-a984-3be6c7f78a8d","table":"locations"}',
                    value: {
                      fsType: 'DatasetReference',
                      target: {
                        fsType: 'Dataset',
                        schema: 'locations',
                        entityType: 'locations',
                        identifier: '7b2001e2-291e-45c0-a984-3be6c7f78a8d',
                      },
                    },
                  },
                  {
                    fsType: 'Record',
                    identifier: '{"schema":"locations","gid":"2371a650-0ab1-41d7-a0dc-5484f2472fd8","table":"locations"}',
                    value: {
                      fsType: 'DatasetReference',
                      target: {
                        fsType: 'Dataset',
                        schema: 'locations',
                        entityType: 'locations',
                        identifier: '2371a650-0ab1-41d7-a0dc-5484f2472fd8',
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            fsType: 'Section',
            name: 'multi_slot_container',
            displayName: 'Multi Slot Container',
            identifier: 'adaabf74-82a1-4509-8905-c55176ed0192',
            template: {
              fsType: 'SectionTemplate',
              name: 'Multi Slot Container',
              displayName: 'Multi Slot Container',
              identifier: '7111f61b-72a2-42fc-a5cf-cfdf3198386a',
              uid: 'multi_slot_container',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_items: {
                fsType: 'FS_CATALOG',
                name: 'st_items',
                value: [
                  {
                    fsType: 'Card',
                    identifier: 'aee725e4-52e3-4d51-a753-eaace92b867f',
                    uuid: 'aee725e4-52e3-4d51-a753-eaace92b867f',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'MSC Content Item',
                      displayName: 'MSC Content Item',
                      identifier: '5493d84b-ea74-40fd-9b8a-9d0ea1ffa9b8',
                      uid: 'msc_content_item',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_altTag: { fsType: 'CMS_INPUT_TEXT', name: 'st_altTag', value: null },
                      st_headline: { fsType: 'CMS_INPUT_TEXT', name: 'st_headline', value: null },
                      st_link: { fsType: 'CMS_INPUT_LINK', name: 'st_link', value: null },
                      st_linkText: { fsType: 'CMS_INPUT_TEXT', name: 'st_linkText', value: null },
                      st_picture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_picture',
                        value: {
                          fsType: 'Media',
                          name: 'spartacus_start_banner_teaser_kachel_en_1',
                          identifier: 'b5c1ab9c-438f-46cf-b34a-e98f9d7277d5',
                          uid: 'spartacus_start_banner_teaser_kachel_en_1',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/b5c1ab9c-438f-46cf-b34a-e98f9d7277d5.ja_JP',
                        },
                      },
                      st_subline: { fsType: 'CMS_INPUT_TEXT', name: 'st_subline', value: null },
                      st_text: { fsType: 'CMS_INPUT_TEXTAREA', name: 'st_text', value: null },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '6ff05e0b-3ffe-4769-9f54-657a357dfda1',
                    uuid: '6ff05e0b-3ffe-4769-9f54-657a357dfda1',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'MSC Content Item',
                      displayName: 'MSC Content Item',
                      identifier: '5493d84b-ea74-40fd-9b8a-9d0ea1ffa9b8',
                      uid: 'msc_content_item',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_altTag: { fsType: 'CMS_INPUT_TEXT', name: 'st_altTag', value: null },
                      st_headline: { fsType: 'CMS_INPUT_TEXT', name: 'st_headline', value: null },
                      st_link: { fsType: 'CMS_INPUT_LINK', name: 'st_link', value: null },
                      st_linkText: { fsType: 'CMS_INPUT_TEXT', name: 'st_linkText', value: null },
                      st_picture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_picture',
                        value: {
                          fsType: 'Media',
                          name: 'dummy_image',
                          identifier: '745e6674-4c3e-41b3-bfb4-629de0796d38',
                          uid: 'dummy_image',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/745e6674-4c3e-41b3-bfb4-629de0796d38.en_GB',
                        },
                      },
                      st_subline: { fsType: 'CMS_INPUT_TEXT', name: 'st_subline', value: null },
                      st_text: { fsType: 'CMS_INPUT_TEXTAREA', name: 'st_text', value: null },
                    },
                  },
                ],
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: true },
              st_title: { fsType: 'CMS_INPUT_TEXT', name: 'st_title', value: null },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'section3',
        identifier: 'a55f484f-988e-4cd7-8d18-adbeaf1e7c18',
        children: [
          {
            fsType: 'Section',
            name: 'teaser_2',
            displayName: 'Teaser',
            identifier: '953ce928-18fb-4c69-8682-bffaca4099c5',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: null,
                  resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                },
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
            },
          },
        ],
      },
    ],
  },
  locale: { identifier: 'JA', country: 'JP', language: 'ja' },
  _etag: { $oid: '612c9a8170be475d776b9b4c' },
};

export const sourcePageDataWithoutFallbacks: FsCmsPageInterface = {
  _id: '1988949c-8a7f-4bcb-9649-2543cf0aa672.ja_JP',
  fsType: 'PageRef',
  name: '__homepage__',
  displayName: 'Homepage',
  identifier: '1988949c-8a7f-4bcb-9649-2543cf0aa672',
  uid: '__homepage__',
  uidType: 'SITESTORE_LEAF',
  metaFormData: {},
  page: {
    fsType: 'Page',
    name: '__homepage__',
    displayName: 'Homepage',
    identifier: '83388b06-3e10-486d-8623-4bfdbdd0968b',
    uid: '__homepage__',
    uidType: 'PAGESTORE',
    template: {
      fsType: 'PageTemplate',
      name: 'LandingPage2Template',
      displayName: 'LandingPage2Template',
      identifier: 'c086cd6a-9fd6-4303-a60c-92f2887504eb',
      uid: 'landingpage2template',
      uidType: 'TEMPLATESTORE',
    },
    formData: { pt_cc_identifier: { fsType: 'CMS_INPUT_TEXT', name: 'pt_cc_identifier', value: 'ContentPage:__HOMEPAGE__' } },
    metaFormData: {},
    children: [
      {
        fsType: 'Body',
        name: 'bottomheaderslot',
        identifier: '219964fe-fbd7-4a07-9cff-800124390547',
        children: [
          {
            fsType: 'Section',
            name: 'carousel',
            displayName: 'carousel',
            identifier: '7c6953a6-0e6e-4ac2-b536-06e6d9d3e5f5',
            template: {
              fsType: 'SectionTemplate',
              name: 'Carousel',
              displayName: 'Carousel',
              identifier: '63d4396c-dc7a-4eb4-a31c-a55692d63a4e',
              uid: 'carousel',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_autoplayEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_autoplayEnabled', value: true },
              st_autoplaySpeed: { fsType: 'CMS_INPUT_NUMBER', name: 'st_autoplaySpeed', value: 5 },
              st_carouselItems: {
                fsType: 'FS_CATALOG',
                name: 'st_carouselItems',
                value: [
                  {
                    fsType: 'Card',
                    identifier: '778a6193-4cf3-4915-a7d3-61273053b357',
                    uuid: '778a6193-4cf3-4915-a7d3-61273053b357',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Teaser',
                      displayName: 'Teaser',
                      identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                      uid: 'teaser',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
                      st_image: {
                        fsType: 'CMS_INPUT_IMAGEMAP',
                        name: 'st_image',
                        value: {
                          fsType: 'MappingMedium',
                          areas: [],
                          media: null,
                          resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                        },
                      },
                      st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '3b3d5c8c-5cae-4288-8ea2-bec0b045b01d',
                    uuid: '3b3d5c8c-5cae-4288-8ea2-bec0b045b01d',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Teaser',
                      displayName: 'Teaser',
                      identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                      uid: 'teaser',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
                      st_image: {
                        fsType: 'CMS_INPUT_IMAGEMAP',
                        name: 'st_image',
                        value: {
                          fsType: 'MappingMedium',
                          areas: [],
                          media: null,
                          resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                        },
                      },
                      st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: 'f3a5cbca-16a1-46b9-8cf9-07e9e36ebdc7',
                    uuid: 'f3a5cbca-16a1-46b9-8cf9-07e9e36ebdc7',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Teaser',
                      displayName: 'Teaser',
                      identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                      uid: 'teaser',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
                      st_image: {
                        fsType: 'CMS_INPUT_IMAGEMAP',
                        name: 'st_image',
                        value: {
                          fsType: 'MappingMedium',
                          areas: [],
                          media: null,
                          resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                        },
                      },
                      st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
                    },
                  },
                ],
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: false },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'prefooterslot',
        identifier: 'ddb4a634-cebd-46f3-a842-0c2fe7e990b8',
        children: [
          {
            fsType: 'Section',
            name: 'teaser_3',
            displayName: 'Teaser',
            identifier: 'de3f9d47-61b4-4673-95a1-b49413179c92',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: null,
                  resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                },
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: false },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'section1',
        identifier: '49d3e2d0-5c27-4f9e-a829-a675d5db1906',
        children: [
          {
            fsType: 'Section',
            name: 'teaser',
            displayName: 'Teaser',
            identifier: '818cdc2b-efc3-46df-afb4-6bd01eed4a57',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: null,
                  resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                },
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: false },
            },
          },
          {
            fsType: 'Section',
            name: 'location_overview',
            displayName: 'Location Overview',
            identifier: 'f77176b1-1290-4548-8fff-458d77b8468c',
            template: {
              fsType: 'SectionTemplate',
              name: 'Location Overview',
              displayName: 'Location Overview',
              identifier: 'f3d6556d-c45e-4a5a-b086-6290387fbf65',
              uid: 'location_overview',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_headline: { fsType: 'CMS_INPUT_TEXT', name: 'st_headline', value: null },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: false },
              st_locations: {
                fsType: 'FS_INDEX',
                name: 'st_locations',
                dapType: 'DatasetDataAccessPlugin',
                value: [
                  {
                    fsType: 'Record',
                    identifier: '{"schema":"locations","gid":"7b2001e2-291e-45c0-a984-3be6c7f78a8d","table":"locations"}',
                    value: {
                      fsType: 'DatasetReference',
                      target: {
                        fsType: 'Dataset',
                        schema: 'locations',
                        entityType: 'locations',
                        identifier: '7b2001e2-291e-45c0-a984-3be6c7f78a8d',
                      },
                    },
                  },
                  {
                    fsType: 'Record',
                    identifier: '{"schema":"locations","gid":"2371a650-0ab1-41d7-a0dc-5484f2472fd8","table":"locations"}',
                    value: {
                      fsType: 'DatasetReference',
                      target: {
                        fsType: 'Dataset',
                        schema: 'locations',
                        entityType: 'locations',
                        identifier: '2371a650-0ab1-41d7-a0dc-5484f2472fd8',
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            fsType: 'Section',
            name: 'multi_slot_container',
            displayName: 'Multi Slot Container',
            identifier: 'adaabf74-82a1-4509-8905-c55176ed0192',
            template: {
              fsType: 'SectionTemplate',
              name: 'Multi Slot Container',
              displayName: 'Multi Slot Container',
              identifier: '7111f61b-72a2-42fc-a5cf-cfdf3198386a',
              uid: 'multi_slot_container',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_items: {
                fsType: 'FS_CATALOG',
                name: 'st_items',
                value: [
                  {
                    fsType: 'Card',
                    identifier: 'aee725e4-52e3-4d51-a753-eaace92b867f',
                    uuid: 'aee725e4-52e3-4d51-a753-eaace92b867f',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'MSC Content Item',
                      displayName: 'MSC Content Item',
                      identifier: '5493d84b-ea74-40fd-9b8a-9d0ea1ffa9b8',
                      uid: 'msc_content_item',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_altTag: { fsType: 'CMS_INPUT_TEXT', name: 'st_altTag', value: null },
                      st_headline: { fsType: 'CMS_INPUT_TEXT', name: 'st_headline', value: null },
                      st_link: { fsType: 'CMS_INPUT_LINK', name: 'st_link', value: null },
                      st_linkText: { fsType: 'CMS_INPUT_TEXT', name: 'st_linkText', value: null },
                      st_picture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_picture',
                        value: {
                          fsType: 'Media',
                          name: 'spartacus_start_banner_teaser_kachel_en_1',
                          identifier: 'b5c1ab9c-438f-46cf-b34a-e98f9d7277d5',
                          uid: 'spartacus_start_banner_teaser_kachel_en_1',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/b5c1ab9c-438f-46cf-b34a-e98f9d7277d5.ja_JP',
                        },
                      },
                      st_subline: { fsType: 'CMS_INPUT_TEXT', name: 'st_subline', value: null },
                      st_text: { fsType: 'CMS_INPUT_TEXTAREA', name: 'st_text', value: null },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '6ff05e0b-3ffe-4769-9f54-657a357dfda1',
                    uuid: '6ff05e0b-3ffe-4769-9f54-657a357dfda1',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'MSC Content Item',
                      displayName: 'MSC Content Item',
                      identifier: '5493d84b-ea74-40fd-9b8a-9d0ea1ffa9b8',
                      uid: 'msc_content_item',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_altTag: { fsType: 'CMS_INPUT_TEXT', name: 'st_altTag', value: null },
                      st_headline: { fsType: 'CMS_INPUT_TEXT', name: 'st_headline', value: null },
                      st_link: { fsType: 'CMS_INPUT_LINK', name: 'st_link', value: null },
                      st_linkText: { fsType: 'CMS_INPUT_TEXT', name: 'st_linkText', value: null },
                      st_picture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_picture',
                        value: {
                          fsType: 'Media',
                          name: 'dummy_image',
                          identifier: '745e6674-4c3e-41b3-bfb4-629de0796d38',
                          uid: 'dummy_image',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/745e6674-4c3e-41b3-bfb4-629de0796d38.en_GB',
                        },
                      },
                      st_subline: { fsType: 'CMS_INPUT_TEXT', name: 'st_subline', value: null },
                      st_text: { fsType: 'CMS_INPUT_TEXTAREA', name: 'st_text', value: null },
                    },
                  },
                ],
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: false },
              st_title: { fsType: 'CMS_INPUT_TEXT', name: 'st_title', value: null },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'section3',
        identifier: 'a55f484f-988e-4cd7-8d18-adbeaf1e7c18',
        children: [
          {
            fsType: 'Section',
            name: 'teaser_2',
            displayName: 'Teaser',
            identifier: '953ce928-18fb-4c69-8682-bffaca4099c5',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: null,
                  resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                },
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: false },
            },
          },
        ],
      },
    ],
  },
  locale: { identifier: 'JA', country: 'JP', language: 'ja' },
  _etag: { $oid: '612c9a8170be475d776b9b4c' },
};

// TODO: TYPE!!
export const fallbackLanguagePageData: any = [
  {
    _id: '1988949c-8a7f-4bcb-9649-2543cf0aa672.en_GB',
    page: {
      children: [
        {
          children: [
            {
              fsType: 'Section',
              name: 'carousel',
              displayName: 'carousel',
              identifier: '7c6953a6-0e6e-4ac2-b536-06e6d9d3e5f5',
              displayed: true,
              template: {
                fsType: 'SectionTemplate',
                name: 'Carousel',
                displayName: 'Carousel',
                identifier: '63d4396c-dc7a-4eb4-a31c-a55692d63a4e',
                uid: 'carousel',
                uidType: 'TEMPLATESTORE',
              },
              formData: {
                st_autoplayEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_autoplayEnabled', value: true },
                st_autoplaySpeed: { fsType: 'CMS_INPUT_NUMBER', name: 'st_autoplaySpeed', value: 5 },
                st_carouselItems: {
                  fsType: 'FS_CATALOG',
                  name: 'st_carouselItems',
                  value: [
                    {
                      fsType: 'Card',
                      identifier: '778a6193-4cf3-4915-a7d3-61273053b357',
                      uuid: '778a6193-4cf3-4915-a7d3-61273053b357',
                      template: {
                        fsType: 'SectionTemplate',
                        name: 'Teaser',
                        displayName: 'Teaser',
                        identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                        uid: 'teaser',
                        uidType: 'TEMPLATESTORE',
                      },
                      formData: {
                        st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: 'Canon Legria HFS 100 Full HD' },
                        st_image: {
                          fsType: 'CMS_INPUT_IMAGEMAP',
                          name: 'st_image',
                          value: {
                            fsType: 'MappingMedium',
                            areas: [
                              {
                                fsType: 'Area',
                                areaType: 'rect',
                                leftTop: { x: 2058, y: 331 },
                                link: {
                                  template: {
                                    fsType: 'LinkTemplate',
                                    name: 'product_link',
                                    displayName: 'Product',
                                    identifier: '701c27b0-2d88-4970-bd00-b14f72d893db',
                                    uid: 'product_link',
                                    uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                                  },
                                  formData: {
                                    lt_product: {
                                      fsType: 'FS_INDEX',
                                      name: 'lt_product',
                                      dapType: 'ContentConnectSAPCommerceCloud/ContentConnectSAPCommerceCloud_ProductDataAccessPlugin',
                                      value: [{ fsType: 'Record', identifier: 'electronicsProductCatalog/1986316' }],
                                    },
                                    lt_tooltip_text: { fsType: 'CMS_INPUT_TEXT', name: 'lt_tooltip_text', value: 'canon legria' },
                                  },
                                },
                                rightBottom: { x: 3756, y: 1082 },
                              },
                              {
                                fsType: 'Area',
                                areaType: 'rect',
                                leftTop: { x: 1227, y: 911 },
                                link: {
                                  template: {
                                    fsType: 'LinkTemplate',
                                    name: 'content_link',
                                    displayName: 'Content',
                                    identifier: '074211e5-5988-41cc-b0b7-b8fff059aa89',
                                    uid: 'content_link',
                                    uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                                  },
                                  formData: {
                                    lt_page: {
                                      fsType: 'FS_REFERENCE',
                                      name: 'lt_page',
                                      value: {
                                        fsType: 'PageRef',
                                        name: 'canon_legria_campaign',
                                        identifier: '43c7d854-6b4b-4191-9b8c-70f80294f42e',
                                        uid: 'canon_legria_campaign',
                                        uidType: 'SITESTORE_LEAF',
                                        url:
                                          'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/43c7d854-6b4b-4191-9b8c-70f80294f42e.en_GB',
                                      },
                                    },
                                    lt_tooltip_text: {
                                      fsType: 'CMS_INPUT_TEXT',
                                      name: 'lt_tooltip_text',
                                      value: 'Canon Legria Series Skeleton ',
                                    },
                                  },
                                },
                                rightBottom: { x: 1674, y: 1032 },
                              },
                              {
                                fsType: 'Area',
                                areaType: 'rect',
                                leftTop: { x: 1256, y: 753 },
                                link: {
                                  template: {
                                    fsType: 'LinkTemplate',
                                    name: 'content_link',
                                    displayName: 'Content',
                                    identifier: '074211e5-5988-41cc-b0b7-b8fff059aa89',
                                    uid: 'content_link',
                                    uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                                  },
                                  formData: {
                                    lt_page: {
                                      fsType: 'FS_REFERENCE',
                                      name: 'lt_page',
                                      value: {
                                        fsType: 'PageRef',
                                        name: 'canon_legria_campaign_landingpage',
                                        identifier: '036d861c-8927-4df1-b54a-154f6c1a7031',
                                        uid: 'canon_legria_campaign_landingpage',
                                        uidType: 'SITESTORE_LEAF',
                                        url:
                                          'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/036d861c-8927-4df1-b54a-154f6c1a7031.en_GB',
                                      },
                                    },
                                    lt_tooltip_text: { fsType: 'CMS_INPUT_TEXT', name: 'lt_tooltip_text', value: 'Canon Legria Series' },
                                  },
                                },
                                rightBottom: { x: 1619, y: 818 },
                              },
                            ],
                            media: {
                              fsType: 'Media',
                              name: 'spartacus_buehne_startseite_en_4k_1',
                              displayName: 'spartacus_buehne_startseite_4k',
                              identifier: '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
                              uid: 'spartacus_buehne_startseite_en_4k_1',
                              uidType: 'MEDIASTORE_LEAF',
                              mediaType: 'PICTURE',
                              url:
                                'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/2d6aff3f-a24c-4581-aeeb-985f7605e0aa.en_GB',
                              pictureMetaData: { fileSize: 1752864, extension: 'png', mimeType: 'image/png', width: 4000, height: 1180 },
                            },
                            resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                          },
                        },
                        st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
                      },
                    },
                    {
                      fsType: 'Card',
                      identifier: '3b3d5c8c-5cae-4288-8ea2-bec0b045b01d',
                      uuid: '3b3d5c8c-5cae-4288-8ea2-bec0b045b01d',
                      template: {
                        fsType: 'SectionTemplate',
                        name: 'Teaser',
                        displayName: 'Teaser',
                        identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                        uid: 'teaser',
                        uidType: 'TEMPLATESTORE',
                      },
                      formData: {
                        st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: 'Brand of the week: Samsung' },
                        st_image: {
                          fsType: 'CMS_INPUT_IMAGEMAP',
                          name: 'st_image',
                          value: {
                            fsType: 'MappingMedium',
                            areas: [],
                            media: {
                              fsType: 'Media',
                              name: 'spartacus_buehne_02_startseite_en_4k',
                              displayName: 'spartacus_buehne_02_startseite_4k',
                              identifier: 'b860e7a4-b429-46c7-b048-0c7c2a06edd5',
                              uid: 'spartacus_buehne_02_startseite_en_4k',
                              uidType: 'MEDIASTORE_LEAF',
                              mediaType: 'PICTURE',
                              url:
                                'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/b860e7a4-b429-46c7-b048-0c7c2a06edd5.en_GB',
                              pictureMetaData: { fileSize: 1620812, extension: 'png', mimeType: 'image/png', width: 4000, height: 1180 },
                            },
                            resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                          },
                        },
                        st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
                      },
                    },
                    {
                      fsType: 'Card',
                      identifier: 'f3a5cbca-16a1-46b9-8cf9-07e9e36ebdc7',
                      uuid: 'f3a5cbca-16a1-46b9-8cf9-07e9e36ebdc7',
                      template: {
                        fsType: 'SectionTemplate',
                        name: 'Teaser',
                        displayName: 'Teaser',
                        identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                        uid: 'teaser',
                        uidType: 'TEMPLATESTORE',
                      },
                      formData: {
                        st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: 'Well prepared for any weather' },
                        st_image: {
                          fsType: 'CMS_INPUT_IMAGEMAP',
                          name: 'st_image',
                          value: {
                            fsType: 'MappingMedium',
                            areas: [],
                            media: {
                              fsType: 'Media',
                              name: 'spartacus_buehne_03_startseite_en_4k',
                              displayName: 'spartacus_buehne_03_startseite_4k',
                              identifier: '53194c32-24e7-47bc-b08b-b46f22e785b9',
                              uid: 'spartacus_buehne_03_startseite_en_4k',
                              uidType: 'MEDIASTORE_LEAF',
                              mediaType: 'PICTURE',
                              url:
                                'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/53194c32-24e7-47bc-b08b-b46f22e785b9.en_GB',
                              pictureMetaData: { fileSize: 2388059, extension: 'png', mimeType: 'image/png', width: 4000, height: 1180 },
                            },
                            resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                          },
                        },
                        st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
                      },
                    },
                  ],
                },
                st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
              },
            },
          ],
        },
        {
          children: [
            {
              fsType: 'Section',
              name: 'teaser_3',
              displayName: 'Teaser',
              identifier: 'de3f9d47-61b4-4673-95a1-b49413179c92',
              displayed: true,
              template: {
                fsType: 'SectionTemplate',
                name: 'Teaser',
                displayName: 'Teaser',
                identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                uid: 'teaser',
                uidType: 'TEMPLATESTORE',
              },
              formData: {
                st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
                st_image: {
                  fsType: 'CMS_INPUT_IMAGEMAP',
                  name: 'st_image',
                  value: {
                    fsType: 'MappingMedium',
                    areas: [],
                    media: {
                      fsType: 'Media',
                      name: 'spartacus_newsletter_shop_footer_en_4k_1',
                      displayName: 'spartacus_newsletter-shop-footer_4k',
                      identifier: '5925413f-2b79-4030-8b06-b5209c4eef41',
                      uid: 'spartacus_newsletter_shop_footer_en_4k_1',
                      uidType: 'MEDIASTORE_LEAF',
                      mediaType: 'PICTURE',
                      url:
                        'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/5925413f-2b79-4030-8b06-b5209c4eef41.en_GB',
                      pictureMetaData: { fileSize: 1016341, extension: 'png', mimeType: 'image/png', width: 4000, height: 1600 },
                    },
                    resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                  },
                },
                st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
              },
            },
          ],
        },
        {
          children: [
            {
              fsType: 'Section',
              name: 'teaser',
              displayName: 'Teaser',
              identifier: '818cdc2b-efc3-46df-afb4-6bd01eed4a57',
              displayed: true,
              template: {
                fsType: 'SectionTemplate',
                name: 'Teaser',
                displayName: 'Teaser',
                identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                uid: 'teaser',
                uidType: 'TEMPLATESTORE',
              },
              formData: {
                st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
                st_image: {
                  fsType: 'CMS_INPUT_IMAGEMAP',
                  name: 'st_image',
                  value: {
                    fsType: 'MappingMedium',
                    areas: [],
                    media: {
                      fsType: 'Media',
                      name: 'shop_benefits_icons_en_1',
                      displayName: 'shop-benefits_icons_1140@2x',
                      identifier: '4d5e3ba2-a282-47be-872b-1c8a8d48d30a',
                      uid: 'shop_benefits_icons_en_1',
                      uidType: 'MEDIASTORE_LEAF',
                      mediaType: 'PICTURE',
                      url:
                        'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/4d5e3ba2-a282-47be-872b-1c8a8d48d30a.en_GB',
                      pictureMetaData: { fileSize: 6081, extension: 'png', mimeType: 'image/png', width: 1140, height: 180 },
                    },
                    resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                  },
                },
                st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
              },
            },
            {
              fsType: 'Section',
              name: 'location_overview',
              displayName: 'Location Overview',
              identifier: 'f77176b1-1290-4548-8fff-458d77b8468c',
              displayed: true,
              template: {
                fsType: 'SectionTemplate',
                name: 'Location Overview',
                displayName: 'Location Overview',
                identifier: 'f3d6556d-c45e-4a5a-b086-6290387fbf65',
                uid: 'location_overview',
                uidType: 'TEMPLATESTORE',
              },
              formData: {
                st_headline: { fsType: 'CMS_INPUT_TEXT', name: 'st_headline', value: 'Location Overview' },
                st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: false },
                st_locations: {
                  fsType: 'FS_INDEX',
                  name: 'st_locations',
                  dapType: 'DatasetDataAccessPlugin',
                  value: [
                    {
                      fsType: 'Record',
                      identifier: '{"schema":"locations","gid":"7b2001e2-291e-45c0-a984-3be6c7f78a8d","table":"locations"}',
                      value: {
                        fsType: 'DatasetReference',
                        target: {
                          fsType: 'Dataset',
                          schema: 'locations',
                          entityType: 'locations',
                          identifier: '7b2001e2-291e-45c0-a984-3be6c7f78a8d',
                        },
                      },
                    },
                    {
                      fsType: 'Record',
                      identifier: '{"schema":"locations","gid":"2371a650-0ab1-41d7-a0dc-5484f2472fd8","table":"locations"}',
                      value: {
                        fsType: 'DatasetReference',
                        target: {
                          fsType: 'Dataset',
                          schema: 'locations',
                          entityType: 'locations',
                          identifier: '2371a650-0ab1-41d7-a0dc-5484f2472fd8',
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              fsType: 'Section',
              name: 'multi_slot_container',
              displayName: 'Multi Slot Container',
              identifier: 'adaabf74-82a1-4509-8905-c55176ed0192',
              displayed: true,
              template: {
                fsType: 'SectionTemplate',
                name: 'Multi Slot Container',
                displayName: 'Multi Slot Container',
                identifier: '7111f61b-72a2-42fc-a5cf-cfdf3198386a',
                uid: 'multi_slot_container',
                uidType: 'TEMPLATESTORE',
              },
              formData: {
                st_items: {
                  fsType: 'FS_CATALOG',
                  name: 'st_items',
                  value: [
                    {
                      fsType: 'Card',
                      identifier: 'aee725e4-52e3-4d51-a753-eaace92b867f',
                      uuid: 'aee725e4-52e3-4d51-a753-eaace92b867f',
                      template: {
                        fsType: 'SectionTemplate',
                        name: 'MSC Content Item',
                        displayName: 'MSC Content Item',
                        identifier: '5493d84b-ea74-40fd-9b8a-9d0ea1ffa9b8',
                        uid: 'msc_content_item',
                        uidType: 'TEMPLATESTORE',
                      },
                      formData: {
                        st_altTag: { fsType: 'CMS_INPUT_TEXT', name: 'st_altTag', value: 'alt' },
                        st_headline: { fsType: 'CMS_INPUT_TEXT', name: 'st_headline', value: 'headline' },
                        st_link: { fsType: 'CMS_INPUT_LINK', name: 'st_link', value: null },
                        st_linkText: { fsType: 'CMS_INPUT_TEXT', name: 'st_linkText', value: null },
                        st_picture: {
                          fsType: 'FS_REFERENCE',
                          name: 'st_picture',
                          value: {
                            fsType: 'Media',
                            name: 'spartacus_start_banner_teaser_kachel_en_1',
                            identifier: 'b5c1ab9c-438f-46cf-b34a-e98f9d7277d5',
                            uid: 'spartacus_start_banner_teaser_kachel_en_1',
                            uidType: 'MEDIASTORE_LEAF',
                            mediaType: 'PICTURE',
                            url:
                              'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/b5c1ab9c-438f-46cf-b34a-e98f9d7277d5.en_GB',
                          },
                        },
                        st_subline: { fsType: 'CMS_INPUT_TEXT', name: 'st_subline', value: 'sub' },
                        st_text: { fsType: 'CMS_INPUT_TEXTAREA', name: 'st_text', value: 'text' },
                      },
                    },
                    {
                      fsType: 'Card',
                      identifier: '6ff05e0b-3ffe-4769-9f54-657a357dfda1',
                      uuid: '6ff05e0b-3ffe-4769-9f54-657a357dfda1',
                      template: {
                        fsType: 'SectionTemplate',
                        name: 'MSC Content Item',
                        displayName: 'MSC Content Item',
                        identifier: '5493d84b-ea74-40fd-9b8a-9d0ea1ffa9b8',
                        uid: 'msc_content_item',
                        uidType: 'TEMPLATESTORE',
                      },
                      formData: {
                        st_altTag: { fsType: 'CMS_INPUT_TEXT', name: 'st_altTag', value: 'alt' },
                        st_headline: { fsType: 'CMS_INPUT_TEXT', name: 'st_headline', value: 'headline' },
                        st_link: { fsType: 'CMS_INPUT_LINK', name: 'st_link', value: null },
                        st_linkText: { fsType: 'CMS_INPUT_TEXT', name: 'st_linkText', value: null },
                        st_picture: {
                          fsType: 'FS_REFERENCE',
                          name: 'st_picture',
                          value: {
                            fsType: 'Media',
                            name: 'dummy_image',
                            identifier: '745e6674-4c3e-41b3-bfb4-629de0796d38',
                            uid: 'dummy_image',
                            uidType: 'MEDIASTORE_LEAF',
                            mediaType: 'PICTURE',
                            url:
                              'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/745e6674-4c3e-41b3-bfb4-629de0796d38.en_GB',
                          },
                        },
                        st_subline: { fsType: 'CMS_INPUT_TEXT', name: 'st_subline', value: 'sub' },
                        st_text: { fsType: 'CMS_INPUT_TEXTAREA', name: 'st_text', value: 'text' },
                      },
                    },
                  ],
                },
                st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: false },
                st_title: { fsType: 'CMS_INPUT_TEXT', name: 'st_title', value: 'headline' },
              },
            },
          ],
        },
        {
          children: [
            {
              fsType: 'Section',
              name: 'teaser_2',
              displayName: 'Teaser',
              identifier: '953ce928-18fb-4c69-8682-bffaca4099c5',
              displayed: true,
              template: {
                fsType: 'SectionTemplate',
                name: 'Teaser',
                displayName: 'Teaser',
                identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                uid: 'teaser',
                uidType: 'TEMPLATESTORE',
              },
              formData: {
                st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
                st_image: {
                  fsType: 'CMS_INPUT_IMAGEMAP',
                  name: 'st_image',
                  value: {
                    fsType: 'MappingMedium',
                    areas: [
                      {
                        fsType: 'Area',
                        areaType: 'rect',
                        leftTop: { x: 746, y: 121 },
                        link: {
                          template: {
                            fsType: 'LinkTemplate',
                            name: 'category_link',
                            displayName: 'Category',
                            identifier: 'dd77b02f-8cbd-4b1c-b039-4ee2e9ba629c',
                            uid: 'category_link',
                            uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                          },
                          formData: {
                            lt_category: {
                              fsType: 'FS_INDEX',
                              name: 'lt_category',
                              dapType: 'ContentConnectSAPCommerceCloud/ContentConnectSAPCommerceCloud_CategoryDataAccessPlugin',
                              value: [{ fsType: 'Record', identifier: 'electronicsProductCatalog/brand_88' }],
                            },
                            lt_tooltip_text: { fsType: 'CMS_INPUT_TEXT', name: 'lt_tooltip_text', value: 'View all Kodak products' },
                          },
                        },
                        rightBottom: { x: 941, y: 201 },
                      },
                      {
                        fsType: 'Area',
                        areaType: 'rect',
                        leftTop: { x: 392, y: 20 },
                        link: {
                          template: {
                            fsType: 'LinkTemplate',
                            name: 'category_link',
                            displayName: 'Category',
                            identifier: 'dd77b02f-8cbd-4b1c-b039-4ee2e9ba629c',
                            uid: 'category_link',
                            uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                          },
                          formData: {
                            lt_category: {
                              fsType: 'FS_INDEX',
                              name: 'lt_category',
                              dapType: 'ContentConnectSAPCommerceCloud/ContentConnectSAPCommerceCloud_CategoryDataAccessPlugin',
                              value: [{ fsType: 'Record', identifier: 'electronicsProductCatalog/brand_26' }],
                            },
                            lt_tooltip_text: { fsType: 'CMS_INPUT_TEXT', name: 'lt_tooltip_text', value: 'View all Samsung products' },
                          },
                        },
                        rightBottom: { x: 588, y: 102 },
                      },
                      {
                        fsType: 'Area',
                        areaType: 'rect',
                        leftTop: { x: 173, y: 19 },
                        link: {
                          template: {
                            fsType: 'LinkTemplate',
                            name: 'category_link',
                            displayName: 'Category',
                            identifier: 'dd77b02f-8cbd-4b1c-b039-4ee2e9ba629c',
                            uid: 'category_link',
                            uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                          },
                          formData: {
                            lt_category: {
                              fsType: 'FS_INDEX',
                              name: 'lt_category',
                              dapType: 'ContentConnectSAPCommerceCloud/ContentConnectSAPCommerceCloud_CategoryDataAccessPlugin',
                              value: [{ fsType: 'Record', identifier: 'electronicsProductCatalog/brand_5' }],
                            },
                            lt_tooltip_text: { fsType: 'CMS_INPUT_TEXT', name: 'lt_tooltip_text', value: 'View all Sony products' },
                          },
                        },
                        rightBottom: { x: 373, y: 103 },
                      },
                      {
                        fsType: 'Area',
                        areaType: 'rect',
                        leftTop: { x: 962, y: 120 },
                        link: {
                          template: {
                            fsType: 'LinkTemplate',
                            name: 'category_link',
                            displayName: 'Category',
                            identifier: 'dd77b02f-8cbd-4b1c-b039-4ee2e9ba629c',
                            uid: 'category_link',
                            uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                          },
                          formData: {
                            lt_category: {
                              fsType: 'FS_INDEX',
                              name: 'lt_category',
                              dapType: 'ContentConnectSAPCommerceCloud/ContentConnectSAPCommerceCloud_CategoryDataAccessPlugin',
                              value: [{ fsType: 'Record', identifier: 'electronicsProductCatalog/brand_75' }],
                            },
                            lt_tooltip_text: { fsType: 'CMS_INPUT_TEXT', name: 'lt_tooltip_text', value: 'View all Fujifilm products' },
                          },
                        },
                        rightBottom: { x: 1159, y: 201 },
                      },
                      {
                        fsType: 'Area',
                        areaType: 'rect',
                        leftTop: { x: 610, y: 21 },
                        link: {
                          template: {
                            fsType: 'LinkTemplate',
                            name: 'category_link',
                            displayName: 'Category',
                            identifier: 'dd77b02f-8cbd-4b1c-b039-4ee2e9ba629c',
                            uid: 'category_link',
                            uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                          },
                          formData: {
                            lt_category: {
                              fsType: 'FS_INDEX',
                              name: 'lt_category',
                              dapType: 'ContentConnectSAPCommerceCloud/ContentConnectSAPCommerceCloud_CategoryDataAccessPlugin',
                              value: [{ fsType: 'Record', identifier: 'electronicsProductCatalog/brand_1' }],
                            },
                            lt_tooltip_text: { fsType: 'CMS_INPUT_TEXT', name: 'lt_tooltip_text', value: 'View all HP products' },
                          },
                        },
                        rightBottom: { x: 808, y: 104 },
                      },
                      {
                        fsType: 'Area',
                        areaType: 'rect',
                        leftTop: { x: 528, y: 120 },
                        link: {
                          template: {
                            fsType: 'LinkTemplate',
                            name: 'category_link',
                            displayName: 'Category',
                            identifier: 'dd77b02f-8cbd-4b1c-b039-4ee2e9ba629c',
                            uid: 'category_link',
                            uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                          },
                          formData: {
                            lt_category: {
                              fsType: 'FS_INDEX',
                              name: 'lt_category',
                              dapType: 'ContentConnectSAPCommerceCloud/ContentConnectSAPCommerceCloud_CategoryDataAccessPlugin',
                              value: [{ fsType: 'Record', identifier: 'electronicsProductCatalog/brand_10' }],
                            },
                            lt_tooltip_text: { fsType: 'CMS_INPUT_TEXT', name: 'lt_tooltip_text', value: 'View all Canon products' },
                          },
                        },
                        rightBottom: { x: 724, y: 201 },
                      },
                    ],
                    media: {
                      fsType: 'Media',
                      name: 'spartacus_start_banner_teaser_kachel_en_1',
                      displayName: 'spartacus_start_banner_teaser-kachel_@2x',
                      identifier: 'b5c1ab9c-438f-46cf-b34a-e98f9d7277d5',
                      uid: 'spartacus_start_banner_teaser_kachel_en_1',
                      uidType: 'MEDIASTORE_LEAF',
                      mediaType: 'PICTURE',
                      url:
                        'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/b5c1ab9c-438f-46cf-b34a-e98f9d7277d5.en_GB',
                      pictureMetaData: { fileSize: 1147266, extension: 'png', mimeType: 'image/png', width: 2280, height: 1911 },
                    },
                    resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                  },
                },
                st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
              },
            },
          ],
        },
      ],
    },
  },
];

export const expectedTargetPageData: FsCmsPageInterface = {
  _id: '1988949c-8a7f-4bcb-9649-2543cf0aa672.ja_JP',
  fsType: 'PageRef',
  name: '__homepage__',
  displayName: 'Homepage',
  identifier: '1988949c-8a7f-4bcb-9649-2543cf0aa672',
  uid: '__homepage__',
  uidType: 'SITESTORE_LEAF',
  metaFormData: {},
  fallbackIdentifiers: [
    '7c6953a6-0e6e-4ac2-b536-06e6d9d3e5f5',
    'de3f9d47-61b4-4673-95a1-b49413179c92',
    '818cdc2b-efc3-46df-afb4-6bd01eed4a57',
    'f77176b1-1290-4548-8fff-458d77b8468c',
    'adaabf74-82a1-4509-8905-c55176ed0192',
  ],
  page: {
    fsType: 'Page',
    name: '__homepage__',
    displayName: 'Homepage',
    identifier: '83388b06-3e10-486d-8623-4bfdbdd0968b',
    uid: '__homepage__',
    uidType: 'PAGESTORE',
    template: {
      fsType: 'PageTemplate',
      name: 'LandingPage2Template',
      displayName: 'LandingPage2Template',
      identifier: 'c086cd6a-9fd6-4303-a60c-92f2887504eb',
      uid: 'landingpage2template',
      uidType: 'TEMPLATESTORE',
    },
    formData: { pt_cc_identifier: { fsType: 'CMS_INPUT_TEXT', name: 'pt_cc_identifier', value: 'ContentPage:__HOMEPAGE__' } },
    metaFormData: {},
    children: [
      {
        fsType: 'Body',
        name: 'bottomheaderslot',
        identifier: '219964fe-fbd7-4a07-9cff-800124390547',
        children: [
          {
            fsType: 'Section',
            name: 'carousel',
            displayName: 'carousel',
            identifier: '7c6953a6-0e6e-4ac2-b536-06e6d9d3e5f5',
            template: {
              fsType: 'SectionTemplate',
              name: 'Carousel',
              displayName: 'Carousel',
              identifier: '63d4396c-dc7a-4eb4-a31c-a55692d63a4e',
              uid: 'carousel',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_autoplayEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_autoplayEnabled', value: true },
              st_autoplaySpeed: { fsType: 'CMS_INPUT_NUMBER', name: 'st_autoplaySpeed', value: 5 },
              st_carouselItems: {
                fsType: 'FS_CATALOG',
                name: 'st_carouselItems',
                value: [
                  {
                    fsType: 'Card',
                    identifier: '778a6193-4cf3-4915-a7d3-61273053b357',
                    uuid: '778a6193-4cf3-4915-a7d3-61273053b357',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Teaser',
                      displayName: 'Teaser',
                      identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                      uid: 'teaser',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: 'Canon Legria HFS 100 Full HD' },
                      st_image: {
                        fsType: 'CMS_INPUT_IMAGEMAP',
                        name: 'st_image',
                        value: {
                          fsType: 'MappingMedium',
                          areas: [
                            {
                              fsType: 'Area',
                              areaType: 'rect',
                              leftTop: { x: 2058, y: 331 },
                              link: {
                                template: {
                                  fsType: 'LinkTemplate',
                                  name: 'product_link',
                                  displayName: 'Product',
                                  identifier: '701c27b0-2d88-4970-bd00-b14f72d893db',
                                  uid: 'product_link',
                                  uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                                },
                                formData: {
                                  lt_product: {
                                    fsType: 'FS_INDEX',
                                    name: 'lt_product',
                                    dapType: 'ContentConnectSAPCommerceCloud/ContentConnectSAPCommerceCloud_ProductDataAccessPlugin',
                                    value: [{ fsType: 'Record', identifier: 'electronicsProductCatalog/1986316' }],
                                  },
                                  lt_tooltip_text: { fsType: 'CMS_INPUT_TEXT', name: 'lt_tooltip_text', value: 'canon legria' },
                                },
                              },
                              rightBottom: { x: 3756, y: 1082 },
                            },
                            {
                              fsType: 'Area',
                              areaType: 'rect',
                              leftTop: { x: 1227, y: 911 },
                              link: {
                                template: {
                                  fsType: 'LinkTemplate',
                                  name: 'content_link',
                                  displayName: 'Content',
                                  identifier: '074211e5-5988-41cc-b0b7-b8fff059aa89',
                                  uid: 'content_link',
                                  uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                                },
                                formData: {
                                  lt_page: {
                                    fsType: 'FS_REFERENCE',
                                    name: 'lt_page',
                                    value: {
                                      fsType: 'PageRef',
                                      name: 'canon_legria_campaign',
                                      identifier: '43c7d854-6b4b-4191-9b8c-70f80294f42e',
                                      uid: 'canon_legria_campaign',
                                      uidType: 'SITESTORE_LEAF',
                                      url:
                                        'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/43c7d854-6b4b-4191-9b8c-70f80294f42e.en_GB',
                                    },
                                  },
                                  lt_tooltip_text: {
                                    fsType: 'CMS_INPUT_TEXT',
                                    name: 'lt_tooltip_text',
                                    value: 'Canon Legria Series Skeleton ',
                                  },
                                },
                              },
                              rightBottom: { x: 1674, y: 1032 },
                            },
                            {
                              fsType: 'Area',
                              areaType: 'rect',
                              leftTop: { x: 1256, y: 753 },
                              link: {
                                template: {
                                  fsType: 'LinkTemplate',
                                  name: 'content_link',
                                  displayName: 'Content',
                                  identifier: '074211e5-5988-41cc-b0b7-b8fff059aa89',
                                  uid: 'content_link',
                                  uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                                },
                                formData: {
                                  lt_page: {
                                    fsType: 'FS_REFERENCE',
                                    name: 'lt_page',
                                    value: {
                                      fsType: 'PageRef',
                                      name: 'canon_legria_campaign_landingpage',
                                      identifier: '036d861c-8927-4df1-b54a-154f6c1a7031',
                                      uid: 'canon_legria_campaign_landingpage',
                                      uidType: 'SITESTORE_LEAF',
                                      url:
                                        'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/036d861c-8927-4df1-b54a-154f6c1a7031.en_GB',
                                    },
                                  },
                                  lt_tooltip_text: { fsType: 'CMS_INPUT_TEXT', name: 'lt_tooltip_text', value: 'Canon Legria Series' },
                                },
                              },
                              rightBottom: { x: 1619, y: 818 },
                            },
                          ],
                          media: {
                            fsType: 'Media',
                            name: 'spartacus_buehne_startseite_en_4k_1',
                            displayName: 'spartacus_buehne_startseite_4k',
                            identifier: '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
                            uid: 'spartacus_buehne_startseite_en_4k_1',
                            uidType: 'MEDIASTORE_LEAF',
                            mediaType: 'PICTURE',
                            url:
                              'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/2d6aff3f-a24c-4581-aeeb-985f7605e0aa.en_GB',
                            pictureMetaData: { fileSize: 1752864, extension: 'png', mimeType: 'image/png', width: 4000, height: 1180 },
                          },
                          resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                        },
                      },
                      st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '3b3d5c8c-5cae-4288-8ea2-bec0b045b01d',
                    uuid: '3b3d5c8c-5cae-4288-8ea2-bec0b045b01d',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Teaser',
                      displayName: 'Teaser',
                      identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                      uid: 'teaser',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: 'Brand of the week: Samsung' },
                      st_image: {
                        fsType: 'CMS_INPUT_IMAGEMAP',
                        name: 'st_image',
                        value: {
                          fsType: 'MappingMedium',
                          areas: [],
                          media: {
                            fsType: 'Media',
                            name: 'spartacus_buehne_02_startseite_en_4k',
                            displayName: 'spartacus_buehne_02_startseite_4k',
                            identifier: 'b860e7a4-b429-46c7-b048-0c7c2a06edd5',
                            uid: 'spartacus_buehne_02_startseite_en_4k',
                            uidType: 'MEDIASTORE_LEAF',
                            mediaType: 'PICTURE',
                            url:
                              'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/b860e7a4-b429-46c7-b048-0c7c2a06edd5.en_GB',
                            pictureMetaData: { fileSize: 1620812, extension: 'png', mimeType: 'image/png', width: 4000, height: 1180 },
                          },
                          resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                        },
                      },
                      st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: 'f3a5cbca-16a1-46b9-8cf9-07e9e36ebdc7',
                    uuid: 'f3a5cbca-16a1-46b9-8cf9-07e9e36ebdc7',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Teaser',
                      displayName: 'Teaser',
                      identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                      uid: 'teaser',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: 'Well prepared for any weather' },
                      st_image: {
                        fsType: 'CMS_INPUT_IMAGEMAP',
                        name: 'st_image',
                        value: {
                          fsType: 'MappingMedium',
                          areas: [],
                          media: {
                            fsType: 'Media',
                            name: 'spartacus_buehne_03_startseite_en_4k',
                            displayName: 'spartacus_buehne_03_startseite_4k',
                            identifier: '53194c32-24e7-47bc-b08b-b46f22e785b9',
                            uid: 'spartacus_buehne_03_startseite_en_4k',
                            uidType: 'MEDIASTORE_LEAF',
                            mediaType: 'PICTURE',
                            url:
                              'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/53194c32-24e7-47bc-b08b-b46f22e785b9.en_GB',
                            pictureMetaData: { fileSize: 2388059, extension: 'png', mimeType: 'image/png', width: 4000, height: 1180 },
                          },
                          resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                        },
                      },
                      st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
                    },
                  },
                ],
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'prefooterslot',
        identifier: 'ddb4a634-cebd-46f3-a842-0c2fe7e990b8',
        children: [
          {
            fsType: 'Section',
            name: 'teaser_3',
            displayName: 'Teaser',
            identifier: 'de3f9d47-61b4-4673-95a1-b49413179c92',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: {
                    fsType: 'Media',
                    name: 'spartacus_newsletter_shop_footer_en_4k_1',
                    displayName: 'spartacus_newsletter-shop-footer_4k',
                    identifier: '5925413f-2b79-4030-8b06-b5209c4eef41',
                    uid: 'spartacus_newsletter_shop_footer_en_4k_1',
                    uidType: 'MEDIASTORE_LEAF',
                    mediaType: 'PICTURE',
                    url:
                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/5925413f-2b79-4030-8b06-b5209c4eef41.en_GB',
                    pictureMetaData: { fileSize: 1016341, extension: 'png', mimeType: 'image/png', width: 4000, height: 1600 },
                  },
                  resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                },
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'section1',
        identifier: '49d3e2d0-5c27-4f9e-a829-a675d5db1906',
        children: [
          {
            fsType: 'Section',
            name: 'teaser',
            displayName: 'Teaser',
            identifier: '818cdc2b-efc3-46df-afb4-6bd01eed4a57',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: {
                    fsType: 'Media',
                    name: 'shop_benefits_icons_en_1',
                    displayName: 'shop-benefits_icons_1140@2x',
                    identifier: '4d5e3ba2-a282-47be-872b-1c8a8d48d30a',
                    uid: 'shop_benefits_icons_en_1',
                    uidType: 'MEDIASTORE_LEAF',
                    mediaType: 'PICTURE',
                    url:
                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/4d5e3ba2-a282-47be-872b-1c8a8d48d30a.en_GB',
                    pictureMetaData: { fileSize: 6081, extension: 'png', mimeType: 'image/png', width: 1140, height: 180 },
                  },
                  resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                },
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
            },
          },
          {
            fsType: 'Section',
            name: 'location_overview',
            displayName: 'Location Overview',
            identifier: 'f77176b1-1290-4548-8fff-458d77b8468c',
            template: {
              fsType: 'SectionTemplate',
              name: 'Location Overview',
              displayName: 'Location Overview',
              identifier: 'f3d6556d-c45e-4a5a-b086-6290387fbf65',
              uid: 'location_overview',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_headline: { fsType: 'CMS_INPUT_TEXT', name: 'st_headline', value: 'Location Overview' },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: false },
              st_locations: {
                fsType: 'FS_INDEX',
                name: 'st_locations',
                dapType: 'DatasetDataAccessPlugin',
                value: [
                  {
                    fsType: 'Record',
                    identifier: '{"schema":"locations","gid":"7b2001e2-291e-45c0-a984-3be6c7f78a8d","table":"locations"}',
                    value: {
                      fsType: 'DatasetReference',
                      target: {
                        fsType: 'Dataset',
                        schema: 'locations',
                        entityType: 'locations',
                        identifier: '7b2001e2-291e-45c0-a984-3be6c7f78a8d',
                      },
                    },
                  },
                  {
                    fsType: 'Record',
                    identifier: '{"schema":"locations","gid":"2371a650-0ab1-41d7-a0dc-5484f2472fd8","table":"locations"}',
                    value: {
                      fsType: 'DatasetReference',
                      target: {
                        fsType: 'Dataset',
                        schema: 'locations',
                        entityType: 'locations',
                        identifier: '2371a650-0ab1-41d7-a0dc-5484f2472fd8',
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            fsType: 'Section',
            name: 'multi_slot_container',
            displayName: 'Multi Slot Container',
            identifier: 'adaabf74-82a1-4509-8905-c55176ed0192',
            template: {
              fsType: 'SectionTemplate',
              name: 'Multi Slot Container',
              displayName: 'Multi Slot Container',
              identifier: '7111f61b-72a2-42fc-a5cf-cfdf3198386a',
              uid: 'multi_slot_container',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_items: {
                fsType: 'FS_CATALOG',
                name: 'st_items',
                value: [
                  {
                    fsType: 'Card',
                    identifier: 'aee725e4-52e3-4d51-a753-eaace92b867f',
                    uuid: 'aee725e4-52e3-4d51-a753-eaace92b867f',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'MSC Content Item',
                      displayName: 'MSC Content Item',
                      identifier: '5493d84b-ea74-40fd-9b8a-9d0ea1ffa9b8',
                      uid: 'msc_content_item',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_altTag: { fsType: 'CMS_INPUT_TEXT', name: 'st_altTag', value: 'alt' },
                      st_headline: { fsType: 'CMS_INPUT_TEXT', name: 'st_headline', value: 'headline' },
                      st_link: { fsType: 'CMS_INPUT_LINK', name: 'st_link', value: null },
                      st_linkText: { fsType: 'CMS_INPUT_TEXT', name: 'st_linkText', value: null },
                      st_picture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_picture',
                        value: {
                          fsType: 'Media',
                          name: 'spartacus_start_banner_teaser_kachel_en_1',
                          identifier: 'b5c1ab9c-438f-46cf-b34a-e98f9d7277d5',
                          uid: 'spartacus_start_banner_teaser_kachel_en_1',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/b5c1ab9c-438f-46cf-b34a-e98f9d7277d5.en_GB',
                        },
                      },
                      st_subline: { fsType: 'CMS_INPUT_TEXT', name: 'st_subline', value: 'sub' },
                      st_text: { fsType: 'CMS_INPUT_TEXTAREA', name: 'st_text', value: 'text' },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '6ff05e0b-3ffe-4769-9f54-657a357dfda1',
                    uuid: '6ff05e0b-3ffe-4769-9f54-657a357dfda1',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'MSC Content Item',
                      displayName: 'MSC Content Item',
                      identifier: '5493d84b-ea74-40fd-9b8a-9d0ea1ffa9b8',
                      uid: 'msc_content_item',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_altTag: { fsType: 'CMS_INPUT_TEXT', name: 'st_altTag', value: 'alt' },
                      st_headline: { fsType: 'CMS_INPUT_TEXT', name: 'st_headline', value: 'headline' },
                      st_link: { fsType: 'CMS_INPUT_LINK', name: 'st_link', value: null },
                      st_linkText: { fsType: 'CMS_INPUT_TEXT', name: 'st_linkText', value: null },
                      st_picture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_picture',
                        value: {
                          fsType: 'Media',
                          name: 'dummy_image',
                          identifier: '745e6674-4c3e-41b3-bfb4-629de0796d38',
                          uid: 'dummy_image',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/SpartacusShowcaseSHa/84e29483-128c-40f5-97c2-f093b3ee4670.preview.content/745e6674-4c3e-41b3-bfb4-629de0796d38.en_GB',
                        },
                      },
                      st_subline: { fsType: 'CMS_INPUT_TEXT', name: 'st_subline', value: 'sub' },
                      st_text: { fsType: 'CMS_INPUT_TEXTAREA', name: 'st_text', value: 'text' },
                    },
                  },
                ],
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: false },
              st_title: { fsType: 'CMS_INPUT_TEXT', name: 'st_title', value: 'headline' },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'section3',
        identifier: 'a55f484f-988e-4cd7-8d18-adbeaf1e7c18',
        children: [
          {
            fsType: 'Section',
            name: 'teaser_2',
            displayName: 'Teaser',
            identifier: '953ce928-18fb-4c69-8682-bffaca4099c5',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: { fsType: 'CMS_INPUT_TEXT', name: 'st_alt_text', value: null },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: null,
                  resolution: { fsType: 'Resolution', uid: 'ORIGINAL', width: 0, height: 0 },
                },
              },
              st_languageFallbackEnabled: { fsType: 'CMS_INPUT_TOGGLE', name: 'st_languageFallbackEnabled', value: null },
            },
          },
        ],
      },
    ],
  },
  locale: { identifier: 'JA', country: 'JP', language: 'ja' },
  _etag: { $oid: '612c9a8170be475d776b9b4c' },
};
