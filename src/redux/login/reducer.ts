import { LoginTypeKeys } from "./types";
import { UserData } from "../../models/user";

export interface User {
  email: string;
  token: string;
  loggedIn: boolean;
}

export interface SuccessAction {
  type: LoginTypeKeys.LOGIN_SUCCESS;
  payload: UserData;
}

export interface FailAction {
  type: LoginTypeKeys.LOGIN_FAIL;
  payload: UserData;
}

const initialState = {
  email: "",
  token: "",
  loggedIn: false
};

export type ActionTypes = SuccessAction | FailAction;

export default function userReducer(
  state: User = initialState,
  action: ActionTypes
): User {
  switch (action.type) {
    case LoginTypeKeys.LOGIN_SUCCESS:
      console.log("login success", action);
      return {
        email: action.payload.email,
        token: action.payload.token,
        loggedIn: true
      };
    case LoginTypeKeys.LOGIN_FAIL:
    default:
      return {
        email: "",
        token: "",
        loggedIn: false
      };
  }
}
