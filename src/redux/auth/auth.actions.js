import { register, logIn } from "../../services/UserService";
import { authActionTypes } from "./auth.types";

export const signUp = (formProps, callback) => async (dispatch) => {
  try {
    const response = await register(formProps);

    dispatch({ type: authActionTypes.AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: authActionTypes.AUTH_ERROR,
      payload: "Email already in use",
    });
  }
};
export const signOut = () => {
  localStorage.removeItem("token");

  return {
    type: authActionTypes.AUTH_USER,
    payload: "",
  };
};

export const signIn = (formProps, callback) => async (dispatch) => {
  try {
    const response = await logIn(formProps);

    dispatch({ type: authActionTypes.AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: authActionTypes.AUTH_ERROR,
      payload: "Invalid login credentials",
    });
  }
};
