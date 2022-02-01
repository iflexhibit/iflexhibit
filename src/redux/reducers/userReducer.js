import {
  SET_USER,
  CLEAR_USER,
  FETCH_MY_POSTS,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_ERROR,
  POST_COMMENT_LOADING,
  PROFILE_UPDATE_LOADING,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_ERROR,
  PROFILE_UPDATE_MESSAGE,
  PREFERENCES_UPDATE_LOADING,
  PREFERENCES_UPDATE_SUCCESS,
  PREFERENCES_UPDATE_ERROR,
  PREFERENCES_UPDATE_MESSAGE,
  UPLOAD_LOADING,
  UPLOAD_ERROR,
  UPLOAD_SUCCESS,
  UPLOAD_MESSAGE,
  DELETE_MESSAGE,
  DELETE_ERROR,
  DELETE_SUCCESS,
  DELETE_LOADING,
} from "redux/types/userTypes";

const initialState = {
  user: null,
  posts: [],
  results: null,
  comment: {
    isNewCommentLoading: false,
    isNewCommentSuccess: null,
    commentError: null,
  },
  profile: {
    isNewProfileLoading: false,
    feedbackMsg: null,
    msgType: null,
  },
  preferences: {
    isNewPreferencesLoading: false,
    feedbackMsg: null,
    msgType: null,
  },
  upload: {
    isUploading: false,
    uploadMsg: null,
    msgType: null,
  },
  deleteAction: {
    isDeleting: false,
    feedbackMsg: null,
    msgType: null,
  },
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return { ...state, user: payload.user };
    case FETCH_MY_POSTS:
      return { ...state, posts: payload.posts, results: payload.results };
    case CLEAR_USER:
      return { ...state, user: null };
    case POST_COMMENT_LOADING:
      return {
        ...state,
        comment: { ...state.comment, isNewCommentLoading: true },
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        comment: {
          ...state.comment,
          isNewCommentLoading: false,
          isNewCommentSuccess: true,
        },
      };
    case POST_COMMENT_ERROR:
      return {
        ...state,
        comment: {
          ...state.comment,
          isNewCommentLoading: false,
          isNewCommentSuccess: false,
          commentError: payload.error,
        },
      };
    case PROFILE_UPDATE_LOADING:
      return {
        ...state,
        profile: {
          ...state.profile,
          isNewProfileLoading: true,
        },
      };
    case PROFILE_UPDATE_SUCCESS:
    case PROFILE_UPDATE_ERROR:
      return {
        ...state,
        profile: {
          ...state.profile,
          isNewProfileLoading: false,
        },
      };
    case PROFILE_UPDATE_MESSAGE:
      return {
        ...state,
        profile: {
          ...state.profile,
          feedbackMsg: payload.feedbackMsg,
          msgType: payload.msgType,
        },
      };
    case PREFERENCES_UPDATE_LOADING:
      return {
        ...state,
        preferences: {
          ...state.preferences,
          isNewPreferencesLoading: true,
        },
      };
    case PREFERENCES_UPDATE_SUCCESS:
    case PREFERENCES_UPDATE_ERROR:
      return {
        ...state,
        preferences: {
          ...state.preferences,
          isNewPreferencesLoading: false,
        },
      };
    case PREFERENCES_UPDATE_MESSAGE:
      return {
        ...state,
        preferences: {
          ...state.preferences,
          feedbackMsg: payload.feedbackMsg,
          msgType: payload.msgType,
        },
      };
    case UPLOAD_LOADING:
    case UPLOAD_SUCCESS:
      return {
        ...state,
        upload: { ...state.upload, isUploading: true },
      };
    case UPLOAD_ERROR:
      return {
        ...state,
        upload: { ...state.upload, isUploading: false },
      };
    case UPLOAD_MESSAGE:
      return {
        ...state,
        upload: {
          ...state.upload,
          uploadMsg: payload.msg,
          msgType: payload.type,
        },
      };
    case DELETE_LOADING:
      return {
        ...state,
        deleteAction: {
          ...state.deleteAction,
          isDeleting: true,
        },
      };
    case DELETE_SUCCESS:
    case DELETE_ERROR:
      return {
        ...state,
        deleteAction: {
          ...state.deleteAction,
          isDeleting: false,
        },
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        deleteAction: {
          ...state.deleteAction,
          feedbackMsg: payload.feedbackMsg,
          msgType: payload.msgType,
        },
      };
    default:
      return state;
  }
};
