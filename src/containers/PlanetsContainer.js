import React, {Component} from "react";
import {connect} from "react-redux";
import Planets from "../components/Planets";
import {getResource, getPage} from "../actions/actions";

class PlanetsContainer extends Component {
  componentDidMount() {
    console.log("mount");
    this.props.getResource("planets");
  }

  componentWillUnmount() {
    console.log("unmount");
  }
  render() {
    console.log(this.props);
    const {resource, isFetching, getPage} = this.props;
    if (!isFetching) {
      return (
        <div>
          <Planets planets={resource.results} isFetching={isFetching} />
          <button onClick={() => getPage(resource.previous)}>Previous</button>
          <button onClick={() => getPage(resource.next)}>next</button>
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
    },
    getPage: page => {
      console.log(page);
      dispatch(getPage(page));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsContainer);
