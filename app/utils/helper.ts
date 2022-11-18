import {
  LocalStorageKey,
  localStorageService,
} from "../services/localStorageService";

export const Helper = {
  logout: () => {
    localStorage.clear();
  },
  getToken: () => {
    if (Helper.isBrowser) {
      return localStorage.getItem("token");
    } else {
      return null;
    }
  },
  toImageUrl: (id: string) => {
    return `/v1/files/${id}`;
  },
  getLogo: () => {
    if (Helper.isBrowser) {
      let logo = localStorage.getItem("logo");
      if (logo && logo != "null") {
        return logo;
      }
      return "/menu-white.png";
    }
    return "/menu-white.png";
  },
  getBusinessName: () => {
    if (Helper.isBrowser) {
      let name = localStorage.getItem("business_name");
      if (name) {
        return name;
      }
      return "Food";
    }

    return "Food";
  },
  isAuth: () => {
    let token = localStorageService.get(LocalStorageKey.TOKEN);

    if (token) {
      let tokenExpiredDate: any = localStorageService.get(
        LocalStorageKey.EXPIRES_IN
      );
      if (tokenExpiredDate) {
        tokenExpiredDate = +tokenExpiredDate;
        let expiredDate = new Date(tokenExpiredDate);
        let now = new Date();

        if (now < expiredDate) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  isBrowser: typeof window !== "undefined",
  baseUrl: () => {
    if (Helper.isBrowser) {
      return window.location.origin;
    }
    return process.env.BASE_URL;
  },
};
