import { delay } from "redux-saga";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { LoginTypeKeys, AuthResponse } from "./types";
import { loginUser } from "../../api/userApi";
import { LoginAction } from "./types";
import { AsyncStorage } from "react-native";

const tokenKey = "userToken";

function* login(action: LoginAction) {
  try {
    const payload = yield loginUser(action.payload.email, action.payload.password);
    const auth = payload as AuthResponse;
    if (payload.response.ok) {
      yield AsyncStorage.setItem(tokenKey, auth.auth_token);
      yield put({ type: LoginTypeKeys.LOGIN_SUCCESS, payload });
    } else {
      yield put({ type: LoginTypeKeys.LOGIN_FAIL, payload: { error: auth.message } });
    }
  } catch (e) {
    console.log(e);
    yield put({ type: LoginTypeKeys.LOGIN_FAIL });
  }
}

function* watchLoginAsync() {
  yield takeEvery(LoginTypeKeys.LOGIN, login);
}

function* getStoredToken(action: LoginAction) {
  const token = yield AsyncStorage.getItem(tokenKey);
  yield put({ type: LoginTypeKeys.FETCHED_TOKEN, payload: token });
}

function* watchGetStoredTokenAsync() {
  yield takeEvery(LoginTypeKeys.GET_STORED_TOKEN, getStoredToken);
}

export default function* rootSaga() {
  yield all([watchLoginAsync(), watchGetStoredTokenAsync()]);
}
