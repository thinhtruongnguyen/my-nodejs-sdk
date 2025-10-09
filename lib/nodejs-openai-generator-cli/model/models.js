"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./modelsApiKeyHistories"), exports);
__exportStar(require("./modelsApiKeyInfo"), exports);
__exportStar(require("./modelsApiKeyPackage"), exports);
__exportStar(require("./modelsCommit"), exports);
__exportStar(require("./modelsCommitMeta"), exports);
__exportStar(require("./modelsCommitStats"), exports);
__exportStar(require("./modelsCommitUser"), exports);
__exportStar(require("./modelsFollow"), exports);
__exportStar(require("./modelsMember"), exports);
__exportStar(require("./modelsModelVersioning"), exports);
__exportStar(require("./modelsModelVersioningGroupLite"), exports);
__exportStar(require("./modelsOffer"), exports);
__exportStar(require("./modelsPlatformTask"), exports);
__exportStar(require("./modelsQueueTask"), exports);
__exportStar(require("./modelsRepoCommit"), exports);
__exportStar(require("./modelsUser"), exports);
__exportStar(require("./modelsWallet"), exports);
__exportStar(require("./modelsWalletWithAddress"), exports);
__exportStar(require("./requestCalculateCostToVerifyAiModelRequest"), exports);
__exportStar(require("./requestCheckValidToVerifyAiModelRequest"), exports);
__exportStar(require("./requestDistributeTaskRequest"), exports);
__exportStar(require("./requestGetApiKeyStatisticsByModelIdRequest"), exports);
__exportStar(require("./requestVerifyAiModelRequest"), exports);
__exportStar(require("./responseApiKeyHistoryListData"), exports);
__exportStar(require("./responseApiKeyHistoryListResponse"), exports);
__exportStar(require("./responseApiKeyInfoResponse"), exports);
__exportStar(require("./responseCheckModelIsServingData"), exports);
__exportStar(require("./responseCheckModelIsServingResponse"), exports);
__exportStar(require("./responseCheckValidToVerifyAiModelData"), exports);
__exportStar(require("./responseCheckValidToVerifyAiModelResponse"), exports);
__exportStar(require("./responseDistributeTaskResponse"), exports);
__exportStar(require("./responseErrorResponse"), exports);
__exportStar(require("./responseEstimateCostData"), exports);
__exportStar(require("./responseEstimateCostResponse"), exports);
__exportStar(require("./responseFailResponse"), exports);
__exportStar(require("./responseGetApiKeyPermissionData"), exports);
__exportStar(require("./responseGetApiKeyPermissionResponse"), exports);
__exportStar(require("./responseGetCommitHistoryData"), exports);
__exportStar(require("./responseGetCommitHistoryResponse"), exports);
__exportStar(require("./responseGetListModelVersioningLiteResponse"), exports);
__exportStar(require("./responseGetListModelVersioningsLiteData"), exports);
__exportStar(require("./responseGetListPlatformSupportResponse"), exports);
__exportStar(require("./responseGetTaskResultData"), exports);
__exportStar(require("./responseGetTaskResultResponse"), exports);
__exportStar(require("./responseGetTaskStatisticsData"), exports);
__exportStar(require("./responseGetTaskStatisticsResponse"), exports);
__exportStar(require("./responseModelVersioningGroupLiteListData"), exports);
__exportStar(require("./responseModelVersioningGroupLiteListResponse"), exports);
__exportStar(require("./responseModelVersioningGroupLiteResponse"), exports);
__exportStar(require("./responseModelVersioningResponse"), exports);
__exportStar(require("./responseQueueTaskResponse"), exports);
__exportStar(require("./responseResult"), exports);
__exportStar(require("./responseSuccessResponse"), exports);
__exportStar(require("./responseVerifyAiModelResponse"), exports);
__exportStar(require("./responseWalletWithAddressResponse"), exports);
const modelsApiKeyHistories_1 = require("./modelsApiKeyHistories");
const modelsApiKeyInfo_1 = require("./modelsApiKeyInfo");
const modelsApiKeyPackage_1 = require("./modelsApiKeyPackage");
const modelsCommit_1 = require("./modelsCommit");
const modelsCommitMeta_1 = require("./modelsCommitMeta");
const modelsCommitStats_1 = require("./modelsCommitStats");
const modelsCommitUser_1 = require("./modelsCommitUser");
const modelsFollow_1 = require("./modelsFollow");
const modelsMember_1 = require("./modelsMember");
const modelsModelVersioning_1 = require("./modelsModelVersioning");
const modelsModelVersioningGroupLite_1 = require("./modelsModelVersioningGroupLite");
const modelsOffer_1 = require("./modelsOffer");
const modelsPlatformTask_1 = require("./modelsPlatformTask");
const modelsQueueTask_1 = require("./modelsQueueTask");
const modelsRepoCommit_1 = require("./modelsRepoCommit");
const modelsUser_1 = require("./modelsUser");
const modelsWallet_1 = require("./modelsWallet");
const modelsWalletWithAddress_1 = require("./modelsWalletWithAddress");
const requestCalculateCostToVerifyAiModelRequest_1 = require("./requestCalculateCostToVerifyAiModelRequest");
const requestCheckValidToVerifyAiModelRequest_1 = require("./requestCheckValidToVerifyAiModelRequest");
const requestDistributeTaskRequest_1 = require("./requestDistributeTaskRequest");
const requestGetApiKeyStatisticsByModelIdRequest_1 = require("./requestGetApiKeyStatisticsByModelIdRequest");
const requestVerifyAiModelRequest_1 = require("./requestVerifyAiModelRequest");
const responseApiKeyHistoryListData_1 = require("./responseApiKeyHistoryListData");
const responseApiKeyHistoryListResponse_1 = require("./responseApiKeyHistoryListResponse");
const responseApiKeyInfoResponse_1 = require("./responseApiKeyInfoResponse");
const responseCheckModelIsServingData_1 = require("./responseCheckModelIsServingData");
const responseCheckModelIsServingResponse_1 = require("./responseCheckModelIsServingResponse");
const responseCheckValidToVerifyAiModelData_1 = require("./responseCheckValidToVerifyAiModelData");
const responseCheckValidToVerifyAiModelResponse_1 = require("./responseCheckValidToVerifyAiModelResponse");
const responseDistributeTaskResponse_1 = require("./responseDistributeTaskResponse");
const responseErrorResponse_1 = require("./responseErrorResponse");
const responseEstimateCostData_1 = require("./responseEstimateCostData");
const responseEstimateCostResponse_1 = require("./responseEstimateCostResponse");
const responseFailResponse_1 = require("./responseFailResponse");
const responseGetApiKeyPermissionData_1 = require("./responseGetApiKeyPermissionData");
const responseGetApiKeyPermissionResponse_1 = require("./responseGetApiKeyPermissionResponse");
const responseGetCommitHistoryData_1 = require("./responseGetCommitHistoryData");
const responseGetCommitHistoryResponse_1 = require("./responseGetCommitHistoryResponse");
const responseGetListModelVersioningLiteResponse_1 = require("./responseGetListModelVersioningLiteResponse");
const responseGetListModelVersioningsLiteData_1 = require("./responseGetListModelVersioningsLiteData");
const responseGetListPlatformSupportResponse_1 = require("./responseGetListPlatformSupportResponse");
const responseGetTaskResultData_1 = require("./responseGetTaskResultData");
const responseGetTaskResultResponse_1 = require("./responseGetTaskResultResponse");
const responseGetTaskStatisticsData_1 = require("./responseGetTaskStatisticsData");
const responseGetTaskStatisticsResponse_1 = require("./responseGetTaskStatisticsResponse");
const responseModelVersioningGroupLiteListData_1 = require("./responseModelVersioningGroupLiteListData");
const responseModelVersioningGroupLiteListResponse_1 = require("./responseModelVersioningGroupLiteListResponse");
const responseModelVersioningGroupLiteResponse_1 = require("./responseModelVersioningGroupLiteResponse");
const responseModelVersioningResponse_1 = require("./responseModelVersioningResponse");
const responseQueueTaskResponse_1 = require("./responseQueueTaskResponse");
const responseResult_1 = require("./responseResult");
const responseSuccessResponse_1 = require("./responseSuccessResponse");
const responseVerifyAiModelResponse_1 = require("./responseVerifyAiModelResponse");
const responseWalletWithAddressResponse_1 = require("./responseWalletWithAddressResponse");
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
let enumsMap = {};
let typeMap = {
    "ModelsApiKeyHistories": modelsApiKeyHistories_1.ModelsApiKeyHistories,
    "ModelsApiKeyInfo": modelsApiKeyInfo_1.ModelsApiKeyInfo,
    "ModelsApiKeyPackage": modelsApiKeyPackage_1.ModelsApiKeyPackage,
    "ModelsCommit": modelsCommit_1.ModelsCommit,
    "ModelsCommitMeta": modelsCommitMeta_1.ModelsCommitMeta,
    "ModelsCommitStats": modelsCommitStats_1.ModelsCommitStats,
    "ModelsCommitUser": modelsCommitUser_1.ModelsCommitUser,
    "ModelsFollow": modelsFollow_1.ModelsFollow,
    "ModelsMember": modelsMember_1.ModelsMember,
    "ModelsModelVersioning": modelsModelVersioning_1.ModelsModelVersioning,
    "ModelsModelVersioningGroupLite": modelsModelVersioningGroupLite_1.ModelsModelVersioningGroupLite,
    "ModelsOffer": modelsOffer_1.ModelsOffer,
    "ModelsPlatformTask": modelsPlatformTask_1.ModelsPlatformTask,
    "ModelsQueueTask": modelsQueueTask_1.ModelsQueueTask,
    "ModelsRepoCommit": modelsRepoCommit_1.ModelsRepoCommit,
    "ModelsUser": modelsUser_1.ModelsUser,
    "ModelsWallet": modelsWallet_1.ModelsWallet,
    "ModelsWalletWithAddress": modelsWalletWithAddress_1.ModelsWalletWithAddress,
    "RequestCalculateCostToVerifyAiModelRequest": requestCalculateCostToVerifyAiModelRequest_1.RequestCalculateCostToVerifyAiModelRequest,
    "RequestCheckValidToVerifyAiModelRequest": requestCheckValidToVerifyAiModelRequest_1.RequestCheckValidToVerifyAiModelRequest,
    "RequestDistributeTaskRequest": requestDistributeTaskRequest_1.RequestDistributeTaskRequest,
    "RequestGetApiKeyStatisticsByModelIdRequest": requestGetApiKeyStatisticsByModelIdRequest_1.RequestGetApiKeyStatisticsByModelIdRequest,
    "RequestVerifyAiModelRequest": requestVerifyAiModelRequest_1.RequestVerifyAiModelRequest,
    "ResponseApiKeyHistoryListData": responseApiKeyHistoryListData_1.ResponseApiKeyHistoryListData,
    "ResponseApiKeyHistoryListResponse": responseApiKeyHistoryListResponse_1.ResponseApiKeyHistoryListResponse,
    "ResponseApiKeyInfoResponse": responseApiKeyInfoResponse_1.ResponseApiKeyInfoResponse,
    "ResponseCheckModelIsServingData": responseCheckModelIsServingData_1.ResponseCheckModelIsServingData,
    "ResponseCheckModelIsServingResponse": responseCheckModelIsServingResponse_1.ResponseCheckModelIsServingResponse,
    "ResponseCheckValidToVerifyAiModelData": responseCheckValidToVerifyAiModelData_1.ResponseCheckValidToVerifyAiModelData,
    "ResponseCheckValidToVerifyAiModelResponse": responseCheckValidToVerifyAiModelResponse_1.ResponseCheckValidToVerifyAiModelResponse,
    "ResponseDistributeTaskResponse": responseDistributeTaskResponse_1.ResponseDistributeTaskResponse,
    "ResponseErrorResponse": responseErrorResponse_1.ResponseErrorResponse,
    "ResponseEstimateCostData": responseEstimateCostData_1.ResponseEstimateCostData,
    "ResponseEstimateCostResponse": responseEstimateCostResponse_1.ResponseEstimateCostResponse,
    "ResponseFailResponse": responseFailResponse_1.ResponseFailResponse,
    "ResponseGetApiKeyPermissionData": responseGetApiKeyPermissionData_1.ResponseGetApiKeyPermissionData,
    "ResponseGetApiKeyPermissionResponse": responseGetApiKeyPermissionResponse_1.ResponseGetApiKeyPermissionResponse,
    "ResponseGetCommitHistoryData": responseGetCommitHistoryData_1.ResponseGetCommitHistoryData,
    "ResponseGetCommitHistoryResponse": responseGetCommitHistoryResponse_1.ResponseGetCommitHistoryResponse,
    "ResponseGetListModelVersioningLiteResponse": responseGetListModelVersioningLiteResponse_1.ResponseGetListModelVersioningLiteResponse,
    "ResponseGetListModelVersioningsLiteData": responseGetListModelVersioningsLiteData_1.ResponseGetListModelVersioningsLiteData,
    "ResponseGetListPlatformSupportResponse": responseGetListPlatformSupportResponse_1.ResponseGetListPlatformSupportResponse,
    "ResponseGetTaskResultData": responseGetTaskResultData_1.ResponseGetTaskResultData,
    "ResponseGetTaskResultResponse": responseGetTaskResultResponse_1.ResponseGetTaskResultResponse,
    "ResponseGetTaskStatisticsData": responseGetTaskStatisticsData_1.ResponseGetTaskStatisticsData,
    "ResponseGetTaskStatisticsResponse": responseGetTaskStatisticsResponse_1.ResponseGetTaskStatisticsResponse,
    "ResponseModelVersioningGroupLiteListData": responseModelVersioningGroupLiteListData_1.ResponseModelVersioningGroupLiteListData,
    "ResponseModelVersioningGroupLiteListResponse": responseModelVersioningGroupLiteListResponse_1.ResponseModelVersioningGroupLiteListResponse,
    "ResponseModelVersioningGroupLiteResponse": responseModelVersioningGroupLiteResponse_1.ResponseModelVersioningGroupLiteResponse,
    "ResponseModelVersioningResponse": responseModelVersioningResponse_1.ResponseModelVersioningResponse,
    "ResponseQueueTaskResponse": responseQueueTaskResponse_1.ResponseQueueTaskResponse,
    "ResponseResult": responseResult_1.ResponseResult,
    "ResponseSuccessResponse": responseSuccessResponse_1.ResponseSuccessResponse,
    "ResponseVerifyAiModelResponse": responseVerifyAiModelResponse_1.ResponseVerifyAiModelResponse,
    "ResponseWalletWithAddressResponse": responseWalletWithAddressResponse_1.ResponseWalletWithAddressResponse,
};
// Check if a string starts with another string without using es6 features
function startsWith(str, match) {
    return str.substring(0, match.length) === match;
}
// Check if a string ends with another string without using es6 features
function endsWith(str, match) {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}
const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
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
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (endsWith(type, nullableSuffix)) {
            let subType = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        }
        else if (endsWith(type, optionalSuffix)) {
            let subType = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        }
        else if (startsWith(type, arrayPrefix)) {
            let subType = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (startsWith(type, mapPrefix)) {
            let subType = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(data[key], subType);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
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
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (endsWith(type, nullableSuffix)) {
            let subType = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        }
        else if (endsWith(type, optionalSuffix)) {
            let subType = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        }
        else if (startsWith(type, arrayPrefix)) {
            let subType = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (startsWith(type, mapPrefix)) {
            let subType = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(data[key], subType);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
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
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
