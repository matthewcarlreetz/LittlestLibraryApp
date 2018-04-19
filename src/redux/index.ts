import { combineReducers } from "redux";
import nav from "./navigation/reducer";
import libraries from "./library/reducer";
import location from "./location/reducer";
import user from "./login/reducer";
import { User } from "./login/types";
import { Libraries, Library } from "./library/types";
import { AppState } from "./types";

const appReducer = combineReducers<AppState>({
  nav,
  user,
  libraries,
  location
});

const rootReducer = (state, action) => {
  const newState = action.type === "RESET" ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
