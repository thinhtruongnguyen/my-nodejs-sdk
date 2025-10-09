"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../../nodejs-openai-generator-cli/api");
class ApiKeyModelService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async getModelStatistics(modelId, request) {
        return this.getModelStatisticsHeaders(modelId, request).then((res) => res.body);
    }
    async getModelStatisticsHeaders(modelId, request) {
        const payload = {
            from: request.from,
            to: request.to,
        };
        const queryParams = {
            method: "POST",
            headers: {},
            body: JSON.stringify(payload),
        };
        const localVarPath = `api-key/model/${modelId}/statistics`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseGetTaskStatisticsResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async getModelTaskCost(modelId) {
        return this.getModelTaskCostHeaders(modelId).then((res) => res.body);
    }
    async getModelTaskCostHeaders(modelId) {
        const searchParams = new URLSearchParams();
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/task/cost`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseEstimateCostResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async checkModelIsServing(modelId) {
        return this.checkModelIsServingHeaders(modelId).then((res) => res.body);
    }
    async checkModelIsServingHeaders(modelId) {
        const searchParams = new URLSearchParams();
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/serving`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseCheckModelIsServingResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async getModelInfo(modelId) {
        return this.getModelInfoHeaders(modelId).then((res) => res.body);
    }
    async getModelInfoHeaders(modelId) {
        const searchParams = new URLSearchParams();
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/info`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseApiKeyInfoResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async getListPlatformsSupport() {
        return this.getListPlatformsSupportHeaders().then((res) => res.body);
    }
    async getListPlatformsSupportHeaders() {
        const searchParams = new URLSearchParams();
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/verify/support/platforms`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseGetListPlatformSupportResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
}
exports.default = ApiKeyModelService;
