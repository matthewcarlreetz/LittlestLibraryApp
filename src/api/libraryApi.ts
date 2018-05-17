import { Library } from "../redux/library/types";
import { baseUrl } from "./envVars";

export async function fetchLibraries(token: string, lat: number, lon: number): Promise<[Library]> {
    const url = baseUrl + "/" + "libraries?lat=" + lat + "&lon=" + lon;
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

export async function addLibrary(token: string, lat: number, lon: number, image: string): Promise<Library> {
    console.log(lat, lon, token);
    const url = baseUrl + "/" + "libraries";
    const body = JSON.stringify({ lat: String(lat), lon: String(lon), image });
    const response = await fetch(url, {
        method: "post",
        body,
        headers: new Headers({
            "Authorization": token,
            "Content-Type": "application/json"
        })
    });
    const uploadResponse = (await response.json()) as Library;
    uploadResponse.response = response;
    return uploadResponse;
}
