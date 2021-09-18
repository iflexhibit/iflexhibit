import Icon from "components/Icon";
import IconButton from "components/IconButton";
import Layout from "components/Layout";
import Select from "components/Select";
import styles from "styles/HomePage.module.scss";
import { useState } from "react";

export default function Home() {
  const sortOptions = ["most viewed", "newest", "most popular"];
  const [activeSort, setActiveSort] = useState(sortOptions[0]);
  const handleSortChange = (e) => setActiveSort(e.target.value);
  return (
    <Layout
      title="iFLEXHIBIT"
      description="A content sharing platform for iACADEMY students"
      canonical="https://iflexhibit.com/"
    >
      <div className={`${styles["controls"]}`}>
        <IconButton icon={<Icon icon="filter" />} />
        <Select
          options={sortOptions}
          value={activeSort}
          onChange={handleSortChange}
        />
      </div>
    </Layout>
  );
}
