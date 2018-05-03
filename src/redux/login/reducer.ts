import { LoginTypeKeys, UserData, SuccessAction, FailAction, User, LoginAction, LoginValidationAction } from "./types";

const initialState = {
  token: "",
  loggedIn: false,
  emailError: "",
  passwordError: "",
  authError: ""
};

export type ActionTypes = SuccessAction | FailAction | LoginAction | LoginValidationAction;

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
        authError: action.payload.message
      };
    case LoginTypeKeys.LOGIN_VALIDATION:
      return {
        ...state,
        authError: "",
        emailError: action.payload.emailError,
        passwordError: action.payload.passwordError
      };
    default:
      return state;
  }
}
