import ApiKeyService from "./services/apiKey.service";
import ApiKeyModelVerifyService from "./services/apiKeyModelVerify.service";
import ApiKeyModelService from "./services/apiKeyModel.service";
import ApiKeyModelVersioningService from "./services/apiKeyModelVersioning.service";
import ApiKeyRepositoryService from "./services/apiKeyRepository.service"
import HttpClient from "./HttpClient";

const SERVER_ENDPOINT = "http://143.198.81.10:9000/";
const API_VERSION = "api/v1";

export default class SdkClient {
  private readonly httpClient: HttpClient;
  private readonly _apiKey: ApiKeyService;
  private readonly _apiKeyModelVerify: ApiKeyModelVerifyService;
  private readonly _apiKeyModel: ApiKeyModelService;
  private readonly _apiKeyModelVersioning: ApiKeyModelVersioningService;
  private readonly _apiKeyRepository: ApiKeyRepositoryService;


  constructor(params: { apiKey?: string }) {
    this.httpClient = new HttpClient({
      apiKey: params.apiKey,
      serverEndpoint: SERVER_ENDPOINT,
      apiVersion: API_VERSION,
    });

    this._apiKey = new ApiKeyService(this.httpClient);
    this._apiKeyModelVerify = new ApiKeyModelVerifyService(this.httpClient);
    this._apiKeyModel = new ApiKeyModelService(this.httpClient);
    this._apiKeyModelVersioning = new ApiKeyModelVersioningService(this.httpClient);
    this._apiKeyRepository = new ApiKeyRepositoryService(this.httpClient);
  }

  public get apiKey(): ApiKeyService {
    return this._apiKey;
  }

  public get apiKeyModelVerify(): ApiKeyModelVerifyService {
    return this._apiKeyModelVerify;
  }

  public get apiKeyModel(): ApiKeyModelService {
    return this._apiKeyModel;
  }

  public get apiKeyModelVersioning(): ApiKeyModelVersioningService {
    return this._apiKeyModelVersioning;
  }

  public get apiKeyRepository(): ApiKeyRepositoryService {
    return this._apiKeyRepository;
  }
}
