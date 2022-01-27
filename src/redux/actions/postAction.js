import axios from "axios";
import {
  SET_POST,
  FETCH_COMMENTS,
  COMMENTS_ERROR,
  FETCH_IS_LIKED,
} from "redux/types/postTypes";

export const setPost = (post) => (dispatch) => {
  dispatch({ type: SET_POST, payload: { post } });
};

export const fetchComments = (postId) => (dispatch) => {
  if (!postId) return dispatch({ type: COMMENTS_ERROR });
  axios
    .get("/api/posts/comments/" + postId)
    .then((response) =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: { comments: response.data.comments },
      })
    )
    .catch(() =>
      dispatch({
        type: COMMENTS_ERROR,
      })
    );
};

export const fetchUserPostInteraction = (postId) => (dispatch, getState) => {
  const { token } = getState().auth;
  if (!token) return;
  axios
    .post(
      process.env.NEXT_PUBLIC_API_URL + "/api/posts/isliked/" + postId,
      null,
      {
        headers: { "x-auth-token": token },
      }
    )
    .then((response) =>
      dispatch({
        type: FETCH_IS_LIKED,
        payload: { isLiked: response.data.isLiked },
      })
    );
};
