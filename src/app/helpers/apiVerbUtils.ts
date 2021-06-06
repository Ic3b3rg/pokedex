import { Api } from "../models/apis";


export const ApiVerbUtils = {

  Get(api: Api) : string {
    return api.url + api.name;
  },

}
