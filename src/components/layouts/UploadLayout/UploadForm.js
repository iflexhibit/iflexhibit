import styles from "styles/layouts/UploadLayout.module.scss";
import Button from "components/Button";
import FileInput from "components/FileInput";
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";
import Tag from "components/Tag";
import TagsIcon from "components/icons/TagsIcon";
import Toggle from "components/Toggle";
import { useEffect, useState } from "react";
import Select from "components/Select";

export const UploadForm = ({
  handleFormSubmit,
  handleFormReset,
  handleUploadChange,
  activeTab,
  newUpload,
  setFilterMenuOpen,
  isUploading,
  degreePrograms,
}) => {
  const [inputImage, setInputImage] = useState("");
  const [inputVideo, setInputVideo] = useState("");

  useEffect(() => {
    newUpload.image && setInputImage(URL.createObjectURL(newUpload.image));
  }, [newUpload.image]);

  useEffect(() => {
    newUpload.video && setInputVideo(URL.createObjectURL(newUpload.video));
  }, [newUpload.video]);

  return (
    <div className={`${styles["row"]} ${styles["form"]}`}>
      <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
        {activeTab === "Image" ? (
          <div className={styles["group"]}>
            <FileInput
              id="image"
              inputFile={inputImage}
              accept="image/png, image/jpeg"
              onChange={(e) => handleUploadChange(e, true)}
              label={
                <p>
                  <span>Upload Image</span> <small>(up to 10 MB)</small>
                </p>
              }
              buttonLabel="Upload Image"
            />
          </div>
        ) : (
          <>
            <div className={styles["group"]}>
              <FileInput
                id="video"
                inputFile={inputVideo}
                accept="video/mp4"
                onChange={(e) => handleUploadChange(e, true)}
                label={
                  <p>
                    <span>Upload Video</span> <small>(up to 100 MB)</small>
                  </p>
                }
                buttonLabel="Upload Video"
                video
              />
            </div>
            <div className={styles["group"]}>
              <FileInput
                id="image"
                inputFile={inputImage}
                accept="image/png, image/jpeg"
                onChange={(e) => handleUploadChange(e, true)}
                label={
                  <p>
                    <span>Upload Video Thumbnail</span>{" "}
                    <small>(up to 10 MB)</small>
                  </p>
                }
                buttonLabel="Upload Video Thumbnail"
              />
            </div>
          </>
        )}
        <div className={styles["group"]}>
          <label htmlFor="title">Title</label>
          <TextInput
            onChange={handleUploadChange}
            value={newUpload.title}
            id="title"
          />
        </div>
        <div className={styles["group"]}>
          <label htmlFor="description">
            Description <small>(Optional)</small>
          </label>
          <TextArea
            onChange={handleUploadChange}
            value={newUpload.description}
            id="description"
          />
        </div>
        <div className={styles["group"]}>
          <label>Is this a schoolwork?</label>
          <Toggle
            id="schoolwork"
            checked={newUpload.schoolwork}
            right={newUpload.schoolwork ? "Yes" : "No"}
            onChange={handleUploadChange}
          />
        </div>
        {newUpload.schoolwork && (
          <div className={styles["group"]}>
            <label>Degree Program</label>
            <Select
              id="program"
              options={degreePrograms}
              value={newUpload.program}
              onChange={handleUploadChange}
              fullWidth
            />
          </div>
        )}
        <div className={styles["group"]}>
          <label htmlFor="tags">
            Tags <small>(Optional)</small>
          </label>
          <div className={styles["tags"]}>
            {newUpload.schoolwork && <Tag key="schoolwork" tag="schoolwork" />}
            {newUpload.schoolwork && newUpload.program && (
              <Tag
                key={newUpload.program}
                tag={
                  degreePrograms.find((p) => p.value == newUpload.program)
                    ?.label
                }
              />
            )}
            {newUpload.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
          <Button
            fullWidth
            label="Choose Tags"
            startIcon={<TagsIcon />}
            variant="secondary"
            onClick={() => setFilterMenuOpen(true)}
          />
        </div>
        <div className={styles["group"]}>
          <label>
            Add watermark to image? <small>(Optional)</small>
          </label>
          <Toggle
            id="watermark"
            checked={newUpload.watermark}
            right={newUpload.watermark ? "Yes" : "No"}
            onChange={handleUploadChange}
          />
        </div>
        <Button
          label="Submit Post"
          variant="primary"
          fullWidth
          type="submit"
          disabled={isUploading}
        />
      </form>
    </div>
  );
};
