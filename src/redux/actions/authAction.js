import axios from "axios";
import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_TOKEN,
  LOGOUT_SUCCESS,
} from "redux/types/authTypes";
import { clearUser, setUser } from "./userAction";

function setLoading() {
  return { type: AUTH_LOADING };
}

export const setToken = (token) => (dispatch) => {
  const rememberDevice = localStorage.getItem("remember-device");

  const currentToken = localStorage.getItem("token");
  if (rememberDevice === "yes")
    localStorage.setItem("token", token || currentToken);
  sessionStorage.setItem("token", token || currentToken);
  dispatch({ type: SET_TOKEN, payload: { token } });
  dispatch(authUser());
};

export const authUser = () => (dispatch) => {
  dispatch(setLoading());
  const token = sessionStorage.getItem("token");
  axios
    .get(process.env.NEXT_PUBLIC_API_URL + "/api/users/user", {
      headers: { "x-auth-token": token },
    })
    .then((response) => {
      dispatch(setUser(response.data.user));
      return dispatch({
        type: AUTH_SUCCESS,
        payload: { token },
      });
    })
    .catch(() => {
      dispatch(clearUser());
      if (token !== null) {
        localStorage.clear("token");
        sessionStorage.clear("token");
      }
      return dispatch({ type: AUTH_ERROR });
    });
};

export const logout = () => (dispatch) => {
  dispatch(setLoading());
  localStorage.clear("token");
  sessionStorage.clear("token");
  dispatch(clearUser());
  dispatch({ type: LOGOUT_SUCCESS });
  window.location.replace("/api/auth/logout");
};
