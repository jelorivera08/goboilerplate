import { combineReducers } from "redux-immutable";
import globalReducer from "./app/LandingPage/reducer";

export default function createReducer() {
  return combineReducers({
    globalState: globalReducer
  });
}
