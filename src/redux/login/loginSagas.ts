import { delay } from "redux-saga";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { LoginTypeKeys } from "./types";
import { loginUser } from "../../userApi";
import { LoginAction } from "./actions";

function* login(action: LoginAction) {
  try {
    const data = yield loginUser(action.data.email, action.data.password);
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
