import { Injectable } from '@angular/core';
import { PreviewPageService } from './preview/preview-page.service';
import { WindowRef } from '@spartacus/core';

/**
 * This service handles message events which are fired by fs-tpp-api/snap and initiates actions accordingly.
 *
 * @export
 * @class NavigationMessageHandlerService
 */
@Injectable({
  providedIn: 'root',
})
export class NavigationMessageHandlerService {
  constructor(private previewPageService: PreviewPageService, private winRef: WindowRef) {}

  /**
   * This method initializes the message EventListener and handles the navigation of the preview to a SAP Commerce page.
   *
   */
  initialize(): void {
    this.winRef.nativeWindow?.addEventListener(
      'message',
      (event) => {
        this.handleNavigationMessage(event);
      },
      false
    );
  }

  /**
   * This method destroys the EventListener attached during initialize().
   */
  destroy() {
    this.winRef.nativeWindow?.removeEventListener('message', this.handleNavigationMessage, false);
  }

  private handleNavigationMessage(event: MessageEvent) {
    if (typeof event?.data === 'string' && event.data.startsWith('navigate:')) {
      const hybrisPageId = event.data.substring(9);
      this.navigateToHybrisPage(hybrisPageId);
    }
  }

  private async navigateToHybrisPage(hybrisPageId: string): Promise<void> {
    if (typeof hybrisPageId === 'string' && hybrisPageId.trim().length > 0) {
      if ((await this.previewPageService.navigateTo(hybrisPageId)) !== true) {
        console.error(`Could not navigate to the element with hybrisPageId: ${hybrisPageId}`);
      }
    } else console.error(`Could not navigate to empty hybrisPageId`);
  }
}
