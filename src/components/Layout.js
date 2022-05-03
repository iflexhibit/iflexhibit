import Head from "next/head";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
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
import UserConsentModal from "./UserConsentModal";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout = ({
  title,
  description,
  canonical,
  children,
  fullscreen,
  image,
}) => {
  const dispatch = useDispatch();
  const { feedbackMsg, msgType } = useSelector((state) => state.report);
  const [showConsent, setShowConsent] = useState(false);
  const { isAuthLoading, isAuthenticated } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    dispatch(authUser());
    dispatch(fetchCommentOffenses());
    dispatch(fetchPostOffenses());
    dispatch(fetchUserOffenses());
  }, []);
  useEffect(() => {
    if (router.pathname === "/login" || !isAuthenticated) {
      return setShowConsent(false);
    }
    const sessionConsent = sessionStorage.getItem("user-consent");
    const persistentConsent = localStorage.getItem("user-consent");
    if (sessionConsent === "yes" || persistentConsent === "yes") {
      setShowConsent(false);
    } else {
      setShowConsent(true);
    }
  }, [user, isAuthLoading, isAuthenticated, router.pathname]);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="iflexhibit" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={canonical} />
        <meta
          property="og:image"
          content={image || "https://iflexhibit.vercel.app/assets/ogimage.jpg"}
        />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={canonical} />
      </Head>
      {!fullscreen && <NavTop />}
      {!fullscreen && <NavDesktop />}
      <main className={fullscreen ? "fullscreen" : ""}>
        {showConsent && (
          <UserConsentModal closeModal={() => setShowConsent(false)} />
        )}
        {children}
        {fullscreen && (
          <div className="partner">
            In partnership with <b>iACADEMY</b>
          </div>
        )}
      </main>
      {!fullscreen && <NavBottom />}
      {feedbackMsg && <FeedbackModal info={feedbackMsg} variant={msgType} />}
      {router.pathname === "/" && <Footer />}
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
