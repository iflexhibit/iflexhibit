import Icon from "./Icon";
import styles from "styles/Stat.module.scss";

const Stat = ({ icon, value }) => (
  <div className={styles["stat"]}>
    <Icon icon={icon} />
    {value}
  </div>
);

export default Stat;
