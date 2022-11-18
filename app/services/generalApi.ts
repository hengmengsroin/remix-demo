import { BaseHttp } from './baseHttp';

class GeneralApi {
  protected baseHttp: BaseHttp;
  constructor() {
    this.baseHttp = new BaseHttp();
  }

  login(email: string, password: string) {
    return this.baseHttp.postRequest('/login', { email, password });
  }

  changePwd(oldPwd: string, newPwd: string) {
    return this.baseHttp.postRequest('/change-pwd', { oldPwd, newPwd });
  }

  logout() {
    return this.baseHttp.getRequest('/logout');
  }

  getToken() {
    return this.baseHttp.getRequest('/token');
  }
}

export const generalApi = new GeneralApi();
