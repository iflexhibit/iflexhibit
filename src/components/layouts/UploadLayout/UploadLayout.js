import ButtonGroup from "components/ButtonGroup";
import Layout from "components/Layout";
import styles from "styles/layouts/UploadLayout.module.scss";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FilterMenu from "components/FilterMenu";
import { UploadForm } from "./UploadForm";
import { useDispatch } from "react-redux";
import { submitPost } from "redux/actions/userAction";

const UploadLayout = () => {
  const [tabs] = useState(["Image", "Video"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const [isUploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  const [newUpload, setNewUpload] = useState({
    image: "",
    video: "",
    title: "",
    thumbnail: "",
    description: "",
    tags: [],
  });

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

  const handleUploadChange = (e, isFile) => {
    setNewUpload((prev) => ({
      ...prev,
      [e.target.name]: isFile ? e.target.files[0] : e.target.value,
    }));
  };

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

  const handleFormReset = (e) => {
    e.preventDefault();
    setNewUpload((prev) => ({
      ...prev,
      image: "",
      video: "",
      title: "",
      description: "",
      tags: [],
    }));
    handleFilterReset();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isUploading) return;
    setUploading(true);

    dispatch(submitPost(newUpload));
  };

  useEffect(() => {
    setNewUpload((prev) => {
      return {
        ...prev,
        tags: Object.entries(tags)
          .filter((tag) => {
            return tag[1];
          })
          .map((tag) => tag[0]),
      };
    });
  }, [tags]);

  return (
    <Layout
      title="Upload | iFlexhibit"
      description="A content-sharing platform for iACADEMY students"
      canonical="https://iflexhibit.com/upload"
    >
      <div className={styles["upload"]}>
        <div className={`${styles["row"]} ${styles["header"]}`}>
          <h1>Upload your work</h1>
        </div>
        <div className={`${styles["row"]} ${styles["tabs"]}`}>
          <ButtonGroup
            tabs={tabs}
            active={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <UploadForm
          handleFormSubmit={handleFormSubmit}
          handleFormReset={handleFormReset}
          handleUploadChange={handleUploadChange}
          activeTab={activeTab}
          newUpload={newUpload}
          setFilterMenuOpen={setFilterMenuOpen}
          isUploading={isUploading}
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
            resetButtonLabel="Deselect All"
            hideApplyButton
          />
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default UploadLayout;
