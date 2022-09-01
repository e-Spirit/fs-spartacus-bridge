import { PageContext, PageType } from '@spartacus/core';
import { Injectable } from '@angular/core';

/**
 * This factory creates a context from an Identifier and a PageType.
 */
@Injectable({
  providedIn: 'root',
})
export class FsCmsPageContextFactory {
  /**
   * This method returns the resulting PageContext.
   *
   * @param pageIdentifier The page's identifier.
   * @param pageType The page's type.
   */
  createPageContextFor(pageIdentifier: string, pageType: PageType): PageContext {
    return { id: pageIdentifier, type: pageType };
  }
}
