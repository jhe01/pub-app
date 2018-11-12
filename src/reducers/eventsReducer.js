import { GET_EVENTS, GET_EVENT } from "../actions/type";

const initialState = {
  events: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case GET_EVENT:
      return {
        ...state,
        event: action.payload
      };
    default:
      return state;
  }
}
