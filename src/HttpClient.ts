//src/HttpClient.ts
import axios from "axios";
import SdkError from "./SdkError";
import ProblemDetails from "./custom-models/ProblemDetails";

export type QueryOptions = {
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: any;
    headers?: Record<string, string>;
    searchParams?: URLSearchParams;
};

export type ApiResponseHeaders = {
    server: string;
    "content-type": string;
    "transfer-encoding": string;
    connection: string;
    "cache-control": string;
    date: string;
    "x-ratelimit-remaining": string;
    "x-ratelimit-retry-after": string;
    "x-ratelimit-limit": string;
    "x-server": string;
    "access-control-allow-origin": string;
    "timing-allow-origin": string;
};

export default class HttpClient {
    private apiKey?: string;
    private serverEndpoint: string;
    private apiVersion: string;
    private baseUri: string;
    private headers: Record<string, string>;

    constructor(params: {
        apiKey?: string;
        serverEndpoint: string;
        apiVersion: string;
    }) {
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

    public async call(path: string, options: QueryOptions) {
        if (!options.method) throw new Error("Method is required");
        try {
            const paramsStr = options.searchParams?.toString();
            const queryString = paramsStr ? `?${paramsStr}` : "";

            const fullUrl = `${this.baseUri}/${path}${queryString}`;
            const axiosRes = await axios.request({
                url: fullUrl,
                headers: { ...this.headers, ...(options.headers || {}) },
                method: options.method,
                data: options.body,
            });

            return {
                headers: axiosRes.headers as ApiResponseHeaders,
                body: JSON.stringify(axiosRes.data),
            };
        } catch (error: any) {
            throw new SdkError(
                error?.response?.status || 0,
                error?.response?.data as ProblemDetails
            );
        }

    }
}
