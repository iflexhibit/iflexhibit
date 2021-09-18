import styles from "styles/Nav.module.scss";
import Icon from "./Icon";
import IconButton from "./IconButton";

const NavTop = () => {
  return (
    <nav className={`${styles["nav"]} ${styles["top"]}`}>
      <IconButton icon={<Icon icon="bars" />} />
      <IconButton icon={<Icon icon="search" />} />
    </nav>
  );
};

export default NavTop;
