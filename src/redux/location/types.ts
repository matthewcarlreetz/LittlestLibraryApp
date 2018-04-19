export enum LocationKeys {
  PERMISSION = "PERMISSION",
  LOCATION_FOUND = "LOCATION_FOUND"
}

export interface PermissionAction {
  type: LocationKeys.PERMISSION;
  payload: boolean;
}

export interface LocationAction {
  type: LocationKeys.LOCATION_FOUND;
  payload: Position;
}

export interface LLLocation {
  hasPermission: boolean;
  latestLocation: Position;
}
