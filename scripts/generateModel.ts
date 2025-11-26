import dotenv from 'dotenv';
import {generateDeliveryModelsAsync} from "@kontent-ai/model-generator";


dotenv.config();

const {KONTENT_ENVIRONMENT_ID, KONTENT_MANAGEMENT_KEY} = process.env;

if(!KONTENT_ENVIRONMENT_ID){
  throw new Error("KONTENT_ENVIRONMENT_ID cannot be empty!");
}

if(!KONTENT_MANAGEMENT_KEY){
  throw new Error("KONTENT_MANAGEMENT_KEY cannot be empty!");
}



await generateDeliveryModelsAsync(
  {
    environmentId: KONTENT_ENVIRONMENT_ID,
    managementApiKey: KONTENT_MANAGEMENT_KEY,
    addTimestamp: false,
    createFiles: true,
    outputDir: "./models",
    moduleFileExtension: "ts",
    fileResolvers: {
      taxonomy: "camelCase",
      contentType: "camelCase",
      snippet: "camelCase"
    },
    formatOptions: {
      printWidth: 120,
      tabWidth: 2,
      useTabs: false,
      trailingComma: "all",
      parser: "typescript"
    }
  }
);