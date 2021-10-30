import { useState } from "react";
import styles from "styles/layouts/HomeLayout.module.scss";
import Posts from "components/Posts";
import IconButton from "components/IconButton";
import Layout from "components/Layout";
import Select from "components/Select";
import FilterIcon from "components/icons/FilterIcon";
import FilterMenu from "components/FilterMenu";
import { AnimatePresence } from "framer-motion";

const HomeLayout = ({ posts }) => {
  const sortOptions = ["most viewed", "newest", "most popular"];
  const [activeSort, setActiveSort] = useState(sortOptions[0]);
  const handleSortChange = (e) => setActiveSort(e.target.value);
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const [tags, setTags] = useState({
    "2d art": false,
    "3d art": false,
    animation: false,
    artistic: false,
    "digital art": false,
    "fan art": false,
    film: false,
    "mural art": false,
    photography: false,
    portrait: false,
    sculpture: false,
    traditional: false,
    typography: false,
    video: false,
  });
  const handleFilterChange = (e) => {
    setTags((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };
  const handleFilterReset = () => {
    setTags((prev) => ({
      ...prev,
      ...Object.keys(prev).reduce(
        (current, tag) => ({ ...current, [tag]: false }),
        {}
      ),
    }));
  };
  return (
    <Layout
      title="iFLEXHIBIT"
      description="A content sharing platform for iACADEMY students"
      canonical="https://iflexhibit.com/"
    >
      <div className={`${styles["controls"]}`}>
        <IconButton
          icon={<FilterIcon />}
          variant="outlined"
          onClick={() => setFilterMenuOpen(true)}
        />
        <Select
          options={sortOptions}
          value={activeSort}
          onChange={handleSortChange}
        />
      </div>
      <AnimatePresence>
        {isFilterMenuOpen && (
          <FilterMenu
            key={isFilterMenuOpen}
            tags={tags}
            closeMenu={() => setFilterMenuOpen(false)}
            handleFilterChange={handleFilterChange}
            handleFilterReset={handleFilterReset}
          />
        )}
      </AnimatePresence>
      <Posts posts={posts} />
    </Layout>
  );
};

export default HomeLayout;
