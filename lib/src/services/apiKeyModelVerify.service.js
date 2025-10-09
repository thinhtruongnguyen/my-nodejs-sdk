"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../../nodejs-openai-generator-cli/api");
class ApiKeyModelVerifyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async calculateCostToVerifyModel(modelId, request) {
        return this.calculateCostToVerifyModelHeaders(modelId, request).then((res) => res.body);
    }
    async calculateCostToVerifyModelHeaders(modelId, request) {
        const payload = {
            commit_hash: request.commitHash,
            platforms: request.platforms
        };
        const queryParams = {
            method: "POST",
            headers: {},
            body: JSON.stringify(payload),
        };
        const localVarPath = `api-key/model/${modelId}/verify/cost`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseEstimateCostResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async verifyModel(modelId, request) {
        return this.verifyModelHeaders(modelId, request).then((res) => res.body);
    }
    async verifyModelHeaders(modelId, request) {
        const payload = {
            commit_hash: request.commitHash,
            platforms: request.platforms
        };
        const queryParams = {
            method: "POST",
            headers: {},
            body: JSON.stringify(payload),
        };
        const localVarPath = `api-key/model/${modelId}/verify`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseVerifyAiModelResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async preCheckToVerifyModel(modelId, request) {
        return this.preCheckToVerifyModelHeaders(modelId, request).then((res) => res.body);
    }
    async preCheckToVerifyModelHeaders(modelId, request) {
        const payload = {
            commit_hash: request.commitHash,
            platforms: request.platforms
        };
        const queryParams = {
            method: "POST",
            headers: {},
            body: JSON.stringify(payload),
        };
        const localVarPath = `api-key/model/${modelId}/pre-verify`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseCheckValidToVerifyAiModelResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async getListVerifyModelTaskByCommitHashAndStatus(modelId, commitHash, status) {
        return this.getListVerifyModelTaskByCommitHashAndStatusHeaders(modelId, commitHash, status).then((res) => res.body);
    }
    async getListVerifyModelTaskByCommitHashAndStatusHeaders(modelId, commitHash, status) {
        const searchParams = new URLSearchParams();
        searchParams.append("commitHash", commitHash);
        searchParams.append("verifyStatus", status);
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/verify/task`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const deserialized = api_1.ObjectSerializer.deserialize(JSON.parse(response.body), "ResponseModelVersioningGroupLiteListResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async getVerifyPlatformTaskById(taskId) {
        return this.getVerifyPlatformTaskByIdHeaders(taskId).then((res) => res.body);
    }
    async getVerifyPlatformTaskByIdHeaders(taskId) {
        const searchParams = new URLSearchParams();
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/verify/platform/task/${taskId}`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const deserialized = api_1.ObjectSerializer.deserialize(JSON.parse(response.body), "ResponseQueueTaskResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async getModelVersioningByTaskId(taskId) {
        return this.getVerifyPlatformTaskByIdHeaders(taskId).then((res) => res.body);
    }
    async getModelVersioningByTaskIdHeaders(taskId) {
        const searchParams = new URLSearchParams();
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/verify/hub/task/${taskId}`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const deserialized = api_1.ObjectSerializer.deserialize(JSON.parse(response.body), "ResponseModelVersioningResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
}
exports.default = ApiKeyModelVerifyService;
