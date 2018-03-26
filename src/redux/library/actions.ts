import { LibraryKeys } from "./types";

export interface LibraryAction {
    type: LibraryKeys.GET_LIBRARIES;
    payload: {
        token: string;
    };
}

export function getLibraries(token: string): LibraryAction {
    return {
        type: LibraryKeys.GET_LIBRARIES,
        payload: { token }
    };
}
