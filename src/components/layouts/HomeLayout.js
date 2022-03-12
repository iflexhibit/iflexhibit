import { useEffect, useState } from "react";
import styles from "styles/layouts/HomeLayout.module.scss";
import Posts from "components/Posts";
import Layout from "components/Layout";
import Select from "components/Select";
import FilterIcon from "components/icons/FilterIcon";
import FilterMenu from "components/FilterMenu";
import { AnimatePresence } from "framer-motion";
import Button from "components/Button";
import { useRouter } from "next/router";
import TimesIcon from "components/icons/TimesIcon";
import Tag from "components/Tag";

const HomeLayout = ({ results, posts }) => {
  const router = useRouter();
  const sortOptions = [
    { value: "date", label: "Most Recent" },
    { value: "views", label: "Most Views" },
    { value: "likes", label: "Top Rated" },
    { value: "comments", label: "Most Discussed" },
  ];
  const [activeSort, setActiveSort] = useState(router.query.sort);
  const handleSortChange = (e) => {
    setActiveSort(e.target.value);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sort: e.target.value },
    });
  };
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
    others: false,
    photography: false,
    portrait: false,
    schoolwork: false,
    sculpture: false,
    traditional: false,
    typography: false,
    video: false,
  });
  const handleFilterChange = (e) => {
    setTags((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };
  const checkedTags = Object.entries(tags)
    .filter((tag) => tag[1])
    .map((tag) => tag[0]);
  const handleApply = () => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, tags: checkedTags.join(",") },
    });
    setFilterMenuOpen(false);
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
  useEffect(() => {
    setTags((prev) => ({
      ...prev,
      ...Object.keys(prev).reduce(
        (current, tag) => ({
          ...current,
          [tag]: router.query.tags
            ? router.query.tags.split(",").includes(tag)
            : false,
        }),
        {}
      ),
    }));
  }, [router.query.tags]);

  return (
    <Layout
      title="iFlexhibit | A content sharing platform for students of iACADEMY"
      description="A content sharing platform for students of iACADEMY"
      canonical="https://iflexhibit.com/"
    >
      <div className={`${styles["controls"]}`}>
        <Button
          startIcon={<FilterIcon />}
          label="Filters"
          variant="secondary"
          onClick={() => setFilterMenuOpen(true)}
        />
        <Select
          options={sortOptions}
          value={activeSort}
          onChange={handleSortChange}
        />
      </div>
      {(router.query.title || router.query.tags) && (
        <div className={styles.search}>
          <Button
            startIcon={<TimesIcon />}
            label="Clear"
            variant="primary"
            onClick={() =>
              router.push({
                pathname: router.pathname,
                query: { ...router.query, title: "", tags: "" },
              })
            }
          />
          <div className={styles.results}>
            {router.query.title && (
              <div>
                <small>Title: </small>
                <b>{router.query.title}</b>
              </div>
            )}
            {router.query.tags && (
              <div className={styles.tags}>
                <small>Tags: </small>
                {checkedTags.map((tag, index) => (
                  <Tag tag={tag} key={index} />
                ))}
              </div>
            )}
            <div>
              <small>Results: </small>
              <b>{results}</b>
            </div>
          </div>
        </div>
      )}
      <AnimatePresence>
        {isFilterMenuOpen && (
          <FilterMenu
            key={isFilterMenuOpen}
            tags={tags}
            closeMenu={() => setFilterMenuOpen(false)}
            handleFilterChange={handleFilterChange}
            handleFilterReset={handleFilterReset}
            handleApply={handleApply}
          />
        )}
      </AnimatePresence>
      {posts && <Posts posts={posts} results={results} />}
    </Layout>
  );
};

export default HomeLayout;
