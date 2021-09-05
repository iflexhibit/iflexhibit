import Head from "next/head";
import SiteFooter from "components/SiteFooter";
import NavbarTop from "components/NavbarTop";
import NavbarBottom from "components/NavbarBottom";
import PropTypes from "prop-types";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavbarTop />
      <NavbarBottom />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Layout;
