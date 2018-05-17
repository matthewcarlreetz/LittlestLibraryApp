import { UI, UIState } from "./types";
import { LoginTypeKeys, SuccessAction, FailAction, LoginAction } from "../login/types";
import { LibraryKeys, LibraryImageCapturedAction, LibraryImageCaptureStartedAction, LibraryUploadAction, LibraryUploadSuccessAction, LibraryUploadFailAction, LibraryAddCompleteAction } from "../library/types";
import { NavigationBackAction } from "react-navigation";

const initialState = {
    uiState: UIState.NONE,
    message: ""
};

export type ActionTypes =
    SuccessAction | FailAction | LoginAction | LibraryImageCapturedAction | LibraryImageCaptureStartedAction |
    LibraryUploadAction | NavigationBackAction | LibraryUploadSuccessAction | LibraryUploadFailAction |
    LibraryAddCompleteAction;

export default function uiReducer(
    state: UI = initialState,
    action: ActionTypes
): UI {
    switch (action.type) {
        case LoginTypeKeys.LOGIN:
        case LibraryKeys.IMAGE_CAPTURE_STARTED:
        case LibraryKeys.UPLOAD_LIBRARY:
            return {
                ...state, uiState: UIState.LOADING
            };
        case LoginTypeKeys.LOGIN_FAIL:
        case LibraryKeys.UPLOAD_LIBRARY_FAIL:
            return {
                ...state, message: action.payload.error, uiState: UIState.SHOW_FAIL
            };
        case "Navigation/BACK":
        case LoginTypeKeys.LOGIN_SUCCESS:
        case LibraryKeys.IMAGE_CAPTURED:
        case LibraryKeys.ADD_LIBRARY_COMPLETE:
            return {
                ...state, uiState: UIState.NONE
            };
        case LibraryKeys.UPLOAD_LIBRARY_SUCCESS:
            return {
                ...state, uiState: UIState.SHOW_SUCCESS
            };
        default:
            return state;
    }
}
