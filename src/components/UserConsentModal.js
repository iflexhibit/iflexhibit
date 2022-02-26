import styles from "styles/UserConsentModal.module.scss";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Link from "next/link";
import { useState } from "react";
const UserConsentModal = ({ closeModal }) => {
  const [isChecked, setChecked] = useState(false);
  const handleConsent = () => {
    closeModal();
    sessionStorage.setItem("user-consent", "yes");
    if (isChecked) {
      localStorage.setItem("user-consent", "yes");
    }
  };
  return (
    <div className={styles.consent}>
      <p>
        By continuing, you agree to iFlexhibit&apos;s{" "}
        <b>
          <Link href="/legal">
            <a>Terms and Conditions</a>
          </Link>{" "}
        </b>
        and acknowledge you&apos;ve read our{" "}
        <b>
          <Link href="/legal">
            <a>Privacy Policy</a>
          </Link>
        </b>
        .
      </p>
      <div className={styles.controls}>
        <Checkbox
          label={`Don't show this again`}
          nowrap
          onChange={(e) => setChecked(e.target.checked)}
          checked={isChecked}
        />
        <Button label="Read more" variant="secondary" fullWidth href="/legal" />
        <Button
          label="Got it"
          variant="primary"
          fullWidth
          onClick={handleConsent}
        />
      </div>
    </div>
  );
};

export default UserConsentModal;
