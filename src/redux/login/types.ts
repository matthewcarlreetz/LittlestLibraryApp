export enum LoginTypeKeys {
  LOGIN = "LOGIN",
  LOGIN_VALIDATION = "LOGIN_VALIDATION",
  GET_STORED_TOKEN = "GET_STORED_TOKEN",
  FETCHED_TOKEN = "FETCHED_TOKEN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL"
}

export interface User {
  token: string;
  emailError: string;
  passwordError: string;
  authError: string;
  loggedIn: boolean;
}

export interface AuthResponse {
  auth_token: string;
  message: string;
  response: Response;
}

export interface Auth {
  auth: UserInfo;
  createdAt: string;
  updatedAt: string;
  id: number;
}

export interface UserInfo {
  password: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  user: number;
}

export interface Token {
  token: string;
  expires: string;
}

export interface UserData {
  token: string;
  email: string;
}

//#region Actions
export interface GetStoredTokenAction {
  type: LoginTypeKeys.GET_STORED_TOKEN;
}

export interface FetchedTokenAction {
  type: LoginTypeKeys.FETCHED_TOKEN;
  payload: string;
}

export interface LoginAction {
  type: LoginTypeKeys.LOGIN;
  payload: {
    password: string;
    email: string;
  };
}

export interface LoginValidationAction {
  type: LoginTypeKeys.LOGIN_VALIDATION;
  payload: {
    emailError: string;
    passwordError: string;
  };
}

export interface SuccessAction {
  type: LoginTypeKeys.LOGIN_SUCCESS;
  payload: AuthResponse;
}

export interface FailAction {
  type: LoginTypeKeys.LOGIN_FAIL;
  payload: { error: string };
}
//#endregion
