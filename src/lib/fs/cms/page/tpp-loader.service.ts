import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SNAP } from './fs-tpp-api.data';

@Injectable({
  providedIn: 'root',
})
export class TppLoaderService {
  private TPP_SNAP_PROMISE: Promise<SNAP>;

  constructor(@Inject(PLATFORM_ID) private platformId: string) {
    this.TPP_SNAP_PROMISE = this.loadTPP();
  }

  async getSnap(): Promise<SNAP> | null {
    if (isPlatformBrowser(this.platformId)) {
      return await this.TPP_SNAP_PROMISE;
    }
  }

  private async loadTPP(): Promise<SNAP> | null {
    if (isPlatformBrowser(this.platformId)) {
      /* eslint-disable */
      return new Promise((resolve, reject) => {
        console.debug('load OCM 3.0');
        const fsHost = document.referrer;
        const url = fsHost.endsWith('/') ? `${fsHost}fs5webedit/live/live.js` : `${fsHost}/fs5webedit/live/live.js`;
        const scriptTag = document.body.appendChild(document.createElement('script'));

        scriptTag.onerror = scriptTag.onload = async () => {
          if (!('TPP_SNAP' in window)) {
            reject(new Error(`Unable to load TPP_SNAP via '${url}'.`));
          }

          if (!(await (window as any).TPP_SNAP.isConnected)) {
            reject(new Error(`Unable to set up TPP_SNAP via '${url}'.`));
          }

          console.debug('loaded TPP_SNAP via %o', url);
          console.info('Preview successfully initialized.');
          resolve((window as any).TPP_SNAP);
        };
        scriptTag.src = url;
      });
      //tslint: enable
    }
    return null;
  }
}
