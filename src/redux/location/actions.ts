import { LocationKeys, PermissionResponseAction, LocationFoundAction, AskPermissionAction, RequestLocationAction } from "./types";

export function askPermission(): AskPermissionAction {
  return {
    type: LocationKeys.ASK_PERMISSION,
    payload: {}
  };
}

export function requestLocation(): RequestLocationAction {
  return {
    type: LocationKeys.REQUEST_LOCATION,
    payload: {}
  };
}

export function updatePermission(hasPermission: boolean): PermissionResponseAction {
  return {
    type: LocationKeys.PERMISSION_RESPONSE,
    payload: hasPermission
  };
}

export function updateLocation(location: Position): LocationFoundAction {
  return {
    type: LocationKeys.LOCATION_FOUND,
    payload: location
  };
}
