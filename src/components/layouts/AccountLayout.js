import { useState } from "react";
import Image from "next/image";
import styles from "styles/layouts/AccountLayout.module.scss";
import ButtonGroup from "components/ButtonGroup";
import Layout from "components/Layout.js";
import Button from "components/Button";
import IconButton from "components/IconButton";
import TrashIcon from "components/icons/TrashIcon";
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";
import RedoIcon from "components/icons/RedoIcon";

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
  });

  const [newProfile, setNewProfile] = useState({
    displayName: "",
    contact: "",
    bio: "",
  });

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
        <div className={`${styles["row"]} ${styles["avatar"]}`}>
          <label>Profile Photo</label>
          <div className={`${styles["image"]}`}>
            <Image src={user?.avatarImg} layout="fill" objectFit="cover" />
          </div>
          <div className={`${styles["avatar-controls"]}`}>
            <IconButton icon={<TrashIcon />} variant="warning" rounded />
            <Button
              label="Upload a photo"
              fullWidth
              variant="outlined"
              rounded
            />
          </div>
        </div>
        <div className={`${styles["row"]} ${styles["banner"]}`}>
          <label>Profile Banner</label>
          <div className={`${styles["image"]}`}>
            <Image src={user?.bannerImg} layout="fill" objectFit="cover" />
          </div>
          <div className={`${styles["banner-controls"]}`}>
            <IconButton icon={<TrashIcon />} variant="warning" rounded />
            <Button
              label="Upload a photo"
              fullWidth
              variant="outlined"
              rounded
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
                value={newProfile.displayName}
                onChange={handleProfileChange}
                placeholder={user?.displayName}
              />
            </div>
            <div className={styles["group"]}>
              <label>Contact Number</label>
              <TextInput
                id="contact"
                value={newProfile.contact}
                onChange={handleProfileChange}
                placeholder={user?.contact}
              />
            </div>
            <div className={styles["group"]}>
              <label>Bio</label>
              <TextArea
                id="bio"
                value={newProfile.bio}
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
      </div>
    </Layout>
  );
};

export default AccountLayout;
