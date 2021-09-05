import Head from "next/head";
import NavBar from "components/NavBar";
import ProfileBanner from "components/ProfileBanner";
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
        <div className="profile-container">
          <ProfileBanner />
          <PostGallery />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
