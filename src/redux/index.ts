import { combineReducers } from "redux";
import nav, { Nav } from "./navigation/reducer";
import counter, { Counter } from "./counter/reducer";
import user, { User } from "./login/reducer";
import libraries, { Libraries } from "./library/reducer";
import { Dispatch as ReduxDispatch } from "redux";
import { Library } from "../models/library";

export interface AppState {
  counter: Counter;
  user: User;
  nav: any;
  libraries: Libraries;
}

export type Dispatch = ReduxDispatch<AppState>;

const appReducer = combineReducers<AppState>({
  counter,
  nav,
  user,
  libraries
});

const rootReducer = (state, action) => {
  const newState = action.type === "RESET" ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
