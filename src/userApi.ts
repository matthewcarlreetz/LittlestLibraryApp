import { Auth } from "./models/user";

export async function loginUser() {
  const response = await fetch(
    "http://localhost:1337/auth/login?email=matt.reetz@zymo.io&password=abcd1234"
  );
  const data = (await response.json()) as Auth;
  console.log(data.auth.email);
  return data;
}
