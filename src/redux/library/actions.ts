import { LibraryKeys } from "./types";
import { Library } from "../../models/library";

export interface LibraryAction {
  type: LibraryKeys.GET_LIBRARIES;
  payload: {
    token: string;
  };
}

export interface LibraryAddAction {
  type: LibraryKeys.ADD_LIBRARY;
  payload: {
  };
}

export interface LibraryDetailAction {
  type: LibraryKeys.SHOW_LIBRARY_DETAIL;
  payload: {
    library: Library;
  };
}

export function getLibraries(token: string): LibraryAction {
  return {
    type: LibraryKeys.GET_LIBRARIES,
    payload: { token }
  };
}

export function showDetail(library: Library): LibraryDetailAction {
  return {
    type: LibraryKeys.SHOW_LIBRARY_DETAIL,
    payload: { library }
  };
}

export function addLibrary(): LibraryAddAction {
  return {
    type: LibraryKeys.ADD_LIBRARY,
    payload: {}
  };
}
