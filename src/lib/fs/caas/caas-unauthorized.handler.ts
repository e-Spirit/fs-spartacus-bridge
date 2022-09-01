import { TppStatusService } from '../cms/page/tpp-status-service';
import { Injectable } from '@angular/core';
import { BaseSiteService, GlobalMessageService, Priority } from '@spartacus/core';
import { CaasForbiddenHandler } from './caas-forbidden.handler';
import { FsSpartacusBridgeConfig } from 'fs-spartacus-common';

/**
 * This HTTP handler manages unauthorized errors (401) and catches CaaS unauthorized errors by displaying an error message.
 *
 * @export
 * @class CaasUnauthorizedHandler
 * @extends {CaasForbiddenHandler}
 */
@Injectable({
  providedIn: 'root',
})
export class CaasUnauthorizedHandler extends CaasForbiddenHandler {
  responseStatus = 401;
  errorMessageKey = 'unauthorized';

  /**
   * This class creates an instance of a CaasUnauthorizedHandler.
   *
   * @param {FsSpartacusBridgeConfig} fsSpartacusBridgeConfig The Spartacus bridge configuration to use.
   * @param {TppStatusService} tppStatusService The TPP status service to use.
   * @param {BaseSiteService} baseSiteService The base site service to use.
   * @param {GlobalMessageService} globalMessageService The global message service to use.
   * @memberof CaasUnauthorizedHandler
   */
  constructor(
    fsSpartacusBridgeConfig: FsSpartacusBridgeConfig,
    tppStatusService: TppStatusService,
    baseSiteService: BaseSiteService,
    globalMessageService: GlobalMessageService
  ) {
    super(fsSpartacusBridgeConfig, tppStatusService, baseSiteService, globalMessageService);
  }

  /**
   * This method returns the priority of this handler.
   * Priority is NORMAL.
   *
   * @return {Priority} The priority of this handler, which is NORMAL.
   * @memberof CaasUnauthorizedHandler
   */
  getPriority(): Priority {
    return Priority.NORMAL;
  }
}
