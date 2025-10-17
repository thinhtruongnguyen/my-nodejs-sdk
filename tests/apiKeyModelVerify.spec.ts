import { mockTestClient } from "./helpers/mockTestClient";
import { MODEL_ID, COMMIT_HASH, PLATFORMS, HUB_TASK_ID, TASK_ID } from "../src/constants/constants";

const sdk = mockTestClient();


describe("ApiKeyModelVerifyService", () => {
    describe("calculateCostToVerifyModel (Integration)", () => {
        it("should handle success or fail response", async () => {
            try {
                const request = {
                    commitHash: COMMIT_HASH,
                    platforms: PLATFORMS,
                };
                const res = await sdk.apiKeyModelVerify.apiKeyModelIdVerifyCostPost(
                    MODEL_ID,
                    request
                );
                expect(res.status).toBeDefined();
                if (res.status === "success") {
                    expect(res.data).toBeDefined();
                }
            } catch (err: any) {
                expect(err.status).toBeDefined();
                expect(err.message).toMatch(
                    /not found|failed|error|model setting/i
                );
            }
        });
    });

    describe("verifyModel", () => {
        it("should handle success or fail response", async () => {
            try {
                const request = {
                    commitHash: COMMIT_HASH,
                    platforms: PLATFORMS,
                };
                const res = await sdk.apiKeyModelVerify.apiKeyModelIdVerifyPost(MODEL_ID, request);
                expect(res.status).toBeDefined();
                if (res.status === "success") {
                    expect(res.data).toBeDefined();
                    expect(typeof res.data).toBe("string");
                    expect(res.data).toMatch(
                        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
                    );
                } 
            } catch (err: any) {
                expect(err.status).toBeDefined();
                expect(err.message).toMatch(/not found|failed|error/i);
            }
        });
    });

    describe("preCheckToVerifyModel (Integration)", () => {
        it("should handle success or fail response", async () => {
            try {
                const request = {
                    commitHash: COMMIT_HASH,
                    platforms: PLATFORMS,
                };
                const res = await sdk.apiKeyModelVerify.apiKeyModelIdPreVerifyPost(MODEL_ID, request);
                expect(res.status).toBeDefined();
                if (res.status === "success") {
                    expect(res.data).toBeDefined();
                } 
            } catch (err: any) {
                expect(err.status).toMatch(/fail|error/i);
                expect(err.message).toMatch(/not found|failed|set up model setting/i);
            }
        });
    });

    describe("getVerifyPlatformTaskById", () => {
        it("handle error response", async () => {
            try {
                const res = await sdk.apiKeyModelVerify.apiKeyModelVerifyPlatformTaskIdGet(TASK_ID);
                if (res.status === "success") {
                    expect(res.data).toBeDefined();
                }
            } catch (err: any) {
                expect(err.status).toBe("error");
                expect(err.message).toMatch(/not found|failed/i);
            }

        });
    });


    describe("getModelVersioningByTaskId (Integration)", () => {
        it("should handle success or not found/error response from real API", async () => {
            try {
                const res = await sdk.apiKeyModelVerify.apiKeyModelVerifyHubTaskIdGet(HUB_TASK_ID);
                expect(res.status).toBeDefined();
                if (res.status === "success" && res.data) {
                    expect(res.data.modelId).toBeDefined();
                }
            } catch (err: any) {
                expect(err.status).toMatch(/fail|error/i);
                expect(err.message).toMatch(/not found|failed/i);
            }
        });
    });



});
