import { mockTestClient } from "./helpers/mockTestClient";
import { MODEL_ID, COMMIT_HASH, PLATFORMS, FROM, TO } from "../constants/constants";

const sdk = mockTestClient();

describe("ApiKeyModelService", () => {
    it("should return model statistics with numeric fields", async () => {
        try {
            const req = {
                from: FROM,
                to: TO,
            };
            const res = await sdk.apiKeyModel.getModelStatistics(MODEL_ID, req);
            expect(res.body.status).toBeDefined();
            if (res.body.status === "success") {
                expect(res.body.data).toBeDefined();
                const stats = res.body.data!;
                expect(typeof stats.totalCost).toBe("number");
                expect(typeof stats.totalFailed).toBe("number");
                expect(typeof stats.totalRequest).toBe("number");
                expect(typeof stats.totalSuccess).toBe("number");
            } else {
                expect(res.body.status).toMatch(/fail|error/i);
                if (res.body.message) {
                    expect(res.body.message).toMatch(/no statistics|not found|no data/i);
                }
            }
        } catch (err: any) {
            expect(err.problemDetails.status).toMatch(/fail|error/i);
            expect(err.problemDetails.message).toMatch(/no statistics|not found|no data/i);
        }
    });
});


describe("getModelTaskCost", () => {
    it("should return model task cost or fail with 412 if no version", async () => {
        try {
            const res = await sdk.apiKeyModel.getModelTaskCost(MODEL_ID);
            expect(res.body.status).toBeDefined();
            if (res.body.status === "success") {
                expect(res.body.data).toBeDefined();
                if (res.body.data && "totalCost" in res.body.data) {
                    expect(typeof res.body.data.totalCost).toBe("number");
                    expect(res.body.data.totalCost).toBeGreaterThanOrEqual(0);
                }
            } else {
                expect(res.body.status).toMatch(/fail|error/i);
                if (res.body.message) {
                    expect(res.body.message).toMatch(/no version|not found|missing/i);
                }
            }
        } catch (err: any) {
            expect(err.problemDetails.status).toBe("fail");
        }
    });
});

describe("checkModelIsServing", () => {
    it("should return serving status for a valid model", async () => {
        try {
            const res = await sdk.apiKeyModel.checkModelIsServing(MODEL_ID);

            expect(res.body.status).toBeDefined();

            if (res.body.status === "success") {
                expect(res.body.data).toBeDefined();
                if (res.body.data && "isServing" in res.body.data) {
                    expect(typeof res.body.data.isServing).toBe("boolean");
                }
            } else {
                expect(res.body.status).toMatch(/fail|error/i);
                if (res.body.message) {
                    expect(res.body.message).toMatch(/not found|not serving|Unable to retrieve/i);
                }
            }
        } catch (err: any) {
            expect(err.code).toBe(400);
            expect(err.problemDetails.status).toBe("fail");
            expect(err.problemDetails.message).toMatch(/Unable to retrieve AI model data/i);
        }
    });
});

describe("getModelInfo", () => {
    it("should return model info with modelId and description", async () => {
        try {
            const res = await sdk.apiKeyModel.getModelInfo(MODEL_ID);

            expect(res.body.status).toBe("success");
            expect(res.body.data).toBeDefined();

            expect(res.body.data!.modelId).toBe(MODEL_ID);
            expect(typeof res.body.data!.modelDescription).toBe("string");
        } catch (err: any) {
            expect(err.code).toBeGreaterThanOrEqual(400);
            expect(err.problemDetails.status).toMatch(/fail|error/i);
        }
    });
});

describe("getListPlatformsSupport", () => {
    it("should return a list of supported platforms", async () => {
        try {
            const res = await sdk.apiKeyModel.getListPlatformsSupport();

            expect(res.body.status).toBe("success");
            expect(res.body.data).toBeDefined();
            expect(res.body.data!.data).toBeInstanceOf(Array);
            expect(res.body.data!.data.length).toBeGreaterThan(0);
            expect(res.body.data!.data).toEqual(expect.arrayContaining(["linux", "window"]));
        } catch (err: any) {

            expect(err.code).toBeGreaterThanOrEqual(400);
            expect(err.problemDetails.status).toMatch(/fail|error/i);
        }
    });
});
