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

Check Valid Source code To Verify Ai Model By Api Key

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | **yes** |
| **input** | [**request.CheckValidToVerifyAiModelRequest**](../Models/request.CheckValidToVerifyAiModelRequest.md)| Verify Ai Model Request |**yes** |

### Return type

Promise<[**response.CheckValidToVerifyAiModelResponse**](../Models/response.CheckValidToVerifyAiModelResponse.md)>


<a name="apiKeyModelIdVerifyCostPost"></a>
# **apiKeyModelIdVerifyCostPost**

Calculate Cost To Verify Ai Model By Api Key

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | **yes** |
| **input** | [**request.CalculateCostToVerifyAiModelRequest**](../Models/request.CalculateCostToVerifyAiModelRequest.md)| Verify Ai Model Request |**yes** |

### Return type

Promise<[**response.EstimateCostResponse**](../Models/response.EstimateCostResponse.md)>


<a name="apiKeyModelIdVerifyPost"></a>
# **apiKeyModelIdVerifyPost**

Verify Ai Model By Api Key

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | **yes**|
| **input** | [**request.VerifyAiModelRequest**](../Models/request.VerifyAiModelRequest.md)| Verify Ai Model Request |**yes** |

### Return type

Promise<[**response.VerifyAiModelResponse**](../Models/response.VerifyAiModelResponse.md)>


<a name="apiKeyModelIdVerifyTaskGet"></a>
# **apiKeyModelIdVerifyTaskGet**

Get List Verify Model Task By Commit Hash And Status



### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | **yes**|
| **commitHash** | **String**|  | **yes** |
| **verifyStatus** | **String**|allowed: rejected, verified, pending | no |

### Return type

Promise<[**response.ModelVersioningGroupLiteListResponse**](../Models/response.ModelVersioningGroupLiteListResponse.md)>


<a name="apiKeyModelVerifyHubTaskIdGet"></a>
# **apiKeyModelVerifyHubTaskIdGet**

Get Model Versioning By Hub Task Id By Api Key

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Hub Task&#39;s id | **yes** |

### Return type

Promise<[**response.ModelVersioningResponse**](../Models/response.ModelVersioningResponse.md)>


<a name="apiKeyModelVerifyPlatformTaskIdGet"></a>
# **apiKeyModelVerifyPlatformTaskIdGet**

Get Verify Platform Task By Id By Api Key

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Task&#39;s Id | **yes** |

### Return type

Promise<[**response.QueueTaskResponse**](../Models/response.QueueTaskResponse.md)>


