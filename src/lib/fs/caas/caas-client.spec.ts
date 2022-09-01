import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CaasAccessData } from './caas-access-data';
import { CaasClient } from './caas-client';
import { CaasCollection } from './caas-collection';

describe('CaasService', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  const caasCollectionAccessData = new CaasAccessData(
    'https://my-caas',
    'myTenant',
    '1234567-12345-12345678-123456',
    CaasCollection.RELEASE_CONTENT,
    'myApiKey'
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add a name and language filter query param', () => {
    const testRequest = performTestRequest();
    expect(testRequest.request.params.get('filter')).toEqual(
      `{'$or':[
            {'$and':[{'$or':[{'uid':'myDocumentId'},{'uid':'mydocumentid'}]},{'locale.language':'de'}]},
            {'page.formData.pt_seoUrl.value':'myDocumentId'},
            {'page.formData.pt_seoUrl.value':'mydocumentid'}
          ]}`
    );
  });

  it('should add a name, language and altName filter query param', () => {
    const testRequest = performTestRequest('seoUrl');
    expect(testRequest.request.params.get('filter')).toEqual(
      `{'$or':[
            {'$and':[{'$or':[{'uid':'myDocumentId'},{'uid':'mydocumentid'}]},{'locale.language':'de'}]},
            {'page.formData.pt_seoUrl.value':'seoUrl'},
            {'page.formData.pt_seoUrl.value':'seoUrl'}
          ]}`
    );
  });

  it('should add a name, language and no altName filter query param if seo url is empty', () => {
    const testRequest = performTestRequest('');
    expect(testRequest.request.params.get('filter')).toEqual(
      `{'$or':[
            {'$and':[{'$or':[{'uid':'myDocumentId'},{'uid':'mydocumentid'}]},{'locale.language':'de'}]},
            {'page.formData.pt_seoUrl.value':'myDocumentId'},
            {'page.formData.pt_seoUrl.value':'mydocumentid'}
          ]}`
    );
  });

  it('should add a name, language and no altName filter query param if seo url is undefined', () => {
    const testRequest = performTestRequest(undefined);
    expect(testRequest.request.params.get('filter')).toEqual(
      `{'$or':[
            {'$and':[{'$or':[{'uid':'myDocumentId'},{'uid':'mydocumentid'}]},{'locale.language':'de'}]},
            {'page.formData.pt_seoUrl.value':'myDocumentId'},
            {'page.formData.pt_seoUrl.value':'mydocumentid'}
          ]}`
    );
  });

  it('should add a name, language and no altName filter query param if seo url is null', () => {
    const testRequest = performTestRequest(null);
    expect(testRequest.request.params.get('filter')).toEqual(
      `{'$or':[
            {'$and':[{'$or':[{'uid':'myDocumentId'},{'uid':'mydocumentid'}]},{'locale.language':'de'}]},
            {'page.formData.pt_seoUrl.value':'myDocumentId'},
            {'page.formData.pt_seoUrl.value':'mydocumentid'}
          ]}`
    );
  });

  it('should add the authorization header', () => {
    const testRequest = performTestRequest();
    expect(testRequest.request.headers.get('Authorization')).toEqual(`apikey="${caasCollectionAccessData.apiKey}"`);
  });

  it('should handle an 404 error', () => {
    const caasCollectionClient = new CaasClient(caasCollectionAccessData, httpClient);
    caasCollectionClient.getByUid('myDocumentId', 'de', '').subscribe(
      (res) => fail('Fail with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toContain('404 error');
      }
    );

    const expectedCollectionUrl = caasCollectionAccessData.collectionUrl();
    const req = httpMock.expectOne((request) => request.url.startsWith(expectedCollectionUrl));
    req.flush('404 error', { status: 404, statusText: 'Not Found' });
  });

  function performTestRequest(altName?: string) {
    const caasCollectionClient = new CaasClient(caasCollectionAccessData, httpClient);
    caasCollectionClient.getByUid('myDocumentId', 'de', altName).subscribe((res) => {
      // We need to subscribe, otherwise the http request will not be fired,
      // because HttpClient returns a cold observable
    });

    // HttpTestingController.expectOne() not working with queryparameters - https://github.com/angular/angular/issues/19974
    const expectedCollectionUrl = caasCollectionAccessData.collectionUrl();
    return httpMock.expectOne((request) => request.url.startsWith(expectedCollectionUrl));
  }
});
