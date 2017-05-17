import React, {Component} from "react";
import {connect} from "react-redux";
import Planets from "../components/Planets";
import {getResource} from "../actions/actions";

class PlanetsContainer extends Component {
  componentDidMount() {
    this.props.getResource("planets");
  }

  render() {
    const {resource, isFetching} = this.props;
    return <Planets planets={resource} isFetching={isFetching} />;
  }
}

function mapStateToProps(state) {
  return {
    resource: state.resource.results,
    isFetching: state.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getResource: type => {
      dispatch(getResource(type));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsContainer);
