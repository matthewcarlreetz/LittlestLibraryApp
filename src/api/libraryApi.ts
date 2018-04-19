import { Library } from "../redux/library/types";

export async function fetchLibraries(token: string): Promise<[Library]> {
    // const request = new Request("http://192.168.1.212:1337/library", {
    const request = new Request("http://localhost:1337/library", {
        headers: new Headers({
            access_token: token
        })
    });
    const loginResponse = await fetch(request);
    const retVal = (await loginResponse.json()) as [Library];
    console.log("got libraries", retVal);
    return retVal;
}
