import { LocationKeys, PermissionAction, LocationAction, LLLocation } from "./types";
export type ActionTypes = PermissionAction | LocationAction;

const initialState = {
  hasPermission: false,
  latestLocation: null
};

export default function locationReducer(
  state: LLLocation = initialState,
  action: ActionTypes
): LLLocation {
  switch (action.type) {
    case LocationKeys.PERMISSION:
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
