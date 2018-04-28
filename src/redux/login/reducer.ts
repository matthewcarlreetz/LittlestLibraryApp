import { LoginTypeKeys, UserData, SuccessAction, FailAction, User, LoginAction, LoginValidationAction } from "./types";

const initialState = {
  email: "",
  token: "",
  loggedIn: false,
  emailError: "",
  passwordError: ""
};

export type ActionTypes = SuccessAction | FailAction | LoginAction | LoginValidationAction;

export default function userReducer(
  state: User = initialState,
  action: ActionTypes
): User {
  switch (action.type) {
    case LoginTypeKeys.LOGIN_SUCCESS:
      return {
        email: action.payload.email,
        token: action.payload.token,
        loggedIn: true,
        emailError: "",
        passwordError: ""
      };
    case LoginTypeKeys.LOGIN_FAIL:
      return {
        email: "",
        token: "",
        loggedIn: false,
        emailError: "",
        passwordError: ""
      };
    case LoginTypeKeys.LOGIN_VALIDATION:
      return {
        ...state,
        emailError: action.payload.emailError,
        passwordError: action.payload.passwordError
      };
    default:
      return state;
  }
}
