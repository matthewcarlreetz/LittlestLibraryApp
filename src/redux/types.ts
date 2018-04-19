import { User } from "./login/types";
import { Libraries } from "./library/types";
import { Dispatch as ReduxDispatch } from "redux";

export interface AppState {
    user: User;
    nav: any;
    libraries: Libraries;
}

export type Dispatch = ReduxDispatch<AppState>;
