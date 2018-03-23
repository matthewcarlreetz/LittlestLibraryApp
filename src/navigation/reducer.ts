import { LoginTypeKeys } from "../redux/login/types";
import { UserData } from "../models/user";
import React from "react";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator, NavigationActions } from "react-navigation";
import { MainStack } from "../navigation/nav";

export interface Nav {
    routes: any[];
}

const initialState = MainStack.router.getStateForAction(MainStack.router.getActionForPathAndParams("Login"));

export default function nav(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case LoginTypeKeys.LOGIN_SUCCESS:
            console.log("nav login success", action);
            nextState = MainStack.router.getStateForAction(
                NavigationActions.navigate({ routeName: "Main" }),
                state
            );
            break;
        default:
            nextState = MainStack.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}
