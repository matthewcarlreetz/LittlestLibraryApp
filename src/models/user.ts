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

export interface AuthData {
  password: string;
  email: string;
}
