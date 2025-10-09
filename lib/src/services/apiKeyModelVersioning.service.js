"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../../nodejs-openai-generator-cli/api");
class ApiKeyModelVersioningService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async deleteModelVersioningByModelId(modelId, commitHash) {
        return this.deleteModelVersioningByModelIdHeaders(modelId, commitHash).then((res) => res.body);
    }
    async deleteModelVersioningByModelIdHeaders(modelId, commitHash) {
        const searchParams = new URLSearchParams();
        searchParams.append("commitHash", commitHash);
        const queryParams = {
            method: "DELETE",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/versioning`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseSuccessResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async changeCurrentModelVersioningByModelId(modelId, commitHash) {
        return this.changeCurrentModelVersioningByModelIdHeaders(modelId, commitHash).then((res) => res.body);
    }
    async changeCurrentModelVersioningByModelIdHeaders(modelId, commitHash) {
        const searchParams = new URLSearchParams();
        searchParams.append("commitHash", commitHash);
        const queryParams = {
            method: "PUT",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/versioning`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseSuccessResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async getListVerifiedModelVersioning(modelId, offset, limit, verifyStatus) {
        return this.getListVerifiedModelVersioningHeaders(modelId, offset, limit, verifyStatus).then((res) => res.body);
    }
    async getListVerifiedModelVersioningHeaders(modelId, offset, limit, verifyStatus) {
        const searchParams = new URLSearchParams();
        searchParams.append("offset", offset.toString());
        searchParams.append("limit", limit.toString());
        searchParams.append("verifyStatus", verifyStatus);
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/versioning/list`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseGetListModelVersioningLiteResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
    async getCurrentModelVersioningByModelId(modelId) {
        return this.getCurrentModelVersioningByModelIdHeaders(modelId).then((res) => res.body);
    }
    async getCurrentModelVersioningByModelIdHeaders(modelId) {
        const searchParams = new URLSearchParams();
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/versioning`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseEstimateCostResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
}
exports.default = ApiKeyModelVersioningService;
