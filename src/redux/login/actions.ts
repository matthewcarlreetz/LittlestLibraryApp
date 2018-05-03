import { LoginTypeKeys, LoginAction, LoginValidationAction } from "./types";
import { Validator } from "../../util/Validator";

const validator = new Validator();
export function login(email: string, password: string): LoginAction | LoginValidationAction {
  const emailError = validator.validateEmail(email);
  const passwordError = validator.validatePassword(password);

  if (emailError === "" && passwordError === "") {
    return {
      type: LoginTypeKeys.LOGIN,
      payload: { email, password }
    };
  }

  return {
    type: LoginTypeKeys.LOGIN_VALIDATION,
    payload: { emailError, passwordError }
  };
}

export function clearErrors(): LoginValidationAction {
  return {
    type: LoginTypeKeys.LOGIN_VALIDATION,
    payload: { emailError: "", passwordError: "" }
  };
}

export function validate(email: string, password: string): LoginValidationAction {
  const emailError = validator.validateEmail(email);
  const passwordError = validator.validatePassword(password);
  return {
    type: LoginTypeKeys.LOGIN_VALIDATION,
    payload: { emailError, passwordError }
  };
}
