import { LoginTypeKeys } from "./types";

export function login() {
  return {
    type: LoginTypeKeys.LOGIN
  };
}
