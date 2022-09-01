import { FsCmsPageInterface } from '../cms/page/fs-cms-page.interface';
import { arrayify, FirstSpiritManagedPage, FsSpartacusBridgeConfig, Optional } from 'fs-spartacus-common';
import { iif, Observable, of, throwError } from 'rxjs';
import { concatMap, delay, map, retryWhen, switchMap, tap } from 'rxjs/operators';
import { CaasAccessData } from '../caas/caas-access-data';
import { CaasCollection } from '../caas/caas-collection';

const DEFAULT_INITIAL_DELAY = 500;
const DEFAULT_RETRY_DELAY = 750;
const DEFAULT_MAX_RETRIES = 4;

/**
 * This function retrieves the FirstSpiritManagedPage from the given config by the given ID of the template and returns it.
 *
 * @param fsManagedPagesConfig The FirstSpirit Managed Pages config.
 * @param templateId The ID of the template for which to look for.
 */
export function getFsManagedPageConfigByTemplateId(
  fsManagedPagesConfig: FirstSpiritManagedPage[],
  templateId: string
): FirstSpiritManagedPage | undefined {
  const transformCase = <T extends string>(val: Optional<T>) => val?.toLocaleLowerCase();
  return fsManagedPagesConfig.find((managedPage) => transformCase(managedPage.template) === transformCase(templateId));
}

/**
 * This function checks for FirstSpirit CMS pages in a given CaaS response and returns them.
 *
 * @export
 * @param response CaaS response to parse for pages.
 * @return The pages found in the CaaS response.
 */
export function findDocumentsInCaasResponse(response: any): FsCmsPageInterface[] {
  if (response?._embedded?.['rh:doc'] && Array.isArray(response._embedded['rh:doc'])) {
    return arrayify(response._embedded['rh:doc'] as FsCmsPageInterface[]);
  }
  return [];
}

export function bind<T extends (...args: any[]) => any>(
  functionToBind: T,
  thisArg: ThisType<any>
): (...funcArgs: Parameters<T>) => ReturnType<T> {
  return functionToBind?.bind(thisArg);
}

/**
 * HoF. Allows you to re-run the passed function `functionToCall` multiple times (with a configurable delay)
 * if the received result does not satisfy your test in `handleResult`. Otherwise it'll immediately returns
 * the result from `functionToCall`.
 *
 * @usage ```
 * function responseHandler(caasResponse: any): any {
 *   const firstCaasDocument = findDocumentsInCaasResponse(caasResponse)[0];
 *   if (firstCaasDocument == null) {
 *     return throwError('My error message');
 *   }
 *   return of(firstCaasDocument);
 * );
 *
 * [...]
 * myObservable$.pipe(
 *  map(() => reExecutable(bind(caasClient.getByUid, caasClient), responseHandler)(hybrisPageId, language)),
 *  switchMap(result => result)
 * )
 * [...]
 * ```
 *
 * @param functionToCall The function you want to call. Should be bound to the right context (e.g. myFunction.bind(this))
 * @param handleResult This function gets the result of the `functionToCall` call passed as argument
 * and needs to return an observable. If the returned value of `handleResult` is an Error, the `reExecutable`
 * function will re-run the function `functionToCall` (till maxRetries is reached). Any other returned value will
 * indicate, that the predicate is satisfied and `reExecutable` will immediate return this result.
 * @param options Adjust the delay or max retry values.
 * @returns The return value of `handleResult` will be returned
 */
export function reExecutable<T extends (...args: any[]) => Observable<any>, S extends (callResult: any) => Observable<any | Error>>(
  functionToCall: T,
  handleResult: S,
  options?: { intialDelay?: number; retryDelay?: number; maxRetries?: number }
): (...funcArgs: Parameters<T>) => Observable<ReturnType<T>> {
  const mergedOptions = Object.assign(
    {
      intialDelay: DEFAULT_INITIAL_DELAY,
      retryDelay: DEFAULT_RETRY_DELAY,
      maxRetries: DEFAULT_MAX_RETRIES,
    },
    options
  );
  const { intialDelay, retryDelay, maxRetries } = mergedOptions;
  // We start with an empty observable so we're able to delay the first call to `functionToCall`
  return (...args: Parameters<T>): Observable<ReturnType<T>> =>
    of({}).pipe(
      delay(intialDelay),
      tap(() => console.log(`Calling the wrapped function '${functionToCall.name}' with the following arguments: ${JSON.stringify(args)}`)),
      // We call the decorated inner function `functionToCall` (e.g. caasClient.getByUid()) with the arguments passed to the
      // second function call of our HoF (`reExecutable(functionToCall, handleResult)(args)`) and expect it to return an observable
      map(() =>
        (functionToCall(...args) as any).pipe(
          // Since `handleResult` should return a value wrapped in an observable (either an Error or the
          // actual result), we have to call switchMap to get the value from the observable
          map((response) => handleResult(response)),
          switchMap((handleResultResult) => handleResultResult as any),
          retryWhen((errors$) =>
            errors$.pipe(
              concatMap((errors, retryCount) => {
                const maxRetriesExceeded = retryCount >= maxRetries;
                if (maxRetriesExceeded) {
                  console.error(`Could not get any response that satisfies the predicate (after ${maxRetries} attempts).`);
                } else {
                  console.warn(
                    `reExecutable(): ${
                      retryCount + 1
                    }. attempt did not satisfy the predicate! The next attempt will take action in ${retryDelay}ms.`
                  );
                }
                return iif(() => maxRetriesExceeded, throwError(errors), of(errors).pipe(delay(retryDelay)));
              })
            )
          )
        )
      )
    );
}

export function createCaasAccessData(config: FsSpartacusBridgeConfig, baseSite: string, isPreview: boolean) {
  return new CaasAccessData(
    config.bridge[baseSite].caas.baseUrl,
    config.bridge[baseSite].caas.tenantId,
    config.bridge[baseSite].caas.project,
    isPreview ? CaasCollection.PREVIEW_CONTENT : CaasCollection.RELEASE_CONTENT,
    config.bridge[baseSite].caas.apiKey
  );
}
