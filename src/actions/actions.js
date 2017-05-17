import "isomorphic-fetch";
import {MAKE_REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE} from "./types";

export function makeRequest() {
  return {
    type: MAKE_REQUEST
  };
}

export function requestSuccess(data) {
  return {
    type: REQUEST_SUCCESS,
    data
  };
}

export function requestFailure(error) {
  return {
    type: REQUEST_FAILURE,
    error
  };
}

export function getResource(type, page = 1) {
  return dispatch => {
    dispatch(makeRequest());
    const myHeaders = new Headers({
        Origin: 'https://vikingcodeschool-rttomlinson.c9users.io'
    });
    const options = {
        headers: myHeaders,
        mode: 'cors'
    };
    
    
    //sending a request to the swampi api
    fetch(`https://crossorigin.me/http://swapi.co/api/${type}/?page=${page}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error during fetching");
        }
        return response.json();
      })
      .then(resource => {
        dispatch(requestSuccess(resource));
      })
      .catch(error => {
        console.log(error);
        dispatch(requestFailure(error));
      });
  };
}
