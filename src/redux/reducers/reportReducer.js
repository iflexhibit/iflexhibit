import {
  FETCH_COMMENT_OFFENSES,
  FETCH_POST_OFFENSES,
  FETCH_USER_OFFENSES,
  REPORT_ERROR,
  REPORT_LOADING,
  REPORT_MESSAGE,
  REPORT_SUCCESS,
} from "redux/types/reportTypes";

const initialState = {
  commentOffenses: null,
  postOffenses: null,
  userOffenses: null,
  feedbackMsg: null,
  msgType: null,
  reportLoading: null,
};

export const reportReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_COMMENT_OFFENSES:
      return { ...state, commentOffenses: payload.offenses };
    case FETCH_POST_OFFENSES:
      return { ...state, postOffenses: payload.offenses };
    case FETCH_USER_OFFENSES:
      return { ...state, userOffenses: payload.offenses };
    case REPORT_SUCCESS:
    case REPORT_ERROR:
      return { ...state, reportLoading: false };
    case REPORT_LOADING:
      return { ...state, reportLoading: true };
    case REPORT_MESSAGE:
      return {
        ...state,
        feedbackMsg: payload.feedbackMsg,
        msgType: payload.msgType,
      };
    default:
      return state;
  }
};
