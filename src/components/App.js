import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PlanetsContainer from "../containers/PlanetsContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route path="/planets" component={PlanetsContainer} />
          <Route
            render={() => {
              return <h1>Page not found</h1>;
            }}
          />
        </Switch>

      </Router>
    );
  }
}

export default App;
