import { LoginTypeKeys } from "./types";
import { AuthData } from "../../models/user";

export interface LoginAction {
  type: LoginTypeKeys.LOGIN;
  data: AuthData;
}

export function login(authData: AuthData): LoginAction {
  return {
    type: LoginTypeKeys.LOGIN,
    data: authData
  };
}
