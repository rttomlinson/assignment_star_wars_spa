import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import {
    MAKE_REQUEST,
    REQUEST_SUCCESS,
    REQUEST_FAILURE
} from './actions/types';
import thunk from 'redux-thunk';

const INITIAL_STATE = {
    isFetching: false,
    error: null,
    resource: []
}

function swampiApp(
  state = INITIAL_STATE,
  action
) {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        resource: action.data,
        isFetching: false
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}


const store = createStore(swampiApp, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

