import HttpClient, { ApiResponseHeaders, QueryOptions } from "../HttpClient";
import {
    ObjectSerializer,
    ResponseGetListModelVersioningLiteResponse,
    ResponseModelVersioningGroupLiteResponse,
    ResponseSuccessResponse,

} from "../../nodejs-openai-generator-cli/api";

export default class ApiKeyModelVersioningService {
    private readonly httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }


    public async deleteModelVersioningByModelId(modelId: string, commitHash: string): Promise<ResponseSuccessResponse> {
        return this.deleteModelVersioningByModelIdHeaders(modelId, commitHash).then((res) => res.body);
    }
    public async deleteModelVersioningByModelIdHeaders(
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


    public async changeCurrentModelVersioningByModelId(modelId: string, commitHash: string): Promise<ResponseSuccessResponse> {
        return this.changeCurrentModelVersioningByModelIdHeaders(modelId, commitHash).then((res) => res.body);
    }
    public async changeCurrentModelVersioningByModelIdHeaders(
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


    public async getListVerifiedModelVersioning(modelId: string, offset: number, limit: number, verifyStatus: string): Promise<ResponseGetListModelVersioningLiteResponse> {
        return this.getListVerifiedModelVersioningHeaders(modelId, offset, limit, verifyStatus).then((res) => res.body);
    }
    public async getListVerifiedModelVersioningHeaders(
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


    public async getCurrentModelVersioningByModelId(modelId: string): Promise<ResponseModelVersioningGroupLiteResponse> {
        return this.getCurrentModelVersioningByModelIdHeaders(modelId).then((res) => res.body);
    }
    public async getCurrentModelVersioningByModelIdHeaders(modelId: string): Promise<{
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