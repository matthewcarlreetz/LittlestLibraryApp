import { LocationKeys, PermissionResponseAction, LocationFoundAction, LLLocation } from "./types";
export type ActionTypes = PermissionResponseAction | LocationFoundAction;

const initialState = {
  hasPermission: false,
  latestLocation: null
};

export default function locationReducer(
  state: LLLocation = initialState,
  action: ActionTypes
): LLLocation {
  switch (action.type) {
    case LocationKeys.PERMISSION_RESPONSE:
      console.log("updating location permission to " + action.payload);
      return {
        ...state,
        hasPermission: action.payload
      };
    case LocationKeys.LOCATION_FOUND:
      return {
        ...state,
        latestLocation: action.payload
      };
    default:
      return state;
  }
}
