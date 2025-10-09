import ProblemDetails from "./custom-models/ProblemDetails";

export default class SdkError extends Error {
  public readonly statusCode: number;
  public readonly status?: string;

  public readonly problemDetails?: ProblemDetails;

  constructor(statusCode: number, problemDetails?: ProblemDetails) {
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
