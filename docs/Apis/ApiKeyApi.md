# ApiKeyApi

All URIs are relative to *http://localhost/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiKeyBalanceGet**](ApiKeyApi.md#apiKeyBalanceGet) | **GET** /api-key/balance | Get Api Key Balance |
| [**apiKeyPermissionGet**](ApiKeyApi.md#apiKeyPermissionGet) | **GET** /api-key/permission | Get Api Key Permission |
| [**apiKeyStatisticsPost**](ApiKeyApi.md#apiKeyStatisticsPost) | **POST** /api-key/statistics | Get Api Key Statistics |
| [**apiKeyTaskHistoriesGet**](ApiKeyApi.md#apiKeyTaskHistoriesGet) | **GET** /api-key/task/histories | Get Tasks Histories |
| [**apiKeyTaskIdCancelDelete**](ApiKeyApi.md#apiKeyTaskIdCancelDelete) | **DELETE** /api-key/task/{id}/cancel | Cancel Task By Api Key |
| [**apiKeyTaskIdResultGet**](ApiKeyApi.md#apiKeyTaskIdResultGet) | **GET** /api-key/task/{id}/result | Get Task Result |
| [**apiKeyTaskPost**](ApiKeyApi.md#apiKeyTaskPost) | **POST** /api-key/task | Distribute Task (Api-Key) |


<a name="apiKeyBalanceGet"></a>
# **apiKeyBalanceGet**

Get Api Key Balance



### Return type

Promise<[**response.WalletWithAddressResponse**](../Models/response.WalletWithAddressResponse.md)>


<a name="apiKeyPermissionGet"></a>
# **apiKeyPermissionGet**

Get Api Key Permission


### Return type

Promise<[**response.GetApiKeyPermissionResponse**](../Models/response.GetApiKeyPermissionResponse.md)>


<a name="apiKeyStatisticsPost"></a>
# **apiKeyStatisticsPost**

Get Api Key Statistics

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **input** | [**request.GetApiKeyStatisticsByModelIdRequest**](../Models/request.GetApiKeyStatisticsByModelIdRequest.md)| Get Api Key Statistics Request |**yes**|


### Return type

Promise<[**response.GetTaskStatisticsResponse**](../Models/response.GetTaskStatisticsResponse.md)>

<a name="apiKeyTaskHistoriesGet"></a>
# **apiKeyTaskHistoriesGet**

Get Tasks Histories

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **limit** | **Integer**|  | no |
| **offset** | **Integer**|  | no |

### Return type

Promise<[**response.ApiKeyHistoryListResponse**](../Models/response.ApiKeyHistoryListResponse.md)>



<a name="apiKeyTaskIdCancelDelete"></a>
# **apiKeyTaskIdCancelDelete**

Cancel Task By Api Key

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Task&#39;s id | **yes**|


### Return type

Promise<[**response.SuccessResponse**](../Models/response.SuccessResponse.md)>


<a name="apiKeyTaskIdResultGet"></a>
# **apiKeyTaskIdResultGet**

Get Task Result

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Task&#39;s id | **yes** |


### Return type

Promise<[**response.GetTaskResultResponse**](../Models/response.GetTaskResultResponse.md)>



<a name="apiKeyTaskPost"></a>
# **apiKeyTaskPost**

Distribute Task (Api-Key)

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **input** | [**request.DistributeTaskRequest**](../Models/request.DistributeTaskRequest.md)| Distribute Task Request |**yes** |


### Return type

Promise<[**response.DistributeTaskResponse**](../Models/response.DistributeTaskResponse.md)>
