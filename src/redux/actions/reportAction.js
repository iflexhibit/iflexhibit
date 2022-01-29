import axios from "axios";
import {
  FETCH_COMMENT_OFFENSES,
  FETCH_POST_OFFENSES,
  FETCH_USER_OFFENSES,
  REPORT_ERROR,
  REPORT_MESSAGE,
  REPORT_SUCCESS,
} from "redux/types/reportTypes";

export const fetchCommentOffenses = () => (dispatch, getState) => {
  const { commentOffenses } = getState().report;

  if (commentOffenses) return;

  axios.get("/api/offenses/c").then((response) => {
    dispatch({
      type: FETCH_COMMENT_OFFENSES,
      payload: { offenses: response.data.offenses },
    });
  });
};

export const fetchPostOffenses = () => (dispatch, getState) => {
  const { postOffenses } = getState().report;

  if (postOffenses) return;

  axios.get("/api/offenses/p").then((response) => {
    dispatch({
      type: FETCH_POST_OFFENSES,
      payload: { offenses: response.data.offenses },
    });
  });
};

export const fetchUserOffenses = () => (dispatch, getState) => {
  const { userOffenses } = getState().report;

  if (userOffenses) return;

  axios.get("/api/offenses/u").then((response) => {
    dispatch({
      type: FETCH_USER_OFFENSES,
      payload: { offenses: response.data.offenses },
    });
  });
};

export const submitReport =
  (type, targetId, offenseId, reportNote) => (dispatch, getState) => {
    const { token } = getState().auth;
    if (!token) {
      setTimeout(
        () =>
          dispatch({
            type: REPORT_MESSAGE,
            payload: { feedbackMsg: null, msgType: null },
          }),
        5000
      );
      return dispatch({
        type: REPORT_MESSAGE,
        payload: {
          feedbackMsg: "You must be logged in to perform this action",
          msgType: "warning",
        },
      });
    }

    const generateReport = (type, targetId) => {
      switch (type) {
        case "COMMENT":
          return { targetCommentId: targetId, type: "comment" };
        case "POST":
          return { targetPostId: targetId, type: "post" };
        case "USER":
          return { targetUserId: targetId, type: "user" };
        default:
          return {};
      }
    };

    const data = { ...generateReport(type, targetId), offenseId, reportNote };
    console.log(data);

    dispatch({
      type: REPORT_MESSAGE,
      payload: { feedbackMsg: "Submitting report", msgType: "warning" },
    });

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/reports/${data.type}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        dispatch({ type: REPORT_SUCCESS });
        dispatch({
          type: REPORT_MESSAGE,
          payload: { feedbackMsg: response.data.msg, msgType: "success" },
        });
        setTimeout(
          () =>
            dispatch({
              type: REPORT_MESSAGE,
              payload: { feedbackMsg: null, msgType: null },
            }),
          5000
        );
      })
      .catch((error) => {
        dispatch({ type: REPORT_ERROR });
        dispatch({
          type: REPORT_MESSAGE,
          payload: { feedbackMsg: error.response.data.msg, msgType: "error" },
        });
        setTimeout(
          () =>
            dispatch({
              type: REPORT_MESSAGE,
              payload: { feedbackMsg: null, msgType: null },
            }),
          5000
        );
      });
  };
