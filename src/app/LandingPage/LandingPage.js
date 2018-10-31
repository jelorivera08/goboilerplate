import React, { Component } from "react";
import { connect } from "react-redux";
import makeSelectGlobalState from "./selectors";
import { createStructuredSelector } from "reselect";
import { testAction } from "./actions";

class LandingPage extends Component {
  render() {
    const { globalState, increment } = this.props;
    
    return (
      <React.Fragment>
        <h1>Welcome to the goFluent react boilerplate</h1>
        <h1>{globalState.count}</h1>
        <button onClick={increment}>meaning of life</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  globalState: makeSelectGlobalState()
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(testAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
