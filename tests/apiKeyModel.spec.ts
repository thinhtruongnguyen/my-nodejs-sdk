import { mockTestClient } from "./helpers/mockTestClient";
import { MODEL_ID, COMMIT_HASH, PLATFORMS, FROM, TO } from "../src/constants/constants";

const sdk = mockTestClient();

describe("ApiKeyModelService", () => {
    it("should return model statistics with numeric fields", async () => {
        try {
            const req = {
                from: FROM,
                to: TO,
            };
            const res = await sdk.apiKeyModel.getModelStatistics(MODEL_ID, req);
            expect(res.status).toBeDefined();
            if (res.status === "success") {
                expect(res.data).toBeDefined();
                const stats = res.data!;
                expect(typeof stats.totalCost).toBe("number");
                expect(typeof stats.totalFailed).toBe("number");
                expect(typeof stats.totalRequest).toBe("number");
                expect(typeof stats.totalSuccess).toBe("number");
            }
        } catch (err: any) {
            expect(err.status).toMatch(/fail|error/i);
            expect(err.message).toMatch(/no statistics|not found|no data/i);
        }
    });
});


describe("getModelTaskCost", () => {
    it("should return model task cost or fail with 412 if no version", async () => {
        try {
            const res = await sdk.apiKeyModel.getModelTaskCost(MODEL_ID);
            expect(res.status).toBeDefined();
            if (res.status === "success") {
                expect(res.data).toBeDefined();
                if (res.data && "totalCost" in res.data) {
                    expect(typeof res.data.totalCost).toBe("number");
                    expect(res.data.totalCost).toBeGreaterThanOrEqual(0);
                }
            }
        } catch (err: any) {
            expect(err.status).toBe("fail");
        }
    });
});

describe("checkModelIsServing", () => {
    it("should return serving status for a valid model", async () => {
        try {
            const res = await sdk.apiKeyModel.checkModelIsServing(MODEL_ID);
            expect(res.status).toBeDefined();
            if (res.status === "success") {
                expect(res.data).toBeDefined();
                if (res.data && "isServing" in res.data) {
                    expect(typeof res.data.isServing).toBe("boolean");
                }
            } 
        } catch (err: any) {
            expect(err.status).toBe("fail");
            expect(err.message).toMatch(/Unable to retrieve AI model data/i);
        }
    });
});

describe("getModelInfo", () => {
    it("should return model info with modelId and description", async () => {
        try {
            const res = await sdk.apiKeyModel.getModelInfo(MODEL_ID);

            expect(res.status).toBe("success");
            expect(res.data).toBeDefined();

            expect(res.data!.modelId).toBe(MODEL_ID);
            expect(typeof res.data!.modelDescription).toBe("string");
        } catch (err: any) {
            expect(err.status).toMatch(/fail|error/i);
        }
    });
});

// describe("getListPlatformsSupport", () => {
//     it("should return a list of supported platforms", async () => {
//         try {
//             const res = await sdk.apiKeyModel.getListPlatformsSupport();

//             expect(res.status).toBe("success");
//             expect(res.data).toBeDefined();
//             expect(res.data!.data).toBeInstanceOf(Array);
//             expect(res.data!.data.length).toBeGreaterThan(0);
//             expect(res.data!.data).toEqual(expect.arrayContaining(["linux", "window"]));
//         } catch (err: any) {

//             expect(err.code).toBeGreaterThanOrEqual(400);
//             expect(err.problemDetails.status).toMatch(/fail|error/i);
//         }
//     });
//});
