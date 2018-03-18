
import { delay } from "redux-saga";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { DECREMENT, LOGIN, DECREMENT_ASYNC, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import { loginUser } from "../../userApi";

function* decrementAsync() {
    yield delay(1000);
    yield put({ type: DECREMENT });
}

function* login() {
    try {
        const data = yield loginUser();
        yield put({ type: LOGIN_SUCCESS, data });
    } catch (e) {
        yield put({ type: LOGIN_FAIL });
    }
}

function* watchDecrementAsync() {
    yield takeEvery(DECREMENT_ASYNC, decrementAsync);
}

function* watchLoginAsync() {
    yield takeEvery(LOGIN, login);
}

export default function* rootSaga() {
    yield all([
        watchDecrementAsync(),
        watchLoginAsync()
    ]);
}
