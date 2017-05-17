import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PlanetsContainer from "../containers/PlanetsContainer";
import PeopleContainer from "../containers/PeopleContainer";
import NavLinks from "./NavLinks";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavLinks />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <h1>Home</h1>;
              }}
            />
            <Route path="/people" component={PeopleContainer} />
            <Route exact path="/planets" component={PlanetsContainer} />
            <Route path="/planets/:id" component={PlanetsContainer} />
            <Route
              render={() => {
                return <h1>Page not found</h1>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
