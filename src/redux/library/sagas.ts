import { delay } from "redux-saga";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { LibraryKeys } from "./types";
import { fetchLibraries } from "../../api/libraryApi";
import { LibraryAction } from "./actions";

function* getLibraries(action: LibraryAction) {
    try {
        const libraries = yield fetchLibraries(action.payload.token);
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
