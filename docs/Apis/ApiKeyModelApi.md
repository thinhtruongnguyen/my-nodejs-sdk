# ApiKeyModelApi

All URIs are relative to *http://localhost/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiKeyModelIdInfoGet**](ApiKeyModelApi.md#apiKeyModelIdInfoGet) | **GET** /api-key/model/{id}/info | Get Api Key Model Info |
| [**apiKeyModelIdServingGet**](ApiKeyModelApi.md#apiKeyModelIdServingGet) | **GET** /api-key/model/{id}/serving | Check Model Is Serving |
| [**apiKeyModelIdStatisticsPost**](ApiKeyModelApi.md#apiKeyModelIdStatisticsPost) | **POST** /api-key/model/{id}/statistics | Get Model Statistics |
| [**apiKeyModelIdTaskCostGet**](ApiKeyModelApi.md#apiKeyModelIdTaskCostGet) | **GET** /api-key/model/{id}/task/cost | Get cost to compute task by model api key |
| [**apiKeyModelVerifySupportPlatformsGet**](ApiKeyModelApi.md#apiKeyModelVerifySupportPlatformsGet) | **GET** /api-key/model/verify/support/platforms | Get List Platforms Support By Api Key |


<a name="apiKeyModelIdInfoGet"></a>
# **apiKeyModelIdInfoGet**
> response.ApiKeyInfoResponse apiKeyModelIdInfoGet(id, x-api-key)

Get Api Key Model Info

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.ApiKeyInfoResponse**](../Models/response.ApiKeyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyModelIdServingGet"></a>
# **apiKeyModelIdServingGet**
> response.CheckModelIsServingResponse apiKeyModelIdServingGet(id, x-api-key)

Check Model Is Serving

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.CheckModelIsServingResponse**](../Models/response.CheckModelIsServingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyModelIdStatisticsPost"></a>
# **apiKeyModelIdStatisticsPost**
> response.GetTaskStatisticsResponse apiKeyModelIdStatisticsPost(id, input, x-api-key)

Get Model Statistics

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | [default to null] |
| **input** | [**request.GetApiKeyStatisticsByModelIdRequest**](../Models/request.GetApiKeyStatisticsByModelIdRequest.md)| Get Api Key Statistics By Model Id Request | |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.GetTaskStatisticsResponse**](../Models/response.GetTaskStatisticsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

<a name="apiKeyModelIdTaskCostGet"></a>
# **apiKeyModelIdTaskCostGet**
> response.EstimateCostResponse apiKeyModelIdTaskCostGet(id, x-api-key)

Get cost to compute task by model api key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.EstimateCostResponse**](../Models/response.EstimateCostResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyModelVerifySupportPlatformsGet"></a>
# **apiKeyModelVerifySupportPlatformsGet**
> response.GetListPlatformSupportResponse apiKeyModelVerifySupportPlatformsGet(x-api-key)

Get List Platforms Support By Api Key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.GetListPlatformSupportResponse**](../Models/response.GetListPlatformSupportResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

