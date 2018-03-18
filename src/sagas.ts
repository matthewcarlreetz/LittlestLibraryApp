import { fork } from "redux-saga/effects";
import counterSagas from "./redux/counter/counterSagas";

export default function* rootSaga() {
    yield [
        fork(counterSagas)
    ];
}
