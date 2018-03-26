import { LibraryKeys } from "./types";
import { Library } from "../../models/library";

export interface Libraries {
    libraries: [Library];
    error: string;
}

export interface SuccessAction {
    type: LibraryKeys.GET_LIBRARY_SUCCESS;
    payload: Libraries;
}

export interface FailAction {
    type: LibraryKeys.GET_LIBRARY_FAIL;
    payload: Libraries;
}

const initialState = {
    libraries: null,
    error: ""
};

export type ActionTypes = SuccessAction | FailAction;

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
        default:
            return state;
    }
}
