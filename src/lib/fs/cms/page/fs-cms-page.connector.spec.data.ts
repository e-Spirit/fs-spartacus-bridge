import { CmsStructureModel } from '@spartacus/core';

export const occCmsStructureModel: CmsStructureModel = {
  page: {
    pageId: 'occCmsPage',
    template: 'LandingPage2Template',
    slots: {
      stage_body: {},
      main_body: {},
    },
  },
  components: [],
};

export const fsCmsStructureModel: CmsStructureModel = {
  page: {
    pageId: 'fsCmsPage',
    template: 'LandingPage2Template',
    slots: {},
  },
};

export const fsDrivenCmsStructureModel: CmsStructureModel = {
  page: {
    pageId: 'fsCmsPage',
    template: 'FsDrivenPageTemplate',
    slots: {},
    properties: {
      previewId: '688442cf-93be-4a0a-a01f-9d7d05be7172.en_GB',
      formData: {
        pt_seoUrl: {
          fsType: 'CMS_INPUT_TEXT',
          name: 'pt_seoUrl',
          value: 'homepage_seo',
        },
      },
      metaFormData: {},
    },
  },
};

export const occResponseWithSapSkeleton: any = {
  page: {
    loadTime: 1602835903086,
    name: 'Homepage',
    type: 'ContentPage',
    title: 'Homepage',
    pageId: 'homepage',
    template: 'LandingPage2Template',
    properties: {
      fsPageTemplate: 'fsdrivenlandingpage2template',
    },
    slots: {
      Section1: {
        components: [
          {
            uid: 'ElectronicsHompageSplashBannerComponent',
            typeCode: 'SimpleResponsiveBannerComponent',
            flexType: 'SimpleResponsiveBannerComponent',
          },
          {
            uid: 'ElectronicsHompageDiscountBannerComponent',
            typeCode: 'SimpleResponsiveBannerComponent',
            flexType: 'SimpleResponsiveBannerComponent',
          },
        ],
      },
      Section2A: {
        components: [
          {
            uid: 'ElectronicsHompageLightFamBannerComponent',
            typeCode: 'SimpleResponsiveBannerComponent',
            flexType: 'SimpleResponsiveBannerComponent',
          },
          {
            uid: 'ElectronicsHompageLightFamTextBannerComponent',
            typeCode: 'SimpleResponsiveBannerComponent',
            flexType: 'SimpleResponsiveBannerComponent',
          },
        ],
      },
      Section2B: {
        components: [
          {
            uid: 'ElectronicsHompageCamcordersBannerComponent',
            typeCode: 'SimpleResponsiveBannerComponent',
            flexType: 'SimpleResponsiveBannerComponent',
          },
          {
            uid: 'ElectronicsHompageCamcordersChildBannerComponent',
            typeCode: 'SimpleResponsiveBannerComponent',
            flexType: 'SimpleResponsiveBannerComponent',
          },
        ],
      },
      Section2C: {
        components: [
          {
            uid: 'HomepageE2EMerchandisingCarousel',
            typeCode: 'MerchandisingCarouselComponent',
            flexType: 'MerchandisingCarouselComponent',
          },
        ],
      },
      Section3: {
        components: [
          {
            uid: 'ElectronicsHomepageProductCarouselComponent',
            typeCode: 'ProductCarouselComponent',
            flexType: 'ProductCarouselComponent',
          },
          {
            uid: 'NewElectronicsHomepageProductCarouselComponent',
            typeCode: 'ProductCarouselComponent',
            flexType: 'ProductCarouselComponent',
          },
        ],
      },
      Section4: {
        components: [
          {
            uid: 'ElectronicsHompageShipmentBannerComponent',
            typeCode: 'SimpleResponsiveBannerComponent',
            flexType: 'SimpleResponsiveBannerComponent',
          },
          {
            uid: 'ElectronicsHompageShopBannerComponent',
            typeCode: 'SimpleResponsiveBannerComponent',
            flexType: 'SimpleResponsiveBannerComponent',
          },
          {
            uid: 'ElectronicsHompageSmDiscountBannerComponent',
            typeCode: 'SimpleResponsiveBannerComponent',
            flexType: 'SimpleResponsiveBannerComponent',
          },
          {
            uid: 'ElectronicsHompageServiceBannerComponent',
            typeCode: 'SimpleResponsiveBannerComponent',
            flexType: 'SimpleResponsiveBannerComponent',
          },
        ],
      },
      Section5: {
        components: [
          {
            uid: 'ElectronicsHompageFreeDelBannerComponent',
            typeCode: 'SimpleResponsiveBannerComponent',
            flexType: 'SimpleResponsiveBannerComponent',
          },
        ],
      },
      BottomHeaderSlot: { components: [] },
      SiteLogo: {
        components: [
          {
            uid: 'SiteLogoComponent',
            typeCode: 'SimpleBannerComponent',
            flexType: 'SimpleBannerComponent',
          },
        ],
      },
      HomepageNavLink: {
        components: [
          {
            uid: 'HomepageNavLink',
            typeCode: 'CMSLinkComponent',
            flexType: 'CMSLinkComponent',
          },
        ],
      },
      NavigationBar: {
        components: [
          {
            uid: 'ElectronicsCategoryNavComponent',
            typeCode: 'CategoryNavigationComponent',
            flexType: 'CategoryNavigationComponent',
          },
        ],
      },
      MiniCart: {
        components: [
          {
            uid: 'MiniCart',
            typeCode: 'MiniCartComponent',
            flexType: 'MiniCartComponent',
          },
        ],
      },
      Footer: {
        components: [
          {
            uid: 'FooterNavigationComponent',
            typeCode: 'FooterNavigationComponent',
            flexType: 'FooterNavigationComponent',
          },
          {
            uid: 'AnonymousConsentOpenDialogComponent',
            typeCode: 'CMSFlexComponent',
            flexType: 'AnonymousConsentOpenDialogComponent',
          },
          {
            uid: 'NoticeTextParagraph',
            typeCode: 'CMSParagraphComponent',
            flexType: 'CMSParagraphComponent',
          },
          {
            uid: 'AnonymousConsentManagementBannerComponent',
            typeCode: 'CMSFlexComponent',
            flexType: 'AnonymousConsentManagementBannerComponent',
          },
        ],
      },
      HeaderLinks: { components: [] },
      SearchBox: {
        components: [
          {
            uid: 'SearchBox',
            typeCode: 'SearchBoxComponent',
            flexType: 'SearchBoxComponent',
          },
        ],
      },
      TopHeaderSlot: { components: [] },
      PlaceholderContentSlot: {
        components: [
          {
            uid: 'PersonalizationScriptComponent',
            typeCode: 'PersonalizationScriptComponent',
            properties: {
              script: { data: 'eyJhY3Rpb25zIjpbXSwic2VnbWVudHMiOltdfQ==' },
            },
            flexType: 'PersonalizationScriptComponent',
          },
          {
            uid: 'ProfileTagScriptComponent',
            typeCode: 'ProfileTagScriptComponent',
            flexType: 'ProfileTagScriptComponent',
          },
        ],
      },
      SiteContext: {
        components: [
          {
            uid: 'LanguageComponent',
            typeCode: 'CMSSiteContextComponent',
            flexType: 'CMSSiteContextComponent',
          },
          {
            uid: 'CurrencyComponent',
            typeCode: 'CMSSiteContextComponent',
            flexType: 'CMSSiteContextComponent',
          },
        ],
      },
      SiteLinks: {
        components: [
          {
            uid: 'StoreFinderLink',
            typeCode: 'CMSLinkComponent',
            flexType: 'CMSLinkComponent',
          },
          {
            uid: 'ContactUsLink',
            typeCode: 'CMSLinkComponent',
            flexType: 'CMSLinkComponent',
          },
          {
            uid: 'HelpLink',
            typeCode: 'CMSLinkComponent',
            flexType: 'CMSLinkComponent',
          },
        ],
      },
    },
    label: 'homepage',
  },
  components: [
    {
      uid: 'ElectronicsHompageSplashBannerComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0hvbXBhZ2VTcGxhc2hCYW5uZXJDb21wb25lbnQiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
      typeCode: 'SimpleResponsiveBannerComponent',
      modifiedTime: '2020-10-01T01:40:05.023Z',
      name: 'Electronics Homepage Splash Banner Component',
      container: 'false',
      containerMetadata: {
        sourceId: 'Section1SlotHomepageCxContainer',
        container: 'true',
        uid: 'Section1SlotHomepageCxContainer',
        name: 'Section1SlotHomepageCxContainer',
        uuid:
          'eyJpdGVtSWQiOiJTZWN0aW9uMVNsb3RIb21lcGFnZUN4Q29udGFpbmVyIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
        typeCode: 'CxCmsComponentContainer',
      },
      media: {
        tablet: {
          code: 'Elec_770x350_HomeSpeed_EN_01_770W.jpg',
          mime: 'image/jpeg',
          altText: 'Save Big On Select SLR & DSLR Cameras',
          url:
            '/medias/Elec-770x350-HomeSpeed-EN-01-770W.jpg?context=bWFzdGVyfGltYWdlc3w1MzAzOHxpbWFnZS9qcGVnfGltYWdlcy9oNmYvaGMxLzg3OTY5NzAzNTI2NzAuanBnfGUyMmQ4MmJhMjI1MWI4MzAwMmE0MmRmNTc1Mzk3ZjEwYzlkNjRhMzM5MTRlMzQxYWZlOWFjMDUxNmU3MmM4Y2I',
        },
        desktop: {
          code: 'Elec_960x330_HomeSpeed_EN_01_960W.jpg',
          mime: 'image/jpeg',
          altText: 'Save Big On Select SLR & DSLR Cameras',
          url:
            '/medias/Elec-960x330-HomeSpeed-EN-01-960W.jpg?context=bWFzdGVyfGltYWdlc3w1MzE2M3xpbWFnZS9qcGVnfGltYWdlcy9oYjgvaDJmLzg3OTY5NzA0ODM3NDIuanBnfDZiMDk4ODcyZTIwOWZhYzVhOWFlNjc0MzhlN2FlMjY2OGE5NWQ0M2ExYjI2YzVmZWFkMmEyMGFlMDQ0ODlkMjg',
        },
        mobile: {
          code: 'Elec_480x320_HomeSpeed_EN_01_480W.jpg',
          mime: 'image/jpeg',
          altText: 'Save Big On Select SLR & DSLR Cameras',
          url:
            '/medias/Elec-480x320-HomeSpeed-EN-01-480W.jpg?context=bWFzdGVyfGltYWdlc3wzMzkzMnxpbWFnZS9qcGVnfGltYWdlcy9oMmYvaGMwLzg3OTY5NzAyODcxMzQuanBnfGNjYmJkNmJhOTE4NWZiZDQ4NTViMjQ0Y2FkMjZjMTk1ZjQ3YzI0ZjY1MjRiZjkwZWY3MGZjYjcyNjY1NDIxM2Q',
        },
        widescreen: {
          code: 'Elec_1400x440_HomeSpeed_EN_01_1400W.jpg',
          mime: 'image/jpeg',
          altText: 'Save Big On Select SLR & DSLR Cameras',
          url:
            '/medias/Elec-1400x440-HomeSpeed-EN-01-1400W.jpg?context=bWFzdGVyfGltYWdlc3w4MTk4OHxpbWFnZS9qcGVnfGltYWdlcy9oNDIvaDBkLzg3OTY5NzAwOTA1MjYuanBnfGZjYWU3YWQxMDhkMWY5ZWE4NDMxNTgwMWYxZGYyNGZiNGNjMmJjZGQ4YTU2MDIxMGUyN2U3NmM4MWI0ZWM4OTE',
        },
      },
      urlLink: '/OpenCatalogue/Cameras/Digital-Cameras/Digital-SLR/c/578',
    },
    {
      uid: 'ElectronicsHompageDiscountBannerComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0hvbXBhZ2VEaXNjb3VudEJhbm5lckNvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
      typeCode: 'SimpleResponsiveBannerComponent',
      modifiedTime: '2020-10-01T01:40:04.972Z',
      name: 'Electronics Homepage Discount Banner Component',
      container: 'false',
      media: {
        tablet: {
          code: 'Elec_770x80_HomeDiscount_EN_01_770W.jpg',
          mime: 'image/jpeg',
          altText: 'Save Big on Select Camera Accessories & Supplies',
          url:
            '/medias/Elec-770x80-HomeDiscount-EN-01-770W.jpg?context=bWFzdGVyfGltYWdlc3w5NTAwfGltYWdlL2pwZWd8aW1hZ2VzL2hkZS9oNWEvODc5Njk3MDQxODIwNi5qcGd8YjQ0MWRjY2Q2Mzk2MjNiNmNhMmJiYzUxM2UyZWQxNGJkNmQ4MzAyZmM2ZjBjY2ZmNTFhMDNlYjA1M2UzMzkzYQ',
        },
        desktop: {
          code: 'Elec_960x80_HomeDiscount_EN_01_960W.jpg',
          mime: 'image/jpeg',
          altText: 'Save Big on Select Camera Accessories & Supplies',
          url:
            '/medias/Elec-960x80-HomeDiscount-EN-01-960W.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ2NnxpbWFnZS9qcGVnfGltYWdlcy9oZDIvaDEwLzg3OTY5NzA1NDkyNzguanBnfDE3MTAyZjBhMTFkZjNlMmVmZDRjZDI3YzA0NmQ5NGM5YzQzODM5MDE3YjY2ZGU4MzBlNzk4M2I2Nzk4ODcwMDc',
        },
        mobile: {
          code: 'Elec_480x118_HomeDiscount_EN_01_480W.jpg',
          mime: 'image/jpeg',
          altText: 'Save Big on Select Camera Accessories & Supplies',
          url:
            '/medias/Elec-480x118-HomeDiscount-EN-01-480W.jpg?context=bWFzdGVyfGltYWdlc3wxMDcxNXxpbWFnZS9qcGVnfGltYWdlcy9oODgvaGFhLzg3OTY5NzAyMjE1OTguanBnfGNiNDk1ZWE4YTJlY2E5MWE0YzcyZTk4NzI5N2Q3NzMyZjQzNzNhMmZhZWFkZDJjMTYyN2UxOTU2OGE3YjU2YTg',
        },
        widescreen: {
          code: 'Elec_1400x80_HomeDiscount_EN_01_1400W.jpg',
          mime: 'image/jpeg',
          altText: 'Save Big on Select Camera Accessories & Supplies',
          url:
            '/medias/Elec-1400x80-HomeDiscount-EN-01-1400W.jpg?context=bWFzdGVyfGltYWdlc3wxMTE0MnxpbWFnZS9qcGVnfGltYWdlcy9oNzcvaDJlLzg3OTY5NzAxNTYwNjIuanBnfDNjNjVmZTFkZWEzMGUwMzAyZjUzYjljOTJkMWI5NTZjZWQxNmJhYTVkNDE4MTAyNDQ1OGFiMjM0ZGRmM2I5ZTc',
        },
      },
      urlLink: '/Open-Catalogue/Cameras/Camera-Accessories-%26-Supplies/c/585',
    },
    {
      uid: 'ElectronicsHompageLightFamBannerComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0hvbXBhZ2VMaWdodEZhbUJhbm5lckNvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
      typeCode: 'SimpleResponsiveBannerComponent',
      modifiedTime: '2020-10-01T01:40:06.324Z',
      name: 'Electronics Homepage Light Family Banner Component',
      container: 'false',
      containerMetadata: {
        sourceId: 'Section2ASlotHomepageCxContainer',
        container: 'true',
        uid: 'Section2ASlotHomepageCxContainer',
        name: 'Section2ASlotHomepageCxContainer',
        uuid:
          'eyJpdGVtSWQiOiJTZWN0aW9uMkFTbG90SG9tZXBhZ2VDeENvbnRhaW5lciIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
        typeCode: 'CxCmsComponentContainer',
      },
      media: {
        tablet: {
          code: 'Elec_200x150_HomeFam_EN_01_200W.jpg',
          mime: 'image/jpeg',
          altText: 'Compact Cameras',
          url:
            '/medias/Elec-200x150-HomeFam-EN-01-200W.jpg?context=bWFzdGVyfGltYWdlc3wxMDc3OXxpbWFnZS9qcGVnfGltYWdlcy9oZDkvaDcxLzg3OTY5NzA2ODAzNTAuanBnfDUwMzcxMDMyZTU1M2E4YWNmODFlMTM3YjQ0ZTEzNTZlZjVlNGZkYTBlYjBmODE2NmNiNDg2ODMwNTM5YzRkOWQ',
        },
        desktop: {
          code: 'Elec_240x180_HomeFam_EN_01_240W.jpg',
          mime: 'image/jpeg',
          altText: 'Compact Cameras',
          url:
            '/medias/Elec-240x180-HomeFam-EN-01-240W.jpg?context=bWFzdGVyfGltYWdlc3wxMjYzOHxpbWFnZS9qcGVnfGltYWdlcy9oMTcvaDczLzg3OTY5NzA4MTE0MjIuanBnfDIzOGE5MmQ1ZWEwMTc2OTc1NzZjZDQxNzg0OThmZjVjODhmZDE5YjE2MmM4NjlmZDE2OGYwNTc0MTBmY2NkYTE',
        },
        widescreen: {
          code: 'Elec_350x262_HomeFam_EN_01_350W.jpg',
          mime: 'image/jpeg',
          altText: 'Compact Cameras',
          url:
            '/medias/Elec-350x262-HomeFam-EN-01-350W.jpg?context=bWFzdGVyfGltYWdlc3wyMDg4M3xpbWFnZS9qcGVnfGltYWdlcy9oMjMvaGJkLzg3OTY5NzA5NDI0OTQuanBnfDJjZjE1NGMyNmE2MmEyMDE5OTY2NDA1ODE0ZjNlMzRjZDQ3YWJjNzMzYTA1MGEwN2E5ZGFmZGM1NDE2ZjI2MGQ',
        },
      },
      urlLink: '/Open-Catalogue/Cameras/DigitalCameras/Digital-Compacts/c/576',
    },
    {
      uid: 'ElectronicsHompageLightFamTextBannerComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0hvbXBhZ2VMaWdodEZhbVRleHRCYW5uZXJDb21wb25lbnQiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
      typeCode: 'SimpleResponsiveBannerComponent',
      modifiedTime: '2020-10-01T01:40:05.082Z',
      name: 'Electronics Homepage Light Family Text Banner Component',
      container: 'false',
      media: {
        tablet: {
          code: 'Elec_200x150_HomeFamLight_EN_01_200W.jpg',
          mime: 'image/jpeg',
          altText: 'Camera Lenses',
          url:
            '/medias/Elec-200x150-HomeFamLight-EN-01-200W.jpg?context=bWFzdGVyfGltYWdlc3w5NzIwfGltYWdlL2pwZWd8aW1hZ2VzL2gzOS9oYjUvODc5Njk3MDYxNDgxNC5qcGd8YTdlZDllYTM3ZjBkMTJmYTRiOTA2YjYyOTEzODA4NTg2NGFmZmVhOTZlYjI0N2U2YTljYjY4ZjAwNTczODg3NQ',
        },
        desktop: {
          code: 'Elec_240x180_HomeFamLight_EN_01_240W.jpg',
          mime: 'image/jpeg',
          altText: 'Camera Lenses',
          url:
            '/medias/Elec-240x180-HomeFamLight-EN-01-240W.jpg?context=bWFzdGVyfGltYWdlc3wxMTM0M3xpbWFnZS9qcGVnfGltYWdlcy9oNDUvaGZmLzg3OTY5NzA3NDU4ODYuanBnfGM3MmZlZDhmY2U0NTk0NGQ3OTUwOGYyYTBhM2FkZDBmOWE2YTlhZDFjYjBmOTcwZTZlY2JkYjEzMzRjMTZkMjM',
        },
        widescreen: {
          code: 'Elec_350x262_HomeFamLight_EN_01_350W.jpg',
          mime: 'image/jpeg',
          altText: 'Camera Lenses',
          url:
            '/medias/Elec-350x262-HomeFamLight-EN-01-350W.jpg?context=bWFzdGVyfGltYWdlc3wxNzgzMHxpbWFnZS9qcGVnfGltYWdlcy9oMDIvaDZmLzg3OTY5NzA4NzY5NTguanBnfDg1NTc4NmM5ODAwMDc3YTc3NTdhNjI1MDcyMGVkNGQxMTIzZTRjZDhjZjgwZDljOWI3YThiY2UxODc2NWRjMDY',
        },
      },
      urlLink: '/Open-Catalogue/Cameras/CameraAccessories-%26-Supplies/CameraLenses/c/588',
    },
    {
      uid: 'ElectronicsHompageCamcordersBannerComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0hvbXBhZ2VDYW1jb3JkZXJzQmFubmVyQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      typeCode: 'SimpleResponsiveBannerComponent',
      modifiedTime: '2020-10-01T01:40:06.337Z',
      name: 'Electronics Homepage Camcorders Banner Component',
      container: 'false',
      containerMetadata: {
        sourceId: 'Section2BSlotHomepageCxContainer',
        container: 'true',
        uid: 'Section2BSlotHomepageCxContainer',
        name: 'Section2BSlotHomepageCxContainer',
        uuid:
          'eyJpdGVtSWQiOiJTZWN0aW9uMkJTbG90SG9tZXBhZ2VDeENvbnRhaW5lciIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
        typeCode: 'CxCmsComponentContainer',
      },
      media: {
        tablet: {
          code: 'Elec_200x150_HomeKid_EN_01_200W.jpg',
          mime: 'image/jpeg',
          altText: 'Power Supplies',
          url:
            '/medias/Elec-200x150-HomeKid-EN-01-200W.jpg?context=bWFzdGVyfGltYWdlc3wxMDc5NXxpbWFnZS9qcGVnfGltYWdlcy9oMTcvaDlkLzg3OTY5NzEwNzM1NjYuanBnfDEzNTI5MjUyNWFmY2NlZTg5ZjhlYjJkN2ExODRhMGQ2ZjYyN2E3MDRjN2M1ZTYzMTlmMWI0MDViNWM1NGU1MGY',
        },
        desktop: {
          code: 'Elec_240x180_HomeKid_EN_01_240W.jpg',
          mime: 'image/jpeg',
          altText: 'Power Supplies',
          url:
            '/medias/Elec-240x180-HomeKid-EN-01-240W.jpg?context=bWFzdGVyfGltYWdlc3wxMjYxOHxpbWFnZS9qcGVnfGltYWdlcy9oZDkvaDQ3Lzg3OTY5NzEyMDQ2MzguanBnfDU1Y2QzOTZkZTRlZjc0MzEyMjI2MWE3YmFhMDZhOTNkNDJiOGUzMjhhYWJhZjkwODNjYmMwZTljMmMzNjc1NGQ',
        },
        widescreen: {
          code: 'Elec_350x262_HomeKid_EN_01_350W.jpg',
          mime: 'image/jpeg',
          altText: 'Power Supplies',
          url:
            '/medias/Elec-350x262-HomeKid-EN-01-350W.jpg?context=bWFzdGVyfGltYWdlc3wxOTgzM3xpbWFnZS9qcGVnfGltYWdlcy9oZTEvaGRiLzg3OTY5NzEzMzU3MTAuanBnfDdkZDFmZDNiODM5NmE3MGVmNjkwYTQ4N2E2YTUwNGEzZGVkOTM1Y2JmMjk2NjE5ZTg2M2UxMzdmY2EzOTA0ODY',
        },
      },
      urlLink: '/Open-Catalogue/Components/PowerSupplies/c/816',
    },
    {
      uid: 'ElectronicsHompageCamcordersChildBannerComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0hvbXBhZ2VDYW1jb3JkZXJzQ2hpbGRCYW5uZXJDb21wb25lbnQiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
      typeCode: 'SimpleResponsiveBannerComponent',
      modifiedTime: '2020-10-01T01:40:05.132Z',
      name: 'Electronics Homepage Light Family Banner Component Child',
      container: 'false',
      media: {
        tablet: {
          code: 'Elec_200x150_HomeCaptureFirst_EN_01_200W.jpg',
          mime: 'image/jpeg',
          altText: 'Camcorders',
          url:
            '/medias/Elec-200x150-HomeCaptureFirst-EN-01-200W.jpg?context=bWFzdGVyfGltYWdlc3wxMDgxMnxpbWFnZS9qcGVnfGltYWdlcy9oZWUvaGM1Lzg3OTY5NzEwMDgwMzAuanBnfDFjMmZlZmE3NDE0ZjFhODg4YzBlYTg0M2ZkNTZjMjFjMTI4NTUwMzgxMGE2MDIzM2I1ZDA4YThlZTZmNjFkYTM',
        },
        desktop: {
          code: 'Elec_240x180_HomeCaptureFirst_EN_01_240W.jpg',
          mime: 'image/jpeg',
          altText: 'Camcorders',
          url:
            '/medias/Elec-240x180-HomeCaptureFirst-EN-01-240W.jpg?context=bWFzdGVyfGltYWdlc3wxMzczNXxpbWFnZS9qcGVnfGltYWdlcy9oMzcvaDM0Lzg3OTY5NzExMzkxMDIuanBnfDU1MWQyNGFhYmMwZWFhZGQyN2I5MWI0ZWRhZDM5MThhMGMxODYzYjE5YWExN2ZmNzU3NGJjODc5YTlmY2FhMGI',
        },
        widescreen: {
          code: 'Elec_350x262_HomeCaptureFirst_EN_01_350W.jpg',
          mime: 'image/jpeg',
          altText: 'Camcorders',
          url:
            '/medias/Elec-350x262-HomeCaptureFirst-EN-01-350W.jpg?context=bWFzdGVyfGltYWdlc3wyMzAwOHxpbWFnZS9qcGVnfGltYWdlcy9oMzkvaGRmLzg3OTY5NzEyNzAxNzQuanBnfDVhZjNiZmRiZjgwMmQ1ODEzNzA4NWE5OGNkMzlkMDQ2ZmU2NTRmNDVhODJlZjBlNGZmOTZjYWFjMmI5Y2UyYjk',
        },
      },
      urlLink: '/Open-Catalogue/Cameras/Hand-held-Camcorders/c/584',
    },
    {
      uid: 'HomepageE2EMerchandisingCarousel',
      uuid:
        'eyJpdGVtSWQiOiJIb21lcGFnZUUyRU1lcmNoYW5kaXNpbmdDYXJvdXNlbCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
      typeCode: 'MerchandisingCarouselComponent',
      modifiedTime: '2020-10-01T01:40:34.12Z',
      name: 'Homepage E2E Merchandising Carousel',
      container: 'false',
      scroll: 'ONE',
      strategy: '00000000-0000-0000-0000-000000000000',
      title: 'Homepage E2E Merchandising Carousel',
      numberToDisplay: '10',
    },
    {
      uid: 'ElectronicsHomepageProductCarouselComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0hvbWVwYWdlUHJvZHVjdENhcm91c2VsQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      typeCode: 'ProductCarouselComponent',
      modifiedTime: '2020-10-01T01:40:04.907Z',
      name: 'Electronics Homepage Product Carousel',
      container: 'false',
      popup: 'false',
      scroll: 'ALLVISIBLE',
      productCodes: '300938 358639 553637 816802 1934793 1382080 1981415 816780 1934406 1986316 592506',
      title: 'Our Bestselling Products',
    },
    {
      uid: 'NewElectronicsHomepageProductCarouselComponent',
      uuid:
        'eyJpdGVtSWQiOiJOZXdFbGVjdHJvbmljc0hvbWVwYWdlUHJvZHVjdENhcm91c2VsQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      typeCode: 'ProductCarouselComponent',
      modifiedTime: '2020-10-01T01:40:04.895Z',
      name: "What's New Electronics Homepage Product Carousel",
      container: 'false',
      popup: 'false',
      scroll: 'ALLVISIBLE',
      productCodes: '1776948 1934796 2278102 1981415 1992693 1641905 932577',
      title: "What's New",
    },
    {
      uid: 'ElectronicsHompageShipmentBannerComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0hvbXBhZ2VTaGlwbWVudEJhbm5lckNvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
      typeCode: 'SimpleResponsiveBannerComponent',
      modifiedTime: '2020-10-01T01:40:06.35Z',
      name: 'Electronics Homepage Shipment Banner Component',
      container: 'false',
      containerMetadata: {
        sourceId: 'Section4SlotHomepageCxContainer',
        container: 'true',
        uid: 'Section4SlotHomepageCxContainer',
        name: 'Section4SlotHomepageCxContainer',
        uuid:
          'eyJpdGVtSWQiOiJTZWN0aW9uNFNsb3RIb21lcGFnZUN4Q29udGFpbmVyIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
        typeCode: 'CxCmsComponentContainer',
      },
      media: {
        tablet: {
          code: 'Elec_200x200_HomeShipment_EN_01_200W.jpg',
          mime: 'image/jpeg',
          altText: 'Samsung NV10 Compact Camera',
          url:
            '/medias/Elec-200x200-HomeShipment-EN-01-200W.jpg?context=bWFzdGVyfGltYWdlc3w3MDkwfGltYWdlL2pwZWd8aW1hZ2VzL2gxMi9oZGEvODc5Njk3MTQ2Njc4Mi5qcGd8ZDFjYmVlNGQyNzUxMGY4Y2U0NmMyMGExZGIwZTQwMDMwYmMwMWI0ZGEzMmUzOTdiNTQ5ZmM1MzgxZDVkY2UyMw',
        },
        desktop: {
          code: 'Elec_240x240_HomeShipment_EN_01_240W.jpg',
          mime: 'image/jpeg',
          altText: 'Samsung NV10 Compact Camera',
          url:
            '/medias/Elec-240x240-HomeShipment-EN-01-240W.jpg?context=bWFzdGVyfGltYWdlc3w4NDY4fGltYWdlL2pwZWd8aW1hZ2VzL2g5Ni9oOWMvODc5Njk3MTcyODkyNi5qcGd8NjdiZmI4N2JlM2M3YmU4YmY0ODhhNWU4ODllMTcyMTg2OGVkMzczNTgzN2Q5Zjg1Y2IyZWU1MWZkOTk0ZTEzZA',
        },
        widescreen: {
          code: 'Elec_350x350_HomeShipment_EN_01_350W.jpg',
          mime: 'image/jpeg',
          altText: 'Samsung NV10 Compact Camera',
          url:
            '/medias/Elec-350x350-HomeShipment-EN-01-350W.jpg?context=bWFzdGVyfGltYWdlc3wxMzgyOHxpbWFnZS9qcGVnfGltYWdlcy9oOWUvaGNjLzg3OTY5NzE5OTEwNzAuanBnfDcxZDRhY2MzNDJjYTgwMzJmM2I2ZWY5MzI2OTJlYThmNzUwNjBkYWVkOGY2NmM1ZTYyOWIzNGExYjZjOTQzMzE',
        },
      },
      urlLink: '/Open-Catalogue/Cameras/DigitalCameras/Digital-Compacts/NV10/p/553637',
    },
    {
      uid: 'ElectronicsHompageShopBannerComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0hvbXBhZ2VTaG9wQmFubmVyQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      typeCode: 'SimpleResponsiveBannerComponent',
      modifiedTime: '2020-10-01T01:40:05.185Z',
      name: 'Electronics Homepage Shop Banner Component',
      container: 'false',
      media: {
        tablet: {
          code: 'Elec_200x200_HomeShop_EN_01_200W.jpg',
          mime: 'image/jpeg',
          altText: 'Logitech QuickCam for Notebook Pro',
          url:
            '/medias/Elec-200x200-HomeShop-EN-01-200W.jpg?context=bWFzdGVyfGltYWdlc3w2NjQzfGltYWdlL2pwZWd8aW1hZ2VzL2g2Zi9oOTcvODc5Njk3MTUzMjMxOC5qcGd8YzkzMDAyZDZjNTUxOTg0ODVlZTFlYjBlOWY4ZWUxYjNkMzU5NWIwNjhhOTY1OWExNDQ0ZTBmNDgxOTZhYTkwMg',
        },
        desktop: {
          code: 'Elec_240x240_HomeShop_EN_01_240W.jpg',
          mime: 'image/jpeg',
          altText: 'Logitech QuickCam for Notebook Pro',
          url:
            '/medias/Elec-240x240-HomeShop-EN-01-240W.jpg?context=bWFzdGVyfGltYWdlc3w4MDA0fGltYWdlL2pwZWd8aW1hZ2VzL2g3Yy9oOGEvODc5Njk3MTc5NDQ2Mi5qcGd8NGZmZDIwN2ExNTc1ZTU3M2VmNGFmZjgwNjlkNzYxN2JkN2U1ODg4ZDA0ZjQwNTNmYWE1YTI0YzY4MjQ1NjdiMg',
        },
        widescreen: {
          code: 'Elec_350x350_HomeShop_EN_01_350W.jpg',
          mime: 'image/jpeg',
          altText: 'Logitech QuickCam for Notebook Pro',
          url:
            '/medias/Elec-350x350-HomeShop-EN-01-350W.jpg?context=bWFzdGVyfGltYWdlc3wxMjgxMXxpbWFnZS9qcGVnfGltYWdlcy9oYzYvaGZmLzg3OTY5NzIwNTY2MDYuanBnfDUwZWNhMGFhZjQwMzdkYmNkODNlZmI0ZjU1NzgxMTYzZDE2MWU4ZDNiODE5ZjU2NzVmNTBkOTRlZjM1Mzg5ZGY',
        },
      },
      urlLink: '/Open-Catalogue/Cameras/Webcams/QuickCam-for-Notebooks-Pro/p/479742',
    },
    {
      uid: 'ElectronicsHompageSmDiscountBannerComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0hvbXBhZ2VTbURpc2NvdW50QmFubmVyQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      typeCode: 'SimpleResponsiveBannerComponent',
      modifiedTime: '2020-10-01T01:40:05.197Z',
      name: 'Electronics Homepage Small Discount Banner Component',
      container: 'false',
      media: {
        tablet: {
          code: 'Elec_200x200_HomeSmallDiscount_EN_01_200W.jpg',
          mime: 'image/jpeg',
          altText: 'Canyon Web Camera 100KpxelIM CMOS',
          url:
            '/medias/Elec-200x200-HomeSmallDiscount-EN-01-200W.jpg?context=bWFzdGVyfGltYWdlc3w3MTgzfGltYWdlL2pwZWd8aW1hZ2VzL2g1Yi9oNDgvODc5Njk3MTU5Nzg1NC5qcGd8YzRkNTdlOWQzM2MyOWVkZWM4YzNmZjZkNWQyNGYyNzUyZGQ5MjY2M2E5YjM3MzcxMDc5OTQ1NDFkOGNlZmEwZA',
        },
        desktop: {
          code: 'Elec_240x240_HomeSmallDiscount_EN_01_240W.jpg',
          mime: 'image/jpeg',
          altText: 'Canyon Web Camera 100KpxelIM CMOS',
          url:
            '/medias/Elec-240x240-HomeSmallDiscount-EN-01-240W.jpg?context=bWFzdGVyfGltYWdlc3w4NTY0fGltYWdlL2pwZWd8aW1hZ2VzL2hhMi9oZTYvODc5Njk3MTg1OTk5OC5qcGd8OTQ4NTgyZmYwMjNhZTExYjZhOWM3OTA5YjQwMTE0MmRhOGE5N2Q2ZjRjZjg5MGMzOWM1NmRiODUxNDg1YWIxYg',
        },
        widescreen: {
          code: 'Elec_350x350_HomeSmallDiscount_EN_01_350W.jpg',
          mime: 'image/jpeg',
          altText: 'Canyon Web Camera 100KpxelIM CMOS',
          url:
            '/medias/Elec-350x350-HomeSmallDiscount-EN-01-350W.jpg?context=bWFzdGVyfGltYWdlc3wxMzQ0MXxpbWFnZS9qcGVnfGltYWdlcy9oNWYvaDJjLzg3OTY5NzIxMjIxNDIuanBnfGYxNjNmYmEzZGM5MzY0NGJiY2JmNjUyZDc4Yjc5ZWY0NmU5YTMzMWEzMjZlZTY2ZWZmM2U0YmM3YzgzNDVjOTM',
        },
      },
      urlLink: '/Open-Catalogue/Cameras/Webcams/Web-Camera-%28100KpixelM-CMOS%2C-640X480%2C-USB-1-1%29-Black/p/280916',
    },
    {
      uid: 'ElectronicsHompageServiceBannerComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0hvbXBhZ2VTZXJ2aWNlQmFubmVyQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      typeCode: 'SimpleResponsiveBannerComponent',
      modifiedTime: '2020-10-01T01:40:05.21Z',
      name: 'Electronics Homepage Service Banner Component',
      container: 'false',
      media: {
        tablet: {
          code: 'Elec_200x200_HomeService_EN_01_200W.jpg',
          mime: 'image/jpeg',
          altText: 'Sony Light HVL-20DW2',
          url:
            '/medias/Elec-200x200-HomeService-EN-01-200W.jpg?context=bWFzdGVyfGltYWdlc3w1OTk4fGltYWdlL2pwZWd8aW1hZ2VzL2hiOC9oMDUvODc5Njk3MTQwMTI0Ni5qcGd8MzI0MDA1YzhiMmM2ZWM4ODQzZDBiNDI4MTMwZDM4NjkyMzQ0Yjg1NDhmMzVkZmFmMjg1ODA0MzMyODcxOTA4Ng',
        },
        desktop: {
          code: 'Elec_240x240_HomeService_EN_01_240W.jpg',
          mime: 'image/jpeg',
          altText: 'Sony Light HVL-20DW2',
          url:
            '/medias/Elec-240x240-HomeService-EN-01-240W.jpg?context=bWFzdGVyfGltYWdlc3w3Mjg5fGltYWdlL2pwZWd8aW1hZ2VzL2hjYi9oZTMvODc5Njk3MTY2MzM5MC5qcGd8NDU2N2RlOTMxNWJiMTk5YTE2NmRiZjAzNzBjMTdmODhmNGZkY2Q5ZGY0ZjU5ODI4MmJmOGI5N2Q1MGFjYjE1Yw',
        },
        widescreen: {
          code: 'Elec_350x350_HomeService_EN_01_350W.jpg',
          mime: 'image/jpeg',
          altText: 'Sony Light HVL-20DW2',
          url:
            '/medias/Elec-350x350-HomeService-EN-01-350W.jpg?context=bWFzdGVyfGltYWdlc3wxMTU4MHxpbWFnZS9qcGVnfGltYWdlcy9oNzQvaDVhLzg3OTY5NzE5MjU1MzQuanBnfDI0NzdiN2RiYTJiN2I5N2NhZGI4MTBhMmFkMmI5MzdlZTBhMjE4ZjAyZTlmZjllNTlmNmFjNGY1OWM1MDU3ODI',
        },
      },
      urlLink: '/Open-Catalogue/Cameras/CameraAccessories-%26-Supplies/CameraFlashes/Light-HVL-20DW2/p/289540',
    },
    {
      uid: 'ElectronicsHompageFreeDelBannerComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0hvbXBhZ2VGcmVlRGVsQmFubmVyQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      typeCode: 'SimpleResponsiveBannerComponent',
      modifiedTime: '2020-10-01T01:40:05.258Z',
      name: 'Electronics Homepage Free Delivery Banner Component',
      container: 'false',
      media: {
        tablet: {
          code: 'Elec_770x50_HomeFreeDel_EN_01_770W.jpg',
          mime: 'image/jpeg',
          altText: 'Free Shipping on All Orders This Weekend',
          url:
            '/medias/Elec-770x50-HomeFreeDel-EN-01-770W.jpg?context=bWFzdGVyfGltYWdlc3w4NzM5fGltYWdlL2pwZWd8aW1hZ2VzL2g4Ni9oMzEvODc5Njk3MjMxODc1MC5qcGd8MjM2ZDcxMzdiYzAwMTI0MjRiMTdhZmIyNzg3ZmVmNDllODViMWEyNmViZjRmOGQ2NmFiNTBmZTUyNzU1MDkwMA',
        },
        desktop: {
          code: 'Elec_960x50_HomFreeDel_EN_01_960W.jpg',
          mime: 'image/jpeg',
          altText: 'Free Shipping on All Orders This Weekend',
          url:
            '/medias/Elec-960x50-HomFreeDel-EN-01-960W.jpg?context=bWFzdGVyfGltYWdlc3w4ODc5fGltYWdlL2pwZWd8aW1hZ2VzL2hkYy9oZjcvODc5Njk3MjM4NDI4Ni5qcGd8ODRlZGVhNmQ5NTkwODkxY2Q4ZWE5NDI5Yjk2OGJkMDczMWEzYzE0YTM0ZjU1YTE1OTllNzhkMzkxYzFlMjk2Zg',
        },
        mobile: {
          code: 'Elec_475x119_HomeFreeDel_EN_01_475W.jpg',
          mime: 'image/jpeg',
          altText: 'Free Shipping on All Orders This Weekend',
          url:
            '/medias/Elec-475x119-HomeFreeDel-EN-01-475W.jpg?context=bWFzdGVyfGltYWdlc3w5MjUwfGltYWdlL2pwZWd8aW1hZ2VzL2gxNy9oYmUvODc5Njk3MjI1MzIxNC5qcGd8ZTgzNzhhYjA2MGFlZmRmZGY0NTAxMjA5MzkyZTg1MDhlMjY4ZDRjMDI3ZDQ1NjVhMjkxOTIxN2ZlYmViNWI2OQ',
        },
        widescreen: {
          code: 'Elec_1400x50_HomeFreeDel_EN_01_1400W.jpg',
          mime: 'image/jpeg',
          altText: 'Free Shipping on All Orders This Weekend',
          url:
            '/medias/Elec-1400x50-HomeFreeDel-EN-01-1400W.jpg?context=bWFzdGVyfGltYWdlc3wxMDAwNXxpbWFnZS9qcGVnfGltYWdlcy9oYmEvaGI1Lzg3OTY5NzIxODc2NzguanBnfGViM2ZlYTBiMjg1ZjI5M2ZkMGQ3ODE4ZGUxMWY0ODExNjcxNTZlMzhmMmViMDJiMWVjMTMyYTRjNThjNDg3NzU',
        },
      },
      urlLink: '/faq',
    },
    {
      uid: 'SiteLogoComponent',
      uuid:
        'eyJpdGVtSWQiOiJTaXRlTG9nb0NvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
      typeCode: 'SimpleBannerComponent',
      modifiedTime: '2020-10-01T01:40:00.125Z',
      name: 'Site Logo Component',
      container: 'false',
      external: 'false',
      media: {
        code: '/images/theme/SAP_scrn_R.png',
        mime: 'image/png',
        altText: 'SAP Commerce',
        url:
          '/medias/SAP-scrn-R.png?context=bWFzdGVyfGltYWdlc3wxMDEyN3xpbWFnZS9wbmd8aW1hZ2VzL2gyZi9oOGUvODc5NzEzMTUzODQ2Mi5wbmd8MmZlMTRhN2I0NzcxNTUzMzVmNGUwY2RmYTgxZDUwOWFlZmZmYmIzMjdkMzc5NTRkYzE0ZDRjYjQwM2NmMDY2OQ',
      },
      urlLink: '/',
    },
    {
      uid: 'HomepageNavLink',
      uuid:
        'eyJpdGVtSWQiOiJIb21lcGFnZU5hdkxpbmsiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
      typeCode: 'CMSLinkComponent',
      modifiedTime: '2020-10-01T01:40:01.925Z',
      name: 'Home Page Nav Link',
      container: 'false',
      external: 'false',
      contentPage: 'homepage',
      contentPageLabelOrId: 'homepage',
      url: '/',
      linkName: 'Home',
      target: 'false',
    },
    {
      uid: 'ElectronicsCategoryNavComponent',
      uuid:
        'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0NhdGVnb3J5TmF2Q29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      typeCode: 'CategoryNavigationComponent',
      modifiedTime: '2020-10-01T01:40:01.146Z',
      name: 'Category Navigation Component',
      container: 'false',
      wrapAfter: '10',
      navigationNode: {
        uid: 'ElectronicsCategoryNavNode',
        uuid:
          'eyJpdGVtSWQiOiJFbGVjdHJvbmljc0NhdGVnb3J5TmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
        entries: [],
        children: [
          {
            uid: 'BrandsNavNode',
            uuid:
              'eyJpdGVtSWQiOiJCcmFuZHNOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
            entries: [
              {
                itemId: 'AllBrandsCategoryLink',
                itemSuperType: 'AbstractCMSComponent',
                itemType: 'CMSLinkComponent',
              },
            ],
            children: [
              {
                uid: 'BrandLinksNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJCcmFuZExpbmtzTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                entries: [],
                children: [
                  {
                    uid: 'CanonBrandNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJDYW5vbkJyYW5kTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                    entries: [
                      {
                        itemId: 'CanonBrandCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'SonyBrandNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJTb255QnJhbmROYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                    entries: [
                      {
                        itemId: 'SonyBrandCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'KodakBrandNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJLb2Rha0JyYW5kTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                    entries: [
                      {
                        itemId: 'KodakBrandCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'SamsungBrandNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJTYW1zdW5nQnJhbmROYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                    entries: [
                      {
                        itemId: 'SamsungBrandCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'ToshibaBrandNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJUb3NoaWJhQnJhbmROYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                    entries: [
                      {
                        itemId: 'ToshibaBrandCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'FujifilmBrandNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJGdWppZmlsbUJyYW5kTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                    entries: [
                      {
                        itemId: 'FujifilmBrandCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                ],
                title: 'Cameras',
              },
              {
                uid: 'AccessoryBrandLinksNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJBY2Nlc3NvcnlCcmFuZExpbmtzTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                entries: [],
                children: [
                  {
                    uid: 'KingstonBrandNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJLaW5nc3RvbkJyYW5kTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                    entries: [
                      {
                        itemId: 'KingstonBrandCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'IciduBrandNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJJY2lkdUJyYW5kTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                    entries: [
                      {
                        itemId: 'IciduBrandCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'TDKBrandNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJUREtCcmFuZE5hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                    entries: [
                      {
                        itemId: 'TDKBrandCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'SweexBrandNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJTd2VleEJyYW5kTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                    entries: [
                      {
                        itemId: 'SweexBrandCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                ],
                title: 'Accessories',
              },
            ],
            title: 'Brands',
          },
          {
            uid: 'DigitalCamerasNavNode',
            uuid:
              'eyJpdGVtSWQiOiJEaWdpdGFsQ2FtZXJhc05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
            entries: [
              {
                itemId: 'DigitalCamerasCategoryLink',
                itemSuperType: 'AbstractCMSComponent',
                itemType: 'CMSLinkComponent',
              },
            ],
            children: [
              {
                uid: 'DigitalCompactsNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJEaWdpdGFsQ29tcGFjdHNOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                entries: [
                  {
                    itemId: 'DigitalCompactsCategoryLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'DigitalSLRNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJEaWdpdGFsU0xSTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                entries: [
                  {
                    itemId: 'DigitalSLRCategoryLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
            ],
            title: 'Digital Cameras',
          },
          {
            uid: 'FilmCamerasNavNode',
            uuid:
              'eyJpdGVtSWQiOiJGaWxtQ2FtZXJhc05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
            entries: [
              {
                itemId: 'FilmCamerasCategoryLink',
                itemSuperType: 'AbstractCMSComponent',
                itemType: 'CMSLinkComponent',
              },
            ],
            children: [],
            title: 'Film Cameras',
          },
          {
            uid: 'HandheldCamcordersNavNode',
            uuid:
              'eyJpdGVtSWQiOiJIYW5kaGVsZENhbWNvcmRlcnNOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
            entries: [
              {
                itemId: 'HandheldCamcordersCategoryLink',
                itemSuperType: 'AbstractCMSComponent',
                itemType: 'CMSLinkComponent',
              },
            ],
            children: [],
            title: 'Camcorders',
          },
          {
            uid: 'WebcamsNavNode',
            uuid:
              'eyJpdGVtSWQiOiJXZWJjYW1zTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
            entries: [
              {
                itemId: 'WebcamsCategoryLink',
                itemSuperType: 'AbstractCMSComponent',
                itemType: 'CMSLinkComponent',
              },
            ],
            children: [],
            title: 'Webcams',
          },
          {
            uid: 'CameraAccessoriesNavNode',
            uuid:
              'eyJpdGVtSWQiOiJDYW1lcmFBY2Nlc3Nvcmllc05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
            entries: [
              {
                itemId: 'CameraAccessoriesCategoryLink',
                itemSuperType: 'AbstractCMSComponent',
                itemType: 'CMSLinkComponent',
              },
            ],
            children: [
              {
                uid: 'AccessoriesNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJBY2Nlc3Nvcmllc05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [],
                children: [
                  {
                    uid: 'CamerasFlashesNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJDYW1lcmFzRmxhc2hlc05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                    entries: [
                      {
                        itemId: 'CamerasFlashesCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'TripodsNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJUcmlwb2RzTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                    entries: [
                      {
                        itemId: 'TripodsCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'CameraLensesNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJDYW1lcmFMZW5zZXNOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                    entries: [
                      {
                        itemId: 'CameraLensesCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'FlashMemoryNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJGbGFzaE1lbW9yeU5hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                    entries: [
                      {
                        itemId: 'FlashMemoryCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                    title: 'Flash Memory',
                  },
                  {
                    uid: 'PowerSuppliesNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJQb3dlclN1cHBsaWVzTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                    entries: [
                      {
                        itemId: 'PowerSuppliesCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                    title: 'Power Supplies',
                  },
                ],
                title: 'Gear',
              },
              {
                uid: 'SuppliesNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJTdXBwbGllc05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [],
                children: [
                  {
                    uid: 'ColourFilmsNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJDb2xvdXJGaWxtc05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                    entries: [
                      {
                        itemId: 'ColourFilmsCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'BlackAndWhiteFilmsNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJCbGFja0FuZFdoaXRlRmlsbXNOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                    entries: [
                      {
                        itemId: 'BlackAndWhiteFilmsCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                  {
                    uid: 'BlankVideotapesNavNode',
                    uuid:
                      'eyJpdGVtSWQiOiJCbGFua1ZpZGVvdGFwZXNOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                    entries: [
                      {
                        itemId: 'BlankVideotapesCategoryLink',
                        itemSuperType: 'AbstractCMSComponent',
                        itemType: 'CMSLinkComponent',
                      },
                    ],
                    children: [],
                  },
                ],
                title: 'Supplies',
              },
            ],
            title: 'Accessories',
          },
        ],
      },
    },
    {
      uid: 'MiniCart',
      uuid: 'eyJpdGVtSWQiOiJNaW5pQ2FydCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
      typeCode: 'MiniCartComponent',
      modifiedTime: '2020-10-01T01:40:14.293Z',
      name: '迷你购物车',
      shownProductCount: '3',
      container: 'false',
      totalDisplay: 'SUBTOTAL',
      title: 'YOUR SHOPPING CART',
      lightboxBannerComponent: {
        container: 'false',
        uid: 'LightboxHomeDeliveryBannerComponent',
        external: 'false',
        name: 'Lightbox Home Delivery Banner Component',
        media: {
          code: 'Elec_358x45_HomeDeliveryBanner_EN_01.gif',
          mime: 'image/gif',
          altText: '下午 6 点前订购将于次日送货',
          url:
            '/medias/?context=bWFzdGVyfGltYWdlc3w0MTA5fGltYWdlL2dpZnxpbWFnZXMvaGVhL2hjYS84Nzk2OTg0OTAxNjYyLmdpZnxlMDlhOGQ2MmU4YThkNTMyMjdjM2E0YjAzMzI0M2E3NDRmMjc4OTI1YTg3OWZhNWNjYzQ0YmJjNGI3ZDk5ZWRj',
        },
        uuid:
          'eyJpdGVtSWQiOiJMaWdodGJveEhvbWVEZWxpdmVyeUJhbm5lckNvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
        typeCode: 'SimpleBannerComponent',
      },
    },
    {
      uid: 'FooterNavigationComponent',
      uuid:
        'eyJpdGVtSWQiOiJGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      typeCode: 'FooterNavigationComponent',
      modifiedTime: '2020-10-01T01:40:01.316Z',
      name: 'Footer Navigation Component',
      container: 'false',
      showLanguageCurrency: 'true',
      wrapAfter: '4',
      notice: 'Copyright © 2020 SAP SE or an SAP affiliate company. All rights reserved.',
      navigationNode: {
        uid: 'FooterNavNode',
        uuid:
          'eyJpdGVtSWQiOiJGb290ZXJOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
        entries: [],
        children: [
          {
            uid: 'SAPCommerceNavNode',
            uuid:
              'eyJpdGVtSWQiOiJTQVBDb21tZXJjZU5hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
            entries: [],
            children: [
              {
                uid: 'AboutSAPCommerceNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJBYm91dFNBUENvbW1lcmNlTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                entries: [
                  {
                    itemId: 'AboutSAPCommerceLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'FAQNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJGQVFOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                entries: [
                  {
                    itemId: 'FAQLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
            ],
            title: 'SAP Commerce Cloud',
          },
          {
            uid: 'SAPCustomerExperienceNavNode',
            uuid:
              'eyJpdGVtSWQiOiJTQVBDdXN0b21lckV4cGVyaWVuY2VOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
            entries: [],
            children: [
              {
                uid: 'AboutSAPCustomerExperienceNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJBYm91dFNBUEN1c3RvbWVyRXhwZXJpZW5jZU5hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [
                  {
                    itemId: 'VisitSAPLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'ContactUsNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJDb250YWN0VXNOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                entries: [
                  {
                    itemId: 'ContactUsLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
            ],
            title: 'SAP Customer Experience',
          },
          {
            uid: 'FollowUsNavNode',
            uuid:
              'eyJpdGVtSWQiOiJGb2xsb3dVc05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
            entries: [],
            children: [
              {
                uid: 'AgileCommerceBlogNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJBZ2lsZUNvbW1lcmNlQmxvZ05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [
                  {
                    itemId: 'AgileCommerceBlogLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'LinkedInNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJMaW5rZWRJbk5hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [
                  {
                    itemId: 'LinkedInLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'FacebookNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJGYWNlYm9va05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [
                  {
                    itemId: 'FacebookLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'TwitterNavNode',
                uuid:
                  'eyJpdGVtSWQiOiJUd2l0dGVyTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                entries: [
                  {
                    itemId: 'TwitterLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
            ],
            title: 'Follow Us',
          },
        ],
      },
    },
    {
      uid: 'AnonymousConsentOpenDialogComponent',
      uuid:
        'eyJpdGVtSWQiOiJBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
      typeCode: 'CMSFlexComponent',
      modifiedTime: '2020-10-01T01:40:01.492Z',
      name: 'Anonymous Consent Open Dialog Component',
      container: 'false',
      flexType: 'AnonymousConsentOpenDialogComponent',
    },
    {
      uid: 'NoticeTextParagraph',
      uuid:
        'eyJpdGVtSWQiOiJOb3RpY2VUZXh0UGFyYWdyYXBoIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      typeCode: 'CMSParagraphComponent',
      modifiedTime: '2020-10-01T01:40:01.508Z',
      name: 'Notice Text Paragraph',
      container: 'false',
      content: '<div class="cx-notice">Copyright © 2019 SAP SE or an SAP affiliate company. All rights reserved.</div>',
    },
    {
      uid: 'AnonymousConsentManagementBannerComponent',
      uuid:
        'eyJpdGVtSWQiOiJBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
      typeCode: 'CMSFlexComponent',
      modifiedTime: '2020-10-01T01:40:01.358Z',
      name: 'Anonymous Consent Management Banner Component',
      container: 'false',
      flexType: 'AnonymousConsentManagementBannerComponent',
    },
    {
      uid: 'SearchBox',
      uuid: 'eyJpdGVtSWQiOiJTZWFyY2hCb3giLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
      typeCode: 'SearchBoxComponent',
      modifiedTime: '2020-10-01T01:40:01.542Z',
      name: 'Search Box',
      container: 'false',
      maxSuggestions: '5',
      maxProducts: '5',
      displaySuggestions: 'true',
      displayProducts: 'true',
      displayProductImages: 'true',
      waitTimeBeforeRequest: '0',
      minCharactersBeforeRequest: '0',
    },
    {
      uid: 'PersonalizationScriptComponent',
      uuid:
        'eyJpdGVtSWQiOiJQZXJzb25hbGl6YXRpb25TY3JpcHRDb21wb25lbnQiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
      typeCode: 'PersonalizationScriptComponent',
      modifiedTime: '2020-10-01T01:40:01.89Z',
      name: 'PersonalizationScript',
      container: 'false',
    },
    {
      uid: 'ProfileTagScriptComponent',
      uuid:
        'eyJpdGVtSWQiOiJQcm9maWxlVGFnU2NyaXB0Q29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      typeCode: 'ProfileTagScriptComponent',
      modifiedTime: '2020-10-01T01:40:01.903Z',
      name: 'Profile Tag',
      container: 'false',
    },
    {
      uid: 'LanguageComponent',
      uuid:
        'eyJpdGVtSWQiOiJMYW5ndWFnZUNvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
      typeCode: 'CMSSiteContextComponent',
      modifiedTime: '2020-10-01T01:40:08.265Z',
      name: 'Site Languages',
      container: 'false',
      context: 'LANGUAGE',
    },
    {
      uid: 'CurrencyComponent',
      uuid:
        'eyJpdGVtSWQiOiJDdXJyZW5jeUNvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
      typeCode: 'CMSSiteContextComponent',
      modifiedTime: '2020-10-01T01:40:08.261Z',
      name: 'Site Currencies',
      container: 'false',
      context: 'CURRENCY',
    },
    {
      uid: 'StoreFinderLink',
      uuid:
        'eyJpdGVtSWQiOiJTdG9yZUZpbmRlckxpbmsiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
      typeCode: 'CMSLinkComponent',
      modifiedTime: '2020-10-01T01:40:02.038Z',
      name: 'Store Finder Link',
      container: 'false',
      external: 'false',
      contentPage: 'storefinderPage',
      contentPageLabelOrId: '/store-finder',
      url: '/store-finder',
      linkName: 'Find a Store',
      target: 'false',
    },
    {
      uid: 'ContactUsLink',
      uuid:
        'eyJpdGVtSWQiOiJDb250YWN0VXNMaW5rIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      typeCode: 'CMSLinkComponent',
      modifiedTime: '2020-10-01T01:40:01.467Z',
      name: 'Contact Us Link',
      container: 'false',
      external: 'false',
      url: '/contact',
      linkName: 'Contact Us',
      target: 'false',
    },
    {
      uid: 'HelpLink',
      uuid: 'eyJpdGVtSWQiOiJIZWxwTGluayIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
      typeCode: 'CMSLinkComponent',
      modifiedTime: '2020-10-01T01:40:01.481Z',
      name: 'Help Link',
      container: 'false',
      external: 'false',
      url: '/faq',
      linkName: 'Help',
      target: 'false',
    },
  ],
};
