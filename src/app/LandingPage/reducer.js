import { fromJS } from "immutable";
import { TEST_ACTION } from "./constants";

export const initialState = fromJS({ count: 0 });

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return state.merge({ count: 49 });
    default:
      return state;
  }
}

export default globalReducer;
