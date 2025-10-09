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
> response.WalletWithAddressResponse apiKeyBalanceGet(x-api-key)

Get Api Key Balance

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.WalletWithAddressResponse**](../Models/response.WalletWithAddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyPermissionGet"></a>
# **apiKeyPermissionGet**
> response.GetApiKeyPermissionResponse apiKeyPermissionGet(x-api-key)

Get Api Key Permission

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.GetApiKeyPermissionResponse**](../Models/response.GetApiKeyPermissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyStatisticsPost"></a>
# **apiKeyStatisticsPost**
> response.GetTaskStatisticsResponse apiKeyStatisticsPost(input, x-api-key)

Get Api Key Statistics

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **input** | [**request.GetApiKeyStatisticsByModelIdRequest**](../Models/request.GetApiKeyStatisticsByModelIdRequest.md)| Get Api Key Statistics Request | |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.GetTaskStatisticsResponse**](../Models/response.GetTaskStatisticsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

<a name="apiKeyTaskHistoriesGet"></a>
# **apiKeyTaskHistoriesGet**
> response.ApiKeyHistoryListResponse apiKeyTaskHistoriesGet(x-api-key, limit, offset)

Get Tasks Histories

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **x-api-key** | **String**| api-key | [optional] [default to null] |
| **limit** | **Integer**|  | [optional] [default to 10] |
| **offset** | **Integer**|  | [optional] [default to 0] |

### Return type

[**response.ApiKeyHistoryListResponse**](../Models/response.ApiKeyHistoryListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyTaskIdCancelDelete"></a>
# **apiKeyTaskIdCancelDelete**
> response.SuccessResponse apiKeyTaskIdCancelDelete(id, x-api-key)

Cancel Task By Api Key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Task&#39;s id | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.SuccessResponse**](../Models/response.SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyTaskIdResultGet"></a>
# **apiKeyTaskIdResultGet**
> response.GetTaskResultResponse apiKeyTaskIdResultGet(id, x-api-key)

Get Task Result

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Task&#39;s id | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.GetTaskResultResponse**](../Models/response.GetTaskResultResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyTaskPost"></a>
# **apiKeyTaskPost**
> response.DistributeTaskResponse apiKeyTaskPost(input, x-api-key)

Distribute Task (Api-Key)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **input** | [**request.DistributeTaskRequest**](../Models/request.DistributeTaskRequest.md)| Distribute Task Request | |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.DistributeTaskResponse**](../Models/response.DistributeTaskResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

