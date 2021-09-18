import styles from "styles/Nav.module.scss";
import Icon from "./Icon";
import IconButton from "./IconButton";

const NavBottom = () => {
  return (
    <nav className={`${styles["nav"]} ${styles["bottom"]}`}>
      <IconButton icon={<Icon icon="home" />} fullWidth fullHeight />
      <IconButton icon={<Icon icon="plus" />} variant="round" />
      <IconButton icon={<Icon icon="user" />} fullWidth fullHeight />
    </nav>
  );
};

export default NavBottom;
