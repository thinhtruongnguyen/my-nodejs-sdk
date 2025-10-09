"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const constants_1 = require("./constants/constants");
const sdk = new index_1.default({ apiKey: constants_1.API_KEY });
async function run() {
    try {
        const resHistories = await sdk.apiKey.getTaskHistories(constants_1.LIMIT, constants_1.OFFSET);
        console.log("Response from getTaskHistories is:", resHistories, resHistories.data?.records);
    }
    catch (err) {
        console.log(err);
    }
}
run();
