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
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./apiKeyApi"), exports);
const apiKeyApi_1 = require("./apiKeyApi");
__exportStar(require("./apiKeyModelApi"), exports);
const apiKeyModelApi_1 = require("./apiKeyModelApi");
__exportStar(require("./apiKeyModelVerifyApi"), exports);
const apiKeyModelVerifyApi_1 = require("./apiKeyModelVerifyApi");
__exportStar(require("./apiKeyModelVersioningApi"), exports);
const apiKeyModelVersioningApi_1 = require("./apiKeyModelVersioningApi");
__exportStar(require("./apiKeyRepositoryApi"), exports);
const apiKeyRepositoryApi_1 = require("./apiKeyRepositoryApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [apiKeyApi_1.ApiKeyApi, apiKeyModelApi_1.ApiKeyModelApi, apiKeyModelVerifyApi_1.ApiKeyModelVerifyApi, apiKeyModelVersioningApi_1.ApiKeyModelVersioningApi, apiKeyRepositoryApi_1.ApiKeyRepositoryApi];
