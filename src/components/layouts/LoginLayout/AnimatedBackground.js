import styles from "styles/layouts/LoginLayout.module.scss";

export const AnimatedBackground = () => {
  return (
    <div className={styles["background"]}>
      <div className={styles["circle1"]}></div>
      <div className={styles["circle2"]}></div>
      <div className={styles["circle3"]}></div>
      <div className={styles["circle4"]}></div>
    </div>
  );
};
