import { LoginTypeKeys, UserData } from "../login/types";
import { LibraryKeys } from "../library/types";
import React from "react";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator, NavigationActions } from "react-navigation";
import { MainStack } from "../../navigation/nav";

const initialState = MainStack.router.getStateForAction(MainStack.router.getActionForPathAndParams("Login"));

export default function nav(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case LoginTypeKeys.LOGIN_SUCCESS:
            nextState = MainStack.router.getStateForAction(
                NavigationActions.navigate({ routeName: "Main" }),
                state
            );
            break;
        case LibraryKeys.SHOW_LIBRARY_DETAIL:
            nextState = MainStack.router.getStateForAction(
                NavigationActions.navigate({ routeName: "Detail" }),
                state
            );
            break;
        case LibraryKeys.ADD_LIBRARY:
            nextState = MainStack.router.getStateForAction(
                NavigationActions.navigate({ routeName: "Add" }),
                state
            );
            break;
        case LibraryKeys.IMAGE_CAPTURED:
            nextState = MainStack.router.getStateForAction(
                NavigationActions.navigate({ routeName: "Confirm" }),
                state
            );
            break;
        case LibraryKeys.ADD_LIBRARY_COMPLETE:
            nextState = MainStack.router.getStateForAction(
                NavigationActions.popToTop({}),
                state
            );
            break;
        case LoginTypeKeys.FETCHED_TOKEN:
            nextState = MainStack.router.getStateForAction(
                NavigationActions.popToTop({}),
                state
            );
            break;
        default:
            nextState = MainStack.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}
