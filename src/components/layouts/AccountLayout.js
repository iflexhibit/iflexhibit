import { useState } from "react";
import Image from "next/image";
import styles from "styles/layouts/AccountLayout.module.scss";
import ButtonGroup from "components/ButtonGroup";
import Layout from "components/Layout.js";
import Button from "components/Button";
import IconButton from "components/IconButton";
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";
import TrashIcon from "components/icons/TrashIcon";
import RedoIcon from "components/icons/RedoIcon";
import Toggle from "components/Toggle";
import { motion } from "framer-motion";

const AccountLayout = () => {
  const [tabs] = useState(["Profile", "Preferences"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [user] = useState({
    bannerImg: "/assets/temp/posts/1.jpg",
    avatarImg: "/assets/temp/hmm.jpg",
    likes_count: 15,
    views_count: 300365,
    date_joined: new Date(),
    displayName: "nikkieyabs",
    realName: { firstName: "Mary Nicole", lastName: "Yabut" },
    email: "address@example.com",
    contact: "09123456789",
    bio: `I think johnpaul5202 shows a lot of creativity in my class. I love the effort he puts forth whenever he participates during my lessons.
    He usually seems to be quite cheerful in class. He loves when he can use new words he learned in class.
    I always try to encourage him to practice his speaking in class, so he can continue to improve his speaking skills. I am quite happy with the effort he puts into reading in the classroom. He applies the grammar he knows well when he is writing in English.
    I am cheering johnpaul5202 on to do well in his English studies.`,
    preferences: {
      show_fullname: true,
      show_email: true,
      show_contact: true,
    },
  });

  const [newProfile, setNewProfile] = useState({
    displayName: "",
    contact: "",
    bio: "",
  });

  const [newPreferences, setNewPreferences] = useState({
    show_fullname: null,
    show_email: false,
    show_contact: null,
  });

  const handlePreferencesChange = (e) => {
    setNewPreferences((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handlePreferencesSubmit = () => {};

  const handleProfileChange = (e) => {
    setNewProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormReset = (e) => {
    e.preventDefault();
    setNewProfile((prev) => ({
      ...prev,
      displayName: "",
      contact: "",
      bio: "",
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setNewProfile((prev) => ({
      ...prev,
      displayName: "",
      contact: "",
      bio: "",
    }));
  };

  return (
    <Layout
      title="Account | iFLEXHIBIT"
      description="A content sharing platform for iACADEMY students"
      canonical="https://iflexhibit.com/account"
    >
      <div className={styles["account"]}>
        <div className={`${styles["row"]} ${styles["header"]}`}>
          <h1>Account Settings</h1>
          <small>
            Edit your{" "}
            <b>
              {activeTab === tabs[0] ? "Profile Information" : "Preferences"}
            </b>
          </small>
        </div>
        <div className={`${styles["row"]} ${styles["tabs"]}`}>
          <ButtonGroup
            tabs={tabs}
            active={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        {activeTab === tabs[0] ? (
          <ProfileSection
            user={user}
            handleFormReset={handleFormReset}
            handleFormSubmit={handleFormSubmit}
            newProfile={newProfile}
            handleProfileChange={handleProfileChange}
          />
        ) : (
          <PreferencesSection
            currentPreferences={user?.preferences}
            newPreferences={newPreferences}
            handlePreferencesChange={handlePreferencesChange}
            handlePreferencesSubmit={handlePreferencesSubmit}
          />
        )}
      </div>
    </Layout>
  );
};

const ProfileSection = ({
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
          <IconButton icon={<TrashIcon />} variant="warning" rounded />
          <Button label="Upload a photo" fullWidth variant="outlined" rounded />
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
          <IconButton icon={<TrashIcon />} variant="warning" rounded />
          <Button label="Upload a photo" fullWidth variant="outlined" rounded />
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
            <IconButton
              icon={<RedoIcon />}
              type="reset"
              variant="outlined"
              rounded
            />
            <Button
              type="submit"
              label="save changes"
              variant="contained"
              rounded
              fullWidth
            />
          </div>
        </form>
      </div>
    </motion.div>
  );
};

const PreferencesSection = ({
  currentPreferences,
  newPreferences,
  handlePreferencesChange,
  handlePreferencesSubmit,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.125 }}
      className={styles["preferences"]}
    >
      <h2>Choose which profile information you want others to see.</h2>
      <div className={`${styles["row"]} ${styles["options"]}`}>
        <Toggle
          right="Full Name"
          id="show_fullname"
          checked={
            newPreferences?.show_fullname !== null
              ? newPreferences?.show_fullname
              : currentPreferences?.show_fullname
          }
          onChange={handlePreferencesChange}
        />
        <Toggle
          right="Email"
          id="show_email"
          checked={
            newPreferences?.show_email !== null
              ? newPreferences?.show_email
              : currentPreferences?.show_email
          }
          onChange={handlePreferencesChange}
        />
        <Toggle
          right="Contact Number"
          id="show_contact"
          checked={
            newPreferences?.show_contact !== null
              ? newPreferences?.show_contact
              : currentPreferences?.show_contact
          }
          onChange={handlePreferencesChange}
        />
      </div>
      <Button
        type="submit"
        label="save changes"
        variant="contained"
        rounded
        fullWidth
        onClick={handlePreferencesSubmit}
      />
    </motion.div>
  );
};

export default AccountLayout;
