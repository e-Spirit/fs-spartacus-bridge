import { SNAP } from './fs-tpp-api.data';
import { CaasAccessData } from '../../caas/caas-access-data';
// @ts-ignore missing types for this package
import { WebSocket } from 'partysocket';
import { TppEventHandlerService } from './tpp-event-handler-service';

export namespace WsProvider {
  // eslint-disable-next-line prefer-const
  export let debug: boolean = true;
  export let snap: SNAP;
  export let ws: any;

  type WaiterKey = string; // `${documentId}:${operationType}`
  const pendingWaiters = new Map<WaiterKey, Array<() => void>>();
  const recentEvents = new Map<WaiterKey, ReturnType<typeof setTimeout>>();
  let recentEventsTtlMs = 3000;

  let tokenUrl: string;
  let collectionUrl: URL;
  let apiKey: string;

  export const init = async (caasAccessData: CaasAccessData, apiKeyPreview: string) => {
    tokenUrl = caasAccessData.tokenUrl();
    collectionUrl = caasAccessData.collectionUrl();
    apiKey = apiKeyPreview;
    recentEventsTtlMs = caasAccessData.changeStreamEventTimeout;
    await connect();
  };

  const connect = async () => {
    const { host, pathname } = collectionUrl;
    const securetoken = await getToken();

    ws = new WebSocket(`wss://${host + pathname}/_streams/crud?securetoken=${securetoken}`, [], {
      connectionTimeout: 6000,
      debug,
    });

    ws.addEventListener('message', handleWsMessage);
    ws.addEventListener('open', handleWsOpen);
    ws.addEventListener('error', handleWsError);
    ws.addEventListener('close', handleWsClose);
  };

  const getToken = async () => {
    // Retrieving temporary auth token
    return fetch(tokenUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(async (response) => response.json())
      .then((response) => response?.securetoken);
  };

  const handleWsMessage = async (event: MessageEvent) => {
    const data = JSON.parse(event?.data ?? 'null') as CaaSEvent | null;
    const documentId = data?.documentKey._id;
    const changeType = data?.operationType;

    if (!documentId || !changeType) {
      throw new Error(
        'Message is missing crucial information: ' +
          (!documentId ? 'documentId' : '') +
          (!documentId && !changeType ? ' and ' : '') +
          (!changeType ? 'changeType' : ''),
      );
    }

    // Track recent events so late-registering waiters can still resolve immediately.
    // Reset the TTL on each new event so the cache window is always measured from the latest event.
    const key: WaiterKey = `${documentId}:${changeType}`;
    clearTimeout(recentEvents.get(key));
    recentEvents.set(
      key,
      setTimeout(() => recentEvents.delete(key), recentEventsTtlMs),
    );

    // Notify any pending waiters
    const waiters = pendingWaiters.get(key) ?? [];
    waiters.forEach((resolve) => resolve());
    pendingWaiters.delete(key);

    let currentPreviewElement = await snap.getPreviewElement();

    if (changeType === 'delete' && documentId === currentPreviewElement) {
      currentPreviewElement = await snap.setPreviewElement(TppEventHandlerService.homepagePreviewId);
      await snap.triggerRerenderView();
    }

    if (documentId === currentPreviewElement) {
      debug && console.log(`Received event for CURRENT SET PAGE with change type '${changeType}'`);
    } else {
      debug && console.debug(`Received event for '${documentId}' with change type '${changeType}'`);
    }
  };

  const handleWsClose = (event: CloseEvent) => {
    debug && console.debug('ws closed', event as CloseEvent);
  };

  const handleWsError = async (event: ErrorEvent) => {
    debug && console.debug('ws error', event as ErrorEvent);
    closeWS();
    await connect();
  };

  const handleWsOpen = (event: Event) => {
    debug && console.debug('ws opened', event);
  };

  export const closeWS = () => {
    if (ws) {
      ws.removeEventListener('message', handleWsMessage);
      ws.removeEventListener('open', handleWsOpen);
      ws.removeEventListener('error', handleWsError);
      ws.removeEventListener('close', handleWsClose);
      ws.close();
    }
    ws = null;
  };

  export const waitForDocumentEvent = async (
    documentId: string,
    operationTypes: CaaSEvent['operationType'] | Array<CaaSEvent['operationType']>,
    timeoutMs: number,
  ): Promise<void> => {
    const types = Array.isArray(operationTypes) ? operationTypes : [operationTypes];

    // Resolve immediately if event already arrived recently
    const alreadyReceived = types.some((op) => recentEvents.has(`${documentId}:${op}`));
    if (alreadyReceived) {
      debug && console.debug(`Event for '${documentId}' already received, resolving immediately`);
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      types.forEach((operationType) => {
        const key: WaiterKey = `${documentId}:${operationType}`;
        const existing = pendingWaiters.get(key) ?? [];
        existing.push(resolve);
        pendingWaiters.set(key, existing);
      });

      setTimeout(() => {
        types.forEach((operationType) => {
          const key = `${documentId}:${operationType}`;
          const waiters = pendingWaiters.get(key);
          if (waiters) {
            const index = waiters.indexOf(resolve);
            if (index !== -1) waiters.splice(index, 1);
            if (waiters.length === 0) pendingWaiters.delete(key);
          }
        });
        debug && console.debug(`Timeout after ${timeoutMs}ms waiting for [${types.join(', ')}] on '${documentId}', resolving anyway`);
        resolve();
      }, timeoutMs);
    });
  };
}

export type CaaSEvent = {
  fullDocument: { fsType: string; _id: string };
  documentKey: { _id: string };
  operationType: 'create' | 'delete' | 'insert' | 'modify' | 'rename' | 'replace' | 'update';
};
