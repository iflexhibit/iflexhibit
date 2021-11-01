import axios from "axios";
import {
  CLEAR_USER,
  SET_USER,
  POST_COMMENT_LOADING,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_ERROR,
} from "../types/userTypes";
import { fetchComments } from "./postAction";

function setNewCommentLoading() {
  return { type: POST_COMMENT_LOADING };
}
export const setUser = (user) => (dispatch) => {
  dispatch({ type: SET_USER, payload: { user } });
};

export const clearUser = () => (dispatch) => {
  dispatch({ type: CLEAR_USER });
};

export const postComment = (postId, commentBody) => (dispatch, getState) => {
  const { token } = getState().auth;
  dispatch(setNewCommentLoading());
  if (!commentBody)
    return dispatch({ type: POST_COMMENT_ERROR, msg: "Missing comment" });
  axios
    .post(
      "/api/users/comment",
      { postId, commentBody },
      {
        headers: {
          "x-auth-token": token,
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => {
      dispatch({ type: POST_COMMENT_SUCCESS });
      dispatch(fetchComments(postId));
    })
    .catch((error) => {
      dispatch({
        type: POST_COMMENT_ERROR,
        payload: { error: error.response.data.msg },
      });
    });
};
