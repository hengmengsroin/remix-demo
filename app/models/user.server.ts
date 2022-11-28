import { userAPI } from "~/services/userApi";

export type User = {
  _id: string;
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

export type LoginRes = {
  token: string;
  user: User;
};
