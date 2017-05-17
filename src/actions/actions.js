import 'isomorphic-fetch';
import {
    MAKE_REQUEST,
    REQUEST_SUCCESS,
    REQUEST_FAILURE
} from './types';

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


export function getResource(type) {
    return (dispatch) => {
        dispatch(makeRequest());
        
        //sending a request to the swampi api
        fetch(`http://swapi.co/api/${type}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error during fetching");
            }
            response.json();
        })
        .then(resource => {
            dispatch(requestSuccess(resource));
        })
        .catch((error) => {
            dispatch(requestFailure(error));
        });
        
    };
}