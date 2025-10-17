import HttpClient, { ApiResponseHeaders, QueryOptions } from "../HttpClient";
import {
    ObjectSerializer,
    RequestGetApiKeyStatisticsByModelIdRequest,
    ResponseApiKeyInfoResponse,
    ResponseCheckModelIsServingResponse,
    ResponseEstimateCostResponse,
    ResponseGetListPlatformSupportResponse,
    ResponseGetTaskStatisticsResponse,
} from "../../nodejs-openapi-generator-cli/api";

export default class ApiKeyModelService {
    private readonly httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }


    public async apiKeyModelIdStatisticsPost(modelId: string,
        request: RequestGetApiKeyStatisticsByModelIdRequest): Promise<ResponseGetTaskStatisticsResponse> {
        return this.apiKeyModelIdStatisticsPostHeaders(modelId, request).then((res) => res.body);
    }
    public async apiKeyModelIdStatisticsPostHeaders(
        modelId: string,
        request: RequestGetApiKeyStatisticsByModelIdRequest,
    ): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseGetTaskStatisticsResponse;
    }> {
        const payload = {
            from: request.from,
            to: request.to,
        };

        const queryParams: QueryOptions = {
            method: "POST",
            headers: {},
            body: JSON.stringify(payload),
        };

        const localVarPath = `api-key/model/${modelId}/statistics`;

        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = ObjectSerializer.deserialize(
            parsed,
            "ResponseGetTaskStatisticsResponse"
        ) as ResponseGetTaskStatisticsResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }


    public async apiKeyModelIdTaskCostGet(modelId: string): Promise<ResponseEstimateCostResponse> {
        return this.apiKeyModelIdTaskCostGetHeaders(modelId).then((res) => res.body);
    }
    public async apiKeyModelIdTaskCostGetHeaders(modelId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseEstimateCostResponse;
    }> {
        const searchParams = new URLSearchParams();
        const queryParams: QueryOptions = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/task/cost`
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

    public async apiKeyModelIdServingGet(modelId: string): Promise<ResponseCheckModelIsServingResponse> {
        return this.apiKeyModelIdServingGetHeaders(modelId).then((res) => res.body);
    }
    public async apiKeyModelIdServingGetHeaders(modelId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseCheckModelIsServingResponse;
    }> {
        const searchParams = new URLSearchParams();
        const queryParams: QueryOptions = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/serving`
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = ObjectSerializer.deserialize(
            parsed,
            "ResponseCheckModelIsServingResponse"
        ) as ResponseCheckModelIsServingResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }

    public async apiKeyModelIdInfoGet(modelId: string): Promise<ResponseApiKeyInfoResponse> {
        return this.apiKeyModelIdInfoGetHeaders(modelId).then((res) => res.body);
    }
    public async apiKeyModelIdInfoGetHeaders(modelId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseApiKeyInfoResponse;
    }> {
        const searchParams = new URLSearchParams();
        const queryParams: QueryOptions = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/info`
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = ObjectSerializer.deserialize(
            parsed,
            "ResponseApiKeyInfoResponse"
        ) as ResponseApiKeyInfoResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }

    public async apiKeyModelVerifySupportPlatformsGet(): Promise<ResponseGetListPlatformSupportResponse> {
        return this.apiKeyModelVerifySupportPlatformsGetHeaders().then((res) => res.body);
    }
    public async apiKeyModelVerifySupportPlatformsGetHeaders(): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseGetListPlatformSupportResponse;
    }> {
        const searchParams = new URLSearchParams();
        const queryParams: QueryOptions = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/verify/support/platforms`
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = ObjectSerializer.deserialize(
            parsed,
            "ResponseGetListPlatformSupportResponse"
        ) as ResponseGetListPlatformSupportResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }


}