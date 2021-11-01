import Head from "next/head";
import PropTypes from "prop-types";
import { useEffect } from "react";
import NavBottom from "./NavBottom";
import NavTop from "./NavTop";
import { useDispatch } from "react-redux";
import { authUser } from "redux/actions/authAction";

const Layout = ({ title, description, canonical, children, fullscreen }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authUser());
  }, [title]);
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
      <main className={fullscreen ? "fullscreen" : ""}>{children}</main>
      {!fullscreen && <NavBottom />}
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string.isRequired,
  fullscreen: PropTypes.bool,
};

export default Layout;
