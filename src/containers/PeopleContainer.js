import React, {Component} from "react";
import {connect} from "react-redux";
import People from "../components/People";
import {getResource, getPage, searchResources} from "../actions/actions";

class PeopleContainer extends Component {
  componentDidMount() {
    this.props.getResource("https://swapi.co/api/people");
  }

  render() {
    console.log(this.props);
    const {resource, isFetching, getResource, searchResources} = this.props;
    if (!isFetching) {
      console.log("render", resource.next);
      return (
        <div>
          <button onClick={() => getResource(resource.previous)}>
            Previous
          </button>
          <button onClick={() => getResource(resource.next)}>next</button>
          <input type="text" onKeyPress={searchResources} />
          <People people={resource.results} isFetching={isFetching} />
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
    },
    searchResources: e => {
      if (e.key === "Enter") {
        dispatch(searchResources(e.target.value));
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
