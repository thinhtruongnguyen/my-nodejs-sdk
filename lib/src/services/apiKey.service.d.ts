import HttpClient, { ApiResponseHeaders } from "../HttpClient";
import { RequestDistributeTaskRequest, RequestGetApiKeyStatisticsByModelIdRequest, ResponseApiKeyHistoryListResponse, ResponseDistributeTaskResponse, ResponseGetApiKeyPermissionResponse, ResponseGetTaskResultResponse, ResponseGetTaskStatisticsResponse, ResponseSuccessResponse, ResponseWalletWithAddressResponse } from "../../nodejs-openai-generator-cli/model/models";
export default class ApiKeyService {
    private readonly httpClient;
    constructor(httpClient: HttpClient);
    cancelTask(taskId: string): Promise<ResponseSuccessResponse>;
    cancelTaskHeaders(taskId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccessResponse;
    }>;
    createTaskHeaders(request: RequestDistributeTaskRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseDistributeTaskResponse;
    }>;
    createTask(request: RequestDistributeTaskRequest): Promise<ResponseDistributeTaskResponse>;
    getApiKeyStatistics(request: RequestGetApiKeyStatisticsByModelIdRequest, modelId: string): Promise<ResponseGetTaskStatisticsResponse>;
    getApiKeyStatisticsHeaders(request: RequestGetApiKeyStatisticsByModelIdRequest, modelId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseGetTaskStatisticsResponse;
    }>;
    getBalanceHeaders(): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseWalletWithAddressResponse;
    }>;
    getBalance(): Promise<ResponseWalletWithAddressResponse>;
    getTaskResult(taskId: string): Promise<ResponseGetTaskResultResponse>;
    getTaskResultHeaders(taskId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseGetTaskResultResponse;
    }>;
    getTaskHistoriesHeaders(limit: number, offset: number): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseApiKeyHistoryListResponse;
    }>;
    getTaskHistories(limit?: number, offset?: number): Promise<ResponseApiKeyHistoryListResponse>;
    getApiKeyPermission(): Promise<ResponseGetApiKeyPermissionResponse>;
    getApiKeyPermissionHeaders(): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseGetApiKeyPermissionResponse;
    }>;
}
