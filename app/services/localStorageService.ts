import { EncryptStorage } from "storage-encryption";

export enum LocalStorageKey {
  TOKEN = "token",
  USER = "user",
  USER_ID = "userId",
  USER_NAME = "userName",
  EXPIRES_IN = "expiresIn",
}

class LocalStorageService {
  private SECRET_KEY = "secret";
  private encryptLocalStorage: EncryptStorage;
  constructor() {
    this.encryptLocalStorage = new EncryptStorage(
      this.SECRET_KEY,
      "localStorage"
    );
  }
  get(key: LocalStorageKey) {
    try {
      let result = this.encryptLocalStorage.decrypt(key.valueOf());
      return result;
    } catch (error) {
      this.remove(key);
      return "";
    }
  }

  set(key: LocalStorageKey, value: any) {
    return "";
    this.encryptLocalStorage.encrypt(key.valueOf(), value);
  }

  remove(key: LocalStorageKey) {
    this.encryptLocalStorage.remove(key.valueOf());
  }
}
export const localStorageService = new LocalStorageService();
