import { createStore, applyMiddleware } from "redux";
import createReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(createReducer(), applyMiddleware(sagaMiddleware));

// run rootSaga
sagaMiddleware.run(rootSaga);

export default store;
