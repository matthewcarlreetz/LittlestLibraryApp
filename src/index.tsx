import React from "react";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import RootNavigatorContainer from "./navigation/nav";
import rootReducer from "./redux";
import rootSaga from "./sagas";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

const reduxMiddleware = createReactNavigationReduxMiddleware(
  "root",
  (state) => state.nav,
);

export const addListener = createReduxBoundAddListener("root");

const sagaMiddleware = createSagaMiddleware();
const store = compose(applyMiddleware(logger, reduxMiddleware, sagaMiddleware))(createStore)(
  rootReducer
);
sagaMiddleware.run(rootSaga);

export default function AppContainer() {
  return (
    <Provider store={store}>
      <RootNavigatorContainer />
    </Provider>
  );
}
