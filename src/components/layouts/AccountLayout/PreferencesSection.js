import styles from "styles/layouts/AccountLayout.module.scss";
import Button from "components/Button";
import Toggle from "components/Toggle";
import { motion } from "framer-motion";

export const PreferencesSection = ({
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
        text="uppercase"
      />
    </motion.div>
  );
};
