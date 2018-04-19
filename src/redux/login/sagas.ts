import { delay } from "redux-saga";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { LoginTypeKeys } from "./types";
import { loginUser } from "../../api/userApi";
import { LoginAction } from "./types";

function* login(action: LoginAction) {
  try {
    const payload = yield loginUser(action.payload.email, action.payload.password);
    yield put({ type: LoginTypeKeys.LOGIN_SUCCESS, payload });
  } catch (e) {
    console.log(e);
    yield put({ type: LoginTypeKeys.LOGIN_FAIL });
  }
}

function* watchLoginAsync() {
  yield takeEvery(LoginTypeKeys.LOGIN, login);
}

export default function* rootSaga() {
  yield all([watchLoginAsync()]);
}
