import { Auth } from "./models/user";

export async function loginUser(email: string, password: string) {
  const response = await fetch("http://localhost:1337/auth/login", {
    method: "post",
    body: JSON.stringify({ email, password })
  });
  const data = (await response.json()) as Auth;
  console.log(data.auth.email);
  return data;
}
