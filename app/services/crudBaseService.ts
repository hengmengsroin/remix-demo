import { BaseHttp } from "./baseHttp";

export class CrudBaseService {
  protected basePath: string;
  protected baseHttp: BaseHttp;
  constructor() {
    this.basePath = "";
    this.baseHttp = new BaseHttp();
  }

  getAll(data?: { page?: number; count?: number; query?: any }) {
    return this.baseHttp.getRequest(this.basePath, {
      page: data?.page,
      count: data?.count,
      ...data?.query,
    });
  }

  getOne(id: string) {
    return this.baseHttp.getRequest(this.basePath + "/" + id);
  }

  post(data: any) {
    return this.baseHttp.postRequest(this.basePath, data);
  }

  put(id: string, data: any) {
    return this.baseHttp.postRequest(this.basePath + "/" + id, data, "put");
  }

  patch(id: string, data: any) {
    return this.baseHttp.postRequest(this.basePath + "/" + id, data, "patch");
  }

  delete(id: string) {
    return this.baseHttp.getRequest(this.basePath + "/" + id, {}, "delete");
  }
}
