import { all } from "redux-saga/effects";
import landingPageSaga from "./app/LandingPage/saga";

export default function* rootSaga() {
  yield all([
    // put future sagas here
    landingPageSaga()
  ]);
}
