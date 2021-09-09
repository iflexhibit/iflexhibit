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
        <FilterPanel tags={tags} />
        <PostGallery />
      </div>
    </Layout>
  );
}

const tags = [
  "Anime and Manga",
  "Comics",
  "Cosplay",
  "Digital Art",
  "Drawings",
  "Fan Art",
  "Fantasy",
  "Game Art",
  "Horror",
  "Literature",
  "Photo Manipulation",
  "Pixel Art",
  "Street Art",
  "Street Photography",
  "Traditional Art",
  "Wallpaper",
  "Video",
];
