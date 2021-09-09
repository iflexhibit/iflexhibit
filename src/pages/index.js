import { useState } from "react";
import Layout from "components/Layout";
import FilterPanel from "components/FilterPanel";
import SortControls from "components/SortControls";
import Gallery from "components/Gallery";
import Pagination from "@material-ui/lab/Pagination";

export default function Home() {
  const [sort, setSort] = useState(sortItems[0]);
  const handleSort = (e) => {
    setSort(e.target.name);
  };
  return (
    <Layout
      title="iFLEXHIBIT"
      description="A content sharing platform for iACADEMY students"
    >
      <div className="home-container">
        <FilterPanel tags={tags} />
        <div className="posts-container">
          <SortControls
            items={sortItems}
            sortBy={sort}
            handleSort={handleSort}
          />
          <Gallery posts={posts} grid={3} />
          <Pagination
            count={10}
            color="primary"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </div>
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

const sortItems = [
  "NEW TODAY",
  "NEW THIS WEEK",
  "POPULAR (14 DAYS)",
  "POPULAR (ALL TIME)",
];

const posts = [
  {
    author: {
      avatar: "/img/boi.jpg",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Kirk Sawyer",
    image: "/img/cards/card4.png",
  },
  {
    author: {
      avatar: "/img/boi.jpg",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Cloud Girl",
    image: "/img/cards/card2.png",
  },
  {
    author: {
      avatar: "/img/boi.jpg",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Kerry Eurodyne",
    image: "/img/cards/card3.png",
  },
];
