import { fork } from "redux-saga/effects";
import loginSagas from "./redux/login/sagas";
import librarySagas from "./redux/library/sagas";
import locationSagas from "./redux/location/sagas";

export default function* rootSaga() {
  yield [fork(loginSagas), fork(librarySagas), fork(locationSagas)];
}
