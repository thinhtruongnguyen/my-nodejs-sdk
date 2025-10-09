import HttpClient, { ApiResponseHeaders } from "../HttpClient";
import { ResponseGetCommitHistoryResponse } from "../../nodejs-openai-generator-cli/api";
export default class ApiKeyRepositoryService {
    private readonly httpClient;
    constructor(httpClient: HttpClient);
    getCommitHistory(ownerUsername: string, repositoryName: string, page: number, pageSize: number, path: string, repoType: string, sha: string): Promise<ResponseGetCommitHistoryResponse>;
    getCommitHistoryHeaders(ownerUsername: string, repositoryName: string, page: number, pageSize: number, path: string, repoType: string, sha: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseGetCommitHistoryResponse;
    }>;
}
