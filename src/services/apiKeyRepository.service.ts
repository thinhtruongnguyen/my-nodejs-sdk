import HttpClient, { ApiResponseHeaders, QueryOptions } from "../HttpClient";
import {
    ObjectSerializer,
    ResponseGetCommitHistoryResponse,
} from "../../nodejs-openapi-generator-cli/api";

export default class ApiKeyRepositoryService {
    private readonly httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public async getCommitHistory(ownerUsername: string,
        repositoryName: string,
        page: number,
        pageSize: number,
        path: string,
        repoType: string,
        sha: string): Promise<ResponseGetCommitHistoryResponse> {
        return this.getCommitHistoryHeaders(ownerUsername,
            repositoryName,
            page,
            pageSize,
            path,
            repoType, sha).then((res) => res.body);
    }
    public async getCommitHistoryHeaders(
        ownerUsername: string,
        repositoryName: string,
        page: number,
        pageSize: number,
        path: string,
        repoType: string,
        sha: string
    ): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseGetCommitHistoryResponse;
    }> {
        const searchParams = new URLSearchParams();
        searchParams.append("path", path);
        searchParams.append("sha", sha);
        searchParams.append("page", page.toString());
        searchParams.append("pageSize", pageSize.toString());
        searchParams.append("repoType", repoType);
        const queryParams: QueryOptions = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/repository/${ownerUsername}/${repositoryName}/commit/history`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = ObjectSerializer.deserialize(
            parsed,
            "ResponseGetCommitHistoryResponse"
        ) as ResponseGetCommitHistoryResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }

}