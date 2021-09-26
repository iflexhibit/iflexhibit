import { useState, useEffect } from "react";
import styles from "styles/layouts/HomeLayout.module.scss";
import Posts from "components/Posts";
import IconButton from "components/IconButton";
import Layout from "components/Layout";
import Select from "components/Select";
import FilterIcon from "components/icons/FilterIcon";

const HomeLayout = () => {
  const sortOptions = ["most viewed", "newest", "most popular"];
  const [activeSort, setActiveSort] = useState(sortOptions[0]);
  const handleSortChange = (e) => setActiveSort(e.target.value);
  const [posts] = useState([
    { imgSrc: "/assets/temp/posts/1.jpg" },
    { imgSrc: "/assets/temp/posts/2.jpg" },
    { imgSrc: "/assets/temp/posts/3.jpg" },
    { imgSrc: "/assets/temp/posts/4.jpg" },
    { imgSrc: "/assets/temp/posts/5.jpg" },
    { imgSrc: "/assets/temp/posts/6.jpg" },
    { imgSrc: "/assets/temp/posts/7.jpg" },
    { imgSrc: "/assets/temp/posts/8.jpg" },
    { imgSrc: "/assets/temp/posts/9.jpg" },
    { imgSrc: "/assets/temp/posts/10.jpg" },
  ]);
  return (
    <Layout
      title="iFLEXHIBIT"
      description="A content sharing platform for iACADEMY students"
      canonical="https://iflexhibit.com/"
    >
      <div className={`${styles["controls"]}`}>
        <IconButton icon={<FilterIcon />} variant="outlined" />
        <Select
          options={sortOptions}
          value={activeSort}
          onChange={handleSortChange}
        />
      </div>
      <Posts posts={posts} />
    </Layout>
  );
};

export default HomeLayout;
