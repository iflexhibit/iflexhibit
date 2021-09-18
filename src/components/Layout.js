import Head from "next/head";
import PropTypes from "prop-types";
import NavBottom from "./NavBottom";
import NavTop from "./NavTop";

const Layout = ({ title, description, canonical, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="iflexhibit" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={canonical} />
      </Head>
      <NavTop />
      <main>{children}</main>
      <NavBottom />
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string.isRequired,
};

export default Layout;
