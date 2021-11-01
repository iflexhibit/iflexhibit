import styles from "styles/layouts/LoginLayout.module.scss";
import GoogleButton from "components/GoogleButton";
import Button from "components/Button";

export const LoginControls = () => {
  return (
    <div className={styles["controls"]}>
      <div className={styles["cta"]}>
        Join us using your <b>iACADEMY</b> email!
      </div>
      <GoogleButton fullWidth />
      <div className={styles["choice"]}>
        <span>or skip and</span>
      </div>
      <Button href="/" label="Continue as Guest" variant="outlined" fullWidth />
    </div>
  );
};
