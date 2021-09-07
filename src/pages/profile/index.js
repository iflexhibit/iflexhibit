import Layout from "components/Layout";
import ProfileBanner from "components/ProfileBanner";
import PostGallery from "components/PostGallery";

export default function Home() {
  return (
    <Layout
      title="sosig69 | iFLEXHIBIT"
      description="sosig69's iFLEXHIBIT profile page."
    >
      <div className="profile-container">
        <ProfileBanner />
        <PostGallery />
      </div>
    </Layout>
  );
}
