import { delay } from "redux-saga";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { LibraryKeys, LibraryAction } from "./types";
import { fetchLibraries } from "../../api/libraryApi";

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

export default function* rootSaga() {
    yield all([watchGetLibraries()]);
}
