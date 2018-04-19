import { Library } from "../redux/library/types";
import { url } from "./envVars";

export async function fetchLibraries(token: string): Promise<[Library]> {
    const request = new Request(url + "library", {
        headers: new Headers({
            access_token: token
        })
    });
    const loginResponse = await fetch(request);
    const retVal = (await loginResponse.json()) as [Library];
    console.log("got libraries", retVal);
    return retVal;
}
