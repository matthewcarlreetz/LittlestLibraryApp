import { fork } from "redux-saga/effects";
import counterSagas from "./redux/counter/counterSagas";
import loginSagas from "./redux/login/loginSagas";

export default function* rootSaga() {
  yield [fork(counterSagas), fork(loginSagas)];
}
