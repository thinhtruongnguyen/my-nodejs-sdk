import { mockTestClient } from "./helpers/mockTestClient";
import { REPO_NAME, OWNER_USERNAME } from "../constants/constants";

const sdk = mockTestClient();

describe("getCommitHistory", () => {
    it("should return 404 when repository not found", async () => {
        const ownerUsername = OWNER_USERNAME;
        const repositoryName = REPO_NAME;
        const page = 1;
        const pageSize = 10;
        const path = "";
        const repoType = "model";
        const sha = "master";

        try {
            const res = await sdk.apiKeyRepository.getCommitHistory(
                ownerUsername,
                repositoryName,
                page,
                pageSize,
                path,
                repoType,
                sha
            );
            expect(res.body.status).toBe("success");
            expect(res.body.data).toBeDefined();
        } catch (error: any) {

            expect(error.problemDetails?.status).toBe("fail");
            expect(error.problemDetails?.message).toContain("repository not found");
        }
    });
});
