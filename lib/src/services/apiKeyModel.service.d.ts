import HttpClient, { ApiResponseHeaders } from "../HttpClient";
import { RequestGetApiKeyStatisticsByModelIdRequest, ResponseApiKeyInfoResponse, ResponseCheckModelIsServingResponse, ResponseEstimateCostResponse, ResponseGetListPlatformSupportResponse, ResponseGetTaskStatisticsResponse } from "../../nodejs-openai-generator-cli/api";
export default class ApiKeyModelService {
    private readonly httpClient;
    constructor(httpClient: HttpClient);
    getModelStatistics(modelId: string, request: RequestGetApiKeyStatisticsByModelIdRequest): Promise<ResponseGetTaskStatisticsResponse>;
    getModelStatisticsHeaders(modelId: string, request: RequestGetApiKeyStatisticsByModelIdRequest): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseGetTaskStatisticsResponse;
    }>;
    getModelTaskCost(modelId: string): Promise<ResponseEstimateCostResponse>;
    getModelTaskCostHeaders(modelId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseEstimateCostResponse;
    }>;
    checkModelIsServing(modelId: string): Promise<ResponseCheckModelIsServingResponse>;
    checkModelIsServingHeaders(modelId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseCheckModelIsServingResponse;
    }>;
    getModelInfo(modelId: string): Promise<ResponseApiKeyInfoResponse>;
    getModelInfoHeaders(modelId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseApiKeyInfoResponse;
    }>;
    getListPlatformsSupport(): Promise<ResponseGetListPlatformSupportResponse>;
    getListPlatformsSupportHeaders(): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseGetListPlatformSupportResponse;
    }>;
}
