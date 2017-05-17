import React, {Component} from "react";
import {connect} from "react-redux";
import Planets from "../components/Planets";

class PlanetsContainer extends Component {
  render() {
    return <Planets />;
  }
}

// export default connect()(PlanetsContainer);
export default PlanetsContainer;
