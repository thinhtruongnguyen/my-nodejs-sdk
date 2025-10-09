"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../nodejs-openai-generator-cli/model/models");
class ApiKeyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async cancelTask(taskId) {
        const res = await this.cancelTaskHeaders(taskId);
        return res.body;
    }
    async cancelTaskHeaders(taskId) {
        const queryParams = {
            method: "DELETE",
            headers: {},
        };
        const localVarPath = `api-key/task/${taskId}/cancel`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = models_1.ObjectSerializer.deserialize(parsed, "ResponseSuccessResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async createTaskHeaders(request) {
        const queryParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        };
        const localVarPath = "api-key/task";
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = models_1.ObjectSerializer.deserialize(parsed, "ResponseDistributeTaskResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async createTask(request) {
        const res = await this.createTaskHeaders(request);
        return res.body;
    }
    async getApiKeyStatistics(request, modelId) {
        const res = await this.getApiKeyStatisticsHeaders(request, modelId);
        return res.body;
    }
    async getApiKeyStatisticsHeaders(request, modelId) {
        const payload = {
            ModelId: modelId,
            ...request
        };
        const queryParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        };
        const localVarPath = "api-key/statistics";
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = models_1.ObjectSerializer.deserialize(parsed, "ResponseGetTaskStatisticsResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async getBalanceHeaders() {
        const searchParams = new URLSearchParams();
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPathBalance = "api-key/balance";
        const responseBalance = await this.httpClient.call(localVarPathBalance, queryParams);
        const parsed = JSON.parse(responseBalance.body);
        const deserialized = models_1.ObjectSerializer.deserialize(parsed, "ResponseWalletWithAddressResponse");
        return {
            headers: responseBalance.headers,
            body: deserialized,
        };
    }
    async getBalance() {
        return this.getBalanceHeaders().then((res) => res.body);
    }
    async getTaskResult(taskId) {
        const res = await this.getTaskResultHeaders(taskId);
        return res.body;
    }
    async getTaskResultHeaders(taskId) {
        const searchParams = new URLSearchParams();
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/task/${taskId}/result`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = models_1.ObjectSerializer.deserialize(parsed, "ResponseGetTaskResultResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async getTaskHistoriesHeaders(limit, offset) {
        const searchParams = new URLSearchParams();
        searchParams.append("limit", limit.toString());
        searchParams.append("offset", offset.toString());
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = "api-key/task/histories";
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = models_1.ObjectSerializer.deserialize(parsed, "ResponseApiKeyHistoryListResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async getTaskHistories(limit = 10, offset = 0) {
        return this.getTaskHistoriesHeaders(limit, offset).then((res) => res.body);
    }
    async getApiKeyPermission() {
        return this.getApiKeyPermissionHeaders().then((res) => res.body);
    }
    async getApiKeyPermissionHeaders() {
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams: new URLSearchParams(),
        };
        const localVarPath = "api-key/permission";
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = models_1.ObjectSerializer.deserialize(parsed, "ResponseGetApiKeyPermissionResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
}
exports.default = ApiKeyService;
