# ApiKeyModelVerifyApi

All URIs are relative to *http://localhost/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiKeyModelIdPreVerifyPost**](ApiKeyModelVerifyApi.md#apiKeyModelIdPreVerifyPost) | **POST** /api-key/model/{id}/pre-verify | Check Valid Source code To Verify Ai Model By Api Key |
| [**apiKeyModelIdVerifyCostPost**](ApiKeyModelVerifyApi.md#apiKeyModelIdVerifyCostPost) | **POST** /api-key/model/{id}/verify/cost | Calculate Cost To Verify Ai Model By Api Key |
| [**apiKeyModelIdVerifyPost**](ApiKeyModelVerifyApi.md#apiKeyModelIdVerifyPost) | **POST** /api-key/model/{id}/verify | Verify Ai Model By Api Key |
| [**apiKeyModelIdVerifyTaskGet**](ApiKeyModelVerifyApi.md#apiKeyModelIdVerifyTaskGet) | **GET** /api-key/model/{id}/verify/task | Get List Verify Model Task By Commit Hash And Status |
| [**apiKeyModelVerifyHubTaskIdGet**](ApiKeyModelVerifyApi.md#apiKeyModelVerifyHubTaskIdGet) | **GET** /api-key/model/verify/hub/task/{id} | Get Model Versioning By Hub Task Id By Api Key |
| [**apiKeyModelVerifyPlatformTaskIdGet**](ApiKeyModelVerifyApi.md#apiKeyModelVerifyPlatformTaskIdGet) | **GET** /api-key/model/verify/platform/task/{id} | Get Verify Platform Task By Id By Api Key |


<a name="apiKeyModelIdPreVerifyPost"></a>
# **apiKeyModelIdPreVerifyPost**
> response.CheckValidToVerifyAiModelResponse apiKeyModelIdPreVerifyPost(id, input, x-api-key)

Check Valid Source code To Verify Ai Model By Api Key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | [default to null] |
| **input** | [**request.CheckValidToVerifyAiModelRequest**](../Models/request.CheckValidToVerifyAiModelRequest.md)| Verify Ai Model Request | |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.CheckValidToVerifyAiModelResponse**](../Models/response.CheckValidToVerifyAiModelResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

<a name="apiKeyModelIdVerifyCostPost"></a>
# **apiKeyModelIdVerifyCostPost**
> response.EstimateCostResponse apiKeyModelIdVerifyCostPost(id, input, x-api-key)

Calculate Cost To Verify Ai Model By Api Key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | [default to null] |
| **input** | [**request.CalculateCostToVerifyAiModelRequest**](../Models/request.CalculateCostToVerifyAiModelRequest.md)| Verify Ai Model Request | |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.EstimateCostResponse**](../Models/response.EstimateCostResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

<a name="apiKeyModelIdVerifyPost"></a>
# **apiKeyModelIdVerifyPost**
> response.VerifyAiModelResponse apiKeyModelIdVerifyPost(id, input, x-api-key)

Verify Ai Model By Api Key

    valid platform is [window, linux, macApple, macIntel]

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | [default to null] |
| **input** | [**request.VerifyAiModelRequest**](../Models/request.VerifyAiModelRequest.md)| Verify Ai Model Request | |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.VerifyAiModelResponse**](../Models/response.VerifyAiModelResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

<a name="apiKeyModelIdVerifyTaskGet"></a>
# **apiKeyModelIdVerifyTaskGet**
> response.ModelVersioningGroupLiteListResponse apiKeyModelIdVerifyTaskGet(id, commitHash, x-api-key, verifyStatus)

Get List Verify Model Task By Commit Hash And Status

    verifyStatus is one of rejected, verified, pending

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | [default to null] |
| **commitHash** | **String**|  | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |
| **verifyStatus** | **String**|  | [optional] [default to null] [enum: rejected, verified, pending] |

### Return type

[**response.ModelVersioningGroupLiteListResponse**](../Models/response.ModelVersioningGroupLiteListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyModelVerifyHubTaskIdGet"></a>
# **apiKeyModelVerifyHubTaskIdGet**
> response.ModelVersioningResponse apiKeyModelVerifyHubTaskIdGet(id, x-api-key)

Get Model Versioning By Hub Task Id By Api Key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Hub Task&#39;s id | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.ModelVersioningResponse**](../Models/response.ModelVersioningResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyModelVerifyPlatformTaskIdGet"></a>
# **apiKeyModelVerifyPlatformTaskIdGet**
> response.QueueTaskResponse apiKeyModelVerifyPlatformTaskIdGet(id, x-api-key)

Get Verify Platform Task By Id By Api Key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Task&#39;s Id | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.QueueTaskResponse**](../Models/response.QueueTaskResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

