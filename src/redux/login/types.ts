export enum LoginTypeKeys {
  LOGIN = "LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL"
}

export interface User {
  email: string;
  token: string;
  loggedIn: boolean;
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
export interface LoginAction {
  type: LoginTypeKeys.LOGIN;
  payload: {
    password: string;
    email: string;
  };
}

export interface SuccessAction {
  type: LoginTypeKeys.LOGIN_SUCCESS;
  payload: UserData;
}

export interface FailAction {
  type: LoginTypeKeys.LOGIN_FAIL;
  payload: UserData;
}
//#endregion
