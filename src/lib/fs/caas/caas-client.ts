import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CaasAccessData } from './caas-access-data';

/**
 * This class handles all calls to the CaaS instance.
 */
export class CaasClient {
  private collectionUrl: string;

  /**
   * Creates an instance of a CaasClient.
   *
   * @param {CaasAccessData} caasCollection The information about the CaaS collection to use.
   * @param {HttpClient} httpClient The HTTP client instance to use.
   * @memberof CaasClient
   */
  constructor(private caasCollection: CaasAccessData, private httpClient: HttpClient) {
    this.collectionUrl = caasCollection.collectionUrl();
  }

  /**
   * This method gets a CaaS page by its UID.
   *
   * @param {string} uid The UID of the page to get.
   * @param {string} language The language to get the page for.
   * @param {string} [altName] The alternative name to search for.
   * @return {Observable<any>} The requested page.
   * @memberof CaasClient
   */
  getByUid(uid: string, language: string, altName?: string): Observable<any> {
    altName = typeof altName === 'string' && altName.trim().length > 0 ? altName : undefined;
    return this.httpClient
      .get(this.collectionUrl, {
        headers: {
          Authorization: `apikey="${this.caasCollection.apiKey}"`,
        },
        params: {
          filter: `{'$or':[
            {'$and':[{'$or':[{'uid':'${uid}'},{'uid':'${uid?.toLocaleLowerCase()}'}]},{'locale.language':'${language}'}]},
            {'page.formData.pt_seoUrl.value':'${altName || uid}'},
            {'page.formData.pt_seoUrl.value':'${altName || uid?.toLocaleLowerCase()}'}
          ]}`,
        },
      })
      .pipe(
        catchError((err) => {
          if (err.status === 404) {
            return EMPTY;
          }
        })
      );
  }

  /**
   * This method gets the sections included in the given page.
   *
   * @param {string} uid The UID of the page.
   * @param {string} language The language to get the sections for.
   * @param {string} [altName] The alternative name to search for.
   * @return {Observable<any>} The sections of the requested page.
   * @memberof CaasClient
   */
  getPageSections(uid: string, language: string, altName?: string): Observable<any> {
    altName = typeof altName === 'string' && altName.trim().length > 0 ? altName : undefined;
    return this.httpClient
      .get(this.collectionUrl, {
        headers: {
          Authorization: `apikey="${this.caasCollection.apiKey}"`,
        },
        params: {
          filter: `{'$or':[
            {'$and':[{'$or':[{'uid':'${uid}'},{'uid':'${uid?.toLocaleLowerCase()}'}]},{'locale.language':'${language}'}]},
            {'page.formData.pt_seoUrl.value':'${altName || uid}'},
            {'page.formData.pt_seoUrl.value':'${altName || uid?.toLocaleLowerCase()}'}
          ]}`,
          rep: 's',
          keys: `{'page.children.children':1}`,
        },
      })
      .pipe(
        catchError((err) => {
          if (err.status === 404) {
            return EMPTY;
          }
        })
      );
  }

  /**
   * This method gets CaaS pages by the '_id' attribute, NOT by the 'identifier' attribute.
   *
   * @param {string[]} ids The IDs to get the pages for.
   * @return {Observable<any>} The requested page.
   * @memberof CaasClient
   */
  getByIds(ids: string[]): Observable<any> {
    return this.httpClient
      .get(this.collectionUrl, {
        headers: {
          Authorization: `apikey="${this.caasCollection.apiKey}"`,
        },
        params: {
          filter: `{'_id':{'$in':[${ids?.join(',')}]}}`,
        },
      })
      .pipe(
        catchError((err) => {
          if (err.status === 404) {
            return EMPTY;
          }
        })
      );
  }
}
