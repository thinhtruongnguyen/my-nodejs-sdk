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


    public async getModelStatistics(modelId: string,
        request: RequestGetApiKeyStatisticsByModelIdRequest): Promise<ResponseGetTaskStatisticsResponse> {
        return this.getModelStatisticsHeaders(modelId, request).then((res) => res.body);
    }
    public async getModelStatisticsHeaders(
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


    public async getModelTaskCost(modelId: string): Promise<ResponseEstimateCostResponse> {
        return this.getModelTaskCostHeaders(modelId).then((res) => res.body);
    }
    public async getModelTaskCostHeaders(modelId: string): Promise<{
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

    public async checkModelIsServing(modelId: string): Promise<ResponseCheckModelIsServingResponse> {
        return this.checkModelIsServingHeaders(modelId).then((res) => res.body);
    }
    public async checkModelIsServingHeaders(modelId: string): Promise<{
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

    public async getModelInfo(modelId: string): Promise<ResponseApiKeyInfoResponse> {
        return this.getModelInfoHeaders(modelId).then((res) => res.body);
    }
    public async getModelInfoHeaders(modelId: string): Promise<{
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

    public async getListPlatformsSupport(): Promise<ResponseGetListPlatformSupportResponse> {
        return this.getListPlatformsSupportHeaders().then((res) => res.body);
    }
    public async getListPlatformsSupportHeaders(): Promise<{
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