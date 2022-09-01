import { FsCmsPageInterface } from './fs-cms-page.interface';

export const fsCmsPageInterfaceJson: FsCmsPageInterface = {
  _id: '1988949c-8a7f-4bcb-9649-2543cf0aa672.en_GB',
  fsType: 'PageRef',
  name: 'homepage',
  displayName: 'Homepage',
  identifier: '1988949c-8a7f-4bcb-9649-2543cf0aa672',
  uid: 'homepage',
  uidType: 'SITESTORE_LEAF',
  metaFormData: {},
  page: {
    fsType: 'Page',
    name: 'homepage',
    displayName: 'Homepage',
    identifier: '83388b06-3e10-486d-8623-4bfdbdd0968b',
    uid: 'homepage',
    uidType: 'PAGESTORE',
    template: {
      fsType: 'PageTemplate',
      name: 'LandingPage2',
      displayName: 'LandingPage2',
      identifier: 'c086cd6a-9fd6-4303-a60c-92f2887504eb',
      uid: 'landingpage2',
      uidType: 'TEMPLATESTORE',
    },
    formData: {},
    metaFormData: {},
    children: [
      {
        fsType: 'Body',
        name: 'bottomheaderslot',
        identifier: '219964fe-fbd7-4a07-9cff-800124390547',
        children: [
          {
            fsType: 'Section',
            name: 'teasercollection3',
            displayName: 'TeaserCollection3',
            identifier: 'f054949b-b342-43d5-b033-f9f96e124e83',
            template: {
              fsType: 'SectionTemplate',
              name: 'TeaserCollection3',
              displayName: 'TeaserCollection3',
              identifier: '103c8f80-ff11-4fc9-a302-b375bacb0edb',
              uid: 'teasercollection3',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_reference: {
                fsType: 'FS_REFERENCE',
                name: 'st_reference',
                value: {
                  fsType: 'Media',
                  name: 'spartacus_banner_restposten_en_4k_1',
                  identifier: 'bad0cbe3-5cad-4d80-99e8-db2d2013ef2e',
                  uid: 'spartacus_banner_restposten_en_4k_1',
                  uidType: 'MEDIASTORE_LEAF',
                  mediaType: 'PICTURE',
                  url:
                    'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/bad0cbe3-5cad-4d80-99e8-db2d2013ef2e.en_GB',
                  previewId:
                    'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1URTBMQ0p6ZEc5eVpTSTZJazFGUkVsQlUxUlBVa1VpZlE9PSJ9',
                },
              },
            },
          },
          {
            fsType: 'Section',
            name: 'teasercollection2',
            displayName: 'TeaserCollection2',
            identifier: 'b83f6e1e-3036-45e7-8c43-aa3e891f599a',
            template: {
              fsType: 'SectionTemplate',
              name: 'TeaserCollection2',
              displayName: 'TeaserCollection2',
              identifier: '2efe8e1e-6761-40d6-a33f-15c2f6248669',
              uid: 'teasercollection2',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_catalog: {
                fsType: 'FS_CATALOG',
                name: 'st_catalog',
                value: [
                  {
                    fsType: 'Card',
                    identifier: 'fcc180ba-2502-4d6c-987b-57311a9b6958',
                    uuid: 'fcc180ba-2502-4d6c-987b-57311a9b6958',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Teaser',
                      displayName: 'Teaser',
                      identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                      uid: 'teaser',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_alt_text: {
                        fsType: 'CMS_INPUT_TEXT',
                        name: 'st_alt_text',
                        value: null,
                      },
                      st_image: {
                        fsType: 'CMS_INPUT_IMAGEMAP',
                        name: 'st_image',
                        value: {
                          fsType: 'MappingMedium',
                          areas: [
                            {
                              fsType: 'Area',
                              areaType: 'rect',
                              leftTop: {
                                x: 46,
                                y: 41,
                              },
                              link: {
                                template: {
                                  fsType: 'LinkTemplate',
                                  name: 'image',
                                  displayName: 'Image',
                                  identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                                  uid: 'image',
                                  uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                                },
                                formData: {
                                  st_alt_text: {
                                    fsType: 'CMS_INPUT_TEXT',
                                    name: 'st_alt_text',
                                    value: null,
                                  },
                                  st_picture: {
                                    fsType: 'FS_REFERENCE',
                                    name: 'st_picture',
                                    value: {
                                      fsType: 'Media',
                                      name: 'spartacus_buehne_startseite_en_4k_1',
                                      identifier: '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
                                      uid: 'spartacus_buehne_startseite_en_4k_1',
                                      uidType: 'MEDIASTORE_LEAF',
                                      mediaType: 'PICTURE',
                                      url:
                                        'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/2d6aff3f-a24c-4581-aeeb-985f7605e0aa.en_GB',
                                    },
                                  },
                                },
                              },
                              rightBottom: {
                                x: 146,
                                y: 141,
                              },
                            },
                            {
                              fsType: 'Area',
                              areaType: 'rect',
                              leftTop: {
                                x: 212,
                                y: 49,
                              },
                              link: {
                                template: {
                                  fsType: 'LinkTemplate',
                                  name: 'image',
                                  displayName: 'Image',
                                  identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                                  uid: 'image',
                                  uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                                },
                                formData: {
                                  st_alt_text: {
                                    fsType: 'CMS_INPUT_TEXT',
                                    name: 'st_alt_text',
                                    value: null,
                                  },
                                  st_picture: {
                                    fsType: 'FS_REFERENCE',
                                    name: 'st_picture',
                                    value: {
                                      fsType: 'Media',
                                      name: 'shop_contact_us_services_en_1',
                                      identifier: 'b857d839-0683-4a30-a7bb-983907a2303c',
                                      uid: 'shop_contact_us_services_en_1',
                                      uidType: 'MEDIASTORE_LEAF',
                                      mediaType: 'PICTURE',
                                      url:
                                        'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/b857d839-0683-4a30-a7bb-983907a2303c.en_GB',
                                    },
                                  },
                                },
                              },
                              rightBottom: {
                                x: 312,
                                y: 149,
                              },
                            },
                          ],
                          media: {
                            fsType: 'Media',
                            name: 'spartacus_banner_restposten_en_4k_1',
                            displayName: 'spartacus_banner-restposten_en_4k',
                            identifier: 'bad0cbe3-5cad-4d80-99e8-db2d2013ef2e',
                            uid: 'spartacus_banner_restposten_en_4k_1',
                            uidType: 'MEDIASTORE_LEAF',
                            mediaType: 'PICTURE',
                            url:
                              'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/bad0cbe3-5cad-4d80-99e8-db2d2013ef2e.en_GB',
                            pictureMetaData: {
                              fileSize: 123339,
                              extension: 'png',
                              mimeType: 'image/png',
                              width: 4000,
                              height: 1000,
                            },
                          },
                          resolution: {
                            fsType: 'Resolution',
                            uid: 'ORIGINAL',
                            width: 0,
                            height: 0,
                          },
                        },
                      },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '1bd138d7-8cab-4581-be67-11df1b484b74',
                    uuid: '1bd138d7-8cab-4581-be67-11df1b484b74',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'TeaserCollection1',
                      displayName: 'TeaserCollection1',
                      identifier: '04502b89-2f6c-4317-b6f2-fd810be4a690',
                      uid: 'teasercollection1',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_catalog: {
                        fsType: 'FS_CATALOG',
                        name: 'st_catalog',
                        value: [
                          {
                            fsType: 'Card',
                            identifier: '6bbcfed9-911a-4b1f-b6ea-a38d928eeaa1',
                            uuid: '6bbcfed9-911a-4b1f-b6ea-a38d928eeaa1',
                            template: {
                              fsType: 'LinkTemplate',
                              name: 'image',
                              displayName: 'Image',
                              identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                              uid: 'image',
                              uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                            },
                            formData: {
                              st_alt_text: {
                                fsType: 'CMS_INPUT_TEXT',
                                name: 'st_alt_text',
                                value: null,
                              },
                              st_picture: {
                                fsType: 'FS_REFERENCE',
                                name: 'st_picture',
                                value: {
                                  fsType: 'Media',
                                  name: 'shop_benefits_icons_en_1',
                                  identifier: '4d5e3ba2-a282-47be-872b-1c8a8d48d30a',
                                  uid: 'shop_benefits_icons_en_1',
                                  uidType: 'MEDIASTORE_LEAF',
                                  mediaType: 'PICTURE',
                                  url:
                                    'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/4d5e3ba2-a282-47be-872b-1c8a8d48d30a.en_GB',
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '4fa0a8c7-ca66-4751-aa3b-8b5890a3eb0d',
                    uuid: '4fa0a8c7-ca66-4751-aa3b-8b5890a3eb0d',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'TeaserCollection3',
                      displayName: 'TeaserCollection3',
                      identifier: '103c8f80-ff11-4fc9-a302-b375bacb0edb',
                      uid: 'teasercollection3',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_reference: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_reference',
                        value: {
                          fsType: 'Media',
                          name: 'spartacus_newsletter_shop_footer_en_4k_1',
                          identifier: '5925413f-2b79-4030-8b06-b5209c4eef41',
                          uid: 'spartacus_newsletter_shop_footer_en_4k_1',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/5925413f-2b79-4030-8b06-b5209c4eef41.en_GB',
                        },
                      },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: 'a05cbc15-4e50-4651-8d21-2c74b0fb9158',
                    uuid: 'a05cbc15-4e50-4651-8d21-2c74b0fb9158',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'TeaserCollection2',
                      displayName: 'TeaserCollection2',
                      identifier: '2efe8e1e-6761-40d6-a33f-15c2f6248669',
                      uid: 'teasercollection2',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_catalog: {
                        fsType: 'FS_CATALOG',
                        name: 'st_catalog',
                        value: [
                          {
                            fsType: 'Card',
                            identifier: '079972ac-edf6-4552-a15c-9fa6b4214d3d',
                            uuid: '079972ac-edf6-4552-a15c-9fa6b4214d3d',
                            template: {
                              fsType: 'SectionTemplate',
                              name: 'Teaser',
                              displayName: 'Teaser',
                              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                              uid: 'teaser',
                              uidType: 'TEMPLATESTORE',
                            },
                            formData: {
                              st_alt_text: {
                                fsType: 'CMS_INPUT_TEXT',
                                name: 'st_alt_text',
                                value: null,
                              },
                              st_image: {
                                fsType: 'CMS_INPUT_IMAGEMAP',
                                name: 'st_image',
                                value: {
                                  fsType: 'MappingMedium',
                                  areas: [
                                    {
                                      fsType: 'Area',
                                      areaType: 'rect',
                                      leftTop: {
                                        x: 50,
                                        y: 50,
                                      },
                                      link: {
                                        template: {
                                          fsType: 'LinkTemplate',
                                          name: 'image',
                                          displayName: 'Image',
                                          identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                                          uid: 'image',
                                          uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                                        },
                                        formData: {
                                          st_alt_text: {
                                            fsType: 'CMS_INPUT_TEXT',
                                            name: 'st_alt_text',
                                            value: null,
                                          },
                                          st_picture: {
                                            fsType: 'FS_REFERENCE',
                                            name: 'st_picture',
                                            value: {
                                              fsType: 'Media',
                                              name: 'spartacus_newsletter_shop_footer_en_4k_1',
                                              identifier: '5925413f-2b79-4030-8b06-b5209c4eef41',
                                              uid: 'spartacus_newsletter_shop_footer_en_4k_1',
                                              uidType: 'MEDIASTORE_LEAF',
                                              mediaType: 'PICTURE',
                                              url:
                                                'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/5925413f-2b79-4030-8b06-b5209c4eef41.en_GB',
                                            },
                                          },
                                        },
                                      },
                                      rightBottom: {
                                        x: 150,
                                        y: 150,
                                      },
                                    },
                                  ],
                                  media: {
                                    fsType: 'Media',
                                    name: 'spartacus_buehne_startseite_en_4k_1',
                                    displayName: 'spartacus_buehne_startseite_en_4k',
                                    identifier: '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
                                    uid: 'spartacus_buehne_startseite_en_4k_1',
                                    uidType: 'MEDIASTORE_LEAF',
                                    mediaType: 'PICTURE',
                                    url:
                                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/2d6aff3f-a24c-4581-aeeb-985f7605e0aa.en_GB',
                                    pictureMetaData: {
                                      fileSize: 1752864,
                                      extension: 'png',
                                      mimeType: 'image/png',
                                      width: 4000,
                                      height: 1180,
                                    },
                                  },
                                  resolution: {
                                    fsType: 'Resolution',
                                    uid: 'ORIGINAL',
                                    width: 0,
                                    height: 0,
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            fsType: 'Section',
            name: 'teasercollection1',
            displayName: 'TeaserCollection1',
            identifier: 'e6d9c86c-a081-4199-9df1-7476ed3ac99a',
            template: {
              fsType: 'SectionTemplate',
              name: 'TeaserCollection1',
              displayName: 'TeaserCollection1',
              identifier: '04502b89-2f6c-4317-b6f2-fd810be4a690',
              uid: 'teasercollection1',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_catalog: {
                fsType: 'FS_CATALOG',
                name: 'st_catalog',
                value: [
                  {
                    fsType: 'Card',
                    identifier: '941b10ff-2a45-46c8-82b9-125bab90bdb1',
                    uuid: '941b10ff-2a45-46c8-82b9-125bab90bdb1',
                    template: {
                      fsType: 'LinkTemplate',
                      name: 'image',
                      displayName: 'Image',
                      identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                      uid: 'image',
                      uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                    },
                    formData: {
                      st_alt_text: {
                        fsType: 'CMS_INPUT_TEXT',
                        name: 'st_alt_text',
                        value: null,
                      },
                      st_picture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_picture',
                        value: {
                          fsType: 'Media',
                          name: 'shop_contact_us_services_en_1',
                          identifier: 'b857d839-0683-4a30-a7bb-983907a2303c',
                          uid: 'shop_contact_us_services_en_1',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/b857d839-0683-4a30-a7bb-983907a2303c.en_GB',
                        },
                      },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: 'dd15c332-d545-4b7b-94a4-b06e380d2695',
                    uuid: 'dd15c332-d545-4b7b-94a4-b06e380d2695',
                    template: {
                      fsType: 'LinkTemplate',
                      name: 'image',
                      displayName: 'Image',
                      identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                      uid: 'image',
                      uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                    },
                    formData: {
                      st_alt_text: {
                        fsType: 'CMS_INPUT_TEXT',
                        name: 'st_alt_text',
                        value: null,
                      },
                      st_picture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_picture',
                        value: {
                          fsType: 'Media',
                          name: 'spartacus_banner_contact_us_en_4k_1',
                          identifier: '3fd41ea5-0ac6-4ae0-a984-20f6d618773b',
                          uid: 'spartacus_banner_contact_us_en_4k_1',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/3fd41ea5-0ac6-4ae0-a984-20f6d618773b.en_GB',
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            fsType: 'Section',
            name: 'teaser',
            displayName: 'Teaser',
            identifier: 'e4f5631c-2be8-49f4-bf00-a2691ed502eb',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_alt_text',
                value: null,
              },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 50,
                        y: 50,
                      },
                      link: {
                        template: {
                          fsType: 'LinkTemplate',
                          name: 'image',
                          displayName: 'Image',
                          identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                          uid: 'image',
                          uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                        },
                        formData: {
                          st_alt_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'st_alt_text',
                            value: null,
                          },
                          st_picture: {
                            fsType: 'FS_REFERENCE',
                            name: 'st_picture',
                            value: {
                              fsType: 'Media',
                              name: 'spartacus_banner_delivery_en_4k_1',
                              identifier: '7a36d14d-6b4f-409f-bfa8-807d307f6c1e',
                              uid: 'spartacus_banner_delivery_en_4k_1',
                              uidType: 'MEDIASTORE_LEAF',
                              mediaType: 'PICTURE',
                              url:
                                'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/7a36d14d-6b4f-409f-bfa8-807d307f6c1e.en_GB',
                            },
                          },
                        },
                      },
                      rightBottom: {
                        x: 150,
                        y: 150,
                      },
                    },
                  ],
                  media: {
                    fsType: 'Media',
                    name: 'spartacus_buehne_startseite_en_4k_1',
                    displayName: 'spartacus_buehne_startseite_en_4k',
                    identifier: '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
                    uid: 'spartacus_buehne_startseite_en_4k_1',
                    uidType: 'MEDIASTORE_LEAF',
                    mediaType: 'PICTURE',
                    url:
                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/2d6aff3f-a24c-4581-aeeb-985f7605e0aa.en_GB',
                    pictureMetaData: {
                      fileSize: 1752864,
                      extension: 'png',
                      mimeType: 'image/png',
                      width: 4000,
                      height: 1180,
                    },
                    previewId:
                      'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1URTFMQ0p6ZEc5eVpTSTZJazFGUkVsQlUxUlBVa1VpZlE9PSJ9',
                  },
                  resolution: {
                    fsType: 'Resolution',
                    uid: 'ORIGINAL',
                    width: 0,
                    height: 0,
                  },
                },
              },
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
              st_alt_text: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_alt_text',
                value: null,
              },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: {
                    fsType: 'Media',
                    name: 'spartacus_newsletter_shop_footer_en_4k_1',
                    displayName: 'spartacus_newsletter-shop-footer_en_4k',
                    identifier: '5925413f-2b79-4030-8b06-b5209c4eef41',
                    uid: 'spartacus_newsletter_shop_footer_en_4k_1',
                    uidType: 'MEDIASTORE_LEAF',
                    mediaType: 'PICTURE',
                    url:
                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/5925413f-2b79-4030-8b06-b5209c4eef41.en_GB',
                    pictureMetaData: {
                      fileSize: 1016341,
                      extension: 'png',
                      mimeType: 'image/png',
                      width: 4000,
                      height: 1600,
                    },
                    previewId:
                      'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1URTJMQ0p6ZEc5eVpTSTZJazFGUkVsQlUxUlBVa1VpZlE9PSJ9',
                  },
                  resolution: {
                    fsType: 'Resolution',
                    uid: 'ORIGINAL',
                    width: 0,
                    height: 0,
                  },
                },
              },
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
            name: 'teaser_1',
            displayName: 'Teaser',
            identifier: '067f9b53-3e81-45b4-bd83-c3bbe0bca36a',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_alt_text',
                value: null,
              },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: {
                    fsType: 'Media',
                    name: 'shop_benefits_icons_en_1',
                    displayName: 'shop-benefits_icons_en_1140@2x',
                    identifier: '4d5e3ba2-a282-47be-872b-1c8a8d48d30a',
                    uid: 'shop_benefits_icons_en_1',
                    uidType: 'MEDIASTORE_LEAF',
                    mediaType: 'PICTURE',
                    url:
                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/4d5e3ba2-a282-47be-872b-1c8a8d48d30a.en_GB',
                    pictureMetaData: {
                      fileSize: 6081,
                      extension: 'png',
                      mimeType: 'image/png',
                      width: 1140,
                      height: 180,
                    },
                    previewId:
                      'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1URXdMQ0p6ZEc5eVpTSTZJazFGUkVsQlUxUlBVa1VpZlE9PSJ9',
                  },
                  resolution: {
                    fsType: 'Resolution',
                    uid: 'ORIGINAL',
                    width: 0,
                    height: 0,
                  },
                },
              },
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
              st_alt_text: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_alt_text',
                value: null,
              },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 746,
                        y: 121,
                      },
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
                            value: [
                              {
                                fsType: 'Record',
                                identifier: 'electronicsProductCatalog/brand_88',
                              },
                            ],
                          },
                          lt_tooltip_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'lt_tooltip_text',
                            value: 'View all Kodak products',
                          },
                        },
                      },
                      rightBottom: {
                        x: 941,
                        y: 201,
                      },
                    },
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 392,
                        y: 20,
                      },
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
                            value: [
                              {
                                fsType: 'Record',
                                identifier: 'electronicsProductCatalog/brand_26',
                              },
                            ],
                          },
                          lt_tooltip_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'lt_tooltip_text',
                            value: 'View all Samsung products',
                          },
                        },
                      },
                      rightBottom: {
                        x: 588,
                        y: 102,
                      },
                    },
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 173,
                        y: 19,
                      },
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
                            value: [
                              {
                                fsType: 'Record',
                                identifier: 'electronicsProductCatalog/brand_5',
                              },
                            ],
                          },
                          lt_tooltip_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'lt_tooltip_text',
                            value: 'View all Sony products',
                          },
                        },
                      },
                      rightBottom: {
                        x: 373,
                        y: 103,
                      },
                    },
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 962,
                        y: 120,
                      },
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
                            value: [
                              {
                                fsType: 'Record',
                                identifier: 'electronicsProductCatalog/brand_75',
                              },
                            ],
                          },
                          lt_tooltip_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'lt_tooltip_text',
                            value: 'View all Fujifilm products',
                          },
                        },
                      },
                      rightBottom: {
                        x: 1159,
                        y: 201,
                      },
                    },
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 610,
                        y: 21,
                      },
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
                            value: [
                              {
                                fsType: 'Record',
                                identifier: 'electronicsProductCatalog/brand_1',
                              },
                            ],
                          },
                          lt_tooltip_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'lt_tooltip_text',
                            value: 'View all HP products',
                          },
                        },
                      },
                      rightBottom: {
                        x: 808,
                        y: 104,
                      },
                    },
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 528,
                        y: 120,
                      },
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
                            value: [
                              {
                                fsType: 'Record',
                                identifier: 'electronicsProductCatalog/brand_10',
                              },
                            ],
                          },
                          lt_tooltip_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'lt_tooltip_text',
                            value: 'View all Canon products',
                          },
                        },
                      },
                      rightBottom: {
                        x: 724,
                        y: 201,
                      },
                    },
                  ],
                  media: {
                    fsType: 'Media',
                    name: 'spartacus_start_banner_teaser_kachel_en_1',
                    displayName: 'spartacus_start_banner_teaser-kachel_en@2x',
                    identifier: 'b5c1ab9c-438f-46cf-b34a-e98f9d7277d5',
                    uid: 'spartacus_start_banner_teaser_kachel_en_1',
                    uidType: 'MEDIASTORE_LEAF',
                    mediaType: 'PICTURE',
                    url:
                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/b5c1ab9c-438f-46cf-b34a-e98f9d7277d5.en_GB',
                    pictureMetaData: {
                      fileSize: 1147266,
                      extension: 'png',
                      mimeType: 'image/png',
                      width: 2280,
                      height: 1911,
                    },
                    previewId:
                      'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1URTNMQ0p6ZEc5eVpTSTZJazFGUkVsQlUxUlBVa1VpZlE9PSJ9',
                  },
                  resolution: {
                    fsType: 'Resolution',
                    uid: 'ORIGINAL',
                    width: 0,
                    height: 0,
                  },
                },
              },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'section2a',
        identifier: '9a5f1003-e156-4e5f-b278-83c848b611cf',
        children: [
          {
            fsType: 'Section',
            name: 'location_overview',
            displayName: 'Location-Overview',
            identifier: 'e05e1fb8-7e8d-45a2-8b71-89d4d4a5cc92',
            template: {
              fsType: 'SectionTemplate',
              name: 'Location-Overview',
              displayName: 'Location-Overview',
              identifier: 'f3d6556d-c45e-4a5a-b086-6290387fbf65',
              uid: 'location_overview',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_headline: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_headline',
                value: null,
              },
              st_locations: {
                fsType: 'FS_INDEX',
                name: 'st_locations',
                dapType: 'DatasetDataAccessPlugin',
                value: [
                  {
                    fsType: 'Record',
                    identifier: '{"schema:"locations","gid:"7142c7ff-0951-4502-91f9-228dabaa0ddc","table:"locations"}',
                    value: {
                      fsType: 'DatasetReference',
                      target: {
                        fsType: 'Dataset',
                        schema: 'locations',
                        entityType: 'locations',
                        identifier: '7142c7ff-0951-4502-91f9-228dabaa0ddc',
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    ],
    previewId:
      'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1UTXlMQ0p6ZEc5eVpTSTZJbEJCUjBWVFZFOVNSU0o5In0=',
  },
  locale: {
    identifier: 'EN',
    country: 'GB',
    language: 'en',
  },
  previewId:
    'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1UUTVMQ0p6ZEc5eVpTSTZJbE5KVkVWVFZFOVNSU0o5In0=',
  _etag: {
    $oid: '5f17f62ad45def064a7ca32a',
  },
};

export const fsCmsPageInterfaceJsonWithFallbacks: FsCmsPageInterface = {
  _id: '1988949c-8a7f-4bcb-9649-2543cf0aa672.en_GB',
  fsType: 'PageRef',
  name: 'homepage',
  displayName: 'Homepage',
  identifier: '1988949c-8a7f-4bcb-9649-2543cf0aa672',
  uid: 'homepage',
  uidType: 'SITESTORE_LEAF',
  metaFormData: {},
  fallbackIdentifiers: [
    'f054949b-b342-43d5-b033-f9f96e124e83',
    'b83f6e1e-3036-45e7-8c43-aa3e891f599a',
    'e6d9c86c-a081-4199-9df1-7476ed3ac99a',
    'e05e1fb8-7e8d-45a2-8b71-89d4d4a5cc92',
  ],
  page: {
    fsType: 'Page',
    name: 'homepage',
    displayName: 'Homepage',
    identifier: '83388b06-3e10-486d-8623-4bfdbdd0968b',
    uid: 'homepage',
    uidType: 'PAGESTORE',
    template: {
      fsType: 'PageTemplate',
      name: 'LandingPage2',
      displayName: 'LandingPage2',
      identifier: 'c086cd6a-9fd6-4303-a60c-92f2887504eb',
      uid: 'landingpage2',
      uidType: 'TEMPLATESTORE',
    },
    formData: {},
    metaFormData: {},
    children: [
      {
        fsType: 'Body',
        name: 'bottomheaderslot',
        identifier: '219964fe-fbd7-4a07-9cff-800124390547',
        children: [
          {
            fsType: 'Section',
            name: 'teasercollection3',
            displayName: 'TeaserCollection3',
            identifier: 'f054949b-b342-43d5-b033-f9f96e124e83',
            template: {
              fsType: 'SectionTemplate',
              name: 'TeaserCollection3',
              displayName: 'TeaserCollection3',
              identifier: '103c8f80-ff11-4fc9-a302-b375bacb0edb',
              uid: 'teasercollection3',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_reference: {
                fsType: 'FS_REFERENCE',
                name: 'st_reference',
                value: {
                  fsType: 'Media',
                  name: 'spartacus_banner_restposten_en_4k_1',
                  identifier: 'bad0cbe3-5cad-4d80-99e8-db2d2013ef2e',
                  uid: 'spartacus_banner_restposten_en_4k_1',
                  uidType: 'MEDIASTORE_LEAF',
                  mediaType: 'PICTURE',
                  url:
                    'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/bad0cbe3-5cad-4d80-99e8-db2d2013ef2e.en_GB',
                  previewId:
                    'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1URTBMQ0p6ZEc5eVpTSTZJazFGUkVsQlUxUlBVa1VpZlE9PSJ9',
                },
              },
            },
          },
          {
            fsType: 'Section',
            name: 'teasercollection2',
            displayName: 'TeaserCollection2',
            identifier: 'b83f6e1e-3036-45e7-8c43-aa3e891f599a',
            template: {
              fsType: 'SectionTemplate',
              name: 'TeaserCollection2',
              displayName: 'TeaserCollection2',
              identifier: '2efe8e1e-6761-40d6-a33f-15c2f6248669',
              uid: 'teasercollection2',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_catalog: {
                fsType: 'FS_CATALOG',
                name: 'st_catalog',
                value: [
                  {
                    fsType: 'Card',
                    identifier: 'fcc180ba-2502-4d6c-987b-57311a9b6958',
                    uuid: 'fcc180ba-2502-4d6c-987b-57311a9b6958',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'Teaser',
                      displayName: 'Teaser',
                      identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                      uid: 'teaser',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_alt_text: {
                        fsType: 'CMS_INPUT_TEXT',
                        name: 'st_alt_text',
                        value: null,
                      },
                      st_image: {
                        fsType: 'CMS_INPUT_IMAGEMAP',
                        name: 'st_image',
                        value: {
                          fsType: 'MappingMedium',
                          areas: [
                            {
                              fsType: 'Area',
                              areaType: 'rect',
                              leftTop: {
                                x: 46,
                                y: 41,
                              },
                              link: {
                                template: {
                                  fsType: 'LinkTemplate',
                                  name: 'image',
                                  displayName: 'Image',
                                  identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                                  uid: 'image',
                                  uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                                },
                                formData: {
                                  st_alt_text: {
                                    fsType: 'CMS_INPUT_TEXT',
                                    name: 'st_alt_text',
                                    value: null,
                                  },
                                  st_picture: {
                                    fsType: 'FS_REFERENCE',
                                    name: 'st_picture',
                                    value: {
                                      fsType: 'Media',
                                      name: 'spartacus_buehne_startseite_en_4k_1',
                                      identifier: '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
                                      uid: 'spartacus_buehne_startseite_en_4k_1',
                                      uidType: 'MEDIASTORE_LEAF',
                                      mediaType: 'PICTURE',
                                      url:
                                        'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/2d6aff3f-a24c-4581-aeeb-985f7605e0aa.en_GB',
                                    },
                                  },
                                },
                              },
                              rightBottom: {
                                x: 146,
                                y: 141,
                              },
                            },
                            {
                              fsType: 'Area',
                              areaType: 'rect',
                              leftTop: {
                                x: 212,
                                y: 49,
                              },
                              link: {
                                template: {
                                  fsType: 'LinkTemplate',
                                  name: 'image',
                                  displayName: 'Image',
                                  identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                                  uid: 'image',
                                  uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                                },
                                formData: {
                                  st_alt_text: {
                                    fsType: 'CMS_INPUT_TEXT',
                                    name: 'st_alt_text',
                                    value: null,
                                  },
                                  st_picture: {
                                    fsType: 'FS_REFERENCE',
                                    name: 'st_picture',
                                    value: {
                                      fsType: 'Media',
                                      name: 'shop_contact_us_services_en_1',
                                      identifier: 'b857d839-0683-4a30-a7bb-983907a2303c',
                                      uid: 'shop_contact_us_services_en_1',
                                      uidType: 'MEDIASTORE_LEAF',
                                      mediaType: 'PICTURE',
                                      url:
                                        'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/b857d839-0683-4a30-a7bb-983907a2303c.en_GB',
                                    },
                                  },
                                },
                              },
                              rightBottom: {
                                x: 312,
                                y: 149,
                              },
                            },
                          ],
                          media: {
                            fsType: 'Media',
                            name: 'spartacus_banner_restposten_en_4k_1',
                            displayName: 'spartacus_banner-restposten_en_4k',
                            identifier: 'bad0cbe3-5cad-4d80-99e8-db2d2013ef2e',
                            uid: 'spartacus_banner_restposten_en_4k_1',
                            uidType: 'MEDIASTORE_LEAF',
                            mediaType: 'PICTURE',
                            url:
                              'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/bad0cbe3-5cad-4d80-99e8-db2d2013ef2e.en_GB',
                            pictureMetaData: {
                              fileSize: 123339,
                              extension: 'png',
                              mimeType: 'image/png',
                              width: 4000,
                              height: 1000,
                            },
                          },
                          resolution: {
                            fsType: 'Resolution',
                            uid: 'ORIGINAL',
                            width: 0,
                            height: 0,
                          },
                        },
                      },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '1bd138d7-8cab-4581-be67-11df1b484b74',
                    uuid: '1bd138d7-8cab-4581-be67-11df1b484b74',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'TeaserCollection1',
                      displayName: 'TeaserCollection1',
                      identifier: '04502b89-2f6c-4317-b6f2-fd810be4a690',
                      uid: 'teasercollection1',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_catalog: {
                        fsType: 'FS_CATALOG',
                        name: 'st_catalog',
                        value: [
                          {
                            fsType: 'Card',
                            identifier: '6bbcfed9-911a-4b1f-b6ea-a38d928eeaa1',
                            uuid: '6bbcfed9-911a-4b1f-b6ea-a38d928eeaa1',
                            template: {
                              fsType: 'LinkTemplate',
                              name: 'image',
                              displayName: 'Image',
                              identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                              uid: 'image',
                              uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                            },
                            formData: {
                              st_alt_text: {
                                fsType: 'CMS_INPUT_TEXT',
                                name: 'st_alt_text',
                                value: null,
                              },
                              st_picture: {
                                fsType: 'FS_REFERENCE',
                                name: 'st_picture',
                                value: {
                                  fsType: 'Media',
                                  name: 'shop_benefits_icons_en_1',
                                  identifier: '4d5e3ba2-a282-47be-872b-1c8a8d48d30a',
                                  uid: 'shop_benefits_icons_en_1',
                                  uidType: 'MEDIASTORE_LEAF',
                                  mediaType: 'PICTURE',
                                  url:
                                    'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/4d5e3ba2-a282-47be-872b-1c8a8d48d30a.en_GB',
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: '4fa0a8c7-ca66-4751-aa3b-8b5890a3eb0d',
                    uuid: '4fa0a8c7-ca66-4751-aa3b-8b5890a3eb0d',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'TeaserCollection3',
                      displayName: 'TeaserCollection3',
                      identifier: '103c8f80-ff11-4fc9-a302-b375bacb0edb',
                      uid: 'teasercollection3',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_reference: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_reference',
                        value: {
                          fsType: 'Media',
                          name: 'spartacus_newsletter_shop_footer_en_4k_1',
                          identifier: '5925413f-2b79-4030-8b06-b5209c4eef41',
                          uid: 'spartacus_newsletter_shop_footer_en_4k_1',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/5925413f-2b79-4030-8b06-b5209c4eef41.en_GB',
                        },
                      },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: 'a05cbc15-4e50-4651-8d21-2c74b0fb9158',
                    uuid: 'a05cbc15-4e50-4651-8d21-2c74b0fb9158',
                    template: {
                      fsType: 'SectionTemplate',
                      name: 'TeaserCollection2',
                      displayName: 'TeaserCollection2',
                      identifier: '2efe8e1e-6761-40d6-a33f-15c2f6248669',
                      uid: 'teasercollection2',
                      uidType: 'TEMPLATESTORE',
                    },
                    formData: {
                      st_catalog: {
                        fsType: 'FS_CATALOG',
                        name: 'st_catalog',
                        value: [
                          {
                            fsType: 'Card',
                            identifier: '079972ac-edf6-4552-a15c-9fa6b4214d3d',
                            uuid: '079972ac-edf6-4552-a15c-9fa6b4214d3d',
                            template: {
                              fsType: 'SectionTemplate',
                              name: 'Teaser',
                              displayName: 'Teaser',
                              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
                              uid: 'teaser',
                              uidType: 'TEMPLATESTORE',
                            },
                            formData: {
                              st_alt_text: {
                                fsType: 'CMS_INPUT_TEXT',
                                name: 'st_alt_text',
                                value: null,
                              },
                              st_image: {
                                fsType: 'CMS_INPUT_IMAGEMAP',
                                name: 'st_image',
                                value: {
                                  fsType: 'MappingMedium',
                                  areas: [
                                    {
                                      fsType: 'Area',
                                      areaType: 'rect',
                                      leftTop: {
                                        x: 50,
                                        y: 50,
                                      },
                                      link: {
                                        template: {
                                          fsType: 'LinkTemplate',
                                          name: 'image',
                                          displayName: 'Image',
                                          identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                                          uid: 'image',
                                          uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                                        },
                                        formData: {
                                          st_alt_text: {
                                            fsType: 'CMS_INPUT_TEXT',
                                            name: 'st_alt_text',
                                            value: null,
                                          },
                                          st_picture: {
                                            fsType: 'FS_REFERENCE',
                                            name: 'st_picture',
                                            value: {
                                              fsType: 'Media',
                                              name: 'spartacus_newsletter_shop_footer_en_4k_1',
                                              identifier: '5925413f-2b79-4030-8b06-b5209c4eef41',
                                              uid: 'spartacus_newsletter_shop_footer_en_4k_1',
                                              uidType: 'MEDIASTORE_LEAF',
                                              mediaType: 'PICTURE',
                                              url:
                                                'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/5925413f-2b79-4030-8b06-b5209c4eef41.en_GB',
                                            },
                                          },
                                        },
                                      },
                                      rightBottom: {
                                        x: 150,
                                        y: 150,
                                      },
                                    },
                                  ],
                                  media: {
                                    fsType: 'Media',
                                    name: 'spartacus_buehne_startseite_en_4k_1',
                                    displayName: 'spartacus_buehne_startseite_en_4k',
                                    identifier: '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
                                    uid: 'spartacus_buehne_startseite_en_4k_1',
                                    uidType: 'MEDIASTORE_LEAF',
                                    mediaType: 'PICTURE',
                                    url:
                                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/2d6aff3f-a24c-4581-aeeb-985f7605e0aa.en_GB',
                                    pictureMetaData: {
                                      fileSize: 1752864,
                                      extension: 'png',
                                      mimeType: 'image/png',
                                      width: 4000,
                                      height: 1180,
                                    },
                                  },
                                  resolution: {
                                    fsType: 'Resolution',
                                    uid: 'ORIGINAL',
                                    width: 0,
                                    height: 0,
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            fsType: 'Section',
            name: 'teasercollection1',
            displayName: 'TeaserCollection1',
            identifier: 'e6d9c86c-a081-4199-9df1-7476ed3ac99a',
            template: {
              fsType: 'SectionTemplate',
              name: 'TeaserCollection1',
              displayName: 'TeaserCollection1',
              identifier: '04502b89-2f6c-4317-b6f2-fd810be4a690',
              uid: 'teasercollection1',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_catalog: {
                fsType: 'FS_CATALOG',
                name: 'st_catalog',
                value: [
                  {
                    fsType: 'Card',
                    identifier: '941b10ff-2a45-46c8-82b9-125bab90bdb1',
                    uuid: '941b10ff-2a45-46c8-82b9-125bab90bdb1',
                    template: {
                      fsType: 'LinkTemplate',
                      name: 'image',
                      displayName: 'Image',
                      identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                      uid: 'image',
                      uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                    },
                    formData: {
                      st_alt_text: {
                        fsType: 'CMS_INPUT_TEXT',
                        name: 'st_alt_text',
                        value: null,
                      },
                      st_picture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_picture',
                        value: {
                          fsType: 'Media',
                          name: 'shop_contact_us_services_en_1',
                          identifier: 'b857d839-0683-4a30-a7bb-983907a2303c',
                          uid: 'shop_contact_us_services_en_1',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/b857d839-0683-4a30-a7bb-983907a2303c.en_GB',
                        },
                      },
                    },
                  },
                  {
                    fsType: 'Card',
                    identifier: 'dd15c332-d545-4b7b-94a4-b06e380d2695',
                    uuid: 'dd15c332-d545-4b7b-94a4-b06e380d2695',
                    template: {
                      fsType: 'LinkTemplate',
                      name: 'image',
                      displayName: 'Image',
                      identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                      uid: 'image',
                      uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                    },
                    formData: {
                      st_alt_text: {
                        fsType: 'CMS_INPUT_TEXT',
                        name: 'st_alt_text',
                        value: null,
                      },
                      st_picture: {
                        fsType: 'FS_REFERENCE',
                        name: 'st_picture',
                        value: {
                          fsType: 'Media',
                          name: 'spartacus_banner_contact_us_en_4k_1',
                          identifier: '3fd41ea5-0ac6-4ae0-a984-20f6d618773b',
                          uid: 'spartacus_banner_contact_us_en_4k_1',
                          uidType: 'MEDIASTORE_LEAF',
                          mediaType: 'PICTURE',
                          url:
                            'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/3fd41ea5-0ac6-4ae0-a984-20f6d618773b.en_GB',
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            fsType: 'Section',
            name: 'teaser',
            displayName: 'Teaser',
            identifier: 'e4f5631c-2be8-49f4-bf00-a2691ed502eb',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_alt_text',
                value: null,
              },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 50,
                        y: 50,
                      },
                      link: {
                        template: {
                          fsType: 'LinkTemplate',
                          name: 'image',
                          displayName: 'Image',
                          identifier: '62fc2c12-2bab-4b22-89ff-9024fb9605aa',
                          uid: 'image',
                          uidType: 'TEMPLATESTORE_LINKTEMPLATE',
                        },
                        formData: {
                          st_alt_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'st_alt_text',
                            value: null,
                          },
                          st_picture: {
                            fsType: 'FS_REFERENCE',
                            name: 'st_picture',
                            value: {
                              fsType: 'Media',
                              name: 'spartacus_banner_delivery_en_4k_1',
                              identifier: '7a36d14d-6b4f-409f-bfa8-807d307f6c1e',
                              uid: 'spartacus_banner_delivery_en_4k_1',
                              uidType: 'MEDIASTORE_LEAF',
                              mediaType: 'PICTURE',
                              url:
                                'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/7a36d14d-6b4f-409f-bfa8-807d307f6c1e.en_GB',
                            },
                          },
                        },
                      },
                      rightBottom: {
                        x: 150,
                        y: 150,
                      },
                    },
                  ],
                  media: {
                    fsType: 'Media',
                    name: 'spartacus_buehne_startseite_en_4k_1',
                    displayName: 'spartacus_buehne_startseite_en_4k',
                    identifier: '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
                    uid: 'spartacus_buehne_startseite_en_4k_1',
                    uidType: 'MEDIASTORE_LEAF',
                    mediaType: 'PICTURE',
                    url:
                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/2d6aff3f-a24c-4581-aeeb-985f7605e0aa.en_GB',
                    pictureMetaData: {
                      fileSize: 1752864,
                      extension: 'png',
                      mimeType: 'image/png',
                      width: 4000,
                      height: 1180,
                    },
                    previewId:
                      'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1URTFMQ0p6ZEc5eVpTSTZJazFGUkVsQlUxUlBVa1VpZlE9PSJ9',
                  },
                  resolution: {
                    fsType: 'Resolution',
                    uid: 'ORIGINAL',
                    width: 0,
                    height: 0,
                  },
                },
              },
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
              st_alt_text: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_alt_text',
                value: null,
              },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: {
                    fsType: 'Media',
                    name: 'spartacus_newsletter_shop_footer_en_4k_1',
                    displayName: 'spartacus_newsletter-shop-footer_en_4k',
                    identifier: '5925413f-2b79-4030-8b06-b5209c4eef41',
                    uid: 'spartacus_newsletter_shop_footer_en_4k_1',
                    uidType: 'MEDIASTORE_LEAF',
                    mediaType: 'PICTURE',
                    url:
                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/5925413f-2b79-4030-8b06-b5209c4eef41.en_GB',
                    pictureMetaData: {
                      fileSize: 1016341,
                      extension: 'png',
                      mimeType: 'image/png',
                      width: 4000,
                      height: 1600,
                    },
                    previewId:
                      'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1URTJMQ0p6ZEc5eVpTSTZJazFGUkVsQlUxUlBVa1VpZlE9PSJ9',
                  },
                  resolution: {
                    fsType: 'Resolution',
                    uid: 'ORIGINAL',
                    width: 0,
                    height: 0,
                  },
                },
              },
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
            name: 'teaser_1',
            displayName: 'Teaser',
            identifier: '067f9b53-3e81-45b4-bd83-c3bbe0bca36a',
            template: {
              fsType: 'SectionTemplate',
              name: 'Teaser',
              displayName: 'Teaser',
              identifier: 'd02a9649-7766-480c-ab3b-ccadc119388c',
              uid: 'teaser',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_alt_text: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_alt_text',
                value: null,
              },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [],
                  media: {
                    fsType: 'Media',
                    name: 'shop_benefits_icons_en_1',
                    displayName: 'shop-benefits_icons_en_1140@2x',
                    identifier: '4d5e3ba2-a282-47be-872b-1c8a8d48d30a',
                    uid: 'shop_benefits_icons_en_1',
                    uidType: 'MEDIASTORE_LEAF',
                    mediaType: 'PICTURE',
                    url:
                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/4d5e3ba2-a282-47be-872b-1c8a8d48d30a.en_GB',
                    pictureMetaData: {
                      fileSize: 6081,
                      extension: 'png',
                      mimeType: 'image/png',
                      width: 1140,
                      height: 180,
                    },
                    previewId:
                      'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1URXdMQ0p6ZEc5eVpTSTZJazFGUkVsQlUxUlBVa1VpZlE9PSJ9',
                  },
                  resolution: {
                    fsType: 'Resolution',
                    uid: 'ORIGINAL',
                    width: 0,
                    height: 0,
                  },
                },
              },
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
              st_alt_text: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_alt_text',
                value: null,
              },
              st_image: {
                fsType: 'CMS_INPUT_IMAGEMAP',
                name: 'st_image',
                value: {
                  fsType: 'MappingMedium',
                  areas: [
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 746,
                        y: 121,
                      },
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
                            value: [
                              {
                                fsType: 'Record',
                                identifier: 'electronicsProductCatalog/brand_88',
                              },
                            ],
                          },
                          lt_tooltip_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'lt_tooltip_text',
                            value: 'View all Kodak products',
                          },
                        },
                      },
                      rightBottom: {
                        x: 941,
                        y: 201,
                      },
                    },
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 392,
                        y: 20,
                      },
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
                            value: [
                              {
                                fsType: 'Record',
                                identifier: 'electronicsProductCatalog/brand_26',
                              },
                            ],
                          },
                          lt_tooltip_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'lt_tooltip_text',
                            value: 'View all Samsung products',
                          },
                        },
                      },
                      rightBottom: {
                        x: 588,
                        y: 102,
                      },
                    },
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 173,
                        y: 19,
                      },
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
                            value: [
                              {
                                fsType: 'Record',
                                identifier: 'electronicsProductCatalog/brand_5',
                              },
                            ],
                          },
                          lt_tooltip_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'lt_tooltip_text',
                            value: 'View all Sony products',
                          },
                        },
                      },
                      rightBottom: {
                        x: 373,
                        y: 103,
                      },
                    },
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 962,
                        y: 120,
                      },
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
                            value: [
                              {
                                fsType: 'Record',
                                identifier: 'electronicsProductCatalog/brand_75',
                              },
                            ],
                          },
                          lt_tooltip_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'lt_tooltip_text',
                            value: 'View all Fujifilm products',
                          },
                        },
                      },
                      rightBottom: {
                        x: 1159,
                        y: 201,
                      },
                    },
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 610,
                        y: 21,
                      },
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
                            value: [
                              {
                                fsType: 'Record',
                                identifier: 'electronicsProductCatalog/brand_1',
                              },
                            ],
                          },
                          lt_tooltip_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'lt_tooltip_text',
                            value: 'View all HP products',
                          },
                        },
                      },
                      rightBottom: {
                        x: 808,
                        y: 104,
                      },
                    },
                    {
                      fsType: 'Area',
                      areaType: 'rect',
                      leftTop: {
                        x: 528,
                        y: 120,
                      },
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
                            value: [
                              {
                                fsType: 'Record',
                                identifier: 'electronicsProductCatalog/brand_10',
                              },
                            ],
                          },
                          lt_tooltip_text: {
                            fsType: 'CMS_INPUT_TEXT',
                            name: 'lt_tooltip_text',
                            value: 'View all Canon products',
                          },
                        },
                      },
                      rightBottom: {
                        x: 724,
                        y: 201,
                      },
                    },
                  ],
                  media: {
                    fsType: 'Media',
                    name: 'spartacus_start_banner_teaser_kachel_en_1',
                    displayName: 'spartacus_start_banner_teaser-kachel_en@2x',
                    identifier: 'b5c1ab9c-438f-46cf-b34a-e98f9d7277d5',
                    uid: 'spartacus_start_banner_teaser_kachel_en_1',
                    uidType: 'MEDIASTORE_LEAF',
                    mediaType: 'PICTURE',
                    url:
                      'https://caas-platform-deploy-hybris-caas-api.e-spirit.cloud/0a4149a2-38e5-4763-bb97-12dab59a8cd8/preview.content/b5c1ab9c-438f-46cf-b34a-e98f9d7277d5.en_GB',
                    pictureMetaData: {
                      fileSize: 1147266,
                      extension: 'png',
                      mimeType: 'image/png',
                      width: 2280,
                      height: 1911,
                    },
                    previewId:
                      'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1URTNMQ0p6ZEc5eVpTSTZJazFGUkVsQlUxUlBVa1VpZlE9PSJ9',
                  },
                  resolution: {
                    fsType: 'Resolution',
                    uid: 'ORIGINAL',
                    width: 0,
                    height: 0,
                  },
                },
              },
            },
          },
        ],
      },
      {
        fsType: 'Body',
        name: 'section2a',
        identifier: '9a5f1003-e156-4e5f-b278-83c848b611cf',
        children: [
          {
            fsType: 'Section',
            name: 'location_overview',
            displayName: 'Location-Overview',
            identifier: 'e05e1fb8-7e8d-45a2-8b71-89d4d4a5cc92',
            template: {
              fsType: 'SectionTemplate',
              name: 'Location-Overview',
              displayName: 'Location-Overview',
              identifier: 'f3d6556d-c45e-4a5a-b086-6290387fbf65',
              uid: 'location_overview',
              uidType: 'TEMPLATESTORE',
            },
            formData: {
              st_headline: {
                fsType: 'CMS_INPUT_TEXT',
                name: 'st_headline',
                value: null,
              },
              st_locations: {
                fsType: 'FS_INDEX',
                name: 'st_locations',
                dapType: 'DatasetDataAccessPlugin',
                value: [
                  {
                    fsType: 'Record',
                    identifier: '{"schema:"locations","gid:"7142c7ff-0951-4502-91f9-228dabaa0ddc","table:"locations"}',
                    value: {
                      fsType: 'DatasetReference',
                      target: {
                        fsType: 'Dataset',
                        schema: 'locations',
                        entityType: 'locations',
                        identifier: '7142c7ff-0951-4502-91f9-228dabaa0ddc',
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    ],
    previewId:
      'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1UTXlMQ0p6ZEc5eVpTSTZJbEJCUjBWVFZFOVNSU0o5In0=',
  },
  locale: {
    identifier: 'EN',
    country: 'GB',
    language: 'en',
  },
  previewId:
    'eyJkYXRhLWZzLWF0dHJzIjoiZXlKc1lXNW5kV0ZuWlVGaVluSmxkbWxoZEdsdmJpSTZJa1ZPSW4wPSIsImRhdGEtZnMtaWQiOiJleUpwWkNJNk1UUTVMQ0p6ZEc5eVpTSTZJbE5KVkVWVFZFOVNSU0o5In0=',
  _etag: {
    $oid: '5f17f62ad45def064a7ca32a',
  },
};

export const caasResult = {
  _id: 'preview.content',
  _etag: {
    $oid: '5e1dbce12c53e20001005958',
  },
  _returned: 1,
  _embedded: {
    'rh:doc': [fsCmsPageInterfaceJson],
  },
};

export const caasFilterResult = {
  _id: 'release.content',
  _etag: {
    $oid: '5f22a473d45def064a7cb081',
  },
  _returned: 8,
  _embedded: {
    'rh:doc': [
      {
        identifier: 'bad0cbe3-5cad-4d80-99e8-db2d2013ef2e',
      },
      {
        identifier: '2d6aff3f-a24c-4581-aeeb-985f7605e0aa',
      },
      {
        identifier: 'b857d839-0683-4a30-a7bb-983907a2303c',
      },
      {
        identifier: '4d5e3ba2-a282-47be-872b-1c8a8d48d30a',
      },
      {
        identifier: '5925413f-2b79-4030-8b06-b5209c4eef41',
      },
      {
        identifier: '3fd41ea5-0ac6-4ae0-a984-20f6d618773b',
      },
      {
        identifier: '7a36d14d-6b4f-409f-bfa8-807d307f6c1e',
      },
      {
        identifier: 'b5c1ab9c-438f-46cf-b34a-e98f9d7277d5',
      },
    ],
  },
};

export const fsCmsPageInterfaceJsonWithoutMedia: FsCmsPageInterface = {
  _id: '52d5d1e7-d485-43cf-bd4f-e9afc0a8c87d.de_DE',
  fsType: 'PageRef',
  name: 'test_11wtjz8lfdfkq',
  displayName: 'Test',
  identifier: '52d5d1e7-d485-43cf-bd4f-e9afc0a8c87d',
  uid: 'test_11wtjz8lfdfkq',
  uidType: 'SITESTORE_LEAF',
  metaFormData: {},
  page: {
    fsType: 'Page',
    name: 'test_11wtjz8lfdfkq',
    displayName: 'Test',
    identifier: '306dd85e-1f45-4dcb-a1c3-1faafc40c536',
    uid: 'test_11wtjz8lfdfkq',
    uidType: 'PAGESTORE',
    template: {
      fsType: 'PageTemplate',
      name: 'ContentPage1Template',
      displayName: 'ContentPage1Template',
      identifier: 'e97b0ed9-e85d-436e-94d4-42fdbc4dee54',
      uid: 'contentpage1template',
      uidType: 'TEMPLATESTORE',
    },
    formData: {
      pt_cc_identifier: {
        fsType: 'CMS_INPUT_TEXT',
        name: 'pt_cc_identifier',
        value: 'ContentPage:test_11wtjz8lfdfkq',
      },
    },
    metaFormData: {},
    children: [
      {
        fsType: 'Body',
        name: 'bottomheaderslot',
        identifier: '69b7cb37-a01b-4fad-aa67-7a395b73663b',
        children: [],
      },
      {
        fsType: 'Body',
        name: 'section2a',
        identifier: 'c3cc1a5f-5c31-4ed2-bddc-b7ab80df0cd5',
        children: [],
      },
      {
        fsType: 'Body',
        name: 'prefooterslot',
        identifier: 'd8034aa5-a76c-4ee7-8ffc-527dfa8b7f6a',
        children: [],
      },
    ],
  },
  locale: {
    identifier: 'DE',
    country: 'DE',
    language: 'de',
  },
  _etag: {
    $oid: '5fcfae9b1249cf198b067a3f',
  },
};

export const caasFilterResultWithoutMedia = {
  _id: 'release.content',
  _etag: {
    $oid: '5fcfae9b1249cf198b067a3f',
  },
  _returned: 0,
  _embedded: {
    'rh:doc': [],
  },
};

export const caasFilterResultWithDataset = {
  _id: 'f3faa801-6ed3-4c7e-98f1-179b6f4d4d29.preview.content',
  _etag: {
    $oid: '607d24c31ebdf33b1439c515',
  },
  streams: [
    {
      uri: 'crud',
      stages: [
        {
          _$match: {
            _$or: [
              {
                operationType: 'insert',
              },
              {
                operationType: 'update',
              },
              {
                operationType: 'replace',
              },
              {
                operationType: 'delete',
              },
            ],
          },
        },
      ],
    },
  ],
  _returned: 1,
  _embedded: {
    'rh:doc': [
      {
        _id: '7142c7ff-0951-4502-91f9-228dabaa0ddc.en_GB',
        fsType: 'Dataset',
        schema: 'locations',
        entityType: 'locations',
        displayName: 'Any City',
        identifier: '7142c7ff-0951-4502-91f9-228dabaa0ddc',
        template: {
          fsType: 'TableTemplate',
          name: 'Locations',
          displayName: 'Locations',
          identifier: 'cc104bd6-c87b-4637-b9ba-a7c8b9c10488',
          uid: 'locations.locations',
          uidType: 'TEMPLATESTORE_SCHEMA',
        },
        formData: {
          tt_city: {
            fsType: 'CMS_INPUT_TEXT',
            name: 'tt_city',
            value: 'Any City',
          },
          tt_number: {
            fsType: 'CMS_INPUT_TEXT',
            name: 'tt_number',
            value: '123',
          },
          tt_street: {
            fsType: 'CMS_INPUT_TEXT',
            name: 'tt_street',
            value: 'Any Street',
          },
          tt_zip: {
            fsType: 'CMS_INPUT_TEXT',
            name: 'tt_zip',
            value: '12345',
          },
        },
        route: '',
        changeInfo: {
          date: '2021-07-26T10:20Z',
          revision: 141,
        },
        locale: {
          identifier: 'EN',
          country: 'GB',
          language: 'en',
        },
        _etag: {
          $oid: '60fe8c53505a901e388f61b5',
        },
      },
    ],
  },
  _links: {
    crud: {
      href: '/SpartacusShowcaseLSc/f3faa801-6ed3-4c7e-98f1-179b6f4d4d29.preview.content/_streams/crud',
    },
  },
};
