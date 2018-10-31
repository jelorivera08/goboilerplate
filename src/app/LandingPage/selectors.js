import { createSelector } from "reselect";

const selectGlobalState = state => state.get("globalState");

const makeSelectGlobalState = () =>
  createSelector(selectGlobalState, substate => substate.toJS());

export default makeSelectGlobalState;
