import React, {Component} from "react";
import {connect} from "react-redux";
import People from "../components/People";
import {getResource} from "../actions/actions";

class PeopleContainer extends Component {
  componentDidMount() {
    this.props.getResource("people");
  }

  render() {
    const {resource, isFetching} = this.props;
    return <People people={resource} isFetching={isFetching} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
