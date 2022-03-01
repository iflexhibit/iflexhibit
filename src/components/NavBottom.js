import { useSelector } from "react-redux";
import styles from "styles/Nav.module.scss";
import IconButton from "./IconButton";
import HomeIcon from "./icons/HomeIcon";
import PlusIcon from "./icons/PlusIcon";
import UserIcon from "./icons/UserIcon";

const NavBottom = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <nav className={`${styles["nav"]} ${styles["bottom"]}`}>
      <IconButton icon={<HomeIcon />} fullWidth fullHeight href="/" />
      <IconButton icon={<PlusIcon />} variant="secondary" href="/upload" />
      <IconButton
        icon={<UserIcon />}
        fullWidth
        fullHeight
        href={user ? "/profile/" + user.id : "/login"}
      />
    </nav>
  );
};

export default NavBottom;
