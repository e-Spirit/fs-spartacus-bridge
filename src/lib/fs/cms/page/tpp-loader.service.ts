import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SNAP } from './fs-tpp-api.data';

@Injectable({
  providedIn: 'root',
})
export class TppLoaderService {
  private TPP_SNAP_PROMISE: Promise<SNAP> = this.loadTPP();

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  async getSnap(): Promise<SNAP> | null {
    if (isPlatformBrowser(this.platformId)) {
      return await this.TPP_SNAP_PROMISE;
    }
  }

  private async loadTPP(): Promise<SNAP> | null {
    if (isPlatformBrowser(this.platformId)) {
      // tslint:disable
      return new Promise((resolve, reject) => {
        window.addEventListener('message', function awaitTppPong({ origin, data }) {
          if (typeof data === 'object' && 'tpp' in data && data.tpp._response && data.tpp._response.version) {
            window.removeEventListener('message', awaitTppPong);
            const version = data.tpp._response.version;
            const url = 'TPP_SNAP_URL' in window ? (<any>window).TPP_SNAP_URL : `${origin}/fs5webedit/snap.js`;
            console.debug('load TPP_SNAP version %o', version);
            const scpt = document.body.appendChild(document.createElement('script'));
            scpt.onerror = scpt.onload = async () => {
              if (!('TPP_SNAP' in window)) {
                reject(new Error(`Unable to load TPP_SNAP via '${url}'.`));
              } else if (await (<any>window).TPP_SNAP.isConnected) {
                console.debug('loaded TPP_SNAP via %o', url);
                resolve((<any>window).TPP_SNAP);
              } else {
                reject(new Error(`Unable to set up TPP_SNAP via '${url}'.`));
              }
            };
            scpt.src = url;
          }
        });
        window.top.postMessage({ tpp: { ping: 1 } }, '*');
      });
      //tslint: enable
    }
    return null;
  }
}
