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
    private apiKey?;
    private serverEndpoint;
    private apiVersion;
    private baseUri;
    private headers;
    constructor(params: {
        apiKey?: string;
        serverEndpoint: string;
        apiVersion: string;
    });
    call(path: string, options: QueryOptions): Promise<{
        headers: ApiResponseHeaders;
        body: string;
    }>;
}
