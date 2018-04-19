import { LoginTypeKeys, UserData, SuccessAction, FailAction, User } from "./types";

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
      return {
        email: "",
        token: "",
        loggedIn: false
      };
    default:
      return state;
  }
}
