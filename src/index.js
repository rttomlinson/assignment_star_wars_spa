import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import {Provider} from "react-redux";


state:{
  fetch:{isFetching:false, error:null},
  planets:[],
  people:[]
}

function planets(
  state = {planets: [], isFetching: false, error: null},
  action
) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case SUCCESS_PLANETS:
      return {
        ...state,
        planets: action.data,
        isFetching: false
      };
    case FAILURE_PLANETS:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

navlinks: people, planets

state: {
  currentResource:[],
  isFetching:[]
}

actions:
requesting
success
failure

getResources(type)
fetch(`api/${type}`)


link -> planetsContainer (mount) onMount (get data) update
link -> peopleContainer
