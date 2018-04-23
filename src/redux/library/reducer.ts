import { LibraryKeys, Library, SuccessAction, FailAction, SelectLibraryAction, Libraries, LibraryImageCapturedAction } from "./types";

const initialState = {
    libraries: null,
    selectedLibrary: null,
    error: "",
    libraryToAdd: {
        imageData: null
    }
};

export type ActionTypes = SuccessAction | FailAction | SelectLibraryAction | LibraryImageCapturedAction;

export default function libraryReducer(
    state: Libraries = initialState,
    action: ActionTypes
): Libraries {
    switch (action.type) {
        case LibraryKeys.GET_LIBRARY_SUCCESS:
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
            return {
                ...state,
                selectedLibrary: action.payload.library
            };
        case LibraryKeys.IMAGE_CAPTURED:
            return {
                ...state,
                libraryToAdd: {
                    imageData: action.payload
                }
            };
        default:
            return state;
    }
}
