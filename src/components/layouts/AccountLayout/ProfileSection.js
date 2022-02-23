import Image from "next/image";
import styles from "styles/layouts/AccountLayout.module.scss";
import Button from "components/Button";
import IconButton from "components/IconButton";
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";
import TrashIcon from "components/icons/TrashIcon";
import RedoIcon from "components/icons/RedoIcon";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import FeedbackModal from "components/FeedbackModal";
import FileInput from "components/FileInput";
import { useState } from "react";
import { updateAvatar, updateBackground } from "redux/actions/userAction";
import { useEffect } from "react";

export const ProfileSection = ({
  user,
  handleProfileReset,
  handleProfileSubmit,
  newProfile,
  handleProfileChange,
}) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  const [newAvatar, setNewAvatar] = useState("");
  const [newBackground, setNewBackground] = useState("");
  const handleAvatarSubmit = () => {
    dispatch(updateAvatar(newAvatar));
  };
  const handleBackgroundSubmit = () => {
    dispatch(updateBackground(newBackground));
  };

  const [inputAvatar, setInputAvatar] = useState("");
  const [inputBackground, setInputBackground] = useState("");
  useEffect(() => {
    newAvatar && setInputAvatar(URL.createObjectURL(newAvatar));
    newBackground && setInputBackground(URL.createObjectURL(newBackground));
  }, [newAvatar, newBackground]);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.125 }}
      className={styles["profile"]}
    >
      {profile.feedbackMsg && (
        <FeedbackModal variant={profile.msgType} info={profile.feedbackMsg} />
      )}
      <div className={`${styles["row"]} ${styles["default"]}`}>
        <div className={styles["group"]}>
          <label>First Name</label>
          <span>{user?.name?.given}</span>
        </div>
        <div className={styles["group"]}>
          <label>Last Name</label>
          <span>{user?.name?.family}</span>
        </div>
        <div className={styles["group"]}>
          <label>Email</label>
          <span>{user?.email}</span>
        </div>
      </div>
      <div className={`${styles["row"]} ${styles["avatar"]}`}>
        <FileInput
          id="newAvatar"
          oldFile={user?.avatar || "/assets/noavatar.jpg"}
          inputFile={inputAvatar}
          accept="image/png, image/jpeg"
          onChange={(e) => setNewAvatar(e.target.files[0])}
          label="Profile Avatar"
          buttonLabel="Choose an image"
          variant="avatar"
        />
        {newAvatar && (
          <div className={`${styles["avatar-controls"]}`}>
            <IconButton
              variant="warning"
              icon={<TrashIcon />}
              onClick={() => setNewAvatar("")}
              disabled={
                profile.feedbackMsg !== null || profile.isNewProfileLoading
              }
            />
            <Button
              label="Upload avatar"
              variant="primary"
              fullWidth
              onClick={handleAvatarSubmit}
              disabled={
                profile.feedbackMsg !== null || profile.isNewProfileLoading
              }
            />
          </div>
        )}
      </div>
      <div className={`${styles["row"]} ${styles["banner"]}`}>
        <FileInput
          id="newBackground"
          oldFile={user?.background || "/assets/nobg.jpg"}
          inputFile={inputBackground}
          accept="image/png, image/jpeg"
          onChange={(e) => setNewBackground(e.target.files[0])}
          label="Profile Background"
          buttonLabel="Choose an image"
          variant="background"
        />
        {newBackground && (
          <div className={`${styles["banner-controls"]}`}>
            <IconButton
              variant="warning"
              icon={<TrashIcon />}
              onClick={() => setNewBackground("")}
              disabled={
                profile.feedbackMsg !== null || profile.isNewProfileLoading
              }
            />
            <Button
              label="Upload background"
              variant="primary"
              fullWidth
              onClick={handleBackgroundSubmit}
              disabled={
                profile.feedbackMsg !== null || profile.isNewProfileLoading
              }
            />
          </div>
        )}
      </div>
      <div className={`${styles["row"]} ${styles["form"]}`}>
        <form onReset={handleProfileReset} onSubmit={handleProfileSubmit}>
          <div className={styles["group"]}>
            <label>Username</label>
            <TextInput
              id="username"
              value={newProfile?.username}
              onChange={handleProfileChange}
              placeholder={user?.username}
            />
          </div>
          <div className={styles["group"]}>
            <label>Mobile Number</label>
            <TextInput
              id="contact"
              value={newProfile?.contact}
              onChange={handleProfileChange}
              placeholder={user?.contact}
            />
          </div>
          <div className={styles["group"]}>
            <label>Bio</label>
            <TextArea
              id="bio"
              value={newProfile?.bio}
              onChange={handleProfileChange}
              placeholder={user?.bio}
              fullHeight
            />
          </div>
          <div className={styles["form-controls"]}>
            <IconButton icon={<RedoIcon />} type="reset" variant="secondary" />
            <Button
              type="submit"
              label="Save Changes"
              variant="primary"
              fullWidth
              disabled={
                profile.feedbackMsg !== null || profile.isNewProfileLoading
              }
            />
          </div>
        </form>
      </div>
    </motion.div>
  );
};
