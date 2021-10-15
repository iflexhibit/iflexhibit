import { useState } from "react";
import styles from "styles/layouts/AccountLayout.module.scss";
import ButtonGroup from "components/ButtonGroup";
import Layout from "components/Layout.js";
import { PreferencesSection } from "./PreferencesSection";
import { ProfileSection } from "./ProfileSection";

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

export default AccountLayout;
