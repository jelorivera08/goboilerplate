import React, { Component, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const LandingPage = lazy(() => import("./LandingPage/LandingPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage/NotFoundPage"));

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

class App extends Component {
  state = {
    error: false
  };

  componentDidCatch() {
    this.setState({
      error: true
    });
  }
  
  render() {
    if (this.state.error) {
      return <div>error encountered</div>
    }

    return (
      <Switch>
        <Route exact path="/" component={WaitingComponent(LandingPage)} />
        <Route component={WaitingComponent(NotFoundPage)} />
      </Switch>
    );
  }
}

export default App;
