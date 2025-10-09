export * from './apiKeyApi';
import { ApiKeyApi } from './apiKeyApi';
export * from './apiKeyModelApi';
import { ApiKeyModelApi } from './apiKeyModelApi';
export * from './apiKeyModelVerifyApi';
import { ApiKeyModelVerifyApi } from './apiKeyModelVerifyApi';
export * from './apiKeyModelVersioningApi';
import { ApiKeyModelVersioningApi } from './apiKeyModelVersioningApi';
export * from './apiKeyRepositoryApi';
import { ApiKeyRepositoryApi } from './apiKeyRepositoryApi';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number | undefined);
}
export { RequestFile } from '../model/models';
export declare const APIS: (typeof ApiKeyApi | typeof ApiKeyModelApi | typeof ApiKeyModelVerifyApi | typeof ApiKeyModelVersioningApi | typeof ApiKeyRepositoryApi)[];
