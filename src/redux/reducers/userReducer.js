import {
  SET_USER,
  CLEAR_USER,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_ERROR,
  POST_COMMENT_LOADING,
  PROFILE_UPDATE_LOADING,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_ERROR,
} from "redux/types/userTypes";

const initialState = {
  user: null,
  comment: {
    isNewCommentLoading: false,
    isNewCommentSuccess: null,
    commentError: null,
  },
  profile: {
    isNewProfileLoading: false,
    isNewProfileSuccess: null,
    profileError: null,
  },
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return { ...state, user: payload.user };
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
      return {
        ...state,
        profile: {
          ...state.profile,
          isNewProfileLoading: false,
          isNewProfileSuccess: true,
        },
      };
    case PROFILE_UPDATE_ERROR:
      return {
        ...state,
        profile: {
          ...state.profile,
          isNewProfileLoading: false,
          isNewProfileSuccess: false,
          profileError: payload.error,
        },
      };
    default:
      return state;
  }
};
