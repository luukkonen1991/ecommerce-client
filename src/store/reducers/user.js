import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/util";

const INITIAL_STATE = {
  hidden: true,
  userId: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

const fetchUserInfo = (state, payload) => {
  return updateObject(state, {
    userId: payload.data.data.id,
    firstName: payload.data.data.firstName,
    lastName: payload.data.data.lastName,
    email: payload.data.data.email,
    role: payload.data.data.role,
  });
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_USER_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case actionTypes.FETCH_USER_INFO:
      return fetchUserInfo(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
