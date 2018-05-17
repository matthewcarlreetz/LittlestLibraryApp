import {
  LibraryKeys, Libraries, LibraryAction, SelectLibraryAction,
  LibraryAddAction, Library, LibraryImageCapturedAction,
  LibraryImageCaptureStartedAction, LibraryUploadAction,
  LibraryAddCompleteAction
} from "./types";

export function getLibraries(token: string, lat: number, lon: number): LibraryAction {
  return {
    type: LibraryKeys.GET_LIBRARIES,
    payload: { token, lat, lon }
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

export function addLibraryComplete(): LibraryAddCompleteAction {
  return {
    type: LibraryKeys.ADD_LIBRARY_COMPLETE,
    payload: {}
  };
}

export function uploadLibrary(token: string, lat: number, lon: number, imageData: string): LibraryUploadAction {
  return {
    type: LibraryKeys.UPLOAD_LIBRARY,
    payload: { token, lat, lon, imageData }
  };
}

export function imageCaptured(imageData: string): LibraryImageCapturedAction {
  return {
    type: LibraryKeys.IMAGE_CAPTURED,
    payload: imageData
  };
}

export function imageCaptureStarted(): LibraryImageCaptureStartedAction {
  return {
    type: LibraryKeys.IMAGE_CAPTURE_STARTED,
    payload: {}
  };
}
