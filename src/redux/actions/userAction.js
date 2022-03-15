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
  PROFILE_UPDATE_MESSAGE,
  PREFERENCES_UPDATE_LOADING,
  PREFERENCES_UPDATE_SUCCESS,
  PREFERENCES_UPDATE_ERROR,
  UPLOAD_LOADING,
  UPLOAD_ERROR,
  UPLOAD_SUCCESS,
  UPLOAD_MESSAGE,
  PREFERENCES_UPDATE_MESSAGE,
  DELETE_LOADING,
  DELETE_MESSAGE,
  DELETE_SUCCESS,
  DELETE_ERROR,
  FETCH_MY_POSTS,
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

export const fetchMyPosts = (params) => (dispatch, getState) => {
  const { token } = getState().auth;

  if (!token) return;

  axios
    .post(process.env.NEXT_PUBLIC_API_URL + "/api/users/posts", null, {
      headers: { "x-auth-token": token },
      params,
    })
    .then((response) => {
      dispatch({
        type: FETCH_MY_POSTS,
        payload: { posts: response.data.posts, results: response.data.results },
      });
    })
    .catch(() =>
      dispatch({
        type: FETCH_MY_POSTS,
        payload: { posts: [], results: null },
      })
    );
};

export const updateAvatar = (image) => (dispatch, getState) => {
  if (!image) return;
  const { token } = getState().auth;

  dispatch(setNewProfileLoading());
  dispatch({
    type: PROFILE_UPDATE_MESSAGE,
    payload: { feedbackMsg: "Saving changes", msgType: "warning" },
  });

  const formData = new FormData();
  formData.append("file", image);

  if (image && image.size > 5000000) {
    dispatch({
      type: PROFILE_UPDATE_ERROR,
    });
    dispatch({
      type: PROFILE_UPDATE_MESSAGE,
      payload: {
        feedbackMsg: "Avatar image must not exceed 5 MB",
        msgType: "error",
      },
    });
    dispatch(authUser());
    setTimeout(() => {
      dispatch({
        type: PROFILE_UPDATE_MESSAGE,
        payload: { feedbackMsg: null, msgType: null },
      });
    }, 5000);
  }

  axios
    .post(process.env.NEXT_PUBLIC_API_URL + "/api/users/avatar", formData, {
      headers: {
        "x-auth-token": token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch({ type: PROFILE_UPDATE_SUCCESS });
      dispatch({
        type: PROFILE_UPDATE_MESSAGE,
        payload: { feedbackMsg: response.data.msg, msgType: "success" },
      });
      setTimeout(() => {
        dispatch({
          type: PROFILE_UPDATE_MESSAGE,
          payload: { feedbackMsg: null, msgType: null },
        });
        window.location.reload();
      }, 5000);
    })
    .catch((error) => {
      dispatch({
        type: PROFILE_UPDATE_ERROR,
      });
      dispatch({
        type: PROFILE_UPDATE_MESSAGE,
        payload: { feedbackMsg: error.response.data.msg, msgType: "error" },
      });
      dispatch(authUser());
      setTimeout(() => {
        dispatch({
          type: PROFILE_UPDATE_MESSAGE,
          payload: { feedbackMsg: null, msgType: null },
        });
      }, 5000);
    });
};

export const updateBackground = (image) => (dispatch, getState) => {
  if (!image) return;
  const { token } = getState().auth;

  dispatch(setNewProfileLoading());
  dispatch({
    type: PROFILE_UPDATE_MESSAGE,
    payload: { feedbackMsg: "Saving changes", msgType: "warning" },
  });

  const formData = new FormData();
  formData.append("file", image);

  if (image && image.size > 5000000) {
    dispatch({
      type: PROFILE_UPDATE_ERROR,
    });
    dispatch({
      type: PROFILE_UPDATE_MESSAGE,
      payload: {
        feedbackMsg: "Background image must not exceed 5 MB",
        msgType: "error",
      },
    });
    dispatch(authUser());
    setTimeout(() => {
      dispatch({
        type: PROFILE_UPDATE_MESSAGE,
        payload: { feedbackMsg: null, msgType: null },
      });
    }, 5000);
  }

  axios
    .post(process.env.NEXT_PUBLIC_API_URL + "/api/users/background", formData, {
      headers: {
        "x-auth-token": token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch({ type: PROFILE_UPDATE_SUCCESS });
      dispatch({
        type: PROFILE_UPDATE_MESSAGE,
        payload: { feedbackMsg: response.data.msg, msgType: "success" },
      });
      setTimeout(() => {
        dispatch({
          type: PROFILE_UPDATE_MESSAGE,
          payload: { feedbackMsg: null, msgType: null },
        });
        window.location.reload();
      }, 5000);
    })
    .catch((error) => {
      dispatch({
        type: PROFILE_UPDATE_ERROR,
      });
      dispatch({
        type: PROFILE_UPDATE_MESSAGE,
        payload: { feedbackMsg: error.response.data.msg, msgType: "error" },
      });
      dispatch(authUser());
      setTimeout(() => {
        dispatch({
          type: PROFILE_UPDATE_MESSAGE,
          payload: { feedbackMsg: null, msgType: null },
        });
      }, 5000);
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
    .then((response) => {
      dispatch({ type: PROFILE_UPDATE_SUCCESS });
      dispatch({
        type: PROFILE_UPDATE_MESSAGE,
        payload: { feedbackMsg: response.data.msg, msgType: "success" },
      });
      dispatch(authUser());
      setTimeout(() => {
        dispatch({
          type: PROFILE_UPDATE_MESSAGE,
          payload: { feedbackMsg: null, msgType: null },
        });
      }, 5000);
    })
    .catch((error) => {
      dispatch({
        type: PROFILE_UPDATE_ERROR,
      });
      dispatch({
        type: PROFILE_UPDATE_MESSAGE,
        payload: { feedbackMsg: error.response.data.msg, msgType: "error" },
      });
      dispatch(authUser());
      setTimeout(() => {
        dispatch({
          type: PROFILE_UPDATE_MESSAGE,
          payload: { feedbackMsg: null, msgType: null },
        });
      }, 5000);
    });
};

export const updatePreferences = (newPreferences) => (dispatch, getState) => {
  const { token } = getState().auth;
  const { user } = getState().user;
  dispatch(setNewPreferencesLoading());
  dispatch({
    type: PREFERENCES_UPDATE_MESSAGE,
    payload: { feedbackMsg: "Saving changes", msgType: "warning" },
  });
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
    .then((response) => {
      dispatch({ type: PREFERENCES_UPDATE_SUCCESS });
      dispatch({
        type: PREFERENCES_UPDATE_MESSAGE,
        payload: { feedbackMsg: response.data.msg, msgType: "success" },
      });
      setTimeout(
        () =>
          dispatch({
            type: PREFERENCES_UPDATE_MESSAGE,
            payload: { feedbackMsg: null, msgType: null },
          }),
        5000
      );
    })
    .catch((error) => {
      dispatch({
        type: PREFERENCES_UPDATE_ERROR,
      });
      dispatch({
        type: PREFERENCES_UPDATE_MESSAGE,
        payload: { feedbackMsg: error.response.data.msg, msgType: "error" },
      });
      setTimeout(
        () =>
          dispatch({
            type: PREFERENCES_UPDATE_MESSAGE,
            payload: { feedbackMsg: null, msgType: null },
          }),
        5000
      );
    });
};

export const submitPost = (post, degreePrograms) => (dispatch, getState) => {
  const { token } = getState().auth;
  const { user } = getState().user;
  const formData = new FormData();

  const data = {
    image: post.image,
    title: post.title,
    description: post.description,
    tags: post.tags,
    watermark: post.watermark,
    video: post.video ? post.video : null,
  };

  if (post.schoolwork) {
    data.tags = [
      "schoolwork",
      degreePrograms.find((p) => p.value == post.program).label,
      ...data.tags,
    ];
  }

  formData.append("imageFile", data.image);
  data.video && formData.append("videoFile", data.video);
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append(
    "tags",
    data.tags.map((tag) => encodeURIComponent(tag))
  );
  formData.append("watermark", data.watermark);

  if (!user.permissions.submitPost) {
    dispatch({
      type: UPLOAD_ERROR,
    });
    dispatch({
      type: UPLOAD_MESSAGE,
      payload: { msg: "You are currently banned", type: "error" },
    });
    setTimeout(
      () =>
        dispatch({
          type: UPLOAD_MESSAGE,
          payload: { msg: null, type: null },
        }),
      5000
    );
    return;
  }

  if (!data.image && !data.video) {
    dispatch({
      type: UPLOAD_ERROR,
    });
    dispatch({
      type: UPLOAD_MESSAGE,
      payload: { msg: "Image or Video required", type: "error" },
    });
    setTimeout(
      () =>
        dispatch({
          type: UPLOAD_MESSAGE,
          payload: { msg: null, type: null },
        }),
      5000
    );
    return;
  }

  if (data.video && !data.image) {
    dispatch({
      type: UPLOAD_ERROR,
    });
    dispatch({
      type: UPLOAD_MESSAGE,
      payload: { msg: "Video thumbnail required", type: "error" },
    });
    setTimeout(
      () =>
        dispatch({
          type: UPLOAD_MESSAGE,
          payload: { msg: null, type: null },
        }),
      5000
    );
    return;
  }

  if (data.image && data.image.size > 10000000) {
    dispatch({
      type: UPLOAD_ERROR,
    });
    dispatch({
      type: UPLOAD_MESSAGE,
      payload: { msg: "Image must not exceed 10 MB", type: "error" },
    });
    setTimeout(
      () =>
        dispatch({
          type: UPLOAD_MESSAGE,
          payload: { msg: null, type: null },
        }),
      5000
    );
    return;
  }

  if (data.video && data.video.size > 100000000) {
    dispatch({
      type: UPLOAD_ERROR,
    });
    dispatch({
      type: UPLOAD_MESSAGE,
      payload: { msg: "Video must not exceed 100 MB", type: "error" },
    });
    setTimeout(
      () =>
        dispatch({
          type: UPLOAD_MESSAGE,
          payload: { msg: null, type: null },
        }),
      5000
    );
    return;
  }

  if (!data.title) {
    dispatch({
      type: UPLOAD_ERROR,
    });
    dispatch({
      type: UPLOAD_MESSAGE,
      payload: { msg: "Title required", type: "error" },
    });
    setTimeout(
      () =>
        dispatch({
          type: UPLOAD_MESSAGE,
          payload: { msg: null, type: null },
        }),
      5000
    );
    return;
  }

  if (!data.title.trim().length > 0) {
    dispatch({
      type: UPLOAD_ERROR,
    });
    dispatch({
      type: UPLOAD_MESSAGE,
      payload: { msg: "Title required", type: "error" },
    });
    setTimeout(
      () =>
        dispatch({
          type: UPLOAD_MESSAGE,
          payload: { msg: null, type: null },
        }),
      5000
    );
    return;
  }

  dispatch({ type: UPLOAD_LOADING });
  dispatch({
    type: UPLOAD_MESSAGE,
    payload: {
      msg: "Please wait...",
      type: "warning",
    },
  });
  axios
    .post(process.env.NEXT_PUBLIC_API_URL + "/api/posts", formData, {
      headers: {
        "x-auth-token": token,
        "Content-Type": "application/json",
      },
    })
    .then(() => {
      dispatch({ type: UPLOAD_SUCCESS });
      dispatch({
        type: UPLOAD_MESSAGE,
        payload: {
          msg: "Post submitted for approval",
          type: "success",
        },
      });
      setTimeout(() => {
        dispatch({
          type: UPLOAD_MESSAGE,
          payload: { msg: null, type: null },
        });
        window.location.replace("/profile/" + user.id);
      }, 5000);
    })
    .catch((error) => {
      dispatch({
        type: UPLOAD_ERROR,
      });
      dispatch({
        type: UPLOAD_MESSAGE,
        payload: { msg: error.response.data.msg, type: "error" },
      });
      setTimeout(
        () =>
          dispatch({
            type: UPLOAD_MESSAGE,
            payload: { msg: null, type: null },
          }),
        5000
      );
    });
};

export const viewPost = (postId) => (dispatch, getState) => {
  const { token } = getState().auth;
  if (!token) return;

  axios
    .post(process.env.NEXT_PUBLIC_API_URL + "/api/posts/view/" + postId, null, {
      headers: { "x-auth-token": token },
    })
    .then(() => {})
    .catch(() => {});
};

export const likePost = (postId) => (dispatch, getState) => {
  const { token } = getState().auth;
  if (!token) return (window.location.href = "/login");

  axios
    .post(process.env.NEXT_PUBLIC_API_URL + "/api/posts/like/" + postId, null, {
      headers: { "x-auth-token": token },
    })
    .then(() => window.location.reload())
    .catch(() => {});
};

export const deletePost = (postId) => (dispatch, getState) => {
  const { token } = getState().auth;
  const { user } = getState().user;
  if (!token) return window.location.reload();

  dispatch({ type: DELETE_LOADING });
  dispatch({
    type: DELETE_MESSAGE,
    payload: { feedbackMsg: "Deleting post", msgType: "warning" },
  });
  axios
    .delete(process.env.NEXT_PUBLIC_API_URL + "/api/posts/" + postId, {
      headers: { "x-auth-token": token },
    })
    .then((response) => {
      dispatch({ type: DELETE_SUCCESS });
      dispatch({
        type: DELETE_MESSAGE,
        payload: { feedbackMsg: response.data.msg, msgType: "success" },
      });
      setTimeout(() => {
        dispatch({
          type: DELETE_MESSAGE,
          payload: { msg: null, type: null },
        });
        window.location.replace("/profile/" + user.id);
      }, 5000);
    })
    .catch((error) => {
      dispatch({ type: DELETE_ERROR });
      dispatch({
        type: DELETE_MESSAGE,
        payload: { feedbackMsg: error.response.data.msg, msgType: "error" },
      });
      setTimeout(() => {
        dispatch({
          type: DELETE_MESSAGE,
          payload: { msg: null, type: null },
        });
        window.location.reload();
      }, 5000);
    });
};

export const deleteComment = (commentId, postId) => (dispatch, getState) => {
  const { token } = getState().auth;
  const { user } = getState().user;
  if (!token) return window.location.reload();

  dispatch({ type: DELETE_LOADING });
  dispatch({
    type: DELETE_MESSAGE,
    payload: { feedbackMsg: "Deleting comment", msgType: "warning" },
  });
  axios
    .delete(
      process.env.NEXT_PUBLIC_API_URL + "/api/users/comment/" + commentId,
      {
        headers: { "x-auth-token": token },
      }
    )
    .then((response) => {
      dispatch({ type: DELETE_SUCCESS });
      dispatch({
        type: DELETE_MESSAGE,
        payload: { feedbackMsg: response.data.msg, msgType: "success" },
      });
      dispatch(fetchComments(postId));
    })
    .catch((error) => {
      dispatch({ type: DELETE_ERROR });
      dispatch({
        type: DELETE_MESSAGE,
        payload: { feedbackMsg: error.response.data.msg, msgType: "error" },
      });
    })
    .finally(() => {
      setTimeout(() => {
        dispatch({
          type: DELETE_MESSAGE,
          payload: { msg: null, type: null },
        });
      }, 5000);
    });
};
