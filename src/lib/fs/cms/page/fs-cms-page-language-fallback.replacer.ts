import { Injectable } from '@angular/core';
import { BaseSiteService, Converter } from '@spartacus/core';
import { FsSpartacusBridgeConfig } from 'fs-spartacus-common';
import { Observable, of } from 'rxjs';
import { first, map, switchAll, take } from 'rxjs/operators';
import { CaasClient } from '../../caas/caas-client';
import { CaasClientFactory } from '../../caas/caas-client.factory';

import { FsCmsPageInterface } from './fs-cms-page.interface';

/**
 * This converter prepares the data by replacing non-existent language specific data with the fallback language ones.
 *
 * @export
 */
@Injectable({ providedIn: 'root' })
export class FsCmsPageLanguageFallbackReplacer implements Converter<FsCmsPageInterface, Observable<FsCmsPageInterface>> {
  private source: FsCmsPageInterface;
  private identifier2ObjectMap: Map<string, any[]>;
  private fallbackLanguage: string;

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
      this.fallbackLanguage = this.fsSpartacusBridgeConfig.bridge[baseSite].fallbackLanguage.substring(0, 2);
    } else {
      // if no fallback language is configured in the bridge config return the source because no section can be replaced
      return of(source);
    }

    const caasClientFactoryObservable = this.caasClientFactory.createCaasClient().pipe(take(1));
    this.setSource(source);
    if (this.identifier2ObjectMap != null) {
      this.identifier2ObjectMap.clear();
    }
    this.identifier2ObjectMap = new Map();
    for (const children of this.source.page?.children) {
      if (children != null) {
        children.children.forEach((child) => this.collectFallbackCandidates(child));
      }
    }

    return this.performFallbackRequest(caasClientFactoryObservable);
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

  private collectFallbackCandidates(child: any) {
    if (child.formData?.st_languageFallbackEnabled?.value) {
      this.addIdentifier2ObjectMapEntry(child.identifier, child);
    }
  }

  private createFallbackIdentifierObject() {
    if (this.identifier2ObjectMap.size > 0) {
      return {
        fallbackIdentifiers: Array.from(this.identifier2ObjectMap.keys()),
      };
    }
  }

  private replaceSection(identifier: string, replaceSection: any) {
    if (this.identifier2ObjectMap.has(identifier)) {
      this.source.page.children.forEach((child) => {
        child.children?.forEach((section) => {
          if (section.identifier === identifier) {
            section.formData = replaceSection.formData;
          }
        });
      });
    }
  }

  private performFallbackRequest(caasClientObservable: Observable<CaasClient>) {
    return caasClientObservable.pipe(
      map((caasClient) =>
        this.identifier2ObjectMap.size > 0 ? caasClient.getPageSections(this.source.page.name, this.fallbackLanguage) : of(undefined)
      ),
      switchAll(),
      map((caasResponse) => this.findSectionsInCaasResponse(caasResponse)),
      map((sections) => {
        sections.forEach((section) => this.replaceSection(section?.identifier, section));
        return Object.assign({}, this.source, this.createFallbackIdentifierObject());
      })
    );
  }

  // we always want to use element 0 of the caas response,
  // we know there will be only one element because we request the page in a specific Language
  private findSectionsInCaasResponse(caasResponse: FsCmsPageInterface): any[] {
    if (caasResponse) {
      const pageChildren = caasResponse[0]?.page?.children;
      if (pageChildren && Array.isArray(pageChildren)) {
        const foundSections = [];
        pageChildren.forEach((child) => {
          child.children?.forEach((section) => {
            if (section.fsType && section.fsType === 'Section') {
              foundSections.push(section);
            }
          });
        });
        return foundSections;
      }
    }
    return [];
  }
}
