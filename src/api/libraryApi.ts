import { Library } from "../redux/library/types";
import { baseUrl } from "./envVars";

export async function fetchLibraries(token: string, lat: number, lon: number): Promise<[Library]> {
    const url = baseUrl + "libraries?lat=" + lat + "&lon=" + lon;
    console.log("requesting libraries", url, token);
    const request = new Request(url, {
        headers: new Headers({
            Authorization: token
        })
    });
    const response = await fetch(request);
    const retVal = (await response.json()) as [Library];
    console.log("got libraries", retVal);
    return retVal;
}
