import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/util';

const initialState = {
  token: null,
  loading: false
};

const authStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;