import { Auth, Token, UserData } from "../models/user";

export async function loginUser(email: string, password: string): Promise<UserData> {
  const loginResponse = await fetch("http://localhost:1337/auth/login", {
    method: "post",
    body: JSON.stringify({ email, password })
  });
  const data = (await loginResponse.json()) as Auth;

  const jwtResponse = await fetch("http://localhost:1337/user/jwt");
  const jwtData = (await jwtResponse.json()) as Token;

  const userData = { email: data.auth.email, token: jwtData.token } as UserData;
  console.log("userData is: ", userData);
  return userData;
}
