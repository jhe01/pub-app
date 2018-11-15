import { GET_EVENTS, GET_EVENT } from "./type";
import axios from "axios";

export const getEvents = () => async dispatch => {
  const res = await axios.get("/api/events/get");

  dispatch({
    type: GET_EVENTS,
    payload: res.data
  });
};

export const getEvent = id => async dispatch => {
  const res = await axios.get(`/api/events/get/${id}`);

  dispatch({
    type: GET_EVENT,
    payload: res.data
  });
};
