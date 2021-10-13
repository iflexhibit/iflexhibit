import ButtonGroup from "components/ButtonGroup";
import Layout from "components/Layout";
import styles from "styles/layouts/UploadLayout.module.scss";
import { useEffect, useState } from "react";
import Button from "components/Button";
import FileInput from "components/FileInput";
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";
import PlusIcon from "components/icons/PlusIcon";
import { AnimatePresence } from "framer-motion";
import FilterMenu from "components/FilterMenu";
import Tag from "components/Tag";

const UploadLayout = () => {
  const [tabs] = useState(["Image", "Video"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [newUpload, setNewUpload] = useState({
    image: "",
    video: "",
    title: "",
    thumbnail: "",
    description: "",
    tags: [],
  });
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
        <div className={`${styles["row"]} ${styles["form"]}`}>
          <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
            {activeTab === "Image" ? (
              <div className={styles["group"]}>
                <FileInput
                  id="image"
                  inputFile={newUpload.image}
                  accept="image/png"
                  onChange={(e) => handleUploadChange(e, true)}
                  label="Upload Image"
                />
              </div>
            ) : (
              <>
                <div className={styles["group"]}>
                  <FileInput
                    id="video"
                    inputFile={newUpload.video}
                    accept="video/mp4"
                    onChange={(e) => handleUploadChange(e, true)}
                    label="Upload Video"
                  />
                </div>
                <div className={styles["group"]}>
                  <FileInput
                    id="thumbnail"
                    inputFile={newUpload.thumbnail}
                    accept="image/png"
                    onChange={(e) => handleUploadChange(e, true)}
                    label="Upload Video Thumbnail"
                  />
                </div>
              </>
            )}

            <div className={styles["group"]}>
              <label htmlFor="title">Title</label>
              <TextInput
                onChange={handleUploadChange}
                placeholder="Title"
                value={newUpload.title}
                id="title"
              />
            </div>
            <div className={styles["group"]}>
              <label htmlFor="description">Description</label>
              <TextArea
                onChange={handleUploadChange}
                placeholder="Description (Optional)"
                value={newUpload.description}
                id="description"
              />
            </div>
            <div className={styles["group"]}>
              <label htmlFor="tags">Tags</label>
              <div className={styles["tags"]}>
                {newUpload.tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
              <Button
                fullWidth
                rounded
                label="add tags"
                startIcon={<PlusIcon />}
                text="uppercase"
                variant="outlined"
                onClick={() => setFilterMenuOpen(true)}
              />
            </div>
            <Button
              label="submit post"
              variant="contained"
              text="uppercase"
              fullWidth
              rounded
              type="submit"
            />
          </form>
        </div>
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
    </Layout>
  );
};

export default UploadLayout;
