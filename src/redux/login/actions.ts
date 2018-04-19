import { LoginTypeKeys, LoginAction } from "./types";

export function login(email: string, password: string): LoginAction {
  return {
    type: LoginTypeKeys.LOGIN,
    payload: { email, password }
  };
}
