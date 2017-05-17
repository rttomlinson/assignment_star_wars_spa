import {MAKE_REQUEST, REQUEST_RESOURCES_SUCCESS, REQUEST_FAILURE, REQUEST_CURRENT_RESOURCE_SUCCESS} from "./actions/types";

const INITIAL_STATE = {
  isFetching: false,
  error: null,
  resource: {
    count: 0,
    next: null,
    previous: null,
    results: []
  },
  currentResource: {}
};

export function swampiApp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case REQUEST_RESOURCES_SUCCESS:
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
    case REQUEST_CURRENT_RESOURCE_SUCCESS:
        return {
            ...state,
            isFetching: false,
            currentResource: action.data
        };
    default:
      return state;
  }
}
