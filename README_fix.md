# Documentation for AIOZ-AI-PLATFORM API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost/api/v1*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *ApiKeyApi* | [**apiKeyBalanceGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyApi.md#apikeybalanceget) | **GET** /api-key/balance | Get Api Key Balance |
*ApiKeyApi* | [**apiKeyPermissionGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyApi.md#apikeypermissionget) | **GET** /api-key/permission | Get Api Key Permission |
*ApiKeyApi* | [**apiKeyStatisticsPost**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyApi.md#apikeystatisticspost) | **POST** /api-key/statistics | Get Api Key Statistics |
*ApiKeyApi* | [**apiKeyTaskHistoriesGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyApi.md#apikeytaskhistoriesget) | **GET** /api-key/task/histories | Get Tasks Histories |
*ApiKeyApi* | [**apiKeyTaskIdCancelDelete**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyApi.md#apikeytaskidcanceldelete) | **DELETE** /api-key/task/{id}/cancel | Cancel Task By Api Key |
*ApiKeyApi* | [**apiKeyTaskIdResultGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyApi.md#apikeytaskidresultget) | **GET** /api-key/task/{id}/result | Get Task Result |
*ApiKeyApi* | [**apiKeyTaskPost**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyApi.md#apikeytaskpost) | **POST** /api-key/task | Distribute Task (Api-Key) |
| *ApiKeyModelApi* | [**apiKeyModelIdInfoGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelApi.md#apikeymodelidinfoget) | **GET** /api-key/model/{id}/info | Get Api Key Model Info |
*ApiKeyModelApi* | [**apiKeyModelIdServingGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelApi.md#apikeymodelidservingget) | **GET** /api-key/model/{id}/serving | Check Model Is Serving |
*ApiKeyModelApi* | [**apiKeyModelIdStatisticsPost**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelApi.md#apikeymodelidstatisticspost) | **POST** /api-key/model/{id}/statistics | Get Model Statistics |
*ApiKeyModelApi* | [**apiKeyModelIdTaskCostGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelApi.md#apikeymodelidtaskcostget) | **GET** /api-key/model/{id}/task/cost | Get cost to compute task by model api key |
*ApiKeyModelApi* | [**apiKeyModelVerifySupportPlatformsGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelApi.md#apikeymodelverifysupportplatformsget) | **GET** /api-key/model/verify/support/platforms | Get List Platforms Support By Api Key |
| *ApiKeyModelVerifyApi* | [**apiKeyModelIdPreVerifyPost**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelVerifyApi.md#apikeymodelidpreverifypost) | **POST** /api-key/model/{id}/pre-verify | Check Valid Source code To Verify Ai Model By Api Key |
*ApiKeyModelVerifyApi* | [**apiKeyModelIdVerifyCostPost**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelVerifyApi.md#apikeymodelidverifycostpost) | **POST** /api-key/model/{id}/verify/cost | Calculate Cost To Verify Ai Model By Api Key |
*ApiKeyModelVerifyApi* | [**apiKeyModelIdVerifyPost**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelVerifyApi.md#apikeymodelidverifypost) | **POST** /api-key/model/{id}/verify | Verify Ai Model By Api Key |
*ApiKeyModelVerifyApi* | [**apiKeyModelIdVerifyTaskGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelVerifyApi.md#apikeymodelidverifytaskget) | **GET** /api-key/model/{id}/verify/task | Get List Verify Model Task By Commit Hash And Status |
*ApiKeyModelVerifyApi* | [**apiKeyModelVerifyHubTaskIdGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelVerifyApi.md#apikeymodelverifyhubtaskidget) | **GET** /api-key/model/verify/hub/task/{id} | Get Model Versioning By Hub Task Id By Api Key |
*ApiKeyModelVerifyApi* | [**apiKeyModelVerifyPlatformTaskIdGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelVerifyApi.md#apikeymodelverifyplatformtaskidget) | **GET** /api-key/model/verify/platform/task/{id} | Get Verify Platform Task By Id By Api Key |
| *ApiKeyModelVersioningApi* | [**apiKeyModelIdVersioningDelete**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelVersioningApi.md#apikeymodelidversioningdelete) | **DELETE** /api-key/model/{id}/versioning | Delete Model Versioning By Commit Hash By Api Key |
*ApiKeyModelVersioningApi* | [**apiKeyModelIdVersioningGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelVersioningApi.md#apikeymodelidversioningget) | **GET** /api-key/model/{id}/versioning | Get Current Model Versioning By Model Id By ApiKey |
*ApiKeyModelVersioningApi* | [**apiKeyModelIdVersioningListGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelVersioningApi.md#apikeymodelidversioninglistget) | **GET** /api-key/model/{id}/versioning/list | Get Verified List Model Versioning By Api Key |
*ApiKeyModelVersioningApi* | [**apiKeyModelIdVersioningPut**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyModelVersioningApi.md#apikeymodelidversioningput) | **PUT** /api-key/model/{id}/versioning | Change Model Versioning By Commit Hash By Api Key |
| *ApiKeyRepositoryApi* | [**apiKeyRepositoryOwnerUsernameRepositoryNameCommitHistoryGet**](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Apis/ApiKeyRepositoryApi.md#apikeyrepositoryownerusernamerepositorynamecommithistoryget) | **GET** /api-key/repository/{ownerUsername}/{repositoryName}/commit/history | Get commit history by repository name and branch name by api key |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [models.ApiKeyHistories](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.ApiKeyHistories.md)
 - [models.ApiKeyInfo](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.ApiKeyInfo.md)
 - [models.ApiKeyPackage](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.ApiKeyPackage.md)
 - [models.Commit](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.Commit.md)
 - [models.CommitMeta](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.CommitMeta.md)
 - [models.CommitStats](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.CommitStats.md)
 - [models.CommitUser](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.CommitUser.md)
 - [models.Follow](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.Follow.md)
 - [models.Member](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.Member.md)
 - [models.ModelVersioning](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.ModelVersioning.md)
 - [models.ModelVersioningGroupLite](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.ModelVersioningGroupLite.md)
 - [models.Offer](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.Offer.md)
 - [models.PlatformTask](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.PlatformTask.md)
 - [models.QueueTask](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.QueueTask.md)
 - [models.RepoCommit](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.RepoCommit.md)
 - [models.User](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.User.md)
 - [models.Wallet](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.Wallet.md)
 - [models.WalletWithAddress](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/models.WalletWithAddress.md)
 - [request.CalculateCostToVerifyAiModelRequest](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/request.CalculateCostToVerifyAiModelRequest.md)
 - [request.CheckValidToVerifyAiModelRequest](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/request.CheckValidToVerifyAiModelRequest.md)
 - [request.DistributeTaskRequest](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/request.DistributeTaskRequest.md)
 - [request.GetApiKeyStatisticsByModelIdRequest](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/request.GetApiKeyStatisticsByModelIdRequest.md)
 - [request.VerifyAiModelRequest](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/request.VerifyAiModelRequest.md)
 - [response.ApiKeyHistoryListData](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.ApiKeyHistoryListData.md)
 - [response.ApiKeyHistoryListResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.ApiKeyHistoryListResponse.md)
 - [response.ApiKeyInfoResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.ApiKeyInfoResponse.md)
 - [response.CheckModelIsServingData](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.CheckModelIsServingData.md)
 - [response.CheckModelIsServingResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.CheckModelIsServingResponse.md)
 - [response.CheckValidToVerifyAiModelData](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.CheckValidToVerifyAiModelData.md)
 - [response.CheckValidToVerifyAiModelResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.CheckValidToVerifyAiModelResponse.md)
 - [response.DistributeTaskResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.DistributeTaskResponse.md)
 - [response.ErrorResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.ErrorResponse.md)
 - [response.EstimateCostData](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.EstimateCostData.md)
 - [response.EstimateCostResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.EstimateCostResponse.md)
 - [response.FailResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.FailResponse.md)
 - [response.GetApiKeyPermissionData](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.GetApiKeyPermissionData.md)
 - [response.GetApiKeyPermissionResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.GetApiKeyPermissionResponse.md)
 - [response.GetCommitHistoryData](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.GetCommitHistoryData.md)
 - [response.GetCommitHistoryResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.GetCommitHistoryResponse.md)
 - [response.GetListModelVersioningLiteResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.GetListModelVersioningLiteResponse.md)
 - [response.GetListModelVersioningsLiteData](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.GetListModelVersioningsLiteData.md)
 - [response.GetListPlatformSupportResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.GetListPlatformSupportResponse.md)
 - [response.GetTaskResultData](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.GetTaskResultData.md)
 - [response.GetTaskResultResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.GetTaskResultResponse.md)
 - [response.GetTaskStatisticsData](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.GetTaskStatisticsData.md)
 - [response.GetTaskStatisticsResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.GetTaskStatisticsResponse.md)
 - [response.ModelVersioningGroupLiteListData](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.ModelVersioningGroupLiteListData.md)
 - [response.ModelVersioningGroupLiteListResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.ModelVersioningGroupLiteListResponse.md)
 - [response.ModelVersioningGroupLiteResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.ModelVersioningGroupLiteResponse.md)
 - [response.ModelVersioningResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.ModelVersioningResponse.md)
 - [response.QueueTaskResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.QueueTaskResponse.md)
 - [response.Result](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.Result.md)
 - [response.SuccessResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.SuccessResponse.md)
 - [response.VerifyAiModelResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.VerifyAiModelResponse.md)
 - [response.WalletWithAddressResponse](https://github.com/thinhtruongnguyen/kitty-cat/blob/main/docs/Models/response.WalletWithAddressResponse.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="BearerAuth"></a>
### BearerAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

