<!--<documentation_excluded>-->
<h1 align="center">AIOZ Sdk Node.js client</h1>

## Project description
Using w3ai-sdk package to querry data from W3AI Flatform by using APIKey. For example , Getting user balance, creating a task, getting task result, getting statistics and history of models, checking API permission ...

To start, simply require the W3AI-SDK and set up an instance with your W3AI API Keys.Please checking out your W3AI Page. In the example below show you how to using the SDK.

## Getting started
## Installation
With `npm`:
``` 
npm i @meocam/nodejs-client
```

### Code sample

```typescript
const SdkClient = require("@meocam/nodejs-client").default;

const client = new SdkClient({
  apiKey: "d9eb2842bb95039bfc31196432a82998bc5930f4",
});

const MODEL_ID = "7332d265-171e-4055-9f2f-af51a52a82c4";
const COMMIT_HASH = "ba271f290d732d6aa5902bf4d42103b516fcb7c2";
const PLATFORMS = ["window"];
const HUB_TASK_ID = "c2a6e7f5-15b4-461f-9b8a-4bcb8f8c4bcd";
const TASK_ID = "aea6944c-a808-4c11-b8de-557fe02d505f";
const FROM = "2023-05-07 15:04:05";
const TO = "2023-05-07 15:04:05";
const LIMIT = 10;
const OFFSET = 0;
const VERIFY_STATUS = "verified"
const OWNER_USERNAME = "bohaha123-3333"
const REPO_NAME = "HEHEE"
const API_KEY = "d9eb2842bb95039bfc31196432a82998bc5930f4";
const FILE_LIST = [
  {
    key: "input",
    data: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg",
    name: "image.jpg"
  }
];
const INPUT_PARAMS = {
  language1: "en",
  language2: "vi"
};


(async () => {
  try {
    //getApiKeyPermission
    // const res2 = await client.apiKey.getApiKeyPermission();
    // console.log("api-key/permission is:", res2.body);
    // console.log("api-key/permission status is:", res2.body.status);
    // console.log("api-key/permission data is:", res2.body.data);
    // console.log("api-key/permission data limitModels is:", res2.body.data.limitModels);
    // console.log("api-key/permission message is:", res2.body.message);

    //Get Tasks Histories
    // const res3 = await client.apiKey.getTaskHistories(LIMIT, OFFSET);
    // console.log("api-key/task/histories is:", res3.body);
    // console.log(res3.body.data.total)

    //Get Tasks Result
    // const res4 = await client.apiKey.getTaskResult(TASK_ID);
    // console.log("api-key/task/{{TASK_ID}}/result is:", res4.body);

    //Get Tasks Result
    const res5 = await client.apiKey.getApiKeyStatistics(FROM, TO);
    console.log("api-key/statistics is:", res5.body);

  } catch (err) {
    const pd = err.getProblemDetails();
    console.log(pd)
    console.log("status is:", pd.status);
    console.log("message is:", pd.message);
  }
})();

```
## Documentation
You can refer to the API endpoints and models at [**HERE**](https://github.com/AIOZNetwork/aioz-ai-platform-sdk/blob/nodejs-sdk/nodejs-sdk-v2/api-docs-md/README.md#documentation-for-api-endpoints)

### Authorization

#### API key

All of API request to be authenticated using the API key that be described in our [documentation](https://w3ai.xyz/docs/home).

First of all you have to do is provided an API key when instantiating the W3AIClient:
```typescript
   var param :SdkParams = {apiKey: "YOUR_API_KEY"}
   const client = new W3AIClient(
   param
);
```