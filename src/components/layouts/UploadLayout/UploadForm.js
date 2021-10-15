import styles from "styles/layouts/UploadLayout.module.scss";
import Button from "components/Button";
import FileInput from "components/FileInput";
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";
import PlusIcon from "components/icons/PlusIcon";
import Tag from "components/Tag";

export const UploadForm = ({
  handleFormSubmit,
  handleFormReset,
  handleUploadChange,
  activeTab,
  newUpload,
  setFilterMenuOpen,
}) => {
  return (
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
  );
};
