import React from "react";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import Login from "./containers/Login";
import Counter from "./containers/Counter";
import rootReducer from "./redux";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware(logger);
const store = compose(applyMiddleware(sagaMiddleware))(createStore)(
  rootReducer
);
sagaMiddleware.run(rootSaga);

export default function AppContainer() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}
