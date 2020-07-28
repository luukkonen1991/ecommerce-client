import * as actionTypes from "./actionTypes";
import axios from "axios";

export const toggleUserHidden = () => ({
  type: actionTypes.TOGGLE_USER_HIDDEN,
});

export const fetchUserInfo = () => {
  return (dispatch) => {
    axios.get("/api/v1/auth/me").then((response) => {
      console.log(response);
      dispatch({
        type: actionTypes.FETCH_USER_INFO,
        payload: response,
      });
    });
  };
};
