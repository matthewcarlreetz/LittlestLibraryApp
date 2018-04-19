import { Auth, Token, UserData } from "../redux/login/types";
import { url } from "./envVars";

export async function loginUser(email: string, password: string): Promise<UserData> {
  console.log(url + "auth/login");
  const loginResponse = await fetch(url + "auth/login", {
    method: "post",
    body: JSON.stringify({ email, password })
  });
  const data = (await loginResponse.json()) as Auth;

  const jwtResponse = await fetch(url + "user/jwt");
  const jwtData = (await jwtResponse.json()) as Token;

  const userData = { email: data.auth.email, token: jwtData.token } as UserData;
  console.log("userData is: ", userData);
  return userData;
}
