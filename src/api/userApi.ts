import { AuthResponse } from "../redux/login/types";
import { baseUrl } from "./envVars";

export async function loginUser(email: string, password: string): Promise<AuthResponse> {
  const url = baseUrl + "auth/login";
  const body = JSON.stringify({ email, password });
  const loginResponse = await fetch(url, {
    method: "post",
    body,
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  const authResponse = (await loginResponse.json()) as AuthResponse;
  authResponse.response = loginResponse;
  return authResponse;
}
