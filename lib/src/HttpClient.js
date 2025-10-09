"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//src/HttpClient.ts
const axios_1 = __importDefault(require("axios"));
const SdkError_1 = __importDefault(require("./SdkError"));
class HttpClient {
    constructor(params) {
        this.apiKey = params.apiKey;
        this.serverEndpoint = params.serverEndpoint.replace(/\/+$/, "");
        this.apiVersion = params.apiVersion.replace(/^\/+/, "");
        this.baseUri = `${this.serverEndpoint}/${this.apiVersion}`;
        this.headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...(this.apiKey ? { "x-api-key": this.apiKey } : {}),
        };
    }
    async call(path, options) {
        if (!options.method)
            throw new Error("Method is required");
        try {
            const paramsStr = options.searchParams?.toString();
            const queryString = paramsStr ? `?${paramsStr}` : "";
            const fullUrl = `${this.baseUri}/${path}${queryString}`;
            const axiosRes = await axios_1.default.request({
                url: fullUrl,
                headers: { ...this.headers, ...(options.headers || {}) },
                method: options.method,
                data: options.body,
            });
            return {
                headers: axiosRes.headers,
                body: JSON.stringify(axiosRes.data),
            };
        }
        catch (error) {
            throw new SdkError_1.default(error?.response?.status || 0, error?.response?.data);
        }
    }
}
exports.default = HttpClient;
