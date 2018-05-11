export enum LibraryKeys {
  GET_LIBRARIES = "GET_LIBRARIES",
  GET_LIBRARY_SUCCESS = "GET_LIBRARY_SUCCESS",
  GET_LIBRARY_FAIL = "GET_LIBRARY_FAIL",
  SHOW_LIBRARY_DETAIL = "SHOW_LIBRARY_DETAIL",
  ADD_LIBRARY = "ADD_LIBRARY",
  UPLOAD_LIBRARY = "UPLOAD_LIBRARY",
  UPLOAD_LIBRARY_SUCCESS = "UPLOAD_LIBRARY_SUCCESS",
  UPLOAD_LIBRARY_FAIL = "UPLOAD_LIBRARY_FAIL",
  IMAGE_CAPTURED = "IMAGE_CAPTURED",
  IMAGE_CAPTURE_STARTED = "IMAGE_CAPTURE_STARTED"
}

export interface Libraries {
  libraries: [Library];
  error: string;
  selectedLibrary: Library;
  libraryToAdd: {
    imageData: string;
  };
}

export interface SuccessAction {
  type: LibraryKeys.GET_LIBRARY_SUCCESS;
  payload: Libraries;
}

export interface FailAction {
  type: LibraryKeys.GET_LIBRARY_FAIL;
  payload: Libraries;
}

export interface SelectLibraryAction {
  type: LibraryKeys.SHOW_LIBRARY_DETAIL;
  payload: { library: Library };
}

export interface LibraryAction {
  type: LibraryKeys.GET_LIBRARIES;
  payload: {
    token: string,
    lat: number,
    lon: number
  };
}

export interface LibraryAddAction {
  type: LibraryKeys.ADD_LIBRARY;
  payload: {
  };
}

export interface LibraryUploadAction {
  type: LibraryKeys.UPLOAD_LIBRARY;
  payload: {
    token: string,
    lat: number,
    lon: number
    imageData: string
  };
}

export interface LibraryUploadSuccessAction {
  type: LibraryKeys.UPLOAD_LIBRARY_SUCCESS;
  payload: Library;
}

export interface LibraryUploadFailAction {
  type: LibraryKeys.UPLOAD_LIBRARY_FAIL;
  payload: {};
}

export interface LibraryImageCapturedAction {
  type: LibraryKeys.IMAGE_CAPTURED;
  payload: string;
}

export interface LibraryImageCaptureStartedAction {
  type: LibraryKeys.IMAGE_CAPTURE_STARTED;
  payload: {};
}

export interface Library {
  address: string;
  city: string;
  state: string;
  zip: number;
  lat: number;
  lon: number;
  id: number;
  name: string;
  image: {
    url: string;
  };
}
