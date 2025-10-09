import ProblemDetails from "./custom-models/ProblemDetails";
export default class SdkError extends Error {
    readonly statusCode: number;
    readonly status?: string;
    readonly problemDetails?: ProblemDetails;
    constructor(statusCode: number, problemDetails?: ProblemDetails);
    getProblemDetails(): ProblemDetails | undefined;
}
