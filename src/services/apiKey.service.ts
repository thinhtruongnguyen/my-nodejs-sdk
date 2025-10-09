import HttpClient, { ApiResponseHeaders, QueryOptions } from "../HttpClient";
import {
  ObjectSerializer,
  RequestDistributeTaskRequest,
  RequestGetApiKeyStatisticsByModelIdRequest,
  ResponseApiKeyHistoryListResponse,
  ResponseDistributeTaskResponse,
  ResponseGetApiKeyPermissionResponse,
  ResponseGetTaskResultResponse,
  ResponseGetTaskStatisticsResponse,
  ResponseSuccessResponse,
  ResponseWalletWithAddressResponse
} from "../../nodejs-openai-generator-cli/model/models";

export default class ApiKeyService {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public async cancelTask(
    taskId: string
  ): Promise<ResponseSuccessResponse> {
    const res = await this.cancelTaskHeaders(taskId);
    return res.body;
  }
  public async cancelTaskHeaders(
    taskId: string
  ): Promise<{
    headers: ApiResponseHeaders;
    body: ResponseSuccessResponse;
  }> {
    const queryParams: QueryOptions = {
      method: "DELETE",
      headers: {},
    };

    const localVarPath = `api-key/task/${taskId}/cancel`;

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


  public async createTaskHeaders(
    request: RequestDistributeTaskRequest,
  ): Promise<{
    headers: ApiResponseHeaders;
    body: ResponseDistributeTaskResponse;
  }> {

    const queryParams: QueryOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    };

    const localVarPath = "api-key/task";

    const response = await this.httpClient.call(localVarPath, queryParams);

    const parsed = JSON.parse(response.body);
    const deserialized = ObjectSerializer.deserialize(
      parsed,
      "ResponseDistributeTaskResponse"
    ) as ResponseDistributeTaskResponse;

    return {
      headers: response.headers,
      body: deserialized,
    };
  }
  public async createTask(
    request: RequestDistributeTaskRequest
  ): Promise<ResponseDistributeTaskResponse> {
    const res = await this.createTaskHeaders(request);
    return res.body;
  }


  public async getApiKeyStatistics(
    request: RequestGetApiKeyStatisticsByModelIdRequest,
    modelId: string
  ): Promise<ResponseGetTaskStatisticsResponse> {
    const res = await this.getApiKeyStatisticsHeaders(request, modelId);
    return res.body;
  }
  public async getApiKeyStatisticsHeaders(
    request: RequestGetApiKeyStatisticsByModelIdRequest,
    modelId: string
  ): Promise<{
    headers: ApiResponseHeaders;
    body: ResponseGetTaskStatisticsResponse;
  }> {
    const payload = {
      ModelId: modelId,
      ...request
    };

    const queryParams: QueryOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    const localVarPath = "api-key/statistics";

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



  public async getBalanceHeaders(): Promise<{
    headers: ApiResponseHeaders;
    body: ResponseWalletWithAddressResponse;
  }> {
    const searchParams = new URLSearchParams();
    const queryParams: QueryOptions = {
      method: "GET",
      headers: {},
      searchParams,
    };
    const localVarPathBalance = "api-key/balance";
    const responseBalance = await this.httpClient.call(localVarPathBalance, queryParams);
    const parsed = JSON.parse(responseBalance.body);
    const deserialized = ObjectSerializer.deserialize(
      parsed,
      "ResponseWalletWithAddressResponse"
    ) as ResponseWalletWithAddressResponse;
    return {
      headers: responseBalance.headers,
      body: deserialized,
    };
  }
  public async getBalance(): Promise<ResponseWalletWithAddressResponse> {
    return this.getBalanceHeaders().then((res) => res.body);
  }


  public async getTaskResult(
    taskId: string
  ): Promise<ResponseGetTaskResultResponse> {
    const res = await this.getTaskResultHeaders(taskId);
    return res.body;
  }
  public async getTaskResultHeaders(
    taskId: string,
  ): Promise<{
    headers: ApiResponseHeaders;
    body: ResponseGetTaskResultResponse;
  }> {
    const searchParams = new URLSearchParams();
    const queryParams: QueryOptions = {
      method: "GET",
      headers: {},
      searchParams,
    };
    const localVarPath = `api-key/task/${taskId}/result`
    const response = await this.httpClient.call(localVarPath, queryParams);
    const parsed = JSON.parse(response.body);
    const deserialized = ObjectSerializer.deserialize(
      parsed,
      "ResponseGetTaskResultResponse"
    ) as ResponseGetTaskResultResponse;

    return {
      headers: response.headers,
      body: deserialized,
    };
  }

  public async getTaskHistoriesHeaders(
    limit: number,
    offset: number
  ): Promise<{
    headers: ApiResponseHeaders;
    body: ResponseApiKeyHistoryListResponse;
  }> {
    const searchParams = new URLSearchParams();
    searchParams.append("limit", limit.toString());
    searchParams.append("offset", offset.toString());

    const queryParams: QueryOptions = {
      method: "GET",
      headers: {},
      searchParams,
    };
    const localVarPath = "api-key/task/histories";
    const response = await this.httpClient.call(localVarPath, queryParams);
    const parsed = JSON.parse(response.body);
    const deserialized = ObjectSerializer.deserialize(
      parsed,
      "ResponseApiKeyHistoryListResponse"
    ) as ResponseApiKeyHistoryListResponse;
    return {
      headers: response.headers,
      body: deserialized,
    };
  }
  public async getTaskHistories(
    limit: number = 10,
    offset: number = 0
  ): Promise<ResponseApiKeyHistoryListResponse> {
    return this.getTaskHistoriesHeaders(limit, offset).then((res) => res.body);
  }


  public async getApiKeyPermission(): Promise<ResponseGetApiKeyPermissionResponse> {
    return this.getApiKeyPermissionHeaders().then((res) => res.body);
  }
  public async getApiKeyPermissionHeaders(): Promise<{
    headers: ApiResponseHeaders;
    body: ResponseGetApiKeyPermissionResponse;
  }> {
    const queryParams: QueryOptions = {
      method: "GET",
      headers: {},
      searchParams: new URLSearchParams(),
    };
    const localVarPath = "api-key/permission";
    const response = await this.httpClient.call(localVarPath, queryParams);
    const parsed = JSON.parse(response.body);
    const deserialized = ObjectSerializer.deserialize(
      parsed,
      "ResponseGetApiKeyPermissionResponse"
    ) as ResponseGetApiKeyPermissionResponse;
    return {
      headers: response.headers,
      body: deserialized,
    };
  }


}
