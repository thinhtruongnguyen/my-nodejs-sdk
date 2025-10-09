import HttpClient, { ApiResponseHeaders } from "../HttpClient";
import { RequestCalculateCostToVerifyAiModelRequest, RequestCheckValidToVerifyAiModelRequest, RequestVerifyAiModelRequest, ResponseCheckValidToVerifyAiModelResponse, ResponseEstimateCostResponse, ResponseModelVersioningGroupLiteListResponse, ResponseModelVersioningResponse, ResponseQueueTaskResponse, ResponseVerifyAiModelResponse } from "../../nodejs-openai-generator-cli/api";
export default class ApiKeyModelVerifyService {
    private readonly httpClient;
    constructor(httpClient: HttpClient);
    calculateCostToVerifyModel(modelId: string, request: RequestCalculateCostToVerifyAiModelRequest): Promise<ResponseEstimateCostResponse>;
    calculateCostToVerifyModelHeaders(modelId: string, request: RequestCalculateCostToVerifyAiModelRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseEstimateCostResponse;
    }>;
    verifyModel(modelId: string, request: RequestVerifyAiModelRequest): Promise<ResponseVerifyAiModelResponse>;
    verifyModelHeaders(modelId: string, request: RequestVerifyAiModelRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseVerifyAiModelResponse;
    }>;
    preCheckToVerifyModel(modelId: string, request: RequestCheckValidToVerifyAiModelRequest): Promise<ResponseCheckValidToVerifyAiModelResponse>;
    preCheckToVerifyModelHeaders(modelId: string, request: RequestCheckValidToVerifyAiModelRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseCheckValidToVerifyAiModelResponse;
    }>;
    getListVerifyModelTaskByCommitHashAndStatus(modelId: string, commitHash: string, status: string): Promise<ResponseModelVersioningGroupLiteListResponse>;
    getListVerifyModelTaskByCommitHashAndStatusHeaders(modelId: string, commitHash: string, status: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseModelVersioningGroupLiteListResponse;
    }>;
    getVerifyPlatformTaskById(taskId: string): Promise<ResponseQueueTaskResponse>;
    getVerifyPlatformTaskByIdHeaders(taskId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseQueueTaskResponse;
    }>;
    getModelVersioningByTaskId(taskId: string): Promise<ResponseModelVersioningResponse>;
    getModelVersioningByTaskIdHeaders(taskId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseModelVersioningResponse;
    }>;
}
