import Head from "next/head";
import PropTypes from "prop-types";
import { useEffect } from "react";
import NavBottom from "./NavBottom";
import NavTop from "./NavTop";
import NavDesktop from "./NavDesktop";
import { useDispatch } from "react-redux";
import { authUser } from "redux/actions/authAction";

const Layout = ({ title, description, canonical, children, fullscreen }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authUser());
  }, [dispatch, title]);
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
