import styles from "styles/layouts/AccountLayout.module.scss";
import Button from "components/Button";
import Toggle from "components/Toggle";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import FeedbackModal from "components/FeedbackModal";
import { useEffect, useState } from "react";

export const PreferencesSection = ({
  currentPreferences,
  newPreferences,
  handlePreferencesChange,
  handlePreferencesSubmit,
}) => {
  const { preferences } = useSelector((state) => state.user);
  const [rememberDevice, setRememberDevice] = useState(false);
  useEffect(() => {
    let q = localStorage.getItem("remember-device");
    if (q === "yes") setRememberDevice(true);
    else setRememberDevice(false);
  }, []);
  useEffect(() => {
    localStorage.setItem("remember-device", rememberDevice ? "yes" : "no");
    if (rememberDevice)
      localStorage.setItem("token", sessionStorage.getItem("token"));
    else localStorage.removeItem("token");
  }, [rememberDevice]);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.125 }}
      className={styles["preferences"]}
    >
      {preferences.feedbackMsg && (
        <FeedbackModal
          variant={preferences.msgType}
          info={preferences.feedbackMsg}
        />
      )}
      <h2>Choose which profile information you want others to see.</h2>
      <div className={`${styles["row"]} ${styles["options"]}`}>
        <Toggle
          right="Full Name"
          id="showName"
          checked={
            newPreferences?.showName !== null
              ? newPreferences?.showName
              : currentPreferences?.showName
          }
          onChange={handlePreferencesChange}
        />
        <Toggle
          right="Email"
          id="showEmail"
          checked={
            newPreferences?.showEmail !== null
              ? newPreferences?.showEmail
              : currentPreferences?.showEmail
          }
          onChange={handlePreferencesChange}
        />
        <Toggle
          right="Contact Number"
          id="showContact"
          checked={
            newPreferences?.showContact !== null
              ? newPreferences?.showContact
              : currentPreferences?.showContact
          }
          onChange={handlePreferencesChange}
        />
      </div>
      <h2>Device settings</h2>
      <div className={`${styles["row"]} ${styles["options"]}`}>
        <Toggle
          right="Remember this device (7 days)"
          id="rememberDevice"
          checked={rememberDevice}
          onChange={() => setRememberDevice((prev) => !prev)}
        />
      </div>
      <Button
        type="submit"
        label="Save Changes"
        variant="primary"
        fullWidth
        onClick={handlePreferencesSubmit}
        disabled={
          preferences.feedbackMsg !== null ||
          preferences.isNewPreferencesLoading
        }
      />
    </motion.div>
  );
};
