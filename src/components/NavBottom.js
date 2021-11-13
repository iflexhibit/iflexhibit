import { useSelector } from "react-redux";
import styles from "styles/Nav.module.scss";
import IconButton from "./IconButton";
import HomeIcon from "./icons/HomeIcon";
import PlusIcon from "./icons/PlusIcon";
import UserIcon from "./icons/UserIcon";

const NavBottom = () => {
  const { user } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <nav className={`${styles["nav"]} ${styles["bottom"]}`}>
      <IconButton icon={<HomeIcon />} fullWidth fullHeight href="/" />
      <IconButton icon={<PlusIcon />} variant="outlined" href="/upload" />
      <IconButton
        icon={<UserIcon />}
        fullWidth
        fullHeight
        href={isAuthenticated ? "/profile/" + user.id : "/login"}
      />
    </nav>
  );
};

export default NavBottom;
