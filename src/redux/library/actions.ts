import { LibraryKeys, Libraries, LibraryAction, SelectLibraryAction, LibraryAddAction, Library } from "./types";

export function getLibraries(token: string): LibraryAction {
  return {
    type: LibraryKeys.GET_LIBRARIES,
    payload: { token }
  };
}

export function showDetail(library: Library): SelectLibraryAction {
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
