"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SdkError extends Error {
    constructor(statusCode, problemDetails) {
        super(problemDetails?.message || problemDetails?.title || "SdkError");
        this.name = "SdkError";
        this.statusCode = statusCode;
        this.problemDetails = problemDetails;
        this.status = problemDetails?.status;
        this.message = problemDetails?.message || "SdkError";
    }
    getProblemDetails() {
        return this.problemDetails;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return this.problemDetails;
    }
}
exports.default = SdkError;
