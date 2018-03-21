import { delay } from "redux-saga";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { DECREMENT, DECREMENT_ASYNC } from "./types";

function* decrementAsync() {
  yield delay(1000);
  yield put({ type: DECREMENT });
}

function* watchDecrementAsync() {
  yield takeEvery(DECREMENT_ASYNC, decrementAsync);
}

export default function* rootSaga() {
  yield all([watchDecrementAsync()]);
}
