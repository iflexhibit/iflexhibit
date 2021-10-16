import axios from "axios";
import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_TOKEN,
  LOGOUT_SUCCESS,
} from "redux/types/authTypes";

function setLoading() {
  return { type: AUTH_LOADING };
}

export const setToken = (token) => (dispatch) => {
  const currentToken = local.getItem("token");
  localStorage.setItem("token", token || currentToken);
  dispatch({ type: SET_TOKEN, payload: { token } });
  dispatch(authUser());
};

export const authUser = () => (dispatch) => {
  dispatch(setLoading());
  const token = localStorage.getItem("token");
  axios
    .get("/api/users/user", { headers: { "x-auth-token": token } })
    .then((response) => {
      return dispatch({
        type: AUTH_SUCCESS,
        payload: { user: response.data.user },
      });
    })
    .catch(() => {
      return dispatch({ type: AUTH_ERROR });
    });
};

export const logout = () => (dispatch) => {
  dispatch(setLoading());
  localStorage.clear("token");
  dispatch({ type: LOGOUT_SUCCESS });
  window.location.replace("/api/auth/logout");
};
