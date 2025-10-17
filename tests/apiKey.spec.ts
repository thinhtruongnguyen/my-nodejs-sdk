import { RequestDistributeTaskRequest } from "../nodejs-openapi-generator-cli/api";
import { mockTestClient } from "./helpers/mockTestClient";

const sdk = mockTestClient();
const MODEL_ID = "7332d265-171e-4055-9f2f-af51a52a82c4";
const FILE_LIST = [
  {
    key: "input",
    data: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg",
    name: "image.jpg",
  },
];
const INPUT_PARAMS = {
  language1: "en",
  language2: "vi",
};

describe("ApiKeyService", () => {
  describe("getApiKeyPermission", () => {
    it("should get API key permission successfully", async () => {
      try {
        const res = await sdk.apiKey.getApiKeyPermission();
        expect(res.status).toBe("success");
        expect(res.data).toBeDefined();
        if (res.data) {
          expect(res.data.limitModels).toBe(false);
        }
      } catch (err: any) {
        expect(err.status).toBeDefined();
      }
    });
  });

  describe("getTaskHistories", () => {
    it("should return success even if no histories exist", async () => {
      try {
        const res = await sdk.apiKey.getTaskHistories(10, 0);
        expect(res.status).toBe("success");
        expect(res.data).toBeDefined();
        if (res.data) {
          expect(res.data.total).toBeGreaterThanOrEqual(0);
          if (res.data.records === null) {
            expect(res.data.records).toBeNull();
          } else {
            expect(Array.isArray(res.data.records)).toBe(true);
          }
        }
      } catch (err: any) {
        expect(err.status).toBeDefined();
      }
    });
  });

  describe("getTaskResult (Integration)", () => {
    it("should handle success or not found response from real API", async () => {
      const taskId = "aea6944c-a808-4c11-b8de-557fe02d505f";
      try {
        const res = await sdk.apiKey.getTaskResult(taskId);

        expect(res.status).toBeDefined();
        if (res.status === "success") {
          expect(res.data).toBeDefined();
        }
      } catch (err: any) {
        expect(err.status).toBe("fail");
        expect(err.message).toMatch(/not found/i);
      }
    });
  });

  describe("createTask", () => {
    it("should create task or return proper error if model not found", async () => {
      const request: RequestDistributeTaskRequest = {
        files: FILE_LIST,
        inputParams: INPUT_PARAMS,
        modelId: MODEL_ID,
      };

      try {
        const res = await sdk.apiKey.createTask(request);
        expect(res.status).toBeDefined();
        if (res.status === "success" && res.data) {
          expect(res.data).toBeDefined();
        }
      } catch (err: any) {
        expect(err.status).toBe("fail");
        expect(err.message).toMatch(/model/i);
      }
    });
  });

});
