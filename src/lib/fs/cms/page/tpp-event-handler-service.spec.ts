import { PreviewPageService } from './preview/preview-page.service';
import { PreviewTranslationKey } from './preview/preview-translation.service';
import { PreviewService } from './preview/preview.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TppEventHandlerService } from './tpp-event-handler-service';
import { TppWrapperService } from './tpp-wrapper-service';
import { TestBed } from '@angular/core/testing';
import { BaseSiteService, ConfigModule, LanguageService, TranslationService } from '@spartacus/core';
import { of } from 'rxjs';

import { FsSpartacusBridgeModule } from '../../../fs-spartacus-bridge.module';
import { CaasClientFactory } from '../../caas/caas-client.factory';
import { Injectable, NgZone } from '@angular/core';
import { TppLoaderService } from './tpp-loader.service';
import { SNAP, Status } from './fs-tpp-api.data';
import createSpy = jasmine.createSpy;
import Spy = jasmine.Spy;
import { MockBaseSiteService } from './processing/merge/cms-structure-model-merger-factory.spec';

const DEFAULT_UID = 'uid-123';
const DEFAULT_SECOND_CALL_SUFFIX = 'uid-123';
const DEFAULT_PAGE_NAME = 'TestPage';
const DEFAULT_INITIAL_PREVIEW_ID = 'initial-preview-id';
const DEFAULT_PREVIEW_ID = 'preview-id';
const DEFAULT_PAGE_PREVIEW_ID = '4711';
const DEFAULT_LANGUAGE = 'EN';

@Injectable()
class MockPreviewService extends PreviewService {
  showDetailedErrorDialog = createSpy('PreviewService.showDetailedErrorDialog');
  showErrorDialog = createSpy('PreviewService.showErrorDialog');
}

@Injectable()
class MockTppWrapperService extends TppWrapperService {
  constructor(
    private getHybrisPageIdResult: string,
    private getElementStatusResult = {
      uid: DEFAULT_UID,
      displayName: DEFAULT_PAGE_NAME,
      name: DEFAULT_PAGE_NAME,
    },
    tppLoaderService: TppLoaderService
  ) {
    super(tppLoaderService);
  }
  onRequestPreviewElementHandler: (previewId: string) => void;

  getElementStatus = createSpy('TppWrapperService.getElementStatus').and.callFake(
    async (previewId: string): Promise<Status> => {
      return Promise.resolve(this.getElementStatusResult as any);
    }
  );

  isFirstSpiritPreview = createSpy('TppWrapperService.isFirstSpiritPreview').and.returnValue(of(false));

  getPreviewElement = createSpy('TppWrapperService.getPreviewElement').and.returnValue(Promise.resolve(DEFAULT_PAGE_PREVIEW_ID));

  setPreviewElement = createSpy('TppWrapperService.setPreviewElement').and.returnValue(Promise.resolve());

  getHybrisPageId = createSpy('TppWrapperService.getHybrisPageId').and.returnValues(
    Promise.resolve(this.getHybrisPageIdResult),
    Promise.resolve(this.getHybrisPageIdResult + DEFAULT_SECOND_CALL_SUFFIX)
  );

  setHybrisPageId = createSpy('TppWrapperService.setHybrisPageId').and.callFake(
    async (pageRefUid: string, hybrisPageId: string): Promise<void> => Promise.resolve()
  );

  onRequestPreviewElement = createSpy('TppWrapperService.onRequestPreviewElement').and.callFake(
    async (handler: (previewId: string) => void) => {
      this.onRequestPreviewElementHandler = handler;
    }
  );

  getPreviewLanguage = createSpy('TppWrapperService.getPreviewLanguage').and.returnValue(Promise.resolve(DEFAULT_LANGUAGE));

  showEditDialog = createSpy('TppWrapperService.showEditDialog');

  triggerOnRequestPreviewElementHandler(previewId: string): void {
    this.onRequestPreviewElementHandler(previewId);
  }

  async renderElement(previewId: string): Promise<any> {
    return Promise.resolve<any>({});
  }
}

class MockTppLoaderService extends TppLoaderService {
  constructor() {
    super('test');
  }
  async getSnap(): Promise<SNAP> | null {
    return null;
  }
}

@Injectable()
class MockPreviewPageService extends PreviewPageService {
  navigateTo = createSpy('PreviewPageService.navigateTo').and.callFake(async (hybrisPageId: string) => Promise.resolve(true));
}

@Injectable()
class MockNgZone extends NgZone {
  onRequestPreviewElementHandler: any;

  constructor() {
    super({ enableLongStackTrace: false });
  }

  run(functionToCall: () => void): any {
    this.onRequestPreviewElementHandler = functionToCall;
  }
}

@Injectable()
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
    setActive: createSpy('LanguageService.setActive'),
  });
}

describe('TppEventHandlerService', () => {
  const caasClient = new MockCaasClient({});

  const triggerOnRequestPreviewElementHandlerExecution = async (
    tppEventHandler: TppEventHandlerService,
    tppWrapperService: TppWrapperService,
    ngZone: NgZone,
    initialPreviewId: string = DEFAULT_INITIAL_PREVIEW_ID,
    previewId: string = DEFAULT_PREVIEW_ID
  ): Promise<void> => {
    tppEventHandler.initialize();
    (tppWrapperService as MockTppWrapperService).triggerOnRequestPreviewElementHandler(previewId);
    return (ngZone as MockNgZone).onRequestPreviewElementHandler();
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
        { provide: LanguageService, useFactory: languageServiceFactory(DEFAULT_LANGUAGE.toLocaleLowerCase()) },
        { provide: CaasClientFactory, useFactory: caasClientFactory(caasClient) },
        {
          provide: TppWrapperService,
          useValue: new MockTppWrapperService(DEFAULT_UID, undefined, new MockTppLoaderService()),
        },
        { provide: PreviewService, useClass: MockPreviewService },
        { provide: PreviewPageService, useClass: MockPreviewPageService },
        { provide: TranslationService, useValue: {} },
        { provide: NgZone, useClass: MockNgZone },
        { provide: BaseSiteService, useClass: MockBaseSiteService },
      ],
    });
  });

  it('should navigate to a page that was newly created', async () => {
    const tppEventHandler = TestBed.inject(TppEventHandlerService);
    spyOn(tppEventHandler as any, 'fetchPageFromCaas').and.returnValue({ uid: DEFAULT_UID });
    const previewPageService = TestBed.inject(PreviewPageService);
    const tppWrapperService = TestBed.inject(TppWrapperService);
    const ngZone = TestBed.inject(NgZone);

    await triggerOnRequestPreviewElementHandlerExecution(tppEventHandler, tppWrapperService, ngZone);
    expect(tppWrapperService.getPreviewElement).toHaveBeenCalled();
    expect(tppWrapperService.getElementStatus).toHaveBeenCalledWith(DEFAULT_PREVIEW_ID);
    expect(tppWrapperService.getHybrisPageId).toHaveBeenCalledWith(DEFAULT_UID);
    expect((tppEventHandler as any).fetchPageFromCaas).toHaveBeenCalledWith(DEFAULT_UID);
    expect(previewPageService.navigateTo).toHaveBeenCalledWith(`ContentPage:${DEFAULT_UID}`);
    expect(tppWrapperService.showEditDialog).toHaveBeenCalledWith(DEFAULT_PREVIEW_ID);
  });

  it('should navigate to a page that was requested via report', async () => {
    TestBed.overrideProvider(TppWrapperService, {
      useValue: new MockTppWrapperService(`ContentPage:${DEFAULT_UID}`, undefined, new MockTppLoaderService()),
    });
    const tppEventHandler = TestBed.inject(TppEventHandlerService);
    spyOn(tppEventHandler as any, 'fetchPageFromCaas').and.returnValue({ uid: DEFAULT_UID });
    const previewPageService = TestBed.inject(PreviewPageService);
    const tppWrapperService = TestBed.inject(TppWrapperService);
    const ngZone = TestBed.inject(NgZone);

    await triggerOnRequestPreviewElementHandlerExecution(tppEventHandler, tppWrapperService, ngZone);
    expect(tppWrapperService.getPreviewElement).toHaveBeenCalled();
    expect(tppWrapperService.getElementStatus).toHaveBeenCalledWith(DEFAULT_PREVIEW_ID);
    expect(tppWrapperService.getHybrisPageId).toHaveBeenCalledWith(DEFAULT_UID);
    expect(previewPageService.navigateTo).toHaveBeenCalledWith(`ContentPage:${DEFAULT_UID}`);
    expect(tppWrapperService.showEditDialog).not.toHaveBeenCalled();
  });

  it('should display an error message if the page is not found in the caas', async () => {
    const tppEventHandler = TestBed.inject(TppEventHandlerService);
    spyOn(tppEventHandler as any, 'fetchPageFromCaas').and.returnValue(undefined);
    const previewService = TestBed.inject(PreviewService);
    const previewPageService = TestBed.inject(PreviewPageService);
    const tppWrapperService = TestBed.inject(TppWrapperService);
    const ngZone = TestBed.inject(NgZone);

    await triggerOnRequestPreviewElementHandlerExecution(tppEventHandler, tppWrapperService, ngZone);
    expect(previewService.showDetailedErrorDialog).toHaveBeenCalledWith(PreviewTranslationKey.REQUESTED_CAAS_PAGE_NOT_AVAILABLE_YET, {
      pageUid: DEFAULT_UID,
    });
    expect(previewPageService.navigateTo).not.toHaveBeenCalled();
  });

  it('should display an error message if page navigation does not work', async () => {
    TestBed.overrideProvider(PreviewPageService, {
      useValue: {
        navigateTo: createSpy('PreviewPageService.navigateTo').and.callFake(async (hybrisPageId: string) => Promise.resolve(false)),
      },
    });
    const tppEventHandler = TestBed.inject(TppEventHandlerService);
    spyOn(tppEventHandler as any, 'fetchPageFromCaas').and.returnValue({ uid: DEFAULT_UID });
    const previewService = TestBed.inject(PreviewService);
    const previewPageService = TestBed.inject(PreviewPageService);
    const tppWrapperService = TestBed.inject(TppWrapperService);
    const ngZone = TestBed.inject(NgZone);

    await triggerOnRequestPreviewElementHandlerExecution(tppEventHandler, tppWrapperService, ngZone);
    expect(previewPageService.navigateTo).toHaveBeenCalledWith(`ContentPage:${DEFAULT_UID}`);
    expect(previewService.showDetailedErrorDialog).toHaveBeenCalledWith(PreviewTranslationKey.REQUESTED_CAAS_PAGE_NOT_AVAILABLE_YET, {
      pageUid: DEFAULT_UID,
    });
  });

  it('should display an error message if no element status is available for the given preview id', async () => {
    TestBed.overrideProvider(TppWrapperService, {
      useValue: new MockTppWrapperService(DEFAULT_UID, null, new MockTppLoaderService()),
    });
    const tppEventHandler = TestBed.inject(TppEventHandlerService);
    spyOn(tppEventHandler as any, 'fetchPageFromCaas').and.returnValue({ uid: DEFAULT_UID });
    const previewService = TestBed.inject(PreviewService);
    const previewPageService = TestBed.inject(PreviewPageService);
    const tppWrapperService = TestBed.inject(TppWrapperService);
    const ngZone = TestBed.inject(NgZone);

    await triggerOnRequestPreviewElementHandlerExecution(tppEventHandler, tppWrapperService, ngZone);
    expect(tppWrapperService.getElementStatus).toHaveBeenCalledWith(DEFAULT_PREVIEW_ID);
    expect(tppWrapperService.getHybrisPageId).not.toHaveBeenCalled();
    expect(previewService.showDetailedErrorDialog).toHaveBeenCalledWith(PreviewTranslationKey.NAVIGATION_ERROR_ELEMENT_STATUS_HAS_NO_UID, {
      previewId: DEFAULT_PREVIEW_ID,
      elementStatusString: 'null',
    });
    expect(previewPageService.navigateTo).not.toHaveBeenCalled();
  });

  it('should display an error message if the getHybrisPageId result is null', async () => {
    TestBed.overrideProvider(TppWrapperService, {
      useValue: new MockTppWrapperService(null, undefined, new MockTppLoaderService()),
    });
    const tppEventHandler = TestBed.inject(TppEventHandlerService);
    spyOn(tppEventHandler as any, 'fetchPageFromCaas').and.returnValue({ uid: DEFAULT_UID });
    const previewService = TestBed.inject(PreviewService);
    const previewPageService = TestBed.inject(PreviewPageService);
    const tppWrapperService = TestBed.inject(TppWrapperService);
    const ngZone = TestBed.inject(NgZone);

    await triggerOnRequestPreviewElementHandlerExecution(tppEventHandler, tppWrapperService, ngZone);
    expect(tppWrapperService.getElementStatus).toHaveBeenCalledWith(DEFAULT_PREVIEW_ID);
    expect(tppWrapperService.getHybrisPageId).toHaveBeenCalledWith(DEFAULT_UID);
    expect(previewService.showDetailedErrorDialog).toHaveBeenCalledWith(PreviewTranslationKey.NAVIGATION_ERROR_HYBRIS_PAGE_ID_IS_NULL, {
      previewId: DEFAULT_PREVIEW_ID,
      uid: DEFAULT_UID,
    });
    expect(previewPageService.navigateTo).not.toHaveBeenCalled();
  });

  it('should handle language changes via navigation', async () => {
    const tppEventHandler = TestBed.inject(TppEventHandlerService);
    spyOn(tppEventHandler as any, 'fetchPageFromCaas').and.returnValue({ uid: DEFAULT_UID });
    const tppWrapperService = TestBed.inject(TppWrapperService);
    const languageService = TestBed.inject(LanguageService);
    const ngZone = TestBed.inject(NgZone);

    await triggerOnRequestPreviewElementHandlerExecution(tppEventHandler, tppWrapperService, ngZone);
    expect(tppWrapperService.getElementStatus).toHaveBeenCalledWith(DEFAULT_PREVIEW_ID);
    expect(tppWrapperService.getPreviewLanguage).toHaveBeenCalled();
    expect(tppWrapperService.setPreviewElement).toHaveBeenCalledWith(DEFAULT_PREVIEW_ID);
    expect(languageService.setActive).toHaveBeenCalledWith(DEFAULT_LANGUAGE.toLocaleLowerCase());
  });
});
