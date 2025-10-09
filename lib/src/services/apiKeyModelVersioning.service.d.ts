import HttpClient, { ApiResponseHeaders } from "../HttpClient";
import { ResponseGetListModelVersioningLiteResponse, ResponseModelVersioningGroupLiteResponse, ResponseSuccessResponse } from "../../nodejs-openai-generator-cli/api";
export default class ApiKeyModelVersioningService {
    private readonly httpClient;
    constructor(httpClient: HttpClient);
    deleteModelVersioningByModelId(modelId: string, commitHash: string): Promise<ResponseSuccessResponse>;
    deleteModelVersioningByModelIdHeaders(modelId: string, commitHash: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccessResponse;
    }>;
    changeCurrentModelVersioningByModelId(modelId: string, commitHash: string): Promise<ResponseSuccessResponse>;
    changeCurrentModelVersioningByModelIdHeaders(modelId: string, commitHash: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccessResponse;
    }>;
    getListVerifiedModelVersioning(modelId: string, offset: number, limit: number, verifyStatus: string): Promise<ResponseGetListModelVersioningLiteResponse>;
    getListVerifiedModelVersioningHeaders(modelId: string, offset: number, limit: number, verifyStatus: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseGetListModelVersioningLiteResponse;
    }>;
    getCurrentModelVersioningByModelId(modelId: string): Promise<ResponseModelVersioningGroupLiteResponse>;
    getCurrentModelVersioningByModelIdHeaders(modelId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseModelVersioningGroupLiteResponse;
    }>;
}
