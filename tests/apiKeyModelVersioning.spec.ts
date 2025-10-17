// import { mockTestClient } from "./helpers/mockTestClient";
// import {
//     MODEL_ID, OFFSET,
//     LIMIT,
//     VERIFY_STATUS,
//     COMMIT_HASH
// } from "../src/constants/constants";

// const sdk = mockTestClient();

// describe("ApiKeyModelVersioningService", () => {
//     describe("deleteModelVersioningByModelId", () => {
//         it("should change delete versioning or handle error correctly", async () => {
//             try {
//                 const res = await sdk.apiKeyModelVersioning.deleteModelVersioningByModelId(
//                     MODEL_ID,
//                     COMMIT_HASH
//                 );
//                 expect(res.status).toBeDefined();
//                 if (res.status === "success") {
//                     expect(res.message).toMatch(/success|updated|changed/i);
//                 } else {
//                     expect(res.status).toMatch(/fail|error/i);
//                     expect(res.message).toMatch(/not exist|not found|error/i);
//                 }
//             } catch (err: any) {
//                 expect(err.code).toBeGreaterThanOrEqual(400);
//                 expect(err.problemDetails.status).toMatch(/fail|error/i);
//                 expect(err.problemDetails.message).toMatch(/not exist|not found|error/i);
//             }
//         });
//     });


//     describe("changeCurrentModelVersioningByModelId", () => {
//         it("should change current versioning or handle error correctly", async () => {
//             try {
//                 const res = await sdk.apiKeyModelVersioning.changeCurrentModelVersioningByModelId(
//                     MODEL_ID,
//                     COMMIT_HASH
//                 );
//                 expect(res.status).toBeDefined();
//                 if (res.status === "success") {
//                     expect(res.message).toMatch(/success|updated|changed/i);
//                 } else {
//                     expect(res.status).toMatch(/fail|error/i);
//                     expect(res.message).toMatch(/not exist|not found|error/i);
//                 }
//             } catch (err: any) {
//                 expect(err.code).toBeGreaterThanOrEqual(400);
//                 expect(err.problemDetails.status).toMatch(/fail|error/i);
//                 expect(err.problemDetails.message).toMatch(/not exist|not found|error/i);
//             }
//         });
//     });

//     describe("getListVerifiedModelVersioning", () => {
//         it("should return a list (or empty) of verified model versioning", async () => {
//             try {
//                 const res = await sdk.apiKeyModelVersioning.getListVerifiedModelVersioning(
//                     MODEL_ID,
//                     OFFSET,
//                     LIMIT,
//                     VERIFY_STATUS
//                 );
//                 expect(res.status).toBeDefined();
//                 expect(res.status).toBe("success");

//                 expect(res.data).toBeDefined();
//                 expect(res.data!.total).toBeGreaterThanOrEqual(0);

//                 if (res.data!.records) {
//                     expect(Array.isArray(res.data!.records)).toBe(true);
//                     if (res.data!.records.length > 0) {
//                         for (const record of res.data!.records) {
//                             expect(record).toHaveProperty("versionId");
//                             expect(record).toHaveProperty("verifyStatus");
//                             expect(record.verifyStatus).toBe(VERIFY_STATUS);
//                         }
//                     }
//                 } else {
//                     expect(res.data!.records === null || res.data!.records === undefined).toBe(true);
//                 }
//             } catch (err: any) {
//                 expect(err.code).toBeDefined();
//                 expect(err.problemDetails.status).toMatch(/fail|error/i);
//                 expect(err.problemDetails.message).toMatch(/not found|error|invalid/i);
//             }
//         });
//     });


//     describe("getCurrentModelVersioningByModelId", () => {
//         it("should return current version info or handle not found error", async () => {
//             try {
//                 const res = await sdk.apiKeyModelVersioning.getCurrentModelVersioningByModelId(MODEL_ID);

//                 expect(res.status).toBeDefined();

//                 if (res.status === "success") {
//                     expect(res.data).toBeDefined();
//                 } else {
//                     expect(res.status).toMatch(/fail|error/i);
//                     expect(res.message).toMatch(/not found/i);
//                 }
//             } catch (err: any) {
//                 expect(err.code).toBe(404);
//                 expect(err.problemDetails.status).toMatch(/fail|error/i);
//                 expect(err.problemDetails.message).toMatch(/not found/i);
//             }
//         });
//     });
// });
