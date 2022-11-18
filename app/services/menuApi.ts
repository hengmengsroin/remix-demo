import { CrudBaseService } from './crudBaseService';
class MenuService extends CrudBaseService {
  constructor() {
    super();
    this.basePath = 'menu';
  }

  getAll() {
    let merchantId = localStorage.getItem('merchant_id');
    return this.baseHttp.getRequest(this.basePath, { merchant: merchantId });
  }
}
export const menuAPI = new MenuService();
