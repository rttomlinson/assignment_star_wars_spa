import React, {Component} from "react";
import {connect} from "react-redux";
import Planets from "../components/Planets";
import {getResource, getPage} from "../actions/actions";

class PlanetsContainer extends Component {
  componentDidMount() {
    console.log("mount");
    this.props.getResource("https://swapi.co/api/planets");
  }

  componentWillUnmount() {
    console.log("unmount");
  }
  render() {
    console.log(this.props);
    const {resource, isFetching, getResource} = this.props;
    if (!isFetching) {
      return (
        <div>
          <button onClick={() => getResource(resource.previous)}>
            Previous
          </button>
          <button onClick={() => getResource(resource.next)}>next</button>
          <Planets planets={resource.results} isFetching={isFetching} />
          <button onClick={() => getResource(resource.previous)}>
            Previous
          </button>
          <button onClick={() => getResource(resource.next)}>next</button>
        </div>
      );
    } else {
      return <h2>...loading</h2>;
    }
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsContainer);
