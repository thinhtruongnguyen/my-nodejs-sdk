import { mockTestClient } from "./helpers/mockTestClient";
import {
    MODEL_ID, OFFSET,
    LIMIT,
    VERIFY_STATUS,
    COMMIT_HASH
} from "../constants/constants";

const sdk = mockTestClient();

describe("ApiKeyModelVersioningService", () => {
    describe("deleteModelVersioningByModelId", () => {
        it("should change delete versioning or handle error correctly", async () => {
            try {
                const res = await sdk.apiKeyModelVersioning.deleteModelVersioningByModelId(
                    MODEL_ID,
                    COMMIT_HASH
                );
                expect(res.body.status).toBeDefined();
                if (res.body.status === "success") {
                    expect(res.body.message).toMatch(/success|updated|changed/i);
                } else {
                    expect(res.body.status).toMatch(/fail|error/i);
                    expect(res.body.message).toMatch(/not exist|not found|error/i);
                }
            } catch (err: any) {
                expect(err.code).toBeGreaterThanOrEqual(400);
                expect(err.problemDetails.status).toMatch(/fail|error/i);
                expect(err.problemDetails.message).toMatch(/not exist|not found|error/i);
            }
        });
    });


    describe("changeCurrentModelVersioningByModelId", () => {
        it("should change current versioning or handle error correctly", async () => {
            try {
                const res = await sdk.apiKeyModelVersioning.changeCurrentModelVersioningByModelId(
                    MODEL_ID,
                    COMMIT_HASH
                );
                expect(res.body.status).toBeDefined();
                if (res.body.status === "success") {
                    expect(res.body.message).toMatch(/success|updated|changed/i);
                } else {
                    expect(res.body.status).toMatch(/fail|error/i);
                    expect(res.body.message).toMatch(/not exist|not found|error/i);
                }
            } catch (err: any) {
                expect(err.code).toBeGreaterThanOrEqual(400);
                expect(err.problemDetails.status).toMatch(/fail|error/i);
                expect(err.problemDetails.message).toMatch(/not exist|not found|error/i);
            }
        });
    });

    describe("getListVerifiedModelVersioning", () => {
        it("should return a list (or empty) of verified model versioning", async () => {
            try {
                const res = await sdk.apiKeyModelVersioning.getListVerifiedModelVersioning(
                    MODEL_ID,
                    OFFSET,
                    LIMIT,
                    VERIFY_STATUS
                );
                expect(res.body.status).toBeDefined();
                expect(res.body.status).toBe("success");

                expect(res.body.data).toBeDefined();
                expect(res.body.data!.total).toBeGreaterThanOrEqual(0);

                if (res.body.data!.records) {
                    expect(Array.isArray(res.body.data!.records)).toBe(true);
                    if (res.body.data!.records.length > 0) {
                        for (const record of res.body.data!.records) {
                            expect(record).toHaveProperty("versionId");
                            expect(record).toHaveProperty("verifyStatus");
                            expect(record.verifyStatus).toBe(VERIFY_STATUS);
                        }
                    }
                } else {
                    expect(res.body.data!.records === null || res.body.data!.records === undefined).toBe(true);
                }
            } catch (err: any) {
                expect(err.code).toBeDefined();
                expect(err.problemDetails.status).toMatch(/fail|error/i);
                expect(err.problemDetails.message).toMatch(/not found|error|invalid/i);
            }
        });
    });


    describe("getCurrentModelVersioningByModelId", () => {
        it("should return current version info or handle not found error", async () => {
            try {
                const res = await sdk.apiKeyModelVersioning.getCurrentModelVersioningByModelId(MODEL_ID);

                expect(res.body.status).toBeDefined();

                if (res.body.status === "success") {
                    expect(res.body.data).toBeDefined();
                } else {
                    expect(res.body.status).toMatch(/fail|error/i);
                    expect(res.body.message).toMatch(/not found/i);
                }
            } catch (err: any) {
                expect(err.code).toBe(404);
                expect(err.problemDetails.status).toMatch(/fail|error/i);
                expect(err.problemDetails.message).toMatch(/not found/i);
            }
        });
    });
});
