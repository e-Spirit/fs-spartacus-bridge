import { Injectable } from '@angular/core';
import { FsCmsPageInterface } from './fs-cms-page.interface';
import { TppLoaderService } from './tpp-loader.service';
import { CreatePageOptions, CreatePageResult, CreateSectionOptions, CreateSectionResult, Status } from './fs-tpp-api.data';

export interface PageTypeMappingResult {
  fsTemplate: string;
  supportsContentPageEnrichment: string;
  pageFolder: string;
}

/**
 * This service wraps the fs-tpp-api/snap implementation into a typed one for a TypeScript accessible package.
 * See the fs-tpp-api/snap [documentation]{@link https://docs.e-spirit.com/tpp/snap/} for more information.
 *
 * @export
 * @class TppWrapperService
 */
@Injectable({
  providedIn: 'root',
})
export class TppWrapperService {
  private TPP_SNAP = this.tppLoaderService.getSnap();

  constructor(private tppLoaderService: TppLoaderService) {}

  async getFsPageTypeMapping(pageType: string, pageTemplate: string): Promise<PageTypeMappingResult | undefined> {
    console.log(`Execute the script 'page_type_mapping' with the parameters pageType = '${pageType}' and pageTemplate = '${pageTemplate}'`);
    const result = (await this.execute('script:page_type_mapping', { pageType, pageTemplate })) as PageTypeMappingResult;
    console.log(`The result of the execution of the script 'page_type_mapping' is: '${JSON.stringify(result)}'`);
    return result;
  }

  async showErrorMessageDialog(title: string, message: string, detailedMessage?: string): Promise<void> {
    console.error(`showErrorMessageDialog(): ${title}: ${message}`, detailedMessage);
    return await this.execute('script:show_message_dialog', { message, title, detailedMessage });
  }

  async setPreviewElement(previewId: string): Promise<void> {
    const snap = await this.TPP_SNAP;
    await snap?.setPreviewElement(previewId || null); // It is important to pass null (instead of undefined), if there is no preview id!
  }

  async getHybrisPageId(pageRefUid: string): Promise<string> {
    const getPageIdParameters = { pageRefUid };
    console.log(
      `Calling the script 'ContentConnectSAPCommerceCloud_GetHybrisPageId' with the following parameters: ${JSON.stringify(
        getPageIdParameters
      )}`
    );
    return this.execute('class:ContentConnectSAPCommerceCloud_GetHybrisPageId', getPageIdParameters);
  }

  async setHybrisPageId(pageRefUid: string, hybrisPageId: string): Promise<string | null> {
    const pageDataParameters = { pageRefUid, hybrisPageId, syncWithCmsPage: false };
    console.log(
      `Calling the script 'ContentConnectSAPCommerceCloud_FSContentPageDataEnrichment' with the following parameters: ${JSON.stringify(
        pageDataParameters
      )}`
    );
    return this.execute('class:ContentConnectSAPCommerceCloud_FSContentPageDataEnrichment', pageDataParameters);
  }

  async getElementStatus(previewId: string): Promise<Status> {
    const snap = await this.TPP_SNAP;
    return snap?.getElementStatus(previewId);
  }

  async getPreviewElement(): Promise<string> {
    const snap = await this.TPP_SNAP;
    return snap?.getPreviewElement();
  }

  async createSection(previewId: string, options?: CreateSectionOptions): Promise<CreateSectionResult | void> {
    const snap = await this.TPP_SNAP;
    return snap?.createSection(previewId, options);
  }

  async createPage(path: string, uid: string, template: string, options?: CreatePageOptions): Promise<CreatePageResult | void> {
    const snap = await this.TPP_SNAP;
    return snap?.createPage(path, uid, template, options);
  }

  async onRerenderView(handler: () => void): Promise<void> {
    const snap = await this.TPP_SNAP;
    snap.onRerenderView(handler);
  }

  async onRequestPreviewElement(handler: (previewId: string) => void): Promise<void> {
    const snap = await this.TPP_SNAP;
    await snap?.onRequestPreviewElement(handler);
  }

  async triggerRerenderView(): Promise<void> {
    const snap = await this.TPP_SNAP;
    return snap?.triggerRerenderView();
  }

  async renderElement(previewId: string): Promise<FsCmsPageInterface> {
    const snap = await this.TPP_SNAP;
    return snap?.renderElement(previewId) as Promise<FsCmsPageInterface>;
  }

  async execute(identifier: string, params: object, result?: boolean): Promise<any> {
    const snap = await this.TPP_SNAP;
    return snap?.execute(identifier, params, result);
  }
  async showEditDialog(previewId: string) {
    const snap = await this.TPP_SNAP;
    return snap?.showEditDialog(previewId);
  }

  async enableCaasMode(previewCollection: string, apiKey: string, options?: { updateTimeout?: number }): Promise<void> {
    const snap = await this.TPP_SNAP;
    snap.enableCaasMode(previewCollection, apiKey, options);
  }

  async getPreviewLanguage(): Promise<string> {
    const snap = await this.TPP_SNAP;
    return snap.getPreviewLanguage();
  }
}
