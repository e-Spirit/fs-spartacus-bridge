import { TppStatusService } from '../cms/page/tpp-status-service';
import { BaseSiteService, GlobalMessageService, GlobalMessageType, HttpErrorHandler, Priority } from '@spartacus/core';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { FsSpartacusBridgeConfig } from 'fs-spartacus-common';
import { first, take } from 'rxjs/operators';

/**
 * This HTTP handler manages forbidden errors (403) and catches CaaS forbidden errors by displaying an error message.
 *
 * @export
 * @class CaasForbiddenHandler
 * @extends {HttpErrorHandler}
 */
@Injectable({
  providedIn: 'root',
})
export class CaasForbiddenHandler extends HttpErrorHandler {
  responseStatus = 403;
  errorMessageKey = 'forbidden';

  /**
   * Creates an instance of a CaasForbiddenHandler.
   *
   * @param {FsSpartacusBridgeConfig} fsSpartacusBridgeConfig The Spartacus bridge configuration to use.
   * @param {TppStatusService} tppStatusService The TPP status service to use.
   * @param {BaseSiteService} baseSiteService The base site service to use.
   * @param {GlobalMessageService} globalMessageService The global message service to use.
   * @memberof CaasForbiddenHandler
   */
  constructor(
    private fsSpartacusBridgeConfig: FsSpartacusBridgeConfig,
    private tppStatusService: TppStatusService,
    private baseSiteService: BaseSiteService,
    globalMessageService: GlobalMessageService
  ) {
    super(globalMessageService);
  }

  /**
   * This method returns the priority of this handler.
   * Priority is NORMAL.
   *
   * @return {Priority} The priority of this handler, which is NORMAL.
   * @memberof CaasForbiddenHandler
   */
  getPriority(): Priority {
    return Priority.NORMAL;
  }

  /**
   * This method handles an error by displaying an error message.
   * If the error is related to the CaaS a specific message is shown.
   *
   * @param {HttpRequest<any>} request The request which leads to the error.
   * @param {HttpErrorResponse} errorResponse The received error response.
   * @memberof CaasForbiddenHandler
   */
  handleError(request: HttpRequest<any>, errorResponse: HttpErrorResponse): void {
    this.tppStatusService
      .isFirstSpiritPreview()
      .pipe(take(1))
      .subscribe((previewMode: boolean) => {
        if (this.isCaasRequest(request)) {
          this.handleCaasError(previewMode);
        } else {
          this.handleNonCaasError();
        }
      });
  }

  private isCaasRequest(request: HttpRequest<any>) {
    let baseSite;
    this.baseSiteService
      .getActive()
      .pipe(first())
      .subscribe((activeBaseSite) => (baseSite = activeBaseSite));
    return request && request.url.includes(this.fsSpartacusBridgeConfig.bridge[baseSite].caas.baseUrl);
  }

  private handleCaasError(previewMode: boolean) {
    if (previewMode) {
      this.globalMessageService.add({ key: `fsCaas.httpHandlers.${this.errorMessageKey}` }, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }

  private handleNonCaasError() {
    this.globalMessageService.add({ key: `httpHandlers.${this.errorMessageKey}` }, GlobalMessageType.MSG_TYPE_ERROR);
  }
}
