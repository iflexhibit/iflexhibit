import {
  SET_POST,
  FETCH_COMMENTS,
  COMMENTS_ERROR,
  FETCH_IS_LIKED,
} from "redux/types/postTypes";

const initialState = {
  isLoading: false,
  post: {},
  comments: [],
  isLiked: null,
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_POST:
      return { ...state, post: payload.post, comments: [], isLiked: null };
    case FETCH_COMMENTS:
      return { ...state, comments: payload.comments };
    case COMMENTS_ERROR:
      return { ...state, comments: [] };
    case FETCH_IS_LIKED:
      return { ...state, isLiked: payload.isLiked };
    default:
      return state;
  }
};
