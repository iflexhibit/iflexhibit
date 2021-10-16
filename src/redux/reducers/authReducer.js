import { AUTH_LOADING, AUTH_SUCCESS, AUTH_ERROR } from "redux/types/authTypes";

const initialState = {
  isAuthLoading: false,
  isAuthenticated: false,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOADING:
      return { ...state, isAuthLoading: true, isAuthenticated: false };
    case AUTH_SUCCESS:
      return {
        ...state,
        user: payload.user,
        isAuthLoading: false,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        user: null,
        isAuthLoading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
