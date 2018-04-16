import { LibraryKeys } from "./types";
import { Library } from "../../models/library";

export interface Libraries {
    libraries: [Library];
    error: string;
    selectedLibrary: Library;
}

export interface SuccessAction {
    type: LibraryKeys.GET_LIBRARY_SUCCESS;
    payload: Libraries;
}

export interface FailAction {
    type: LibraryKeys.GET_LIBRARY_FAIL;
    payload: Libraries;
}

export interface SelectAction {
    type: LibraryKeys.SHOW_LIBRARY_DETAIL;
    payload: { library: Library };
}

const initialState = {
    libraries: null,
    selectedLibrary: null,
    error: "",
};

export type ActionTypes = SuccessAction | FailAction | SelectAction;

export default function userReducer(
    state: Libraries = initialState,
    action: ActionTypes
): Libraries {
    switch (action.type) {
        case LibraryKeys.GET_LIBRARY_SUCCESS:
            console.log("login success", action);
            return {
                ...state,
                libraries: action.payload.libraries,
                error: ""
            };
        case LibraryKeys.GET_LIBRARY_FAIL:
            return {
                ...state,
                error: action.payload.error
            };
        case LibraryKeys.SHOW_LIBRARY_DETAIL:
            console.log("selectedLibrary", action.payload);
            return {
                ...state,
                selectedLibrary: action.payload.library
            };
        default:
            return state;
    }
}
