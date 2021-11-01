import Image from "next/image";
import styles from "styles/layouts/AccountLayout.module.scss";
import Button from "components/Button";
import IconButton from "components/IconButton";
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";
import TrashIcon from "components/icons/TrashIcon";
import RedoIcon from "components/icons/RedoIcon";
import { motion } from "framer-motion";

export const ProfileSection = ({
  user,
  handleFormReset,
  handleFormSubmit,
  newProfile,
  handleProfileChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.125 }}
      className={styles["profile"]}
    >
      <div className={`${styles["row"]} ${styles["avatar"]}`}>
        <label>Profile Photo</label>
        <div className={`${styles["image"]}`}>
          <Image
            src={user?.avatarImg}
            layout="fill"
            objectFit="cover"
            alt="avatar image"
          />
        </div>
        <div className={`${styles["avatar-controls"]}`}>
          <IconButton icon={<TrashIcon />} variant="warning" />
          <Button
            label="Upload a photo"
            fullWidth
            variant="outlined"
            text="uppercase"
          />
        </div>
      </div>
      <div className={`${styles["row"]} ${styles["banner"]}`}>
        <label>Profile Banner</label>
        <div className={`${styles["image"]}`}>
          <Image
            src={user?.bannerImg}
            layout="fill"
            objectFit="cover"
            alt="profile background"
          />
        </div>
        <div className={`${styles["banner-controls"]}`}>
          <IconButton icon={<TrashIcon />} variant="warning" />
          <Button
            label="Upload a photo"
            fullWidth
            variant="outlined"
            text="uppercase"
          />
        </div>
      </div>
      <div className={`${styles["row"]} ${styles["default"]}`}>
        <div className={styles["group"]}>
          <label>First Name</label>
          <span>{user?.realName?.firstName}</span>
        </div>
        <div className={styles["group"]}>
          <label>Last Name</label>
          <span>{user?.realName?.lastName}</span>
        </div>
        <div className={styles["group"]}>
          <label>Email</label>
          <span>{user?.email}</span>
        </div>
      </div>
      <div className={`${styles["row"]} ${styles["form"]}`}>
        <form onReset={handleFormReset} onSubmit={handleFormSubmit}>
          <div className={styles["group"]}>
            <label>Display Name</label>
            <TextInput
              id="displayName"
              value={newProfile?.displayName}
              onChange={handleProfileChange}
              placeholder={user?.displayName}
            />
          </div>
          <div className={styles["group"]}>
            <label>Contact Number</label>
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
            <IconButton icon={<RedoIcon />} type="reset" variant="outlined" />
            <Button
              type="submit"
              label="save changes"
              variant="contained"
              fullWidth
              text="uppercase"
            />
          </div>
        </form>
      </div>
    </motion.div>
  );
};
