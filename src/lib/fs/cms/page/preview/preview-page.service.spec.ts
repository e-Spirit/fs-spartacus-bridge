import { NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SemanticPathService, UrlCommands } from '@spartacus/core';
import { PreviewPageService } from './preview-page.service';

class MockRouterTestingModule extends RouterTestingModule {
  constructor() {
    super();
  }

  async navigateByUrl(url: string) {
    if (url.includes('rejectedOnError')) {
      return Promise.reject(new Error('error'));
    }
    if (url.includes('navigatable')) {
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }

  parseUrl(url: string) {
    return url;
  }

  serializeUrl(url: UrlTree) {
    return url.toString();
  }

  createUrlTree(commands: any[]) {
    let urlTree = '/';
    for (let i = 1; i < commands.length; i++) {
      const slash = i < commands.length - 1 ? '/' : '';
      urlTree = urlTree + `${commands[i]}` + slash;
    }
    return urlTree;
  }
}

class MockNgZone extends NgZone {
  constructor() {
    super({ enableLongStackTrace: false });
  }

  run(fn: (...args) => any): any {
    return fn();
  }
}

describe('PreviewPageService', () => {
  let previewPageService: PreviewPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: SemanticPathService,
          useValue: {
            transform: (input: UrlCommands) => {
              if (input?.cxRoute === 'product') {
                return ['/', input.cxRoute, `${input.params.code}`, input.params.name ? input.params.name : ''];
              } else if (input?.cxRoute === 'category') {
                return ['/', input.cxRoute, `${input.params.code}`];
              }
            },
          },
        },
        {
          provide: NgZone,
          useClass: MockNgZone,
        },
        {
          provide: Router,
          useClass: MockRouterTestingModule,
        },
      ],
    });

    spyOn(console, 'error');
    spyOn(console, 'log');
  });

  describe('Assemble url', () => {
    const emptyPageIdErrorMessage = `Can't assemble an url for navigation from an empty hybris page id! Please make sure the hybrisPageId is not empty and of type string.`;
    it('Should return null and log error if hybris page id is empty', () => {
      const invalidData = [null, undefined, '', [], {}, 0, true];
      previewPageService = TestBed.inject(PreviewPageService);
      invalidData.forEach((element) => {
        const assembledUrl = (previewPageService as any).assembleUrl(element);
        expect(assembledUrl).toBe(null);
        expect(console.error).toHaveBeenCalledWith(emptyPageIdErrorMessage);
      });
    });

    it('Should return null and log error if hybris page id is invalid', () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const invalidHybrisPageIds = [':', 'ContentPage:', ':sapPageId'];
      invalidHybrisPageIds.forEach((element) => {
        const assembledUrl = (previewPageService as any).assembleUrl(element);
        expect(assembledUrl).toBe(null);
        expect(console.error).toHaveBeenCalledWith(`Couldn't assemble an url for the given hybrisPageId '${element}'!`);
      });
    });

    it('Should return url for non sap page', () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = 'nonSapPageId';
      const expectedUrl = '/nonSapPageId';
      const assembledUrl = (previewPageService as any).assembleUrl(hybrisPageId);
      expect(assembledUrl).toBe(expectedUrl);
    });

    it('Should return product page url', () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = 'ProductPage:sapPageId';
      const expectedUrl = '/product/sapPageId/';
      const assembledUrl = (previewPageService as any).assembleUrl(hybrisPageId);
      expect(assembledUrl).toBe(expectedUrl);
    });

    it('Should return category page url', () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = 'CategoryPage:sapPageId';
      const expectedUrl = '/category/sapPageId';
      const assembledUrl = (previewPageService as any).assembleUrl(hybrisPageId);
      expect(assembledUrl).toBe(expectedUrl);
    });

    it('Should return content page url', () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = 'ContentPage:sapPageId';
      const expectedUrl = '/sapPageId';
      const assembledUrl = (previewPageService as any).assembleUrl(hybrisPageId);
      expect(assembledUrl).toBe(expectedUrl);
    });

    it('Should return catalog page url', () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = 'CatalogPage:sapPageId';
      const expectedUrl = '/sapPageId';
      const assembledUrl = (previewPageService as any).assembleUrl(hybrisPageId);
      expect(assembledUrl).toBe(expectedUrl);
    });

    it('Should return page url if non existing page type is provided', () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = 'NoPageType:sapPageId';
      const expectedUrl = '/sapPageId';
      const assembledUrl = (previewPageService as any).assembleUrl(hybrisPageId);
      expect(assembledUrl).toBe(expectedUrl);
    });
  });

  describe('Add leading Slash', () => {
    it('Should add leading slash', () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const url = 'testurlwithoutslash';
      const expectedUrl = `/${url}`;
      const processedUrl = (previewPageService as any).addLeadingSlash(url);
      expect(processedUrl).toBe(expectedUrl);
    });

    it('Should add leading slash', () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const url = null;
      const expectedUrl = `/${url}`;
      const processedUrl = (previewPageService as any).addLeadingSlash(url);
      expect(processedUrl).toBe(expectedUrl);
    });

    it('Should not add leading slash', () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const url = '/testurlwithslash';
      const processedUrl = (previewPageService as any).addLeadingSlash(url);
      expect(processedUrl).toBe(url);
    });
  });

  describe('Navigate to', () => {
    it('Should return false', async () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = null;
      const navigationSuccess = await (previewPageService as any).navigateTo(hybrisPageId);
      expect(navigationSuccess).toBeFalse();
    });

    it('Should navigate to navigatable url', async () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = 'navigatableNonSapPageId';
      const navigationSuccess = await (previewPageService as any).navigateTo(hybrisPageId);
      expect(navigationSuccess).toEqual(true);
      expect(console.log).toHaveBeenCalled();
    });

    it('Should return false if fails to navigate to url', async () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = 'nonSapPageId';
      const navigationSuccess = await (previewPageService as any).navigateTo(hybrisPageId);
      expect(navigationSuccess).toEqual(false);
      expect(console.log).toHaveBeenCalled();
    });

    it('Should return false and log error if fails to navigate to url', async () => {
      previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = 'rejectedOnErrorNonSapPageId';
      const navigationSuccess = await (previewPageService as any).navigateTo(hybrisPageId);
      expect(navigationSuccess).toEqual(false);
      expect(console.log).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalled();
    });
  });
});
