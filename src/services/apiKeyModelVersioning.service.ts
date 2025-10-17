import HttpClient, { ApiResponseHeaders, QueryOptions } from "../HttpClient";
import {
    ObjectSerializer,
    ResponseGetListModelVersioningLiteResponse,
    ResponseModelVersioningGroupLiteResponse,
    ResponseSuccessResponse,

} from "../../nodejs-openapi-generator-cli/api";

export default class ApiKeyModelVersioningService {
    private readonly httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }


    public async apiKeyModelIdVersioningDelete(modelId: string, commitHash: string): Promise<ResponseSuccessResponse> {
        return this.apiKeyModelIdVersioningDeleteHeaders(modelId, commitHash).then((res) => res.body);
    }
    public async apiKeyModelIdVersioningDeleteHeaders(
        modelId: string,
        commitHash: string
    ): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccessResponse;
    }> {
        const searchParams = new URLSearchParams();
        searchParams.append("commitHash", commitHash);

        const queryParams: QueryOptions = {
            method: "DELETE",
            headers: {},
            searchParams,
        };

        const localVarPath = `api-key/model/${modelId}/versioning`;
        const response = await this.httpClient.call(localVarPath, queryParams);

        const parsed = JSON.parse(response.body);
        const deserialized = ObjectSerializer.deserialize(
            parsed,
            "ResponseSuccessResponse"
        ) as ResponseSuccessResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }


    public async apiKeyModelIdVersioningPut(modelId: string, commitHash: string): Promise<ResponseSuccessResponse> {
        return this.apiKeyModelIdVersioningPutHeaders(modelId, commitHash).then((res) => res.body);
    }
    public async apiKeyModelIdVersioningPutHeaders(
        modelId: string,
        commitHash: string
    ): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseSuccessResponse;
    }> {
        const searchParams = new URLSearchParams();
        searchParams.append("commitHash", commitHash);

        const queryParams: QueryOptions = {
            method: "PUT",
            headers: {},
            searchParams,
        };

        const localVarPath = `api-key/model/${modelId}/versioning`;
        const response = await this.httpClient.call(localVarPath, queryParams);

        const parsed = JSON.parse(response.body);
        const deserialized = ObjectSerializer.deserialize(
            parsed,
            "ResponseSuccessResponse"
        ) as ResponseSuccessResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }


    public async apiKeyModelIdVersioningListGet(modelId: string, offset: number, limit: number, verifyStatus: string): Promise<ResponseGetListModelVersioningLiteResponse> {
        return this.apiKeyModelIdVersioningListGetHeaders(modelId, offset, limit, verifyStatus).then((res) => res.body);
    }
    public async apiKeyModelIdVersioningListGetHeaders(
        modelId: string,
        offset: number,
        limit: number,
        verifyStatus: string
    ): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseGetListModelVersioningLiteResponse;
    }> {
        const searchParams = new URLSearchParams();
        searchParams.append("offset", offset.toString());
        searchParams.append("limit", limit.toString());
        searchParams.append("verifyStatus", verifyStatus);

        const queryParams: QueryOptions = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/versioning/list`;
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = ObjectSerializer.deserialize(
            parsed,
            "ResponseGetListModelVersioningLiteResponse"
        ) as ResponseGetListModelVersioningLiteResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }


    public async apiKeyModelIdVersioningGet(modelId: string): Promise<ResponseModelVersioningGroupLiteResponse> {
        return this.apiKeyModelIdVersioningGetHeaders(modelId).then((res) => res.body);
    }
    public async apiKeyModelIdVersioningGetHeaders(modelId: string): Promise<{
        headers: ApiResponseHeaders;
        body: ResponseModelVersioningGroupLiteResponse;
    }> {
        const searchParams = new URLSearchParams();
        const queryParams: QueryOptions = {
            method: "GET",
            headers: {},
            searchParams,
        };
        const localVarPath = `api-key/model/${modelId}/versioning`
        const response = await this.httpClient.call(localVarPath, queryParams);
        const parsed = JSON.parse(response.body);
        const deserialized = ObjectSerializer.deserialize(
            parsed,
            "ResponseEstimateCostResponse"
        ) as ResponseModelVersioningGroupLiteResponse;

        return {
            headers: response.headers,
            body: deserialized,
        };
    }



}