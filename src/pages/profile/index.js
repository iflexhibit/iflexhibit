import Head from "next/head";
import NavBar from "components/NavBar";
import FilterPanel from "components/FilterPanel";
import PostGallery from "components/PostGallery";
import SiteFooter from "components/SiteFooter";

export default function Home() {
  return (
    <>
      <Head>
        <title>iFLEXHIBIT | Profile</title>
        <meta
          name="description"
          content="iFLEXHIBIT is a content-sharing platform for iACADEMY students."
        />
      </Head>
      <NavBar />
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
