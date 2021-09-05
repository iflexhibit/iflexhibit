import Head from "next/head";
import FilterPanel from "components/FilterPanel";
import PostGallery from "components/PostGallery";
import SiteFooter from "components/SiteFooter";
import NavbarTop from "components/NavbarTop";
import NavbarBottom from "components/NavbarBottom";

export default function Home() {
  return (
    <>
      <Head>
        <title>iFLEXHIBIT</title>
        <meta
          name="description"
          content="iFLEXHIBIT is a content-sharing platform for iACADEMY students."
        />
      </Head>
      <NavbarTop />
      <NavbarBottom />
      <main>
        <div className="home-container">
          <FilterPanel />
          <PostGallery />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
