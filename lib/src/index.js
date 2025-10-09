"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiKey_service_1 = __importDefault(require("./services/apiKey.service"));
const apiKeyModelVerify_service_1 = __importDefault(require("./services/apiKeyModelVerify.service"));
const apiKeyModel_service_1 = __importDefault(require("./services/apiKeyModel.service"));
const apiKeyModelVersioning_service_1 = __importDefault(require("./services/apiKeyModelVersioning.service"));
const apiKeyRepository_service_1 = __importDefault(require("./services/apiKeyRepository.service"));
const HttpClient_1 = __importDefault(require("./HttpClient"));
const SERVER_ENDPOINT = "http://143.198.81.10:9000/";
const API_VERSION = "api/v1";
class SdkClient {
    constructor(params) {
        this.httpClient = new HttpClient_1.default({
            apiKey: params.apiKey,
            serverEndpoint: SERVER_ENDPOINT,
            apiVersion: API_VERSION,
        });
        this._apiKey = new apiKey_service_1.default(this.httpClient);
        this._apiKeyModelVerify = new apiKeyModelVerify_service_1.default(this.httpClient);
        this._apiKeyModel = new apiKeyModel_service_1.default(this.httpClient);
        this._apiKeyModelVersioning = new apiKeyModelVersioning_service_1.default(this.httpClient);
        this._apiKeyRepository = new apiKeyRepository_service_1.default(this.httpClient);
    }
    get apiKey() {
        return this._apiKey;
    }
    get apiKeyModelVerify() {
        return this._apiKeyModelVerify;
    }
    get apiKeyModel() {
        return this._apiKeyModel;
    }
    get apiKeyModelVersioning() {
        return this._apiKeyModelVersioning;
    }
    get apiKeyRepository() {
        return this._apiKeyRepository;
    }
}
exports.default = SdkClient;
