import SdkClient from "./index";
import {
  RequestCalculateCostToVerifyAiModelRequest,
  RequestCheckValidToVerifyAiModelRequest,
  RequestDistributeTaskRequest,
  RequestGetApiKeyStatisticsByModelIdRequest,
  RequestVerifyAiModelRequest
} from "../nodejs-openai-generator-cli/api";
import {
  MODEL_ID, INPUT_PARAMS,
  COMMIT_HASH, FILE_LIST,
  PLATFORMS, HUB_TASK_ID,
  FROM, TO, OFFSET, LIMIT, VERIFY_STATUS, OWNER_USERNAME, REPO_NAME, API_KEY, TASK_ID
} from "./constants/constants";

const sdk = new SdkClient({ apiKey: API_KEY });

async function run() {

  try {
    const request: RequestGetApiKeyStatisticsByModelIdRequest = {
      from: FROM,
      to: TO,
    };
    const respGetApiKeyStatistics = await sdk.apiKey.getApiKeyStatistics(request, MODEL_ID);
    console.log("GetApiKeyStatistics:", respGetApiKeyStatistics);

    // const resHistories = await sdk.apiKey.getTaskHistories(LIMIT, OFFSET);
    // console.log("Response from getTaskHistories is:", resHistories, resHistories.data?.records);

  } catch (err: any) {
    console.log(err);

  }


}

run();