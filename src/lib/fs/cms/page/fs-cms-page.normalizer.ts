import { Injectable, InjectionToken } from '@angular/core';
import { CmsComponent, CmsStructureModel, ContentSlotComponentData, Converter, ConverterService } from '@spartacus/core';

import { Child, FsCmsPageInterface, Value } from './fs-cms-page.interface';
import { merge, Seq } from 'immutable';
import { FsComponentConverter } from 'fs-spartacus-common';

/**
 * This converter prepares the content data by transforming the FirstSpirit data in data that can be used by Spartacus.
 *
 * @export
 * @class FsCmsPageNormalizer
 */
@Injectable({ providedIn: 'root' })
export class FsCmsPageNormalizer implements Converter<FsCmsPageInterface, CmsStructureModel> {
  private source: FsCmsPageInterface;
  private target: CmsStructureModel = {};
  private converters: { [refName: string]: InjectionToken<Converter<CmsComponent, any>> };

  constructor(private converter: ConverterService, private fsComponentConverter: FsComponentConverter) {}

  convert(source: FsCmsPageInterface | null | undefined): CmsStructureModel {
    // null is a valid value for source, because it indicates,
    // that a FirstSpirit page is not present, which is a valid state
    if (!source) {
      return null;
    }
    this.converters = this.getConverterList();
    this.setSource(source);
    this.setPageData();
    this.setComponents();
    return this.target;
  }

  private setSource(source: FsCmsPageInterface): void {
    this.source = source;
  }

  private setPageData(): void {
    this.target.page = {
      loadTime: Date.now(),
      name: this.source.name,
      type: this.source.fsType,
      pageId: this.source.uid,
      slots: {},
      properties: {},
    };
    this.setPageTemplate();
    this.setPagePreviewId();
    this.setPageFormData();
    this.setPageMetaFormData();
    this.setPageSlots();
  }

  private setPageTemplate(): void {
    this.target.page.template = typeof this.source.page.template === 'string' ? this.source.page.template : this.source.page.template.uid;
  }

  private setPagePreviewId(): void {
    if (this.source.identifier) {
      this.target.page.properties.previewId = `${this.source.identifier}.${this.source.locale.language}_${this.source.locale.country}`;
    }
  }

  private setPageFormData(): void {
    if (this.source.page.formData) {
      this.target.page.properties.formData = this.source.page.formData;
    }
  }

  private setPageMetaFormData(): void {
    if (this.source.page.metaFormData) {
      this.target.page.properties.metaFormData = this.source.page.metaFormData;
    }
  }

  private initializePageSlots(): void {
    this.source.page.children.forEach((children) => (this.target.page.slots[children.name] = { components: [] }));
  }

  private createSlotComponent(child: Child): ContentSlotComponentData {
    const { name, template, identifier } = child;
    return {
      uid: name,
      typeCode: template.uid,
      flexType: template.uid,
      properties: {
        previewId: `${identifier}.${this.source.locale.language}_${this.source.locale.country}`,
      },
    };
  }

  private createCmsComponent(child: Child): CmsComponent & { flexType?: string } {
    const { template, formData, identifier } = child;
    const imagesWithPreviewIds = Seq(formData)
      .filter((inputComponent) => {
        return (
          inputComponent &&
          inputComponent.value && // typeof null === 'object', so we need to filter null objects first
          typeof inputComponent.value === 'object' &&
          !Array.isArray(inputComponent.value) && // Arrays are objects as well
          inputComponent.value.fsType &&
          inputComponent.value.fsType === 'Media'
        );
      })
      .map((inputComponent) => {
        const value = inputComponent.value as Value;
        return {
          ...inputComponent,
          previewId: `${value.identifier}.${this.source.locale.language}_${this.source.locale.country}`,
        };
      })
      .toMap();

    return {
      uid: child.name || `${template.uid}.${identifier}`,
      typeCode: template.uid,
      flexType: template.uid,
      otherProperties: {
        formData: merge(formData, imagesWithPreviewIds),
        previewId: `${identifier}.${this.source.locale.language}_${this.source.locale.country}`,
        locale: this.source.locale,
      },
    };
  }

  private getConverterList(): { [refName: string]: InjectionToken<Converter<CmsComponent, any>> } {
    const converters: { [refName: string]: InjectionToken<Converter<CmsComponent, any>> } = {};
    if (this.fsComponentConverter != null) {
      if (Array.isArray(this.fsComponentConverter)) {
        const componentConverters: Array<{ [refName: string]: InjectionToken<Converter<CmsComponent, any>> }> = this.fsComponentConverter;
        componentConverters.forEach((converterDeclaration) => {
          Object.keys(converterDeclaration).forEach((refName) => {
            converters[refName] = converterDeclaration[refName];
          });
        });
      } else {
        Object.assign(converters, this.fsComponentConverter);
      }
    }
    return converters;
  }

  private invokeSpecificComponentConverter(component: CmsComponent): CmsComponent {
    const injectionToken: InjectionToken<Converter<CmsComponent, any>> = this.converters[component.typeCode];
    if (injectionToken != null) {
      const { otherProperties, ...componentProperties } = component;
      return Object.assign({}, componentProperties, this.converter.convert(component, injectionToken));
    } else {
      console.warn(`Could not find any specific converter for component ${component.typeCode}`);
    }
    return component;
  }

  private setPageSlots(): void {
    this.initializePageSlots();
    for (const children of this.source.page.children) {
      if (children != null) {
        for (const child of children.children) {
          const slotComponent = this.createSlotComponent(child);
          this.target.page.slots[children.name].components.push(slotComponent);
        }
      }
    }
  }

  private convertComponentRecursive(component: any): CmsComponent | undefined {
    if (component?.otherProperties?.fs_processed) {
      Object.keys(component).forEach((property) => {
        this.convertComponentRecursive(component[property]);
      });
      this.target.components.push(component);
    } else if (
      component != null &&
      typeof component === 'object' &&
      ['template', 'formData', 'identifier'].every((entry) => Object.keys(component).includes(entry)) &&
      component.template.uid != null
    ) {
      if (typeof component.formData === 'object') {
        Object.keys(component.formData).forEach((property) => {
          this.convertComponentRecursive(component.formData[property]);
        });
      }
      let result = this.createCmsComponent(component);
      result = this.invokeSpecificComponentConverter(result);
      Object.keys(component).forEach((item) => {
        delete component[item];
      });
      result.otherProperties = { ...result.otherProperties, fs_processed: true };
      Object.assign(component, result);
      this.target.components.push(component);
    } else {
      if (component != null && typeof component === 'object') {
        Object.keys(component).forEach((property) => {
          this.convertComponentRecursive(component[property]);
        });
      }
    }
    return component;
  }

  private setComponents(): void {
    this.target.components = [];

    for (const children of this.source.page.children) {
      if (children != null) {
        for (const child of children.children) {
          this.convertComponentRecursive(Object.assign({}, child));
        }
      }
    }
  }
}
