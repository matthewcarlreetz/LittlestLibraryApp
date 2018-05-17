import { LoginTypeKeys, UserData, SuccessAction, FailAction, User, LoginAction, LoginValidationAction, FetchedTokenAction } from "./types";

const initialState = {
  token: "",
  loggedIn: false,
  emailError: "",
  passwordError: "",
  authError: ""
};

export type ActionTypes = SuccessAction | FailAction | LoginAction | LoginValidationAction | FetchedTokenAction;

export default function userReducer(
  state: User = initialState,
  action: ActionTypes
): User {
  switch (action.type) {
    case LoginTypeKeys.LOGIN_SUCCESS:
      console.log("login success", action.payload);
      return {
        token: action.payload.auth_token,
        loggedIn: true,
        emailError: "",
        passwordError: "",
        authError: ""
      };
    case LoginTypeKeys.LOGIN_FAIL:
      return {
        token: "",
        loggedIn: false,
        emailError: "",
        passwordError: "",
        authError: action.payload.error
      };
    case LoginTypeKeys.LOGIN_VALIDATION:
      return {
        ...state,
        authError: "",
        emailError: action.payload.emailError,
        passwordError: action.payload.passwordError
      };
    case LoginTypeKeys.FETCHED_TOKEN:
      console.log("fetched token", action.payload);
      return {
        ...state, token: action.payload
      };
    default:
      return state;
  }
}
