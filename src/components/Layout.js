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
      <SiteFooter links={links} />
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const links = {
  iFLEXHIBIT: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About us",
      href: "/about",
    },
  ],
  SUPPORT: [
    {
      label: "Help",
      href: "/help",
    },
    {
      label: "Contact us",
      href: "/contacts",
    },
    {
      label: "Report a bug",
      href: "/bug",
    },
    {
      label: "Submit feedback",
      href: "/feedback",
    },
  ],
};

export default Layout;
