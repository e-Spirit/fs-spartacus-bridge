import { Injectable } from '@angular/core';
import { BaseSiteService, Converter } from '@spartacus/core';

import { FsCmsPageInterface, FormData, Value } from './fs-cms-page.interface';
import { map, filter, take, switchAll, first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CaasClientFactory } from '../../caas/caas-client.factory';
import { CaasClient } from '../../caas/caas-client';
import { bind, findDocumentsInCaasResponse } from '../../util/helper';
import { FsSpartacusBridgeConfig } from 'fs-spartacus-common';

/**
 * This converter prepares FirstSpirit media input components and dataset references for further processing.
 *
 * @export
 * @class FsCmsPagePreparer
 */
@Injectable({ providedIn: 'root' })
export class FsCmsPagePreparer implements Converter<FsCmsPageInterface, Observable<FsCmsPageInterface>> {
  private source: FsCmsPageInterface;
  private identifier2ObjectMap: Map<string, any[]>;
  private identifier2FallbackObjectMap: Map<string, any[]>;
  private fallbackLocale: string;
  constructor(
    private caasClientFactory: CaasClientFactory,
    private fsSpartacusBridgeConfig: FsSpartacusBridgeConfig,
    private baseSiteService: BaseSiteService
  ) {}

  convert(source: FsCmsPageInterface | null | undefined): Observable<FsCmsPageInterface> {
    // null is a valid value for source, because it indicates,
    // that a FirstSpirit page is not present, which is a valid state
    if (!source) {
      return of(null);
    }

    let baseSite;
    this.baseSiteService
      .getActive()
      .pipe(first())
      .subscribe((activeBaseSite) => (baseSite = activeBaseSite));
    if (
      this.fsSpartacusBridgeConfig.bridge[baseSite].fallbackLanguage &&
      this.fsSpartacusBridgeConfig.bridge[baseSite].fallbackLanguage !== ''
    ) {
      this.fallbackLocale = this.fsSpartacusBridgeConfig.bridge[baseSite].fallbackLanguage;
    }

    const caasClientFactoryObservable = this.caasClientFactory.createCaasClient().pipe(take(1));
    this.setSource(source);
    if (this.identifier2ObjectMap != null) {
      this.identifier2ObjectMap.clear();
    }
    this.identifier2ObjectMap = new Map();

    if (this.identifier2FallbackObjectMap != null) {
      this.identifier2FallbackObjectMap.clear();
    }
    this.identifier2FallbackObjectMap = new Map();

    for (const children of this.source.page.children) {
      if (children != null) {
        for (const child of children.children) {
          if (this.source.fallbackIdentifiers && this.source.fallbackIdentifiers.includes(child?.identifier)) {
            this.collectMediaInputComponents(child?.formData, bind(this.addIdentifier2FallbackObjectMapEntry, this));
            this.searchForDatasetReference(child?.formData, bind(this.addIdentifier2FallbackObjectMapEntry, this));
          } else {
            this.collectMediaInputComponents(child?.formData, bind(this.addIdentifier2ObjectMapEntry, this));
            this.searchForDatasetReference(child?.formData, bind(this.addIdentifier2ObjectMapEntry, this));
          }
        }
      }
    }
    return this.performBulkRequest(caasClientFactoryObservable);
  }

  private setSource(source: FsCmsPageInterface): void {
    this.source = null;
    this.source = source;
  }

  private addIdentifier2ObjectMapEntry(identifier: string, content: any): void {
    const mapContent = [];
    if (this.identifier2ObjectMap.has(identifier)) {
      mapContent.push(...this.identifier2ObjectMap.get(identifier));
    }
    mapContent.push(content);
    this.identifier2ObjectMap.set(identifier, mapContent);
  }

  private addIdentifier2FallbackObjectMapEntry(identifier: string, content: any): void {
    const mapContent = [];
    if (this.identifier2FallbackObjectMap.has(identifier)) {
      mapContent.push(...this.identifier2FallbackObjectMap.get(identifier));
    }
    mapContent.push(content);
    this.identifier2FallbackObjectMap.set(identifier, mapContent);
  }

  private performBulkRequest(caasClientObservable: Observable<CaasClient>): Observable<any> {
    return caasClientObservable.pipe(
      map((caasClient) =>
        this.identifier2ObjectMap.size > 0 || this.identifier2FallbackObjectMap.size > 0
          ? caasClient.getByIds([...this.getLocalizedMediaIdentifiers(), ...this.getLocalizedMediaIdentifiersForFallbackLanguage()])
          : of(undefined)
      ),
      switchAll(),
      map((caasResponse) => {
        return findDocumentsInCaasResponse(caasResponse);
      }),
      filter((documents) => documents !== undefined),
      map((documents) => {
        documents.forEach((document) => this.enhanceSourceItem(document?.identifier, document));
        delete this.source.fallbackIdentifiers;
        return Object.assign({}, this.source);
      })
    );
  }

  private getLocalizedMediaIdentifiers() {
    // Media files and datasets can be language dependent and independent in FS
    // If the file is language dependent, using the language and country from the top level locale object is correct
    // If the file is language independent, it is correct as well, although the url of a picture in a German CaaS document
    //   will have the locale en_GB, if the master language is English.
    // If the media is called with the de_DE locale, the CaaS will redirect to the en_GB locale (see CAAS-1370).
    return Array.from(this.identifier2ObjectMap.keys()).map((item) => {
      return `'${item}.${this.source.locale.language}_${this.source.locale.country}'`;
    });
  }

  private getLocalizedMediaIdentifiersForFallbackLanguage() {
    return Array.from(this.identifier2FallbackObjectMap.keys()).map((item) => {
      return `'${item}.${this.fallbackLocale}'`;
    });
  }

  private enhanceSourceItem(identifier: string, mediaDocument: any): void {
    if (this.identifier2ObjectMap.has(identifier)) {
      const sourceItems = this.identifier2ObjectMap.get(identifier);
      sourceItems.forEach((sourceItem) => {
        if (sourceItem.fsType === 'Dataset' || sourceItem.fsType === 'DatasetReference') {
          Object.assign(sourceItem, { dataset: mediaDocument });
        } else {
          Object.assign(sourceItem, { resolutions: mediaDocument });
        }
      });
    } else if (this.identifier2FallbackObjectMap.has(identifier)) {
      const sourceItems = this.identifier2FallbackObjectMap.get(identifier);
      sourceItems.forEach((sourceItem) => {
        if (sourceItem.fsType === 'Dataset' || sourceItem.fsType === 'DatasetReference') {
          Object.assign(sourceItem, { dataset: mediaDocument });
        } else {
          Object.assign(sourceItem, { resolutions: mediaDocument });
        }
      });
    }
  }

  private collectMediaInputComponents(
    formData: { [key: string]: FormData },
    addIdentifier2Map: (identifier: string, content: any) => void
  ) {
    Object.values(formData || {})
      .filter(Boolean)
      .forEach((inputComponent) => {
        if (inputComponent.value && typeof inputComponent.value === 'object') {
          if (!Array.isArray(inputComponent.value)) {
            if (inputComponent.value.fsType && inputComponent.value.fsType === 'Media') {
              // Found media without resolution
              addIdentifier2Map(inputComponent.value.identifier, inputComponent.value);
            } else if (inputComponent.value.fsType && inputComponent.value.fsType === 'MappingMedium' && inputComponent.value.media) {
              // Found media inside a MappingMedium providing a resolution
              addIdentifier2Map(inputComponent.value.media.identifier, inputComponent.value.media);
              if (Array.isArray(inputComponent.value.areas)) {
                inputComponent.value.areas
                  .filter((element) => element?.link?.formData)
                  .forEach((element) => {
                    this.collectMediaInputComponents(element.link.formData, addIdentifier2Map);
                  });
              }
            } else if (inputComponent.value.formData) {
              this.collectMediaInputComponents(inputComponent.value.formData, addIdentifier2Map);
            }
          } else {
            inputComponent.value
              .filter((element) => element.formData)
              .forEach((element) => {
                this.collectMediaInputComponents(element.formData, addIdentifier2Map);
              });
          }
        }
      });
  }

  /*
  This method searches for references of datasets.
  (These are not the datasets themselves, but the input components using them)
  When it finds a dataset reference, it writes the identifier of the referenced dataset
  into identifier2ObjectMap for further processing.
   */
  private searchForDatasetReference(formData: { [key: string]: FormData }, addIdentifier2Map: (identifier: string, content: any) => void) {
    Object.values(formData || {}).forEach((inputComponent) => {
      if (inputComponent.value && typeof inputComponent.value === 'object') {
        if (!Array.isArray(inputComponent.value)) {
          this.deepSearchForDatasetInputComponents(inputComponent.value, addIdentifier2Map);
        } else {
          inputComponent.value.forEach((element) => {
            this.deepSearchForDatasetInputComponents(element, addIdentifier2Map);
          });
        }
      }
    });
  }

  private deepSearchForDatasetInputComponents(element: Value, addIdentifier2Map: (identifier: string, content: any) => void) {
    const shouldTerminate = this.collectDatasetInputComponents(element, addIdentifier2Map);
    if (!shouldTerminate && typeof element === 'object') {
      Object.values(element).forEach((elementChild: Value) => {
        if (elementChild) {
          this.deepSearchForDatasetInputComponents(elementChild, addIdentifier2Map);
        }
      });
    }
  }

  private collectDatasetInputComponents(element: Value, addIdentifier2Map: (identifier: string, content: any) => void): boolean {
    if (element.fsType && element.fsType === 'Record' && element.value) {
      addIdentifier2Map(element.value.target.identifier, element.value.target);
      return true;
    } else if (element.fsType && element.fsType === 'DatasetReference') {
      addIdentifier2Map(element.target.identifier, element.target);
      return true;
    } else if (element.formData) {
      return this.collectDatasetInputComponents(element.formData, addIdentifier2Map);
    } else if (element.value && element.value.formData) {
      return this.collectDatasetInputComponents(element.value.formData, addIdentifier2Map);
    }
    return false;
  }
}
