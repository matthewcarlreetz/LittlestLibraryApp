import { LoginTypeKeys } from "./types";
import { Auth } from "../../models/user";

export interface LoginState {
  email: string;
  password: string;
}

export interface SuccessAction {
  type: LoginTypeKeys.LOGIN_SUCCESS;
  data: Auth;
}

export interface FailAction {
  type: LoginTypeKeys.LOGIN_FAIL;
  data: Auth;
}

const initialState = {
  email: "",
  password: ""
};

export type ActionTypes = SuccessAction | FailAction;

export default function counterReducer(
  state: LoginState = initialState,
  action: ActionTypes
): LoginState {
  switch (action.type) {
    case LoginTypeKeys.LOGIN_SUCCESS:
      console.log("login succes", action.data.auth.email);
      return {
        email: action.data.auth.email,
        password: action.data.auth.password
      };
    case LoginTypeKeys.LOGIN_FAIL:
    default:
      return {
        email: "",
        password: ""
      };
  }
}
