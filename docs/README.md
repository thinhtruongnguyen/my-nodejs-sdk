# Documentation for AIOZ-AI-PLATFORM API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost/api/v1*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *ApiKeyApi* | [**apiKeyBalanceGet**](Apis/ApiKeyApi.md#apikeybalanceget) | **GET** /api-key/balance | Get Api Key Balance |
*ApiKeyApi* | [**apiKeyPermissionGet**](Apis/ApiKeyApi.md#apikeypermissionget) | **GET** /api-key/permission | Get Api Key Permission |
*ApiKeyApi* | [**apiKeyStatisticsPost**](Apis/ApiKeyApi.md#apikeystatisticspost) | **POST** /api-key/statistics | Get Api Key Statistics |
*ApiKeyApi* | [**apiKeyTaskHistoriesGet**](Apis/ApiKeyApi.md#apikeytaskhistoriesget) | **GET** /api-key/task/histories | Get Tasks Histories |
*ApiKeyApi* | [**apiKeyTaskIdCancelDelete**](Apis/ApiKeyApi.md#apikeytaskidcanceldelete) | **DELETE** /api-key/task/{id}/cancel | Cancel Task By Api Key |
*ApiKeyApi* | [**apiKeyTaskIdResultGet**](Apis/ApiKeyApi.md#apikeytaskidresultget) | **GET** /api-key/task/{id}/result | Get Task Result |
*ApiKeyApi* | [**apiKeyTaskPost**](Apis/ApiKeyApi.md#apikeytaskpost) | **POST** /api-key/task | Distribute Task (Api-Key) |
| *ApiKeyModelApi* | [**apiKeyModelIdInfoGet**](Apis/ApiKeyModelApi.md#apikeymodelidinfoget) | **GET** /api-key/model/{id}/info | Get Api Key Model Info |
*ApiKeyModelApi* | [**apiKeyModelIdServingGet**](Apis/ApiKeyModelApi.md#apikeymodelidservingget) | **GET** /api-key/model/{id}/serving | Check Model Is Serving |
*ApiKeyModelApi* | [**apiKeyModelIdStatisticsPost**](Apis/ApiKeyModelApi.md#apikeymodelidstatisticspost) | **POST** /api-key/model/{id}/statistics | Get Model Statistics |
*ApiKeyModelApi* | [**apiKeyModelIdTaskCostGet**](Apis/ApiKeyModelApi.md#apikeymodelidtaskcostget) | **GET** /api-key/model/{id}/task/cost | Get cost to compute task by model api key |
*ApiKeyModelApi* | [**apiKeyModelVerifySupportPlatformsGet**](Apis/ApiKeyModelApi.md#apikeymodelverifysupportplatformsget) | **GET** /api-key/model/verify/support/platforms | Get List Platforms Support By Api Key |
| *ApiKeyModelVerifyApi* | [**apiKeyModelIdPreVerifyPost**](Apis/ApiKeyModelVerifyApi.md#apikeymodelidpreverifypost) | **POST** /api-key/model/{id}/pre-verify | Check Valid Source code To Verify Ai Model By Api Key |
*ApiKeyModelVerifyApi* | [**apiKeyModelIdVerifyCostPost**](Apis/ApiKeyModelVerifyApi.md#apikeymodelidverifycostpost) | **POST** /api-key/model/{id}/verify/cost | Calculate Cost To Verify Ai Model By Api Key |
*ApiKeyModelVerifyApi* | [**apiKeyModelIdVerifyPost**](Apis/ApiKeyModelVerifyApi.md#apikeymodelidverifypost) | **POST** /api-key/model/{id}/verify | Verify Ai Model By Api Key |
*ApiKeyModelVerifyApi* | [**apiKeyModelIdVerifyTaskGet**](Apis/ApiKeyModelVerifyApi.md#apikeymodelidverifytaskget) | **GET** /api-key/model/{id}/verify/task | Get List Verify Model Task By Commit Hash And Status |
*ApiKeyModelVerifyApi* | [**apiKeyModelVerifyHubTaskIdGet**](Apis/ApiKeyModelVerifyApi.md#apikeymodelverifyhubtaskidget) | **GET** /api-key/model/verify/hub/task/{id} | Get Model Versioning By Hub Task Id By Api Key |
*ApiKeyModelVerifyApi* | [**apiKeyModelVerifyPlatformTaskIdGet**](Apis/ApiKeyModelVerifyApi.md#apikeymodelverifyplatformtaskidget) | **GET** /api-key/model/verify/platform/task/{id} | Get Verify Platform Task By Id By Api Key |
| *ApiKeyModelVersioningApi* | [**apiKeyModelIdVersioningDelete**](Apis/ApiKeyModelVersioningApi.md#apikeymodelidversioningdelete) | **DELETE** /api-key/model/{id}/versioning | Delete Model Versioning By Commit Hash By Api Key |
*ApiKeyModelVersioningApi* | [**apiKeyModelIdVersioningGet**](Apis/ApiKeyModelVersioningApi.md#apikeymodelidversioningget) | **GET** /api-key/model/{id}/versioning | Get Current Model Versioning By Model Id By ApiKey |
*ApiKeyModelVersioningApi* | [**apiKeyModelIdVersioningListGet**](Apis/ApiKeyModelVersioningApi.md#apikeymodelidversioninglistget) | **GET** /api-key/model/{id}/versioning/list | Get Verified List Model Versioning By Api Key |
*ApiKeyModelVersioningApi* | [**apiKeyModelIdVersioningPut**](Apis/ApiKeyModelVersioningApi.md#apikeymodelidversioningput) | **PUT** /api-key/model/{id}/versioning | Change Model Versioning By Commit Hash By Api Key |
| *ApiKeyRepositoryApi* | [**apiKeyRepositoryOwnerUsernameRepositoryNameCommitHistoryGet**](Apis/ApiKeyRepositoryApi.md#apikeyrepositoryownerusernamerepositorynamecommithistoryget) | **GET** /api-key/repository/{ownerUsername}/{repositoryName}/commit/history | Get commit history by repository name and branch name by api key |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [models.ApiKeyHistories](./Models/models.ApiKeyHistories.md)
 - [models.ApiKeyInfo](./Models/models.ApiKeyInfo.md)
 - [models.ApiKeyPackage](./Models/models.ApiKeyPackage.md)
 - [models.Commit](./Models/models.Commit.md)
 - [models.CommitMeta](./Models/models.CommitMeta.md)
 - [models.CommitStats](./Models/models.CommitStats.md)
 - [models.CommitUser](./Models/models.CommitUser.md)
 - [models.Follow](./Models/models.Follow.md)
 - [models.Member](./Models/models.Member.md)
 - [models.ModelVersioning](./Models/models.ModelVersioning.md)
 - [models.ModelVersioningGroupLite](./Models/models.ModelVersioningGroupLite.md)
 - [models.Offer](./Models/models.Offer.md)
 - [models.PlatformTask](./Models/models.PlatformTask.md)
 - [models.QueueTask](./Models/models.QueueTask.md)
 - [models.RepoCommit](./Models/models.RepoCommit.md)
 - [models.User](./Models/models.User.md)
 - [models.Wallet](./Models/models.Wallet.md)
 - [models.WalletWithAddress](./Models/models.WalletWithAddress.md)
 - [request.CalculateCostToVerifyAiModelRequest](./Models/request.CalculateCostToVerifyAiModelRequest.md)
 - [request.CheckValidToVerifyAiModelRequest](./Models/request.CheckValidToVerifyAiModelRequest.md)
 - [request.DistributeTaskRequest](./Models/request.DistributeTaskRequest.md)
 - [request.GetApiKeyStatisticsByModelIdRequest](./Models/request.GetApiKeyStatisticsByModelIdRequest.md)
 - [request.VerifyAiModelRequest](./Models/request.VerifyAiModelRequest.md)
 - [response.ApiKeyHistoryListData](./Models/response.ApiKeyHistoryListData.md)
 - [response.ApiKeyHistoryListResponse](./Models/response.ApiKeyHistoryListResponse.md)
 - [response.ApiKeyInfoResponse](./Models/response.ApiKeyInfoResponse.md)
 - [response.CheckModelIsServingData](./Models/response.CheckModelIsServingData.md)
 - [response.CheckModelIsServingResponse](./Models/response.CheckModelIsServingResponse.md)
 - [response.CheckValidToVerifyAiModelData](./Models/response.CheckValidToVerifyAiModelData.md)
 - [response.CheckValidToVerifyAiModelResponse](./Models/response.CheckValidToVerifyAiModelResponse.md)
 - [response.DistributeTaskResponse](./Models/response.DistributeTaskResponse.md)
 - [response.ErrorResponse](./Models/response.ErrorResponse.md)
 - [response.EstimateCostData](./Models/response.EstimateCostData.md)
 - [response.EstimateCostResponse](./Models/response.EstimateCostResponse.md)
 - [response.FailResponse](./Models/response.FailResponse.md)
 - [response.GetApiKeyPermissionData](./Models/response.GetApiKeyPermissionData.md)
 - [response.GetApiKeyPermissionResponse](./Models/response.GetApiKeyPermissionResponse.md)
 - [response.GetCommitHistoryData](./Models/response.GetCommitHistoryData.md)
 - [response.GetCommitHistoryResponse](./Models/response.GetCommitHistoryResponse.md)
 - [response.GetListModelVersioningLiteResponse](./Models/response.GetListModelVersioningLiteResponse.md)
 - [response.GetListModelVersioningsLiteData](./Models/response.GetListModelVersioningsLiteData.md)
 - [response.GetListPlatformSupportResponse](./Models/response.GetListPlatformSupportResponse.md)
 - [response.GetTaskResultData](./Models/response.GetTaskResultData.md)
 - [response.GetTaskResultResponse](./Models/response.GetTaskResultResponse.md)
 - [response.GetTaskStatisticsData](./Models/response.GetTaskStatisticsData.md)
 - [response.GetTaskStatisticsResponse](./Models/response.GetTaskStatisticsResponse.md)
 - [response.ModelVersioningGroupLiteListData](./Models/response.ModelVersioningGroupLiteListData.md)
 - [response.ModelVersioningGroupLiteListResponse](./Models/response.ModelVersioningGroupLiteListResponse.md)
 - [response.ModelVersioningGroupLiteResponse](./Models/response.ModelVersioningGroupLiteResponse.md)
 - [response.ModelVersioningResponse](./Models/response.ModelVersioningResponse.md)
 - [response.QueueTaskResponse](./Models/response.QueueTaskResponse.md)
 - [response.Result](./Models/response.Result.md)
 - [response.SuccessResponse](./Models/response.SuccessResponse.md)
 - [response.VerifyAiModelResponse](./Models/response.VerifyAiModelResponse.md)
 - [response.WalletWithAddressResponse](./Models/response.WalletWithAddressResponse.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="BearerAuth"></a>
### BearerAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

