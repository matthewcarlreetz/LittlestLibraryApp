import { combineReducers } from "redux";
import counter, { Counter } from "./counter/reducer";
import auth from "./login/reducer";
import { Dispatch as ReduxDispatch } from "redux";
import { AuthData } from "../models/user";

export interface AppState {
  counter: Counter;
  auth: AuthData;
}

export type Dispatch = ReduxDispatch<AppState>;

const appReducer = combineReducers<AppState>({
  counter,
  auth
});

const rootReducer = (state, action) => {
  const newState = action.type === "RESET" ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
