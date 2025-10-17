import HttpClient, { ApiResponseHeaders, QueryOptions } from "../HttpClient";
import {
    ObjectSerializer,
    RequestCalculateCostToVerifyAiModelRequest,
    RequestCheckValidToVerifyAiModelRequest,
    RequestVerifyAiModelRequest,
    ResponseCheckValidToVerifyAiModelResponse,
    ResponseEstimateCostResponse,
    ResponseModelVersioningGroupLiteListResponse,
    ResponseModelVersioningResponse,
    ResponseQueueTaskResponse,
    ResponseVerifyAiModelResponse
} from "../../nodejs-openapi-generator-cli/api";

export default class ApiKeyModelVerifyService {
    private readonly httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public async apiKeyModelIdVerifyCostPost(modelId: string,
        request: RequestCalculateCostToVerifyAiModelRequest): Promise<ResponseEstimateCostResponse> {
        return this.apiKeyModelIdVerifyCostPostHeaders(modelId, request).then((res) => res.body);
    }
    public async apiKeyModelIdVerifyCostPostHeaders(
        modelId: string,
        request: RequestCalculateCostToVerifyAiModelRequest,
    ): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseEstimateCostResponse;
    }> {
        const payload = {
            commit_hash: request.commitHash,
            platforms: request.platforms
        };
        const queryParams: QueryOptions = {
            method: "POST",
            headers: {
            },
            body: JSON.stringify(payload),
        };
        const localVarPath = `api-key/model/${modelId}/verify/cost`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = ObjectSerializer.deserialize(
            parsed,
            "ResponseEstimateCostResponse"
        ) as ResponseEstimateCostResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }


    public async apiKeyModelIdVerifyPost(modelId: string, request: RequestVerifyAiModelRequest): Promise<ResponseVerifyAiModelResponse> {
        return this.apiKeyModelIdVerifyPostHeaders(modelId, request).then((res) => res.body);
    }
    public async apiKeyModelIdVerifyPostHeaders(
        modelId: string,
        request: RequestVerifyAiModelRequest,
    ): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseVerifyAiModelResponse;
    }> {
        const payload = {
            commit_hash: request.commitHash,
            platforms: request.platforms
        };
        const queryParams: QueryOptions = {
            method: "POST",
            headers: {
            },
            body: JSON.stringify(payload),
        };
        const localVarPath = `api-key/model/${modelId}/verify`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = ObjectSerializer.deserialize(
            parsed,
            "ResponseVerifyAiModelResponse"
        ) as ResponseVerifyAiModelResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }


    public async apiKeyModelIdPreVerifyPost(modelId: string, request: RequestCheckValidToVerifyAiModelRequest): Promise<ResponseCheckValidToVerifyAiModelResponse> {
        return this.apiKeyModelIdPreVerifyPostHeaders(modelId, request).then((res) => res.body);
    }
    public async apiKeyModelIdPreVerifyPostHeaders(
        modelId: string,
        request: RequestCheckValidToVerifyAiModelRequest,
    ): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseCheckValidToVerifyAiModelResponse;
    }> {
        const payload = {
            commit_hash: request.commitHash,
            platforms: request.platforms
        };
        const queryParams: QueryOptions = {
            method: "POST",
            headers: {
            },
            body: JSON.stringify(payload),
        };
        const localVarPath = `api-key/model/${modelId}/pre-verify`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = ObjectSerializer.deserialize(
            parsed,
            "ResponseCheckValidToVerifyAiModelResponse"
        ) as ResponseCheckValidToVerifyAiModelResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }


    public async apiKeyModelIdVerifyTaskGet(modelId: string, commitHash: string, status: string
    ): Promise<ResponseModelVersioningGroupLiteListResponse> {
        return this.apiKeyModelIdVerifyTaskGetHeaders(modelId, commitHash, status).then((res) => res.body);
    }
    public async apiKeyModelIdVerifyTaskGetHeaders(
        modelId: string,
        commitHash: string,
        status: string
    ): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseModelVersioningGroupLiteListResponse;
    }> {
        const searchParams = new URLSearchParams();
        searchParams.append("commitHash", commitHash);
        searchParams.append("verifyStatus", status);

        const queryParams: QueryOptions = {
            method: "GET",
            headers: {},
            searchParams,
        };

        const localVarPath = `api-key/model/${modelId}/verify/task`;

        const response = await this.httpClient.call(localVarPath, queryParams);

        const deserialized = ObjectSerializer.deserialize(
            JSON.parse(response.body),
            "ResponseModelVersioningGroupLiteListResponse"
        ) as ResponseModelVersioningGroupLiteListResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }

    public async apiKeyModelVerifyPlatformTaskIdGet(taskId: string): Promise<ResponseQueueTaskResponse> {
        return this.apiKeyModelVerifyPlatformTaskIdGetHeaders(taskId).then((res) => res.body);
    }
    public async apiKeyModelVerifyPlatformTaskIdGetHeaders(
        taskId: string,
    ): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseQueueTaskResponse;
    }> {
        const searchParams = new URLSearchParams();
        const queryParams: QueryOptions = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/verify/platform/task/${taskId}`;

        const response = await this.httpClient.call(localVarPath, queryParams);

        const deserialized = ObjectSerializer.deserialize(
            JSON.parse(response.body),
            "ResponseQueueTaskResponse"
        ) as ResponseQueueTaskResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }

    public async apiKeyModelVerifyHubTaskIdGet(taskId: string): Promise<ResponseModelVersioningResponse> {
        return this.apiKeyModelVerifyHubTaskIdGetHeaders(taskId).then((res) => res.body);
    }
    public async apiKeyModelVerifyHubTaskIdGetHeaders(
        taskId: string,
    ): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseModelVersioningResponse;
    }> {
        const searchParams = new URLSearchParams();
        const queryParams: QueryOptions = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/verify/hub/task/${taskId}`;

        const response = await this.httpClient.call(localVarPath, queryParams);

        const deserialized = ObjectSerializer.deserialize(
            JSON.parse(response.body),
            "ResponseModelVersioningResponse"
        ) as ResponseModelVersioningResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }
}
