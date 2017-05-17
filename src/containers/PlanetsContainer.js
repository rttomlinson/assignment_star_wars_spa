import React, {Component} from "react";
import {connect} from "react-redux";
import Planets from "../components/Planets";
import {getResource, getPage} from "../actions/actions";

class PlanetsContainer extends Component {
  componentDidMount() {
    this.props.getResource("planets");
  }

  render() {
    const {resource, isFetching, getPage} = this.props;
    return (
      <div>
        <Planets planets={resource.results} isFetching={isFetching} />
        <button onClick={() => getPage(resource.previous)}>Previous</button>
        <button onClick={() => getPage(resource.next)}>next</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    resource: state.resource,
    isFetching: state.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getResource: type => {
      dispatch(getResource(type));
    },
    getPage: page => {
      console.log(page);
      dispatch(getPage(page));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsContainer);
