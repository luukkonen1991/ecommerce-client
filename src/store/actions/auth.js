import axios from "axios";

import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authLogout = (token) => {
  return {
    type: actionTypes.AUTH_LOGOUT,
    token: token,
  };
};

export const authSignIn = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    };
    console.log(authData);
    axios
      .post("/api/v1/auth/login", authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.token));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const authRegister = (firstName, lastName, email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(authData);
    axios
      .post("/api/v1/auth/register", authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.token));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const authSignout = () => {
  return (dispatch) => {
    axios.get("/api/v1/auth/logout").then((response) => {
      console.log(response);
      dispatch(authLogout(null));
    });
  };
};
