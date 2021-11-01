import styles from "styles/Nav.module.scss";
import IconButton from "./IconButton";
import HomeIcon from "./icons/HomeIcon";
import PlusIcon from "./icons/PlusIcon";
import UserIcon from "./icons/UserIcon";

const NavBottom = () => {
  return (
    <nav className={`${styles["nav"]} ${styles["bottom"]}`}>
      <IconButton icon={<HomeIcon />} fullWidth fullHeight href="/" />
      <IconButton icon={<PlusIcon />} variant="outlined" href="/upload" />
      <IconButton icon={<UserIcon />} fullWidth fullHeight href="/account" />
    </nav>
  );
};

export default NavBottom;
