import { CrudBaseService } from './crudBaseService';

class RoleApi extends CrudBaseService {
  constructor() {
    super();
    this.basePath = 'role';
  }
}

export const roleAPI = new RoleApi();
