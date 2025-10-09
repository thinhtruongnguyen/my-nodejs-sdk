"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../../nodejs-openai-generator-cli/api");
class ApiKeyRepositoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async getCommitHistory(ownerUsername, repositoryName, page, pageSize, path, repoType, sha) {
        return this.getCommitHistoryHeaders(ownerUsername, repositoryName, page, pageSize, path, repoType, sha).then((res) => res.body);
    }
    async getCommitHistoryHeaders(ownerUsername, repositoryName, page, pageSize, path, repoType, sha) {
        const searchParams = new URLSearchParams();
        searchParams.append("path", path);
        searchParams.append("sha", sha);
        searchParams.append("page", page.toString());
        searchParams.append("pageSize", pageSize.toString());
        searchParams.append("repoType", repoType);
        const queryParams = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/repository/${ownerUsername}/${repositoryName}/commit/history`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = api_1.ObjectSerializer.deserialize(parsed, "ResponseGetCommitHistoryResponse");
        return {
            headers: response.headers,
            body: deserialized,
        };
    }
}
exports.default = ApiKeyRepositoryService;
