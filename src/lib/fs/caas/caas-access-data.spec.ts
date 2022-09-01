import { CaasAccessData } from './caas-access-data';
import { CaasCollection } from './caas-collection';

describe('CaasCollectionAccessData', () => {
  it('should build the correct collection url', () => {
    const caasCollectionAccessData = new CaasAccessData(
      'https://my-caas',
      'myTenant',
      'myProject',
      CaasCollection.PREVIEW_CONTENT,
      'myApiKey'
    );

    expect(caasCollectionAccessData.collectionUrl()).toEqual('https://my-caas/myTenant/myProject.preview.content');
  });
});
