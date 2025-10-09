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

Get Api Key Model Info

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | **yes** |


### Return type

Promise<[**response.ApiKeyInfoResponse**](../Models/response.ApiKeyInfoResponse.md)>



<a name="apiKeyModelIdServingGet"></a>
# **apiKeyModelIdServingGet**

Check Model Is Serving

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | **yes** |


### Return type

Promise<[**response.CheckModelIsServingResponse**](../Models/response.CheckModelIsServingResponse.md)>


<a name="apiKeyModelIdStatisticsPost"></a>
# **apiKeyModelIdStatisticsPost**

Get Model Statistics

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | **yes** |
| **input** | [**request.GetApiKeyStatisticsByModelIdRequest**](../Models/request.GetApiKeyStatisticsByModelIdRequest.md)| Get Api Key Statistics By Model Id Request |**yes** |

### Return type

Promise<[**response.GetTaskStatisticsResponse**](../Models/response.GetTaskStatisticsResponse.md)>


<a name="apiKeyModelIdTaskCostGet"></a>
# **apiKeyModelIdTaskCostGet**

Get cost to compute task by model api key

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | **yes** |

### Return type

Promise<[**response.EstimateCostResponse**](../Models/response.EstimateCostResponse.md)>


<a name="apiKeyModelVerifySupportPlatformsGet"></a>
# **apiKeyModelVerifySupportPlatformsGet**

Get List Platforms Support By Api Key


### Return type

Promise<[**response.GetListPlatformSupportResponse**](../Models/response.GetListPlatformSupportResponse.md)>


