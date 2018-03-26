import { fork } from "redux-saga/effects";
import counterSagas from "./redux/counter/counterSagas";
import loginSagas from "./redux/login/sagas";
import librarySagas from "./redux/library/sagas";

export default function* rootSaga() {
  yield [fork(counterSagas), fork(loginSagas), fork(librarySagas)];
}
