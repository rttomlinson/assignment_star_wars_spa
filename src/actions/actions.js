import "isomorphic-fetch";
import {
  MAKE_REQUEST,
  REQUEST_RESOURCES_SUCCESS,
  REQUEST_FAILURE,
  REQUEST_CURRENT_RESOURCE_SUCCESS
} from "./types";

export function makeRequest() {
  return {
    type: MAKE_REQUEST
  };
}

export function requestResourcesSuccess(data) {
  return {
    type: REQUEST_RESOURCES_SUCCESS,
    data
  };
}

export function requestCurrentResourceSuccess(data) {
  return {
    type: REQUEST_CURRENT_RESOURCE_SUCCESS,
    data
  };
}

export function requestFailure(error) {
  return {
    type: REQUEST_FAILURE,
    error
  };
}

export function getResource(url) {
  return dispatch => {
    dispatch(makeRequest());
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error during fetching");
        }
        return response.json();
      })
      .then(resource => {
        dispatch(requestResourcesSuccess(resource));
      })
      .catch(error => {
        console.log(error);
        dispatch(requestFailure(error));
      });
  };
}

export function getPage(url) {
  return dispatch => {
    console.log(url);
    dispatch(makeRequest());
    console.log("url", url);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error during fetching");
        }
        return response.json();
      })
      .then(resource => {
        dispatch(requestCurrentResourceSuccess(resource));
      })
      .catch(error => {
        console.log(error);
        dispatch(requestFailure(error));
      });
  };
}

export function searchResources(query) {
  return dispatch => {
    dispatch(makeRequest());
    fetch(`https://swapi.co/api/people/?search=${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error during fetching");
        }
        return response.json();
      })
      .then(resource => {
        dispatch(requestResourcesSuccess(resource));
      })
      .catch(error => {
        console.log(error);
        dispatch(requestFailure(error));
      });
  };
}
