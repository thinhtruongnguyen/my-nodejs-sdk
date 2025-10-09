import dotenv from "dotenv";
import SdkClient from "../../client";

dotenv.config();

export const mockTestClient = () => {
  return new SdkClient({
    apiKey: process.env.API_KEY || "",
  });
};
