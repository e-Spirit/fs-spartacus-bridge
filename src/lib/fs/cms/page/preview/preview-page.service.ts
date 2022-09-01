import { Injectable, NgZone } from '@angular/core';
import { SemanticPathService, PageType } from '@spartacus/core';
import { Router } from '@angular/router';

/**
 * This service handles the URL creation and the navigation for the preview within the ContentCreator.
 *
 * @export
 * @class PreviewPageService
 */
@Injectable({
  providedIn: 'root',
})
export class PreviewPageService {
  static readonly HOMEPAGE_ID = '__HOMEPAGE__';
  constructor(private ngZone: NgZone, private semanticPathService: SemanticPathService, private router: Router) {}

  private assembleUrl(hybrisPageId: string): string | null {
    if (hybrisPageId == null || typeof hybrisPageId !== 'string' || hybrisPageId.length === 0) {
      console.error(
        `Can't assemble an url for navigation from an empty hybris page id! Please make sure the hybrisPageId is not empty and of type string.`
      );
      return null;
    }
    let url: string = null;
    const [sapPageType, sapPageId] = hybrisPageId.split(':');
    if (hybrisPageId.indexOf(':') < 0) {
      // Probably a FirstSpirit driven page since the hybrisPageId doesn't contain a colon
      // In this case we'll assume this is the page's uid and try to navigate directly to it
      url = this.router.serializeUrl(this.router.parseUrl(this.addLeadingSlash(hybrisPageId)));
    } else if (sapPageId && sapPageId === PreviewPageService.HOMEPAGE_ID) {
      url = this.router.serializeUrl(this.router.createUrlTree(this.semanticPathService.transform({ cxRoute: 'homepage' })));
    } else if (sapPageId != null && sapPageType != null && sapPageId.length > 0 && sapPageType.length > 0) {
      switch (sapPageType) {
        case PageType.PRODUCT_PAGE:
          url = this.router.serializeUrl(
            this.router.createUrlTree(this.semanticPathService.transform({ cxRoute: 'product', params: { code: sapPageId, name: '' } }))
          );
          break;
        case PageType.CATEGORY_PAGE:
          url = this.router.serializeUrl(
            this.router.createUrlTree(this.semanticPathService.transform({ cxRoute: 'category', params: { code: sapPageId } }))
          );
          break;
        case PageType.CONTENT_PAGE:
        case PageType.CATALOG_PAGE:
        default:
          url = this.router.serializeUrl(this.router.parseUrl(this.addLeadingSlash(sapPageId)));
      }
    } else {
      console.error(`Couldn't assemble an url for the given hybrisPageId '${hybrisPageId}'!`);
    }
    return url;
  }

  private addLeadingSlash(url: string): string {
    return url?.startsWith('/') ? `${url}` : `/${url}`;
  }

  /**
   * This method navigates the preview to a SAP Commerce page by a given ID.
   *
   * @param {string} hybrisPageId The ID of the SAP Commerce page to navigate the preview to.
   * @return {Promise<boolean>} Promise to resolve with whether the navigation was successful.
   * @memberof PreviewPageService
   */
  async navigateTo(hybrisPageId: string): Promise<boolean> {
    const url = this.assembleUrl(hybrisPageId);
    if (url != null) {
      console.log(`Navigate to '${url}' for hybrisPageId '${hybrisPageId}'`);
      return await this.ngZone.run(async () => {
        const success: boolean | void = await this.router
          .navigateByUrl(url)
          .catch((error) => console.error(`Error navigating to url '${url}': ${error}`));
        return typeof success === 'boolean' ? success : false;
      });
    }
    return false;
  }
}
