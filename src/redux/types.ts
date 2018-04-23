import { User } from "./login/types";
import { Libraries } from "./library/types";
import { LLLocation } from "./location/types";
import { Dispatch as ReduxDispatch } from "redux";
import { UI } from "./ui/types";

export interface AppState {
    user: User;
    nav: any;
    libraries: Libraries;
    location: LLLocation;
    ui: UI;
}

export type Dispatch = ReduxDispatch<AppState>;
