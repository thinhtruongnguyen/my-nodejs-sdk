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
    const respGetListVerifiedModelVersioning = await sdk.apiKeyModelVersioning.getListVerifiedModelVersioning(MODEL_ID, OFFSET, LIMIT, VERIFY_STATUS);
    console.log("GetListVerifiedModelVersioning:", respGetListVerifiedModelVersioning);

  } catch (err: any) {
    console.log(err);

  }


}

run();