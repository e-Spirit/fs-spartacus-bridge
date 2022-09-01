import { CaasClientFactory } from '../../caas/caas-client.factory';
import { TestBed } from '@angular/core/testing';
import { TppWrapperService } from './tpp-wrapper-service';
import { of } from 'rxjs';
import { FsCmsPageChangeAdapter } from './fs-cms-page-change-adapter';
import { Injectable, Type } from '@angular/core';
import { BaseSiteService, CmsService, CmsStructureModel, ConfigModule, PageType } from '@spartacus/core';
import { FsSpartacusBridgeModule } from '../../../fs-spartacus-bridge.module';
import { FsCmsPageInterface } from './fs-cms-page.interface';

import createSpy = jasmine.createSpy;
import Spy = jasmine.Spy;
import { RouterTestingModule } from '@angular/router/testing';
import { MockBaseSiteService } from './processing/merge/cms-structure-model-merger-factory.spec';

type RerenderHandler = () => void;

class MockCaasClient {
  getByUid: Spy;
  getByIds: Spy;
  constructor(result) {
    this.getByUid = createSpy('CaasClient.getByUid').and.returnValue(of(result));
    this.getByIds = createSpy('CaaSclient.getByIds').and.returnValue(of({}));
  }
}

function caasClientFactory(client) {
  return () => ({
    createCaasClient: () => of(client),
  });
}

const pageChangeResult = {
  _id: '3e0e9f7a-9736-4f21-86c5-e224aa99f43b.en_GB',
  _etag: {
    $oid: '5e74bb9c7d89e61c32d57bb8',
  },
  fsType: 'PageRef',
  name: 'Dummy Homepage',
  displayname: 'homepage',
  identifier: '3e0e9f7a-9736-4f21-86c5-e224aa99f43b',
  uid: 'homepage',
  uidType: 'SITESTORE_LEAF',
  metaFormData: {},
  formData: {},
  page: {
    fsType: 'Page',
    children: [],
    identifier: '025178ce-b290-4f1c-85ac-9a56913cb29b',
    uid: 'homepage',
    name: 'Dummy Homepage',
    displayName: 'homepage',
    template: 'HomepageTemplate',
    uidType: 'PAGESTORE',
    metaFormData: {},
    formData: {
      pt_seoUrl: {
        fsType: 'CMS_INPUT_TEXT',
        name: 'pt_seoUrl',
        value: 'homepage_custom_seo_url',
      },
    },
  },
  locale: {
    identifier: 'EN',
    country: 'GB',
    language: 'en',
  },
};

@Injectable()
class MockTppWrapperService extends TppWrapperService {
  private rerenderHandlers: RerenderHandler[] = [];

  isFirstSpiritPreview() {
    return of(false);
  }

  async onRerenderView(handler: RerenderHandler): Promise<void> {
    this.rerenderHandlers.push(handler);
  }

  async getPreviewElement(): Promise<string> {
    return Promise.resolve('4711');
  }

  async renderElement(previewId: string): Promise<FsCmsPageInterface> {
    return Promise.resolve<FsCmsPageInterface>(pageChangeResult);
  }

  triggerRerender() {
    this.rerenderHandlers.forEach((handler) => {
      handler();
    });
  }
}

describe('FsCmsPageChangeAdapter', () => {
  const caasClient = new MockCaasClient(pageChangeResult);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FsSpartacusBridgeModule.withConfig({
          bridge: {
            test: {
              caas: { baseUrl: 'baseUrl', project: 'project', apiKey: 'apiKey', tenantId: 'defaultTenant' },
              firstSpiritManagedPages: [],
            },
          },
        }),
        ConfigModule.forRoot(),
      ],
      providers: [
        { provide: CmsService, useValue: { getCurrentPage: () => of({}) } },
        { provide: CaasClientFactory, useFactory: caasClientFactory(caasClient) },
        { provide: TppWrapperService, useClass: MockTppWrapperService },
        { provide: BaseSiteService, useClass: MockBaseSiteService },
      ],
    });
  });

  it('should propagate changes made by OCM', (done) => {
    const adapter = TestBed.inject(FsCmsPageChangeAdapter);
    const tppWrapperService = TestBed.inject(TppWrapperService as Type<MockTppWrapperService>);

    const pageContextById = { id: 'homepage', type: PageType.CONTENT_PAGE };
    adapter.load(pageContextById).subscribe((result: CmsStructureModel) => {
      expect(result.page.name).toEqual('Dummy Homepage');
      done();
    });
    tppWrapperService.triggerRerender();
  });

  it('should propagate changes made by OCM on pages that were navigated via seo url', (done) => {
    const adapter = TestBed.inject(FsCmsPageChangeAdapter);
    const tppWrapperService = TestBed.inject(TppWrapperService as Type<MockTppWrapperService>);

    const pageContextBySeoUrl = { id: 'homepage_custom_seo_url', type: PageType.CONTENT_PAGE };
    adapter.load(pageContextBySeoUrl).subscribe((result: CmsStructureModel) => {
      expect(result.page.name).toEqual('Dummy Homepage');
      done();
    });
    tppWrapperService.triggerRerender();
  });

  it('should correctly propagate page deletions', (done) => {
    class AnotherMockTppWrapperService extends MockTppWrapperService {
      async renderElement(previewId: string) {
        // If a previewId can not be resolved to an element (e. g. because it has been deleted),
        // TPP_SNAP.renderElement returns an empty string.
        return Promise.resolve('' as any);
      }
    }
    TestBed.configureTestingModule({
      providers: [{ provide: TppWrapperService, useClass: AnotherMockTppWrapperService }],
    });
    const adapter = TestBed.inject(FsCmsPageChangeAdapter);
    const tppWrapperService = TestBed.inject(TppWrapperService as Type<MockTppWrapperService>);

    const pageContextBySeoUrl = { id: 'homepage', type: PageType.CONTENT_PAGE };
    adapter.load(pageContextBySeoUrl).subscribe((result) => {
      // FsCmsPagePreparer will return null, if the input (result from TPP_SNAP.renderElement) is falsy
      expect(result).toBeNull();
      done();
    });
    tppWrapperService.triggerRerender();
  });
});
