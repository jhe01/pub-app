import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";

export default combineReducers({
  event: eventsReducer
});
