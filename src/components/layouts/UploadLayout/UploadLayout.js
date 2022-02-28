import ButtonGroup from "components/ButtonGroup";
import Layout from "components/Layout";
import styles from "styles/layouts/UploadLayout.module.scss";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FilterMenu from "components/FilterMenu";
import { UploadForm } from "./UploadForm";
import { useDispatch, useSelector } from "react-redux";
import { submitPost } from "redux/actions/userAction";
import FeedbackModal from "components/FeedbackModal";
import { useRouter } from "next/router";

const UploadLayout = () => {
  const [tabs] = useState(["Image", "Video"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const [newUpload, setNewUpload] = useState({
    image: "",
    video: "",
    title: "",
    description: "",
    tags: [],
    watermark: false,
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
    others: false,
    photography: false,
    portrait: false,
    sculpture: false,
    traditional: false,
    typography: false,
    video: false,
  });

  const handleUploadChange = (e, isFile) => {
    if (e.target.name === "watermark")
      return setNewUpload((prev) => ({
        ...prev,
        watermark: !prev.watermark,
      }));
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
      watermark: false,
    }));
    handleFilterReset();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isUploading) return;

    dispatch(submitPost(newUpload));
  };

  const { isAuthLoading, isAuthenticated } = useSelector((state) => state.auth);

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
    if (!isAuthLoading && !isAuthenticated) router.push("/login");
  }, [tags, isAuthLoading, isAuthenticated]);

  const { isUploading, uploadMsg, msgType } = useSelector(
    (state) => state.user.upload
  );
  const { user } = useSelector((state) => state.user);

  return (
    <Layout
      title="Upload | iFlexhibit"
      description="A content sharing platform for students of iACADEMY"
      canonical="https://iflexhibit.com/upload"
    >
      {uploadMsg && <FeedbackModal variant={msgType} info={uploadMsg} />}
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
        {user &&
          (user.permissions.submitPost ? (
            <UploadForm
              handleFormSubmit={handleFormSubmit}
              handleFormReset={handleFormReset}
              handleUploadChange={handleUploadChange}
              activeTab={activeTab}
              newUpload={newUpload}
              setFilterMenuOpen={setFilterMenuOpen}
              isUploading={isUploading}
            />
          ) : (
            <div className={styles.warningmsg}>
              You are currently <b>banned</b> and prohibited from submitting a
              post
            </div>
          ))}
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
