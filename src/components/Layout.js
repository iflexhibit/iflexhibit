import Head from "next/head";
import PropTypes from "prop-types";
import { useEffect } from "react";
import NavBottom from "./NavBottom";
import NavTop from "./NavTop";
import NavDesktop from "./NavDesktop";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "redux/actions/authAction";
import {
  fetchCommentOffenses,
  fetchPostOffenses,
  fetchUserOffenses,
} from "redux/actions/reportAction";
import FeedbackModal from "./FeedbackModal";

const Layout = ({ title, description, canonical, children, fullscreen }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authUser());
    dispatch(fetchCommentOffenses());
    dispatch(fetchPostOffenses());
    dispatch(fetchUserOffenses());
  }, [dispatch, title]);
  const { feedbackMsg, msgType } = useSelector((state) => state.report);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="iflexhibit" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={canonical} />
      </Head>
      {!fullscreen && <NavTop />}
      {!fullscreen && <NavDesktop />}
      <main className={fullscreen ? "fullscreen" : ""}>{children}</main>
      {!fullscreen && <NavBottom />}
      {feedbackMsg && <FeedbackModal info={feedbackMsg} variant={msgType} />}
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  canonical: PropTypes.string.isRequired,
  fullscreen: PropTypes.bool,
};

Layout.defaultProps = {
  description: "",
};

export default Layout;
