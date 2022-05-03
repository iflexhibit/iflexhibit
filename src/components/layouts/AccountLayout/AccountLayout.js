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
  const router = useRouter();
  const dispatch = useDispatch();
  const tabs = ["Profile", "Preferences"];
  const [activeTab, setActiveTab] = useState(router.query.tab || tabs[0]);
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, tab },
      },
      undefined,
      { scroll: false, shallow: true }
    );
  };
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
  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) router.push("/login");
  }, [isAuthLoading, isAuthenticated]);
  useEffect(() => {
    if (router.query.tab) {
      if (tabs.includes(router.query.tab)) {
        setActiveTab(router.query.tab);
      } else handleTabSwitch(tabs[0]);
    }
  }, [router.query.tab]);

  return (
    <Layout
      title="Account | iFlexhibit"
      description="A content sharing platform for students of iACADEMY"
      canonical="https://iflexhibit.vercel.app/account"
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
            setActiveTab={handleTabSwitch}
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
