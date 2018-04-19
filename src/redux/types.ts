import { User } from "./login/types";
import { Libraries } from "./library/types";
import { LLLocation } from "./location/types";
import { Dispatch as ReduxDispatch } from "redux";

export interface AppState {
    user: User;
    nav: any;
    libraries: Libraries;
    location: LLLocation;
}

export type Dispatch = ReduxDispatch<AppState>;
