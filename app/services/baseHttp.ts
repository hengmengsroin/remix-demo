import axios, { AxiosInstance } from "axios";
import { LocalStorageKey, localStorageService } from "./localStorageService";
export class BaseHttp {
  baseUrl: string;
  apiClient: AxiosInstance;
  constructor() {
    this.baseUrl = process.env.API_URL + "/v1";
    console.log("baseUrl", this.baseUrl);

    this.apiClient = axios.create({ baseURL: this.baseUrl });
  }

  async postRequest(path: string, data: any, method?: string) {
    let res: any = null;
    let token = localStorageService.get(LocalStorageKey.TOKEN);
    token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmQ4YzZhN2UzNTRiOTZjMTQ2OTBlM2YiLCJpYXQiOjE2NjY4NTMzNTUsImV4cCI6MTY2NzExMjU1NX0.TtmcTgSLWGQ7aIpKgTZ_WYpRk8788zoe0NxesDsAo1A";
    let headers = {
      Authorization: "Bearer " + token,
    };
    switch (method) {
      case "put":
        res = await this.apiClient.put(path, data, {
          headers: headers,
        });
        break;
      case "patch":
        res = await this.apiClient.patch(path, data, {
          headers: headers,
        });
        break;
      default:
        res = await this.apiClient.post(path, data, {
          headers: headers,
        });
    }

    let result = res.data;
    if (result.code == 1) {
      return result.data;
    } else {
      throw result.message;
    }
  }

  async getRequest(path: string, params?: any, method: string = "get") {
    let res: any = null;
    console.log("params", params);
    let token = localStorageService.get(LocalStorageKey.TOKEN);
    token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmQ4YzZhN2UzNTRiOTZjMTQ2OTBlM2YiLCJpYXQiOjE2NjY4NTMzNTUsImV4cCI6MTY2NzExMjU1NX0.TtmcTgSLWGQ7aIpKgTZ_WYpRk8788zoe0NxesDsAo1A";
    let option = {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: params,
    };
    switch (method) {
      case "delete":
        res = await this.apiClient.delete(path, option);
      default:
        res = await this.apiClient.get(path, option);
    }

    let result = res.data;
    if (result.code == 1) {
      return result.data;
    } else {
      throw result.message;
    }
  }
}
