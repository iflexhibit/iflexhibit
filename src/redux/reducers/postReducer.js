import {
  SET_POST,
  FETCH_COMMENTS,
  COMMENTS_ERROR,
} from "redux/types/postTypes";

const initialState = {
  isLoading: false,
  post: {},
  comments: [],
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_POST:
      return { ...state, post: payload.post };
    case FETCH_COMMENTS:
      return { ...state, comments: payload.comments };
    case COMMENTS_ERROR:
      return { ...state, comments: [] };
    default:
      return state;
  }
};
