import React, {Component} from "react";
import {connect} from "react-redux";
import Planet from "../components/Planet";
import {getPage} from "../actions/actions";
import {withRouter} from "react-router-dom";

class PlanetContainer extends Component {
  componentDidMount() {
    //this.props.getPage("planets");
    let id = this.props.match.params.id;
    this.props.getPage(`http://swapi.co/api/planets/${id}`);
  }

  render() {
    const {resource, isFetching} = this.props;
    return (
      <div>
        <Planet planet={resource} isFetching={isFetching} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    resource: state.currentResource,
    isFetching: state.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPage: page => {
      dispatch(getPage(page));
    }
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlanetContainer)
);
