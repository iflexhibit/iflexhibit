import styles from "styles/Stat.module.scss";

const Stat = ({ icon, value }) => (
  <div className={styles["stat"]}>
    {icon}
    {value}
  </div>
);

export default Stat;
