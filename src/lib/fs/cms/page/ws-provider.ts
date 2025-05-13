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

  let tokenUrl: string;
  let collectionUrl: URL;
  let apiKey: string;

  export const init = async (caasAccessData: CaasAccessData, apiKeyPreview: string) => {
    tokenUrl = caasAccessData.tokenUrl();
    collectionUrl = caasAccessData.collectionUrl();
    apiKey = apiKeyPreview;
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
}

export type CaaSEvent = {
  fullDocument: { fsType: string; _id: string };
  documentKey: { _id: string };
  operationType: 'create' | 'delete' | 'insert' | 'modify' | 'rename' | 'replace' | 'update';
};
