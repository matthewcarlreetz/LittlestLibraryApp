import { LoginTypeKeys } from "./types";

export interface LoginAction {
  type: LoginTypeKeys.LOGIN;
  payload: {
    password: string;
    email: string;
  };
}

export function login(email: string, password: string): LoginAction {
  return {
    type: LoginTypeKeys.LOGIN,
    payload: { email, password }
  };
}
