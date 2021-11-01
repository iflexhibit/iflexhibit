import axios from "axios";
import {
  SET_POST,
  FETCH_COMMENTS,
  COMMENTS_ERROR,
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
