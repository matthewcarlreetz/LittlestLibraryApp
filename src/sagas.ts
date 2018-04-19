import { fork } from "redux-saga/effects";
import loginSagas from "./redux/login/sagas";
import librarySagas from "./redux/library/sagas";

export default function* rootSaga() {
  yield [fork(loginSagas), fork(librarySagas)];
}
