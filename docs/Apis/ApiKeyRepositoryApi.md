# ApiKeyRepositoryApi

All URIs are relative to *http://localhost/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiKeyRepositoryOwnerUsernameRepositoryNameCommitHistoryGet**](ApiKeyRepositoryApi.md#apiKeyRepositoryOwnerUsernameRepositoryNameCommitHistoryGet) | **GET** /api-key/repository/{ownerUsername}/{repositoryName}/commit/history | Get commit history by repository name and branch name by api key |


<a name="apiKeyRepositoryOwnerUsernameRepositoryNameCommitHistoryGet"></a>
# **apiKeyRepositoryOwnerUsernameRepositoryNameCommitHistoryGet**
> response.GetCommitHistoryResponse apiKeyRepositoryOwnerUsernameRepositoryNameCommitHistoryGet(ownerUsername, repositoryName, sha, x-api-key, page, pageSize, path, repoType)

Get commit history by repository name and branch name by api key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ownerUsername** | **String**| repository&#39;s owner | [default to null] |
| **repositoryName** | **String**| repository&#39;s name | [default to null] |
| **sha** | **String**| Sha is the sha of the commit (optional) | [default to null] |
| **x-api-key** | **String**| api-key | [optional] [default to null] |
| **page** | **Integer**| Page is the page number (default: 1) (optional) | [optional] [default to 1] |
| **pageSize** | **Integer**| PageSize is the page size (default: 10) (optional) | [optional] [default to 10] |
| **path** | **String**| Path is the path of the file (optional) | [optional] [default to null] |
| **repoType** | **String**|  | [optional] [default to null] |

### Return type

[**response.GetCommitHistoryResponse**](../Models/response.GetCommitHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

