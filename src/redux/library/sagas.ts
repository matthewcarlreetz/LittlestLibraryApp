import { delay } from "redux-saga";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { LibraryKeys, LibraryAction, LibraryUploadAction, Library } from "./types";
import { fetchLibraries, addLibrary } from "../../api/libraryApi";

function* getLibraries(action: LibraryAction) {
    try {
        const libraries = yield fetchLibraries(action.payload.token, action.payload.lat, action.payload.lon);
        yield put({ type: LibraryKeys.GET_LIBRARY_SUCCESS, payload: { libraries } });
    } catch (error) {
        yield put({ type: LibraryKeys.GET_LIBRARY_FAIL, payload: { error: error.message } });
    }
}

function* watchGetLibraries() {
    yield takeEvery(LibraryKeys.GET_LIBRARIES, getLibraries);
}

function* uploadLibrary(action: LibraryUploadAction) {
    try {
        const library = yield addLibrary(action.payload.token, action.payload.lat, action.payload.lon, action.payload.imageData);
        const payload = library as Library;
        if (payload.response.ok) {
            yield put({ type: LibraryKeys.UPLOAD_LIBRARY_SUCCESS, payload: library });
        } else {
            yield put({ type: LibraryKeys.UPLOAD_LIBRARY_FAIL, payload: { error: library.message } });
        }
    } catch (error) {
        yield put({ type: LibraryKeys.UPLOAD_LIBRARY_FAIL, payload: { error: error.message } });
    }
}

function* watchUploadLibrary() {
    yield takeEvery(LibraryKeys.UPLOAD_LIBRARY, uploadLibrary);
}

export default function* rootSaga() {
    yield all([watchGetLibraries(), watchUploadLibrary()]);
}
