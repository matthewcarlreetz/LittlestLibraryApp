export enum LocationKeys {
  ASK_PERMISSION = "ASK_PERMISSION",
  PERMISSION_RESPONSE = "PERMISSION_RESPONSE",
  REQUEST_LOCATION = "REQUEST_LOCATION",
  LOCATION_FOUND = "LOCATION_FOUND"
}

export interface AskPermissionAction {
  type: LocationKeys.ASK_PERMISSION;
  payload: {};
}

export interface PermissionResponseAction {
  type: LocationKeys.PERMISSION_RESPONSE;
  payload: boolean;
}

export interface LocationFoundAction {
  type: LocationKeys.LOCATION_FOUND;
  payload: Position;
}

export interface RequestLocationAction {
  type: LocationKeys.REQUEST_LOCATION;
  payload: {};
}

export interface LLLocation {
  hasPermission: boolean;
  latestLocation: Position;
}
