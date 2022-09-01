import { TestBed } from '@angular/core/testing';
import { BaseSiteService, ConfigModule, LanguageService, PageContext, PageType } from '@spartacus/core';
import { of, Subscription } from 'rxjs';

import { FsSpartacusBridgeModule } from '../../../fs-spartacus-bridge.module';
import { CaasClientFactory } from '../../caas/caas-client.factory';
import { FsCmsPageAdapter } from './fs-cms-page.adapter';
import { FS_CMS_PAGE_PREPARER } from './fs-cms-page.converter';
import { caasFilterResult, fsCmsPageInterfaceJsonEn } from './fs-cms-page.adapter.spec.data';

import createSpy = jasmine.createSpy;
import Spy = jasmine.Spy;
import { MockBaseSiteService } from './processing/merge/cms-structure-model-merger-factory.spec';

class MockPreparer {
  convert = createSpy('Converter.convert').and.returnValue(of(fsCmsPageInterfaceJsonEn));
}

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

function languageServiceFactory(language) {
  return () => ({
    getActive: () => of(language),
    setActive: (isecode: string): Subscription => new Subscription(),
  });
}

describe('FsCmsPageAdapter', () => {
  const caasClient = new MockCaasClient(caasFilterResult);
  const pageContext: PageContext = { id: 'homepage', type: PageType.CONTENT_PAGE };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FsSpartacusBridgeModule.withConfig({
          bridge: {
            test: {
              caas: {
                baseUrl: 'baseUrl',
                project: 'project',
                apiKey: 'apiKey',
                tenantId: 'defaultTenant',
              },
              firstSpiritManagedPages: [],
            },
          },
        }),
        ConfigModule.forRoot(),
      ],
      providers: [
        { provide: LanguageService, useFactory: languageServiceFactory('de') },
        { provide: CaasClientFactory, useFactory: caasClientFactory(caasClient) },
        { provide: FS_CMS_PAGE_PREPARER, useClass: MockPreparer, multi: true },
        { provide: BaseSiteService, useClass: MockBaseSiteService },
      ],
    });
  });

  it('should call caas client with right parameters', (done) => {
    const adapter: FsCmsPageAdapter = TestBed.inject(FsCmsPageAdapter);
    adapter.load(pageContext).subscribe((result) => {
      expect(caasClient.getByUid).toHaveBeenCalledWith('homepage', 'de', 'homepage');
      done();
    });
  });

  it('should forward the caas document to the converter', (done) => {
    const adapter: FsCmsPageAdapter = TestBed.inject(FsCmsPageAdapter);
    adapter.load(pageContext).subscribe((result) => {
      const converters = TestBed.inject(FS_CMS_PAGE_PREPARER);
      expect(converters[1].convert.calls.mostRecent().args[0]).toEqual(caasFilterResult._embedded['rh:doc'][0]);
      done();
    });
  });

  it("should store the page's uid once it's known and use it to query the CaaS", (done) => {
    const adapter: FsCmsPageAdapter = TestBed.inject(FsCmsPageAdapter);
    expect((adapter as any).seoUrlToUidMap.get('test_seo_route')).toBeUndefined();
    adapter.load({ id: 'test_seo_route', type: PageType.CONTENT_PAGE }).subscribe((result) => {
      expect(caasClient.getByUid).toHaveBeenCalledWith('test_seo_route', 'de', 'test_seo_route');
      expect((adapter as any).seoUrlToUidMap.get('test_seo_route')).toBe('homepage');
      expect((adapter as any).seoUrlToUidMap.get('unknown_seo_url')).toBeUndefined();
      adapter.load({ id: 'test_seo_route', type: PageType.CONTENT_PAGE }).subscribe((innerResult) => {
        expect(caasClient.getByUid).toHaveBeenCalledWith('homepage', 'de', 'test_seo_route');
        expect((adapter as any).seoUrlToUidMap.get('test_seo_route')).toBe('homepage');
        done();
      });
    });
  });

  it("should not store the page's uid if the seo url is empty", (done) => {
    TestBed.overrideProvider(LanguageService, {
      useFactory: languageServiceFactory('fr'),
    });
    const adapter: FsCmsPageAdapter = TestBed.inject(FsCmsPageAdapter);
    expect((adapter as any).seoUrlToUidMap.get('')).toBeUndefined();
    adapter.load(pageContext).subscribe((result) => {
      expect(caasClient.getByUid).toHaveBeenCalledWith('homepage', 'fr', 'homepage');
      expect((adapter as any).seoUrlToUidMap.get('')).toBeUndefined();
      done();
    });
  });

  it('should forward the caas document in the language of the storefront', (done) => {
    TestBed.overrideProvider(LanguageService, {
      useFactory: languageServiceFactory('ar'),
    });
    const adapter: FsCmsPageAdapter = TestBed.inject(FsCmsPageAdapter);
    adapter.load(pageContext).subscribe((result) => {
      const converters = TestBed.inject(FS_CMS_PAGE_PREPARER);
      expect(converters[1].convert.calls.mostRecent().args[0]).toEqual(caasFilterResult._embedded['rh:doc'][2]);
      done();
    });
  });

  it('should forward the first caas document if no caas document in the language of the storefront is found', (done) => {
    TestBed.overrideProvider(LanguageService, {
      useFactory: languageServiceFactory('other_language'),
    });
    const adapter: FsCmsPageAdapter = TestBed.inject(FsCmsPageAdapter);
    adapter.load(pageContext).subscribe((result) => {
      const converters = TestBed.inject(FS_CMS_PAGE_PREPARER);
      expect(converters[1].convert.calls.mostRecent().args[0]).toEqual(caasFilterResult._embedded['rh:doc'][0]);
      done();
    });
  });

  it('should return an empty page, if no matching caas document was found', (done) => {
    TestBed.overrideProvider(CaasClientFactory, {
      useFactory: caasClientFactory(
        new MockCaasClient({
          _id: 'preview.content',
          _etag: {
            $oid: '5e3c27ae58512d0001629f20',
          },
          _returned: 0,
        })
      ),
    });

    const adapter: FsCmsPageAdapter = TestBed.inject(FsCmsPageAdapter);
    adapter.load(pageContext).subscribe((result) => {
      expect(result).toBeNull();
      done();
    });
  });

  it('should return an empty page, if the caas response can not be parsed', (done) => {
    TestBed.overrideProvider(CaasClientFactory, {
      useFactory: caasClientFactory(new MockCaasClient({})),
    });

    const adapter: FsCmsPageAdapter = TestBed.inject(FsCmsPageAdapter);
    adapter.load(pageContext).subscribe((result) => {
      expect(result).toBeNull();
      done();
    });
  });
});
