import { FsCmsPageInterface } from './fs-cms-page.interface';

export const fsCmsPageInterfaceJson: FsCmsPageInterface = {
  _id: '87a71729-e581-49e2-a785-4c95545cbe65.de_DE',
  fsType: 'PageRef',
  name: 'homepage',
  identifier: '87a71729-e581-49e2-a785-4c95545cbe65',
  uid: 'homepage',
  uidType: 'SITESTORE_LEAF',
  formData: {},
  metaFormData: {},
  page: {
    fsType: 'Page',
    name: 'homepage',
    displayName: 'homepage',
    identifier: '025178ce-b290-4f1c-85ac-9a56913cb29b',
    uid: 'homepage',
    uidType: 'PAGESTORE',
    metaFormData: {
      pt_metaFormData: {
        fsType: 'CMS_INPUT_TEXT',
        name: 'pt_myInput',
        value: 'myValue',
      },
    },
    template: {
      fsType: 'PageTemplate',
      name: 'Content Page',
      identifier: 'c086cd6a-9fd6-4303-a60c-92f2887504eb',
      uid: 'content_page',
      uidType: 'TEMPLATESTORE',
    },
    formData: {
      pt_defaultPage: {
        fsType: 'CMS_INPUT_TOGGLE',
        name: 'pt_defaultPage',
        value: true,
      },
      pt_homepage: {
        fsType: 'CMS_INPUT_TOGGLE',
        name: 'pt_homepage',
        value: true,
      },
      pt_label: {
        fsType: 'CMS_INPUT_TEXT',
        name: 'pt_label',
        value: 'homepage',
      },
      pt_name: {
        fsType: 'CMS_INPUT_TEXT',
        name: 'pt_name',
        value: 'homepage',
      },
      pt_title: {
        fsType: 'CMS_INPUT_TEXT',
        name: 'pt_title',
        value: 'homepage',
      },
    },
    children: [
      {
        fsType: 'Body',
        name: 'stage_body',
        identifier: 'b6abb516-ff2e-4548-a59c-956d7a921722',
        children: [
          {
            fsType: 'Section',
            name: 'banner',
            identifier: '758337c7-5b79-41b9-a017-485abb4c7f29',
            template: {
              fsType: 'SectionTemplate',
              name: 'Banner',
              identifier: 'f59c0acd-0816-4c49-b23f-2b250a960ff4',
              uid: 'banner_section',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_bannerPicture: {
                fsType: 'FS_REFERENCE',
                name: 'st_bannerPicture',
                value: {
                  fsType: 'Media',
                  name: 'flex_2147354_1920',
                  identifier: '225c38e5-605b-400e-82dd-fffb57a97ba3',
                  uid: 'flex_2147354_1920',
                  uidType: 'MEDIASTORE_LEAF',
                  mediaType: 'PICTURE',
                  url: 'http://localhost:8000/fs5preview/preview/13988/media/DE/release/14122/ORIGINAL/flex_2147354_1920.jpg',
                },
              },
              st_bannerPictureSmall: {
                fsType: 'FS_REFERENCE',
                name: 'st_bannerPictureSmall',
                value: {
                  fsType: 'Media',
                  name: 'drill_1038542_19204806865933242021784jpg',
                  identifier: '2ac3ecb4-18c3-470c-b77c-e1fb81d56974',
                  uid: 'drill_1038542_19204806865933242021784jpg',
                  uidType: 'MEDIASTORE_LEAF',
                  mediaType: 'PICTURE',
                  url:
                    'http://localhost:8000/fs5preview/preview/13988/media/DE/release/14124/ORIGINAL/drill_1038542_19204806865933242021784jpg.jpg',
                },
              },
              st_headline: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_headline',
                value: 'Lorem Ipsum',
              },
              st_headlinePosition: {
                fsType: 'CMS_INPUT_COMBOBOX',
                name: 'st_headlinePosition',
                value: {
                  fsType: 'Option',
                  label: 'links',
                  identifier: 'left',
                },
              },
              st_linkBigBanner: {
                fsType: 'CMS_INPUT_LINK',
                name: 'st_linkBigBanner',
                value: {
                  template: {
                    fsType: 'LinkTemplate',
                    name: 'url_search_link',
                    identifier: '3a2de8aa-edb7-4e10-a005-f30bd220b1a7',
                    uid: 'url_search_link',
                    uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                  },
                  formData: {
                    lt_searchLink: {
                      fsType: 'CMS_INPUT_TEXT',
                      name: 'lt_searchLink',
                      value: 'Lorem Ipsum',
                    },
                  },
                },
              },
              st_linkSmallBanner: {
                fsType: 'CMS_INPUT_LINK',
                name: 'st_linkSmallBanner',
                value: {
                  template: {
                    fsType: 'LinkTemplate',
                    name: 'url_external_link',
                    identifier: '71d462ad-1061-46ee-8123-15495d72b419',
                    uid: 'url_external_link',
                    uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                  },
                  formData: {
                    lt_url: {
                      fsType: 'CMS_INPUT_TEXT',
                      name: 'lt_url',
                      value: 'http://Lorem.Ipsum',
                    },
                  },
                },
              },
              st_pictureBigDescription: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_pictureBigDescription',
                value: 'Lorem Ipsum',
              },
              st_pictureSmallDescription: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_pictureSmallDescription',
                value: 'Lorem Ipsum',
              },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'tiles_body',
        identifier: 'a41b6c2c-9b4c-4896-b40f-c96607520b4c',
        children: [
          {
            fsType: 'Section',
            name: 'category_teaser',
            identifier: 'bc697174-a116-4851-a4f4-9146e6612430',
            template: {
              fsType: 'SectionTemplate',
              name: 'Category Teaser',
              identifier: '98d3d557-daa8-4a10-a951-973af3862dc0',
              uid: 'category_teaser_section',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_categoryItems: {
                fsType: 'FS_CATALOG',
                name: 'st_categoryItems',
                value: [
                  {
                    fsType: 'Card',
                    identifier: 'b4cc8bac-5e92-465a-9ce2-7d64d911bbaa',
                    uuid: 'b4cc8bac-5e92-465a-9ce2-7d64d911bbaa',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Category Teaser Item',
                      identifier: '8de267c9-5e93-423a-83a8-dc42690b06d7',
                      uid: 'category_teaser_item_section',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_categoryPicture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_categoryPicture',
                        value: {
                          fsType: 'Media',
                          name: 'drill_1038542_19204806865933242021784jpg',
                          identifier: '2ac3ecb4-18c3-470c-b77c-e1fb81d56974',
                          uid: 'drill_1038542_19204806865933242021784jpg',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'http://localhost:8000/fs5preview/preview/13988/media/DE/release/14124/ORIGINAL/drill_1038542_19204806865933242021784jpg.jpg',
                        },
                      },
                      st_link: {
                        fsType: 'CMS_INPUT_LINK',
                        name: 'st_link',
                        value: null,
                      },
                      st_title: {
                        fsType: 'CMS_INPUT_TEXT',
                        name: 'st_title',
                        value: 'Lorem Ipsum',
                      },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '61f1bbf7-9c85-45c6-b27d-1c48155cbee8',
                    uuid: '61f1bbf7-9c85-45c6-b27d-1c48155cbee8',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Category Teaser Item',
                      identifier: '8de267c9-5e93-423a-83a8-dc42690b06d7',
                      uid: 'category_teaser_item_section',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_categoryPicture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_categoryPicture',
                        value: {
                          fsType: 'Media',
                          name: 'drill_1038542_19204806865933242021784jpg',
                          identifier: '2ac3ecb4-18c3-470c-b77c-e1fb81d56974',
                          uid: 'drill_1038542_19204806865933242021784jpg',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'http://localhost:8000/fs5preview/preview/13988/media/DE/release/14124/ORIGINAL/drill_1038542_19204806865933242021784jpg.jpg',
                        },
                      },
                      st_link: {
                        fsType: 'CMS_INPUT_LINK',
                        name: 'st_link',
                        value: null,
                      },
                      st_title: {
                        fsType: 'CMS_INPUT_TEXT',
                        name: 'st_title',
                        value: 'Lorem Ipsum',
                      },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '07bceb04-8563-4df1-8f71-25b38c8aeffa',
                    uuid: '07bceb04-8563-4df1-8f71-25b38c8aeffa',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Category Teaser Item',
                      identifier: '8de267c9-5e93-423a-83a8-dc42690b06d7',
                      uid: 'category_teaser_item_section',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_categoryPicture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_categoryPicture',
                        value: {
                          fsType: 'Media',
                          name: 'drill_1038542_19204806865933242021784jpg',
                          identifier: '2ac3ecb4-18c3-470c-b77c-e1fb81d56974',
                          uid: 'drill_1038542_19204806865933242021784jpg',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'http://localhost:8000/fs5preview/preview/13988/media/DE/release/14124/ORIGINAL/drill_1038542_19204806865933242021784jpg.jpg',
                        },
                      },
                      st_link: {
                        fsType: 'CMS_INPUT_LINK',
                        name: 'st_link',
                        value: null,
                      },
                      st_title: {
                        fsType: 'CMS_INPUT_TEXT',
                        name: 'st_title',
                        value: 'Lorem Ipsum',
                      },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '593307a9-8551-4f9b-8d0f-d7a7a11aa439',
                    uuid: '593307a9-8551-4f9b-8d0f-d7a7a11aa439',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Category Teaser Item',
                      identifier: '8de267c9-5e93-423a-83a8-dc42690b06d7',
                      uid: 'category_teaser_item_section',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_categoryPicture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_categoryPicture',
                        value: {
                          fsType: 'Media',
                          name: 'drill_1038542_19204806865933242021784jpg',
                          identifier: '2ac3ecb4-18c3-470c-b77c-e1fb81d56974',
                          uid: 'drill_1038542_19204806865933242021784jpg',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'http://localhost:8000/fs5preview/preview/13988/media/DE/release/14124/ORIGINAL/drill_1038542_19204806865933242021784jpg.jpg',
                        },
                      },
                      st_link: {
                        fsType: 'CMS_INPUT_LINK',
                        name: 'st_link',
                        value: null,
                      },
                      st_title: {
                        fsType: 'CMS_INPUT_TEXT',
                        name: 'st_title',
                        value: 'Lorem Ipsum',
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'main_body',
        identifier: 'd0b24f2b-a06c-4513-9945-3cc474be1952',
        children: [
          {
            fsType: 'Section',
            name: 'text_picture',
            identifier: '83899d61-4cc7-4fda-aa3a-10c6f9a32ebe',
            template: {
              fsType: 'SectionTemplate',
              name: 'Text Picture',
              identifier: '3d7f46ee-1cca-45c6-950a-ca3346688e52',
              uid: 'text_picture_section',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_image_original: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image_original',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: {
                    fsType: 'Media',
                    name: 'spartacus_banner_delivery_en_4k_1',
                    displayName: 'spartacus_banner-delivery_en_4k',
                    identifier: '7a36d14d-6b4f-409f-bfa8-807d307f6c1e',
                    uid: 'spartacus_banner_delivery_en_4k_1',
                    uidType: 'MEDIASTORE_LEAF',
                    mediaType: 'PICTURE',
                    url:
                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/20657008-16f0-4161-90a4-aacec88c49d7/preview.content/7a36d14d-6b4f-409f-bfa8-807d307f6c1e.en_GB',
                    pictureMetaData: {
                      fileSize: 25601,
                      extension: 'png',
                      mimeType: 'image/png',
                      width: 4000,
                      height: 245,
                    },
                    previewId:
                      'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1USXhMQ0p6ZEc5eVpTSTZJazFGUkVsQlUxUlBVa1VpZlE9PSJ9',
                  },
                  resolution: {
                    fsType: 'Resolution',
                    uid: 'ORIGINAL',
                    width: 0,
                    height: 0,
                  },
                },
              },
              st_image_banner_small: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image_banner_small',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: {
                    fsType: 'Media',
                    name: 'spartacus_banner_delivery_en_4k_1',
                    displayName: 'spartacus_banner-delivery_en_4k',
                    identifier: '7a36d14d-6b4f-409f-bfa8-807d307f6c1e',
                    uid: 'spartacus_banner_delivery_en_4k_1',
                    uidType: 'MEDIASTORE_LEAF',
                    mediaType: 'PICTURE',
                    url:
                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/20657008-16f0-4161-90a4-aacec88c49d7/preview.content/7a36d14d-6b4f-409f-bfa8-807d307f6c1e.en_GB',
                    pictureMetaData: {
                      fileSize: 25601,
                      extension: 'png',
                      mimeType: 'image/png',
                      width: 4000,
                      height: 245,
                    },
                    previewId:
                      'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1USXhMQ0p6ZEc5eVpTSTZJazFGUkVsQlUxUlBVa1VpZlE9PSJ9',
                  },
                  resolution: {
                    fsType: 'Resolution',
                    uid: 'BANNER_SMALL',
                    width: 0,
                    height: 0,
                  },
                },
              },
              st_headline: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_headline',
                value: 'Lorem Ipsum',
              },
              st_picture: {
                fsType: 'FS_REFERENCE',
                name: 'st_picture',
                value: {
                  fsType: 'Media',
                  name: 'tools_2145770_1920',
                  identifier: 'b0cbe2c1-a509-4544-ad4a-890904080869',
                  uid: 'tools_2145770_1920',
                  uidType: 'MEDIASTORE_LEAF',
                  mediaType: 'PICTURE',
                  url: 'http://localhost:8000/fs5preview/preview/13988/media/DE/release/14118/ORIGINAL/tools_2145770_1920.jpg',
                },
              },
              st_pictureDescription: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_pictureDescription',
                value: 'Lorem Ipsum',
              },
              st_picturePosition: {
                fsType: 'CMS_INPUT_COMBOBOX',
                name: 'st_picturePosition',
                value: {
                  fsType: 'Option',
                  label: 'rechts',
                  identifier: 'right',
                },
              },
              st_text: {
                fsType: 'CMS_INPUT_DOM',
                name: 'st_text',
                value:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
              },
            },
          },
          {
            fsType: 'Section',
            name: 'text_picture2',
            identifier: '83899d61-4cc7-4fda-aa3a-10c6f9a32ebe2',
            template: {
              fsType: 'SectionTemplate',
              name: 'Text Picture2',
              identifier: '3d7f46ee-1cca-45c6-950a-ca3346688e522',
              uid: 'text_picture_section2',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_headline: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_headline',
                value: 'Lorem Ipsum',
              },
              st_picture: {
                fsType: 'FS_REFERENCE',
                name: 'st_picture',
                value: {
                  fsType: 'Media',
                  name: 'tools_2145770_1920',
                  identifier: 'b0cbe2c1-a509-4544-ad4a-890904080869',
                  uid: 'tools_2145770_1920',
                  uidType: 'MEDIASTORE_LEAF',
                  mediaType: 'PICTURE',
                  url: 'http://localhost:8000/fs5preview/preview/13988/media/DE/release/14118/ORIGINAL/tools_2145770_1920.jpg',
                },
              },
              st_pictureDescription: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_pictureDescription',
                value: 'Lorem Ipsum',
              },
              st_picturePosition: {
                fsType: 'CMS_INPUT_COMBOBOX',
                name: 'st_picturePosition',
                value: {
                  fsType: 'Option',
                  label: 'rechts',
                  identifier: 'right',
                },
              },
              st_text: {
                fsType: 'CMS_INPUT_DOM',
                name: 'st_text',
                value:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
              },
            },
          },
        ],
      },
    ],
  },
  locale: {
    identifier: 'DE',
    country: 'DE',
    language: 'de',
  },
  previewId:
    'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1JGSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk9ERXdNU3dpYzNSdmNtVWlPaUpRUVVkRlUxUlBVa1VpZlE9PSJ9',
  _etag: {
    $oid: '5def7c88ab80760001f80318',
  },
};

export const caasFilterResult = {
  _id: 'preview.content',
  _etag: {
    $oid: '5e1dbce12c53e20001005958',
  },
  _returned: 1,
  _embedded: {
    'rh:doc': [fsCmsPageInterfaceJson],
  },
};
