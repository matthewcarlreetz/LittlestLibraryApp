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
