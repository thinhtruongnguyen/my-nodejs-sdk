import { mockTestClient } from "./helpers/mockTestClient";
import { MODEL_ID, COMMIT_HASH, PLATFORMS, HUB_TASK_ID, TASK_ID } from "../constants/constants";

const sdk = mockTestClient();


describe("ApiKeyModelVerifyService", () => {
    describe("calculateCostToVerifyModel (Integration)", () => {
        it("should handle success or fail response", async () => {
            try {
                const request = {
                    commitHash: COMMIT_HASH,
                    platforms: PLATFORMS,
                };
                const res = await sdk.apiKeyModelVerify.calculateCostToVerifyModel(
                    MODEL_ID,
                    request
                );
                expect(res.body.status).toBeDefined();
                if (res.body.status === "success") {
                    expect(res.body.data).toBeDefined();
                } else {
                    expect(res.body.status).toBe("fail");
                    expect(res.body.message).toMatch(
                        /not found|failed|error|invalid|model setting/i
                    );
                }
            } catch (err: any) {
                expect(err.code).toBeGreaterThanOrEqual(400);
                expect(err.problemDetails.status).toBeDefined();
                expect(err.problemDetails.message).toMatch(
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
                const res = await sdk.apiKeyModelVerify.verifyModel(MODEL_ID, request);
                expect(res.body.status).toBeDefined();
                if (res.body.status === "success") {
                    expect(res.body.data).toBeDefined();
                    expect(typeof res.body.data).toBe("string");
                    expect(res.body.data).toMatch(
                        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
                    );
                } else {
                    expect(res.body.status).toBe("fail");
                    expect(res.body.message).toMatch(/not found|failed|error|invalid/i);
                }
            } catch (err: any) {
                console.error("verifyModel threw error:", err);
                expect(err.code).toBeGreaterThanOrEqual(400);
                expect(err.problemDetails.status).toBeDefined();
                expect(err.problemDetails.message).toMatch(/not found|failed|error/i);
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
                const res = await sdk.apiKeyModelVerify.preCheckToVerifyModel(MODEL_ID, request);

                expect(res.body.status).toBeDefined();

                if (res.body.status === "success") {
                    expect(res.body.data).toBeDefined();
                } else {
                    expect(res.body.status).toBe("fail");
                    expect(res.body.message).toMatch(/not found|failed|set up model setting/i);
                }
            } catch (err: any) {
                expect(err.code).toBeDefined();
                expect(err.problemDetails.status).toMatch(/fail|error/i);
                expect(err.problemDetails.message).toMatch(/not found|failed|set up model setting/i);
            }
        });
    });

    describe("getVerifyPlatformTaskById", () => {
        it("handle error response", async () => {
            try {
                const res = await sdk.apiKeyModelVerify.getVerifyPlatformTaskById(TASK_ID);
                console.log("Response:", res.body);
                if (res.body.status === "success") {
                    expect(res.body.data).toBeDefined();
                } else {
                    expect(res.body.status).toBe("fail");
                    expect(res.body.message).toMatch(/not found|failed/i);
                }
            } catch (err: any) {
                expect(err.code).toBe(500);
                expect(err.problemDetails.status).toBe("error");
                expect(err.problemDetails.message).toMatch(/not found|failed/i);
            }

        });
    });


    describe("getModelVersioningByTaskId (Integration)", () => {
        it("should handle success or not found/error response from real API", async () => {
            try {
                const res = await sdk.apiKeyModelVerify.getModelVersioningByTaskId(HUB_TASK_ID);
                expect(res.body.status).toBeDefined();
                if (res.body.status === "success" && res.body.data) {
                    expect(res.body.data.modelId).toBeDefined();
                } else {
                    expect(res.body.status).toMatch(/fail|error/i);
                    expect(res.body.message).toMatch(/not found|failed/i);
                }
            } catch (err: any) {
                expect(err.code).toBeDefined();
                expect(err.problemDetails.status).toMatch(/fail|error/i);
                expect(err.problemDetails.message).toMatch(/not found|failed/i);
            }
        });
    });



});
