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

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ApiKeyApi, ApiKeyModelApi, ApiKeyModelVerifyApi, ApiKeyModelVersioningApi, ApiKeyRepositoryApi];
