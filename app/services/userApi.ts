import { CrudBaseService } from "./crudBaseService";

class UserApi extends CrudBaseService {
  constructor() {
    super();
    this.basePath = "users";
  }

  deleteMe() {
    let thisUser = "";
    return this.delete(thisUser);
  }

  // users/:id/books
  getUserBooks() {
    let userId = "12345";
    return this.baseHttp.getRequest(`${this.basePath}/${userId}/books`);
  }
}

export const userAPI = new UserApi();
