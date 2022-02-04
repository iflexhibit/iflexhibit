import { useEffect, useState } from "react";
import styles from "styles/layouts/AccountLayout.module.scss";
import ButtonGroup from "components/ButtonGroup";
import Layout from "components/Layout.js";
import { PreferencesSection } from "./PreferencesSection";
import { ProfileSection } from "./ProfileSection";
import { useDispatch, useSelector } from "react-redux";
import { updatePreferences, updateProfile } from "redux/actions/userAction";
import { useRouter } from "next/router";

const AccountLayout = () => {
  const dispatch = useDispatch();
  const [tabs] = useState(["Profile", "Preferences"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const [newProfile, setNewProfile] = useState({
    username: "",
    contact: "",
    bio: "",
  });

  const handleProfileChange = (e) => {
    setNewProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleProfileReset = (e) => {
    e.preventDefault();
    setNewProfile((prev) => ({
      ...prev,
      username: "",
      contact: "",
      bio: "",
    }));
  };

  const [newPreferences, setNewPreferences] = useState({
    showName: null,
    showEmail: null,
    showContact: null,
  });

  const handlePreferencesChange = (e) => {
    setNewPreferences((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handlePreferencesSubmit = () => {
    dispatch(updatePreferences(newPreferences));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setNewProfile((prev) => ({
      ...prev,
      username: "",
      contact: "",
      bio: "",
    }));
    dispatch(updateProfile(newProfile));
  };

  const { user } = useSelector((state) => state.user);
  const { isAuthLoading, isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) router.push("/login");
  }, [isAuthLoading, isAuthenticated]);

  return (
    <Layout
      title="Account | iFlexhibit"
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
            handleProfileReset={handleProfileReset}
            handleProfileSubmit={handleProfileSubmit}
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
