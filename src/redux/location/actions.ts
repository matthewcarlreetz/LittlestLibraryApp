import { LocationKeys, PermissionAction, LocationAction } from "./types";

export function updatePermission(hasPermission: boolean): PermissionAction {
  return {
    type: LocationKeys.PERMISSION,
    payload: hasPermission
  };
}

export function updateLocation(location: Position): LocationAction {
  return {
    type: LocationKeys.LOCATION_FOUND,
    payload: location
  };
}
