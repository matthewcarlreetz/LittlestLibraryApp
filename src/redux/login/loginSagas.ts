import { delay } from "redux-saga";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { LoginTypeKeys } from "./types";
import { loginUser } from "../../userApi";

function* login() {
  try {
    const data = yield loginUser();
    yield put({ type: LoginTypeKeys.LOGIN_SUCCESS, data });
  } catch (e) {
    yield put({ type: LoginTypeKeys.LOGIN_FAIL });
  }
}

function* watchLoginAsync() {
  yield takeEvery(LoginTypeKeys.LOGIN, login);
}

export default function* rootSaga() {
  yield all([watchLoginAsync()]);
}
