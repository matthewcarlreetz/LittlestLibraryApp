import { LoginTypeKeys } from "./types";
import { Auth } from "../../models/user";

export interface AuthData {
  data: Auth;
}

export interface SuccessAction {
  type: LoginTypeKeys.LOGIN_SUCCESS;
  data: Auth;
}

export interface FailAction {
  type: LoginTypeKeys.LOGIN_FAIL;
  data: Auth;
}

export type ActionTypes = SuccessAction | FailAction;

export default function counterReducer(
  state: AuthData,
  action: ActionTypes
): AuthData {
  switch (action.type) {
    case LoginTypeKeys.LOGIN_SUCCESS:
      console.log("login succes", action.data.auth.email);
      return {
        ...state,
        data: action.data
      };
    case LoginTypeKeys.LOGIN_FAIL:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
