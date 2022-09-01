import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationMessageHandlerService } from './navigation-message-handler.service';
import { PreviewPageService } from './preview/preview-page.service';

import createSpy = jasmine.createSpy;
import { WindowRef } from '@spartacus/core';

@Injectable()
class MockPreviewPageService extends PreviewPageService {
  navigateTo = createSpy('PreviewPageService.navigateTo').and.callFake(async (hybrisPageId: string) => Promise.resolve(true));
}

class MockWindowRef extends WindowRef {
  get nativeWindow(): Window | undefined {
    return window;
  }
}

describe('NavigationMessageEventHandlerService', () => {
  let mockWindowRef: MockWindowRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: PreviewPageService, useClass: MockPreviewPageService },
        { provide: WindowRef, useClass: MockWindowRef },
      ],
    });

    spyOn(console, 'error').and.callThrough();
    mockWindowRef = TestBed.inject(WindowRef);
  });

  it('should add event listener on initialization', () => {
    const navigationMessageHandlerService = TestBed.inject(NavigationMessageHandlerService);
    spyOn(mockWindowRef.nativeWindow, 'addEventListener');
    navigationMessageHandlerService.initialize();
    expect(mockWindowRef.nativeWindow.addEventListener).toHaveBeenCalled();
  });

  it('should remove event listener on destroy', () => {
    const navigationMessageHandlerService = TestBed.inject(NavigationMessageHandlerService);
    spyOn(mockWindowRef.nativeWindow, 'removeEventListener');
    navigationMessageHandlerService.destroy();
    expect(mockWindowRef.nativeWindow.removeEventListener).toHaveBeenCalled();
  });

  describe('handleNavigationMessage', () => {
    it('sould extract hybris page id and navigate to page if navigation message starts with "navigate:"', () => {
      const navigationMessageHandlerService = TestBed.inject(NavigationMessageHandlerService);
      const messageEvent = new MessageEvent('message', { data: 'navigate:/hybrisPageId' });
      spyOn(navigationMessageHandlerService as any, 'navigateToHybrisPage');
      (navigationMessageHandlerService as any).handleNavigationMessage(messageEvent);
      expect((navigationMessageHandlerService as any).navigateToHybrisPage).toHaveBeenCalledWith('/hybrisPageId');
    });

    it('sould log warning if navigation message data has incompatible type', () => {
      const navigationMessageHandlerService = TestBed.inject(NavigationMessageHandlerService);
      const messageEvents = [
        new MessageEvent('message', { data: undefined }),
        new MessageEvent('message', { data: null }),
        new MessageEvent('message', { data: 1 }),
        new MessageEvent('message', { data: [] }),
        new MessageEvent('message', { data: {} }),
        new MessageEvent('message', {}),
        new MessageEvent('message', { data: 'message:/hybrisPageId' }),
      ];

      spyOn(navigationMessageHandlerService as any, 'navigateToHybrisPage');
      messageEvents.forEach((messageEvent) => {
        (navigationMessageHandlerService as any).handleNavigationMessage(messageEvent);
        expect((navigationMessageHandlerService as any).navigateToHybrisPage).not.toHaveBeenCalled();
      });
    });
  });

  describe('navigateToHybrisPage', () => {
    it('should call preview page service with hybris page id', async () => {
      const navigationMessageHandlerService = TestBed.inject(NavigationMessageHandlerService);
      const previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = 'p/1234567';
      await (navigationMessageHandlerService as any).navigateToHybrisPage(hybrisPageId);
      expect(previewPageService.navigateTo).toHaveBeenCalledWith(hybrisPageId);
    });

    it('should log warning and NOT call preview page service if hybris page id is empty', async () => {
      const navigationMessageHandlerService = TestBed.inject(NavigationMessageHandlerService);
      const previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = '';
      await (navigationMessageHandlerService as any).navigateToHybrisPage(hybrisPageId);
      expect(console.error).toHaveBeenCalled();
      expect(previewPageService.navigateTo).not.toHaveBeenCalled();
    });

    it('should log warning and NOT call preview page service if hybris page id is undefined', async () => {
      const navigationMessageHandlerService = TestBed.inject(NavigationMessageHandlerService);
      const previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = undefined;
      await (navigationMessageHandlerService as any).navigateToHybrisPage(hybrisPageId);
      expect(console.error).toHaveBeenCalled();
      expect(previewPageService.navigateTo).not.toHaveBeenCalled();
    });

    it('should log warning and NOT call preview page service if hybris page id is null', async () => {
      const navigationMessageHandlerService = TestBed.inject(NavigationMessageHandlerService);
      const previewPageService = TestBed.inject(PreviewPageService);
      const hybrisPageId = null;
      await (navigationMessageHandlerService as any).navigateToHybrisPage(hybrisPageId);
      expect(console.error).toHaveBeenCalled();
      expect(previewPageService.navigateTo).not.toHaveBeenCalled();
    });
  });
});
