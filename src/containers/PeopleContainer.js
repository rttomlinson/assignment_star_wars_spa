import React, {Component} from "react";
import {connect} from "react-redux";
import People from "../components/People";
import {getResource, searchResources} from "../actions/actions";
import Pagination from "../components/Pagination";
class PeopleContainer extends Component {
  componentDidMount() {
    this.props.getResource("https://swapi.co/api/people");
  }

  render() {
    const {resource, isFetching, getResource, searchResources} = this.props;
    let previousUrlFetch = () => getResource(resource.previous);
    let nextUrlFetch = () => getResource(resource.next);

    if (!isFetching) {
      return (
        <div>
          <Pagination previousUrl={previousUrlFetch} nextUrl={nextUrlFetch} />
          <input type="text" onKeyPress={searchResources} />
          <People people={resource.results} isFetching={isFetching} />
          <Pagination previousUrl={previousUrlFetch} nextUrl={nextUrlFetch} />
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
    searchResources: e => {
      if (e.key === "Enter") {
        dispatch(searchResources(e.target.value));
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
