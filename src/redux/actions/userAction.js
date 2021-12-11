import axios from "axios";
import {
  CLEAR_USER,
  SET_USER,
  POST_COMMENT_LOADING,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_ERROR,
  PROFILE_UPDATE_LOADING,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_ERROR,
  PREFERENCES_UPDATE_LOADING,
  PREFERENCES_UPDATE_SUCCESS,
  PREFERENCES_UPDATE_ERROR,
} from "../types/userTypes";
import { fetchComments } from "./postAction";
import { authUser } from "./authAction";

function setNewCommentLoading() {
  return { type: POST_COMMENT_LOADING };
}

function setNewProfileLoading() {
  return { type: PROFILE_UPDATE_LOADING };
}

function setNewPreferencesLoading() {
  return { type: PREFERENCES_UPDATE_LOADING };
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

export const updateProfile = (newProfile) => (dispatch, getState) => {
  const { token } = getState().auth;
  const { user } = getState().user;
  dispatch(setNewProfileLoading());
  axios
    .post(
      "/api/users/profile",
      {
        username: newProfile.username || user.username,
        contact: newProfile.contact || user.contact,
        bio: newProfile.bio || user.bio,
      },
      {
        headers: {
          "x-auth-token": token,
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => {
      dispatch({ type: PROFILE_UPDATE_SUCCESS });
      dispatch(authUser());
    })
    .catch((error) => {
      dispatch({
        type: PROFILE_UPDATE_ERROR,
        payload: { error: error.response.data.msg },
      });
    });
};

export const updatePreferences = (newPreferences) => (dispatch, getState) => {
  const { token } = getState().auth;
  const { user } = getState().user;
  dispatch(setNewPreferencesLoading());
  axios
    .post(
      "/api/users/preferences",
      {
        showName:
          newPreferences.showName === null
            ? user.preferences.showName
            : newPreferences.showName,
        showEmail:
          newPreferences.showEmail === null
            ? user.preferences.showEmail
            : newPreferences.showEmail,
        showContact:
          newPreferences.showContact === null
            ? user.preferences.showContact
            : newPreferences.showContact,
      },
      {
        headers: {
          "x-auth-token": token,
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => {
      dispatch({ type: PREFERENCES_UPDATE_SUCCESS });
      dispatch(authUser());
    })
    .catch((error) => {
      dispatch({
        type: PREFERENCES_UPDATE_ERROR,
        payload: { error: error.response.data.msg },
      });
    });
};

export const submitPost = (post) => (dispatch, getState) => {
  const { token } = getState().auth;
  const formData = new FormData();

  const data = {
    image: post.image,
    title: post.title,
    description: post.description,
    tags: post.tags,
  };

  formData.append("file", data.image);
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("tags", data.tags);

  axios
    .post(process.env.NEXT_PUBLIC_API_URL + "/api/posts", formData, {
      headers: {
        "x-auth-token": token,
        "Content-Type": "application/json",
      },
    })
    .then((response) =>
      window.location.replace("/post/" + response.data.post.id)
    )
    .catch((error) => console.log(error.response.data));
};
