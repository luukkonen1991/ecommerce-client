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

export const updateUserInfo = (data) => {
  return (dispatch) => {
    const updatedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };
    console.log(updatedData);
    axios.put("/api/v1/auth/me", updatedData).then((response) => {
      console.log(response);
      dispatch({
        type: actionTypes.UPDATE_USER_INFO,
        payload: response,
      });
    });
  };
};
