import PasswordlessNode from 'supertokens-node/recipe/passwordless'
import SessionNode from 'supertokens-node/recipe/session'
import { appInfo } from './appInfo'
import { TypeInput } from "supertokens-node/types";

export const backendConfig = () => {
  return {
    framework: "express",
    supertokens: {
      // These are the connection details of the app you created on supertokens.com
      connectionURI: "https://a41a7441a9b311ec818b1d8d29ff38c7-ap-southeast-1.aws.supertokens.io:3567",
      apiKey: "7=M7uTrAXA9QfEoE-ahzMtacLgol20",
    },
    appInfo,
    recipeList: [
      PasswordlessNode.init({
        flowType: "USER_INPUT_CODE_AND_MAGIC_LINK",
        contactMethod: "EMAIL_OR_PHONE",
        createAndSendCustomEmail: async (input, context) => { /* See next step */ },
        createAndSendCustomTextMessage: async (input, context) => { /* See next step */ },
        //Hello World
      }),
      SessionNode.init(),
    ],
    isInServerlessEnv: true,
  }
}
