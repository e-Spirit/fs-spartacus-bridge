import { TppStatusService } from '../cms/page/tpp-status-service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CaasClient } from './caas-client';
import { combineLatest, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FsSpartacusBridgeConfig } from 'fs-spartacus-common';
import { BaseSiteService } from '@spartacus/core';
import { createCaasAccessData } from '../util/helper';

/**
 * A factory class to create a {@link CaasClient} based on the configuration.
 */
@Injectable({
  providedIn: 'root',
})
export class CaasClientFactory {
  /**
   * This methode creates an instance of a CaasClientFactory.
   *
   * @param {FsSpartacusBridgeConfig} config The configuration of the Spartacus bridge to use.
   * @param {HttpClient} httpClient The HTTP client instance to use.
   * @param {TppStatusService} tppStatusService The TTP Status service instance to use.
   * @param {BaseSiteService} baseSiteService The Base site service to use.
   * @memberof CaasClientFactory
   */
  constructor(
    private config: FsSpartacusBridgeConfig,
    private httpClient: HttpClient,
    private tppStatusService: TppStatusService,
    private baseSiteService: BaseSiteService
  ) {}

  /**
   * This method creates a CaasClient based on the Spartacus configuration and returns it.
   *
   * @return {Observable<CaasClient>} The CaaS client instance created based on the configuration passed to the constructor.
   * @memberof CaasClientFactory
   */
  createCaasClient(): Observable<CaasClient> {
    return combineLatest([this.tppStatusService.isFirstSpiritPreview(), this.baseSiteService.getActive()]).pipe(
      map(([ocm, activeBaseSite]) => {
        const caasCollectionAccessData = createCaasAccessData(this.config, activeBaseSite, ocm);

        return new CaasClient(caasCollectionAccessData, this.httpClient);
      })
    );
  }
}
