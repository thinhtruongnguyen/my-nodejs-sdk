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
> response.SuccessResponse apiKeyModelIdVersioningDelete(id, commitHash, x-api-key)

Delete Model Versioning By Commit Hash By Api Key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | [default to null] |
| **commitHash** | **String**|  | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.SuccessResponse**](../Models/response.SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyModelIdVersioningGet"></a>
# **apiKeyModelIdVersioningGet**
> response.ModelVersioningGroupLiteResponse apiKeyModelIdVersioningGet(id, x-api-key)

Get Current Model Versioning By Model Id By ApiKey

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.ModelVersioningGroupLiteResponse**](../Models/response.ModelVersioningGroupLiteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyModelIdVersioningListGet"></a>
# **apiKeyModelIdVersioningListGet**
> response.GetListModelVersioningLiteResponse apiKeyModelIdVersioningListGet(id, x-api-key, limit, offset, verifyStatus)

Get Verified List Model Versioning By Api Key

    verifyStatus is verified or all. Use verified to get verified versioning. Use all to get verified history

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |
| **limit** | **Integer**|  | [optional] [default to 10] |
| **offset** | **Integer**|  | [optional] [default to 0] |
| **verifyStatus** | **String**|  | [optional] [default to null] [enum: verified, all] |

### Return type

[**response.GetListModelVersioningLiteResponse**](../Models/response.GetListModelVersioningLiteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiKeyModelIdVersioningPut"></a>
# **apiKeyModelIdVersioningPut**
> response.SuccessResponse apiKeyModelIdVersioningPut(id, commitHash, x-api-key)

Change Model Versioning By Commit Hash By Api Key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Model&#39;s id | [default to null] |
| **commitHash** | **String**|  | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |

### Return type

[**response.SuccessResponse**](../Models/response.SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

