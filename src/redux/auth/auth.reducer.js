import { authActionTypes } from "./auth.types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.AUTH_USER:
      return { ...state, authenticated: action.payload };
    case authActionTypes.AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default authReducer;
