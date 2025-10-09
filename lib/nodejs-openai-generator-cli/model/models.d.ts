import localVarRequest from 'request';
export * from './modelsApiKeyHistories';
export * from './modelsApiKeyInfo';
export * from './modelsApiKeyPackage';
export * from './modelsCommit';
export * from './modelsCommitMeta';
export * from './modelsCommitStats';
export * from './modelsCommitUser';
export * from './modelsFollow';
export * from './modelsMember';
export * from './modelsModelVersioning';
export * from './modelsModelVersioningGroupLite';
export * from './modelsOffer';
export * from './modelsPlatformTask';
export * from './modelsQueueTask';
export * from './modelsRepoCommit';
export * from './modelsUser';
export * from './modelsWallet';
export * from './modelsWalletWithAddress';
export * from './requestCalculateCostToVerifyAiModelRequest';
export * from './requestCheckValidToVerifyAiModelRequest';
export * from './requestDistributeTaskRequest';
export * from './requestGetApiKeyStatisticsByModelIdRequest';
export * from './requestVerifyAiModelRequest';
export * from './responseApiKeyHistoryListData';
export * from './responseApiKeyHistoryListResponse';
export * from './responseApiKeyInfoResponse';
export * from './responseCheckModelIsServingData';
export * from './responseCheckModelIsServingResponse';
export * from './responseCheckValidToVerifyAiModelData';
export * from './responseCheckValidToVerifyAiModelResponse';
export * from './responseDistributeTaskResponse';
export * from './responseErrorResponse';
export * from './responseEstimateCostData';
export * from './responseEstimateCostResponse';
export * from './responseFailResponse';
export * from './responseGetApiKeyPermissionData';
export * from './responseGetApiKeyPermissionResponse';
export * from './responseGetCommitHistoryData';
export * from './responseGetCommitHistoryResponse';
export * from './responseGetListModelVersioningLiteResponse';
export * from './responseGetListModelVersioningsLiteData';
export * from './responseGetListPlatformSupportResponse';
export * from './responseGetTaskResultData';
export * from './responseGetTaskResultResponse';
export * from './responseGetTaskStatisticsData';
export * from './responseGetTaskStatisticsResponse';
export * from './responseModelVersioningGroupLiteListData';
export * from './responseModelVersioningGroupLiteListResponse';
export * from './responseModelVersioningGroupLiteResponse';
export * from './responseModelVersioningResponse';
export * from './responseQueueTaskResponse';
export * from './responseResult';
export * from './responseSuccessResponse';
export * from './responseVerifyAiModelResponse';
export * from './responseWalletWithAddressResponse';
import * as fs from 'fs';
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
