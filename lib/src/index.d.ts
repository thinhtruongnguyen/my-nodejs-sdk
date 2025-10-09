import ApiKeyService from "./services/apiKey.service";
import ApiKeyModelVerifyService from "./services/apiKeyModelVerify.service";
import ApiKeyModelService from "./services/apiKeyModel.service";
import ApiKeyModelVersioningService from "./services/apiKeyModelVersioning.service";
import ApiKeyRepositoryService from "./services/apiKeyRepository.service";
export default class SdkClient {
    private readonly httpClient;
    private readonly _apiKey;
    private readonly _apiKeyModelVerify;
    private readonly _apiKeyModel;
    private readonly _apiKeyModelVersioning;
    private readonly _apiKeyRepository;
    constructor(params: {
        apiKey?: string;
    });
    get apiKey(): ApiKeyService;
    get apiKeyModelVerify(): ApiKeyModelVerifyService;
    get apiKeyModel(): ApiKeyModelService;
    get apiKeyModelVersioning(): ApiKeyModelVersioningService;
    get apiKeyRepository(): ApiKeyRepositoryService;
}
