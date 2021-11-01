import {
  SET_USER,
  CLEAR_USER,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_ERROR,
  POST_COMMENT_LOADING,
} from "redux/types/userTypes";

const initialState = {
  user: null,
  comment: {
    isNewCommentLoading: false,
    isNewCommentSuccess: null,
    commentError: null,
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
    default:
      return state;
  }
};
