import {MAKE_REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE} from "./actions/types";

const INITIAL_STATE = {
  isFetching: false,
  error: null,
  resource: {
    count: 0,
    next: null,
    previous: null,
    results: []
  }
};

export function swampiApp(state = INITIAL_STATE, action) {
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
