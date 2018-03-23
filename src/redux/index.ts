import { combineReducers } from "redux";
import nav, { Nav } from "../navigation/reducer";
import counter, { Counter } from "./counter/reducer";
import user, { User } from "./login/reducer";
import { Dispatch as ReduxDispatch } from "redux";

export interface AppState {
  counter: Counter;
  user: User;
  nav: any;
}

export type Dispatch = ReduxDispatch<AppState>;

const appReducer = combineReducers<AppState>({
  counter,
  nav,
  user
});

const rootReducer = (state, action) => {
  const newState = action.type === "RESET" ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
