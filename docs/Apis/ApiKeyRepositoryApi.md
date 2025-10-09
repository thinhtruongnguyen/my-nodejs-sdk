# ApiKeyRepositoryApi

All URIs are relative to *http://localhost/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiKeyRepositoryOwnerUsernameRepositoryNameCommitHistoryGet**](ApiKeyRepositoryApi.md#apiKeyRepositoryOwnerUsernameRepositoryNameCommitHistoryGet) | **GET** /api-key/repository/{ownerUsername}/{repositoryName}/commit/history | Get commit history by repository name and branch name by api key |


<a name="apiKeyRepositoryOwnerUsernameRepositoryNameCommitHistoryGet"></a>
# **apiKeyRepositoryOwnerUsernameRepositoryNameCommitHistoryGet**

Get commit history by repository name and branch name by api key

### Parameters

|Name | Type | Description  | Required |
|------------- | ------------- | ------------- | -------------|
| **ownerUsername** | **String**| repository&#39;s owner | **yes** |
| **repositoryName** | **String**| repository&#39;s name | **yes** |
| **sha** | **String**| Sha is the sha of the commit (optional) | **yes** |
| **page** | **Integer**| Page is the page number (default: 1) (optional) | no |
| **pageSize** | **Integer**| PageSize is the page size (default: 10) (optional) | no |
| **path** | **String**| Path is the path of the file (optional) | no |
| **repoType** | **String**|  | no |

### Return type

Promise<[**response.GetCommitHistoryResponse**](../Models/response.GetCommitHistoryResponse.md)>


