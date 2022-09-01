import { CaasCollection } from './caas-collection';


/**
 * This data class contains all the data needed to connect to a CaaS instance.
 *
 * @export
 * @class CaasAccessData
 */
export class CaasAccessData {
  /**
   * Creates an instance of CaasAccessData.
   * The the readme for more information about how to obtain the required information.
   *
   * @param {string} baseUrl The base URL represents the URL the CaaS is hosted at.
   * @param {string} tenantId The tenant ID is the customer's name the CaaS instances was created for.
   * @param {string} project The project ID identifies the FirstSpirit project that is connected to the CaaS instance.
   * @param {CaasCollection} collection A collection helps to distinguish between preview and released content.
   * @param {string} apiKey The CaaS API key identifies the permission for the access to the CaaS instance.
   * @memberof CaasAccessData
   */
  constructor(
    private baseUrl: string,
    private tenantId: string,
    private project: string,
    private collection: CaasCollection,
    readonly apiKey: string
  ) {}

  /**
   * This function returns the collection URL based on the parameter passed to the constructor.
   *
   * @return {string} The collection URL generated in the format <baseURL>/<tenantId>/<projectId>.<collection>.
   * @memberof CaasAccessData
   */
  collectionUrl() {
    return `${this.baseUrl}/${this.tenantId}/${this.project}.${this.collection}`;
  }
}
