import { PreviewDialogService } from './preview-dialog.service';
import { PreviewTranslationService, PreviewTranslationKey as TranslationKey } from './preview-translation.service';
import { TppWrapperService } from '../tpp-wrapper-service';
import { Injectable } from '@angular/core';
import { nullSafe, errorToString, FsSpartacusBridgeConfig } from 'fs-spartacus-common';
import { FsEditingOverlay } from '../../../../fs-editing-overlay/fs-editing-overlay.component';
import { getFsManagedPageConfigByTemplateId } from '../../../util/helper';
import { BaseSiteService, PageType } from '@spartacus/core';
import { CreatePageResult } from '../fs-tpp-api.data';
import { first } from 'rxjs/operators';

/**
 * Utility service that provides various functions associated with the ContentCreator, such as the preview, page creation, and error handling.
 *
 * @export
 * @class PreviewService
 */
@Injectable({
  providedIn: 'root',
})
export class PreviewService {
  constructor(
    private tppWrapperService: TppWrapperService,
    private previewTranslationService: PreviewTranslationService,
    private fsSpartacusBridgeConfig: FsSpartacusBridgeConfig,
    private previewDialogService: PreviewDialogService,
    private baseSiteService: BaseSiteService
  ) {}

  /**
   * This method shows a detailed error dialog for the given translation key of an error.
   * If no translation exists optional fallback keys are used.
   *
   * @param {TranslationKey} translationKey The error's translation key.
   * @param {{ [key: string]: string }} [replacements] A list of placeholder values that will be replaced in the message.
   * @memberof PreviewService
   */
  showDetailedErrorDialog(translationKey: TranslationKey, replacements?: { [key: string]: string }): void {
    const [title$, message$, detailedMessage$] = this.previewTranslationService.resolveDialogTexts(translationKey, replacements);
    this.previewDialogService.showDetailedErrorDialog(title$, message$, detailedMessage$);
  }

  /**
   * This method shows an error dialog for the given translation key of an error.
   * If no translation exists optional fallback keys are used.
   *
   * @param {TranslationKey} translationKey The error's translation key.
   * @param {{ [key: string]: string }} [replacements] A list of placeholder values that will be replaced in the message.
   * @memberof PreviewService
   */
  showErrorDialog(translationKey: TranslationKey, replacements?: { [key: string]: string }): void {
    const [title$, message$] = this.previewTranslationService.resolveDialogTexts(translationKey, replacements);
    this.previewDialogService.showErrorDialog(title$, message$);
  }

  /**
   * This method returns true if the given preview element is a FirstSpiritManagedPage.
   *
   * @param {(string | undefined)} previewElement The ID of the preview element that is checked.
   * @return {Promise<boolean>} The value whether the given element is a FirstSpiritManagedPage.
   * @memberof PreviewService
   */
  async isFirstSpiritManagedPage(previewElement: string | undefined): Promise<boolean> {
    const hasPreviewId = previewElement != null && previewElement.length > 0;
    let isManaged = false;
    if (hasPreviewId) {
      const elementStatus = await this.tppWrapperService.getElementStatus(previewElement);
      if (elementStatus != null) {
        const hasId = elementStatus.id != null;
        const hasUid = elementStatus.uid != null;
        const hasName = elementStatus.name != null;
        isManaged = hasId && hasUid && hasName;
      }
    }
    console.log(`The page '${previewElement}' is ${isManaged ? 'already' : 'not'} managed by FirstSpirit.`);
    return isManaged;
  }

  /**
   * This method creates a new page in the ContentCreator and displays an error dialog in case of an error.
   *
   * @param {string} pageUid The UID of the new page to be created.
   * @param {string} pageTemplate The template that is used for the creation of the new page.
   * @param {PageType} pageType The type of the new page.
   * @return {(Promise<CreatePageResult | undefined>)} Promise to resolve with information about the created page.
   * @memberof PreviewService
   */
  async createPage(pageUid: string, pageTemplate: string, pageType: PageType): Promise<CreatePageResult | undefined> {
    if (pageTemplate != null && pageUid != null && pageType != null) {
      let baseSite;
      this.baseSiteService
        .getActive()
        .pipe(first())
        .subscribe((activeBaseSite) => (baseSite = activeBaseSite));
      const fsPageConfig = getFsManagedPageConfigByTemplateId(
        this.fsSpartacusBridgeConfig.bridge[baseSite].firstSpiritManagedPages,
        pageTemplate
      );
      console.log(`Found the following configuration for the occ template id '${pageTemplate}': '${JSON.stringify(fsPageConfig)}'`);
      if (fsPageConfig != null) {
        const fsPageTypeMapping = await this.tppWrapperService.getFsPageTypeMapping(pageType, pageTemplate);
        const { fsTemplate, pageFolder } = nullSafe(fsPageTypeMapping, {});
        if (fsTemplate && pageFolder) {
          console.log(`Creating a new FirstSpirit page (path: '${pageFolder}', uid: '${pageUid}', template: '${fsTemplate}')`);
          return (await (this.tppWrapperService.createPage(pageFolder, pageUid, fsTemplate, {
            result: true,
            showFormDialog: false,
            forceUid: true,
          }) as Promise<CreatePageResult>).catch(async (error) => {
            // Since this is the only error OCM throws, we can safely check for the previewId which is always present in this kind of error.
            // OCM will pass the name of the error (as the previewId) so that we can check for the name of the error instead of checking
            // the content ot the error message.
            if (error?.message && error.previewId) {
              this.showDetailedErrorDialog(TranslationKey.DUPLICATE_PAGE_ERROR, {
                duplicatePageErrorMessage: error.message,
                errorMessage: errorToString(error),
              });
              return undefined;
            }
            this.showDetailedErrorDialog(TranslationKey.CREATE_PAGE_UNEXPECTED_ERROR, { errorMessage: errorToString(error) });
          })) as CreatePageResult;
        } else {
          this.showDetailedErrorDialog(TranslationKey.MISSING_FS_PAGE_MAPPING);
        }
      } else {
        this.showDetailedErrorDialog(TranslationKey.MISSING_MANAGED_PAGE_CONFIG);
      }
    } else {
      this.showDetailedErrorDialog(TranslationKey.MISSING_PAGE_OBJECT);
    }
  }

  /**
   * This method creates a new section in a FirstSpirit page and displays an error dialog in case of an error.
   *
   * @param {string} previewElementId The ID of the preview element for which the section will be created.
   * @param {FsEditingOverlay} componentData The component data of the component residing in the section.
   * @return {Promise<void>} Promise to resolve after the section has been created.
   * @memberof PreviewService
   */
  async createSection(previewElementId: string, componentData: FsEditingOverlay): Promise<void> {
    const slotName = componentData && componentData.slotName ? componentData.slotName.toLocaleLowerCase() : null;
    console.log(`Creating a new section '${slotName}' at element '${previewElementId}'`);
    if (previewElementId && componentData) {
      try {
        const createSectionResult = await this.tppWrapperService.createSection(previewElementId, {
          body: slotName,
          result: true,
        });
        if (createSectionResult && createSectionResult != null && createSectionResult.identifier != null) {
          console.log(`Successfully created section '${createSectionResult.name}' with the identifier '${createSectionResult.identifier}'`);
          return await this.tppWrapperService.triggerRerenderView();
        } else {
          console.log('The creation of the new section was cancelled.');
        }
      } catch (createSectionError) {
        this.showDetailedErrorDialog(TranslationKey.CREATE_SECTION_UNEXPECTED_ERROR, { errorMessage: errorToString(createSectionError) });
      }
    }
  }
}
