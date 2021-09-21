import styles from "styles/Nav.module.scss";
import Icon from "./Icon";
import IconButton from "./IconButton";

const NavBottom = () => {
  return (
    <nav className={`${styles["nav"]} ${styles["bottom"]}`}>
      <IconButton icon={<Icon icon="home" />} fullWidth fullHeight href="/" />
      <IconButton icon={<Icon icon="plus" />} variant="outlined" rounded />
      <IconButton icon={<Icon icon="user" />} fullWidth fullHeight />
    </nav>
  );
};

export default NavBottom;
