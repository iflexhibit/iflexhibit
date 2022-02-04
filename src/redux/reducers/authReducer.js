import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_TOKEN,
  LOGOUT_SUCCESS,
} from "redux/types/authTypes";

const initialState = {
  isAuthLoading: true,
  isAuthenticated: false,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload.token };
    case AUTH_LOADING:
      return { ...state, isAuthLoading: true, isAuthenticated: false };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthLoading: false,
        isAuthenticated: true,
        token: payload.token,
      };
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthLoading: false,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};
