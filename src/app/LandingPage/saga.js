import { takeLatest } from "redux-saga/effects";
import { TEST_ACTION } from "./constants";

// Individual exports for testing
export default function* landingPageSaga() {
  yield takeLatest(TEST_ACTION, testAction);
}

function* testAction() {
  yield alert("sagas ready");
}
