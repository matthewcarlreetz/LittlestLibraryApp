import { UI } from "./types";
import { LoginTypeKeys, SuccessAction, FailAction, LoginAction } from "../login/types";
import { LibraryKeys, LibraryImageCapturedAction, LibraryImageCaptureStartedAction } from "../library/types";

const initialState = {
    loading: false,
};

export type ActionTypes = SuccessAction | FailAction | LoginAction | LibraryImageCapturedAction | LibraryImageCaptureStartedAction;

export default function uiReducer(
    state: UI = initialState,
    action: ActionTypes
): UI {
    switch (action.type) {
        case LoginTypeKeys.LOGIN:
            return {
                ...state, loading: true
            };
        case LoginTypeKeys.LOGIN_SUCCESS:
            return {
                ...state, loading: false
            };
        case LoginTypeKeys.LOGIN_FAIL:
            return {
                ...state, loading: false
            };
        case LibraryKeys.IMAGE_CAPTURE_STARTED:
            console.log("Started");
            return {
                ...state, loading: true
            };
        case LibraryKeys.IMAGE_CAPTURED:
            console.log("Ended");
            return {
                ...state, loading: false
            };
        default:
            return state;
    }
}
