# ApiKeyModelVersioningApi

All URIs are relative to *http://localhost/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiKeyModelIdVersioningDelete**](ApiKeyModelVersioningApi.md#apiKeyModelIdVersioningDelete) | **DELETE** /api-key/model/{id}/versioning | Delete Model Versioning By Commit Hash By Api Key |
| [**apiKeyModelIdVersioningGet**](ApiKeyModelVersioningApi.md#apiKeyModelIdVersioningGet) | **GET** /api-key/model/{id}/versioning | Get Current Model Versioning By Model Id By ApiKey |
| [**apiKeyModelIdVersioningListGet**](ApiKeyModelVersioningApi.md#apiKeyModelIdVersioningListGet) | **GET** /api-key/model/{id}/versioning/list | Get Verified List Model Versioning By Api Key |
| [**apiKeyModelIdVersioningPut**](ApiKeyModelVersioningApi.md#apiKeyModelIdVersioningPut) | **PUT** /api-key/model/{id}/versioning | Change Model Versioning By Commit Hash By Api Key |


<a name="apiKeyModelIdVersioningDelete"></a>
# **apiKeyModelIdVersioningDelete**

Delete Model Versioning By Commit Hash By Api Key

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | **yes** |
| **commitHash** | **String**|  | **yes** |

### Return type

Promise<[**response.SuccessResponse**](../Models/response.SuccessResponse.md)>


<a name="apiKeyModelIdVersioningGet"></a>
# **apiKeyModelIdVersioningGet**

Get Current Model Versioning By Model Id By ApiKey

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | **yes** |

### Return type

Promise<[**response.ModelVersioningGroupLiteResponse**](../Models/response.ModelVersioningGroupLiteResponse.md)>


<a name="apiKeyModelIdVersioningListGet"></a>
# **apiKeyModelIdVersioningListGet**

Get Verified List Model Versioning By Api Key



### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | **yes** |
| **limit** | **Integer**| Default: 10 | no |
| **offset** | **Integer**| Default: 0 | no |
| **verifyStatus** | **String**|allowed: verified, all  | no|

### Return type

Promise<[**response.GetListModelVersioningLiteResponse**](../Models/response.GetListModelVersioningLiteResponse.md)>


<a name="apiKeyModelIdVersioningPut"></a>
# **apiKeyModelIdVersioningPut**

Change Model Versioning By Commit Hash By Api Key

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | **yes** |
| **commitHash** | **String**|  | **yes** |

### Return type

Promise<[**response.SuccessResponse**](../Models/response.SuccessResponse.md)>


