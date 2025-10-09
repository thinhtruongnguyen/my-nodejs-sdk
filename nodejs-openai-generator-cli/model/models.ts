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
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ModelsApiKeyHistories } from './modelsApiKeyHistories';
import { ModelsApiKeyInfo } from './modelsApiKeyInfo';
import { ModelsApiKeyPackage } from './modelsApiKeyPackage';
import { ModelsCommit } from './modelsCommit';
import { ModelsCommitMeta } from './modelsCommitMeta';
import { ModelsCommitStats } from './modelsCommitStats';
import { ModelsCommitUser } from './modelsCommitUser';
import { ModelsFollow } from './modelsFollow';
import { ModelsMember } from './modelsMember';
import { ModelsModelVersioning } from './modelsModelVersioning';
import { ModelsModelVersioningGroupLite } from './modelsModelVersioningGroupLite';
import { ModelsOffer } from './modelsOffer';
import { ModelsPlatformTask } from './modelsPlatformTask';
import { ModelsQueueTask } from './modelsQueueTask';
import { ModelsRepoCommit } from './modelsRepoCommit';
import { ModelsUser } from './modelsUser';
import { ModelsWallet } from './modelsWallet';
import { ModelsWalletWithAddress } from './modelsWalletWithAddress';
import { RequestCalculateCostToVerifyAiModelRequest } from './requestCalculateCostToVerifyAiModelRequest';
import { RequestCheckValidToVerifyAiModelRequest } from './requestCheckValidToVerifyAiModelRequest';
import { RequestDistributeTaskRequest } from './requestDistributeTaskRequest';
import { RequestGetApiKeyStatisticsByModelIdRequest } from './requestGetApiKeyStatisticsByModelIdRequest';
import { RequestVerifyAiModelRequest } from './requestVerifyAiModelRequest';
import { ResponseApiKeyHistoryListData } from './responseApiKeyHistoryListData';
import { ResponseApiKeyHistoryListResponse } from './responseApiKeyHistoryListResponse';
import { ResponseApiKeyInfoResponse } from './responseApiKeyInfoResponse';
import { ResponseCheckModelIsServingData } from './responseCheckModelIsServingData';
import { ResponseCheckModelIsServingResponse } from './responseCheckModelIsServingResponse';
import { ResponseCheckValidToVerifyAiModelData } from './responseCheckValidToVerifyAiModelData';
import { ResponseCheckValidToVerifyAiModelResponse } from './responseCheckValidToVerifyAiModelResponse';
import { ResponseDistributeTaskResponse } from './responseDistributeTaskResponse';
import { ResponseErrorResponse } from './responseErrorResponse';
import { ResponseEstimateCostData } from './responseEstimateCostData';
import { ResponseEstimateCostResponse } from './responseEstimateCostResponse';
import { ResponseFailResponse } from './responseFailResponse';
import { ResponseGetApiKeyPermissionData } from './responseGetApiKeyPermissionData';
import { ResponseGetApiKeyPermissionResponse } from './responseGetApiKeyPermissionResponse';
import { ResponseGetCommitHistoryData } from './responseGetCommitHistoryData';
import { ResponseGetCommitHistoryResponse } from './responseGetCommitHistoryResponse';
import { ResponseGetListModelVersioningLiteResponse } from './responseGetListModelVersioningLiteResponse';
import { ResponseGetListModelVersioningsLiteData } from './responseGetListModelVersioningsLiteData';
import { ResponseGetListPlatformSupportResponse } from './responseGetListPlatformSupportResponse';
import { ResponseGetTaskResultData } from './responseGetTaskResultData';
import { ResponseGetTaskResultResponse } from './responseGetTaskResultResponse';
import { ResponseGetTaskStatisticsData } from './responseGetTaskStatisticsData';
import { ResponseGetTaskStatisticsResponse } from './responseGetTaskStatisticsResponse';
import { ResponseModelVersioningGroupLiteListData } from './responseModelVersioningGroupLiteListData';
import { ResponseModelVersioningGroupLiteListResponse } from './responseModelVersioningGroupLiteListResponse';
import { ResponseModelVersioningGroupLiteResponse } from './responseModelVersioningGroupLiteResponse';
import { ResponseModelVersioningResponse } from './responseModelVersioningResponse';
import { ResponseQueueTaskResponse } from './responseQueueTaskResponse';
import { ResponseResult } from './responseResult';
import { ResponseSuccessResponse } from './responseSuccessResponse';
import { ResponseVerifyAiModelResponse } from './responseVerifyAiModelResponse';
import { ResponseWalletWithAddressResponse } from './responseWalletWithAddressResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "ModelsApiKeyHistories": ModelsApiKeyHistories,
    "ModelsApiKeyInfo": ModelsApiKeyInfo,
    "ModelsApiKeyPackage": ModelsApiKeyPackage,
    "ModelsCommit": ModelsCommit,
    "ModelsCommitMeta": ModelsCommitMeta,
    "ModelsCommitStats": ModelsCommitStats,
    "ModelsCommitUser": ModelsCommitUser,
    "ModelsFollow": ModelsFollow,
    "ModelsMember": ModelsMember,
    "ModelsModelVersioning": ModelsModelVersioning,
    "ModelsModelVersioningGroupLite": ModelsModelVersioningGroupLite,
    "ModelsOffer": ModelsOffer,
    "ModelsPlatformTask": ModelsPlatformTask,
    "ModelsQueueTask": ModelsQueueTask,
    "ModelsRepoCommit": ModelsRepoCommit,
    "ModelsUser": ModelsUser,
    "ModelsWallet": ModelsWallet,
    "ModelsWalletWithAddress": ModelsWalletWithAddress,
    "RequestCalculateCostToVerifyAiModelRequest": RequestCalculateCostToVerifyAiModelRequest,
    "RequestCheckValidToVerifyAiModelRequest": RequestCheckValidToVerifyAiModelRequest,
    "RequestDistributeTaskRequest": RequestDistributeTaskRequest,
    "RequestGetApiKeyStatisticsByModelIdRequest": RequestGetApiKeyStatisticsByModelIdRequest,
    "RequestVerifyAiModelRequest": RequestVerifyAiModelRequest,
    "ResponseApiKeyHistoryListData": ResponseApiKeyHistoryListData,
    "ResponseApiKeyHistoryListResponse": ResponseApiKeyHistoryListResponse,
    "ResponseApiKeyInfoResponse": ResponseApiKeyInfoResponse,
    "ResponseCheckModelIsServingData": ResponseCheckModelIsServingData,
    "ResponseCheckModelIsServingResponse": ResponseCheckModelIsServingResponse,
    "ResponseCheckValidToVerifyAiModelData": ResponseCheckValidToVerifyAiModelData,
    "ResponseCheckValidToVerifyAiModelResponse": ResponseCheckValidToVerifyAiModelResponse,
    "ResponseDistributeTaskResponse": ResponseDistributeTaskResponse,
    "ResponseErrorResponse": ResponseErrorResponse,
    "ResponseEstimateCostData": ResponseEstimateCostData,
    "ResponseEstimateCostResponse": ResponseEstimateCostResponse,
    "ResponseFailResponse": ResponseFailResponse,
    "ResponseGetApiKeyPermissionData": ResponseGetApiKeyPermissionData,
    "ResponseGetApiKeyPermissionResponse": ResponseGetApiKeyPermissionResponse,
    "ResponseGetCommitHistoryData": ResponseGetCommitHistoryData,
    "ResponseGetCommitHistoryResponse": ResponseGetCommitHistoryResponse,
    "ResponseGetListModelVersioningLiteResponse": ResponseGetListModelVersioningLiteResponse,
    "ResponseGetListModelVersioningsLiteData": ResponseGetListModelVersioningsLiteData,
    "ResponseGetListPlatformSupportResponse": ResponseGetListPlatformSupportResponse,
    "ResponseGetTaskResultData": ResponseGetTaskResultData,
    "ResponseGetTaskResultResponse": ResponseGetTaskResultResponse,
    "ResponseGetTaskStatisticsData": ResponseGetTaskStatisticsData,
    "ResponseGetTaskStatisticsResponse": ResponseGetTaskStatisticsResponse,
    "ResponseModelVersioningGroupLiteListData": ResponseModelVersioningGroupLiteListData,
    "ResponseModelVersioningGroupLiteListResponse": ResponseModelVersioningGroupLiteListResponse,
    "ResponseModelVersioningGroupLiteResponse": ResponseModelVersioningGroupLiteResponse,
    "ResponseModelVersioningResponse": ResponseModelVersioningResponse,
    "ResponseQueueTaskResponse": ResponseQueueTaskResponse,
    "ResponseResult": ResponseResult,
    "ResponseSuccessResponse": ResponseSuccessResponse,
    "ResponseVerifyAiModelResponse": ResponseVerifyAiModelResponse,
    "ResponseWalletWithAddressResponse": ResponseWalletWithAddressResponse,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
