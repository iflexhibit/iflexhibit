import FilterPanel from "components/FilterPanel";
import PostGallery from "components/PostGallery";
import Layout from "components/Layout";

export default function Home() {
  return (
    <Layout
      title="iFLEXHIBIT"
      description="A content sharing platform for iACADEMY students"
    >
      <div className="home-container">
        <FilterPanel />
        <PostGallery />
      </div>
    </Layout>
  );
}
