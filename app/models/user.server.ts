import { userAPI } from "~/services/userApi";

export type User = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  role: string;
};

export type Pagination = {
  page: string;
  count: string;
  has_next_page: boolean;
  has_prev_page: boolean;
};
export type UserRes = {
  data: User[];
  pagination: Pagination | null;
};
export async function getUsers(): Promise<UserRes> {
  let result = await userAPI.getAll({ count: 10, page: 1 });
  // return {
  //   data: [],
  //   pagination: null,
  // };
  return result;
}
