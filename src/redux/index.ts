import { combineReducers } from "redux";
import nav from "./navigation/reducer";
import user from "./login/reducer";
import { User } from "./login/types";
import libraries from "./library/reducer";
import { Libraries, Library } from "./library/types";
import { AppState } from "./types";

const appReducer = combineReducers<AppState>({
  nav,
  user,
  libraries
});

const rootReducer = (state, action) => {
  const newState = action.type === "RESET" ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
