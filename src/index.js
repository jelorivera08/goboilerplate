import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import createReducer from "./reducers";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { BrowserRouter as Router } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(createReducer(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
