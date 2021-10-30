import styles from "styles/MainMenu.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import UserStatus from "./UserStatus";
import UserIcon from "./icons/UserIcon";
import CogIcon from "./icons/CogIcon";
import BlocksIcon from "./icons/BlocksIcon";
import BookIcon from "./icons/BookIcon";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/actions/authAction";

const fetchLinks = (user) => {
  const links = [
    { href: "/profile", label: "My Profile", icon: <UserIcon /> },
    { href: "/account", label: "Account Settings", icon: <CogIcon /> },
    { href: "/", label: "Legal Agreement", icon: <BookIcon /> },
    { href: "/", label: "System Dashboard", icon: <BlocksIcon /> },
  ];
  if (!user) return null;
  if (user?.usertype === "member" || user?.usertype === "banned")
    return links.slice(0, 2);
  return links;
};

const MainMenu = ({ closeMenu }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const links = fetchLinks(user);
  return (
    <div className={styles["mainmenu"]}>
      <motion.button
        key="underlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={styles["underlay"]}
        onClick={closeMenu}
      ></motion.button>
      <motion.div
        key="menu"
        initial={{ height: "0%" }}
        animate={{ height: "min-content" }}
        exit={{ height: "0%", opacity: [1, 1, 0] }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={styles["menu"]}
      >
        <UserInfo user={user} />
        {links && <MenuLinks links={links} />}
        <div className={styles["bottom"]}>
          {isAuthenticated ? (
            <Button
              label="sign out"
              variant="outlined"
              fullWidth
              onClick={() => dispatch(logout())}
              text="uppercase"
              rounded
            />
          ) : (
            <Button
              label="sign in"
              variant="contained"
              fullWidth
              href="/login"
              text="uppercase"
              rounded
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

const UserInfo = ({ user }) => {
  return (
    <div className={styles["top"]}>
      <div className={styles["avatar"]}>
        <Image
          src={user?.avatar || "/assets/noavatar.jpg"}
          layout="fill"
          objectFit="cover"
          alt="avatar"
        />
      </div>
      <div className={styles["info"]}>
        <div className={styles["user"]}>
          {user?.username || "Not Logged In"}
        </div>
        <UserStatus status={user?.usertype || "guest"} />
      </div>
    </div>
  );
};

const MenuLinks = ({ links }) => {
  return (
    <div className={styles["links"]}>
      {links.map((link, index) => (
        <div key={index} className={styles["link"]}>
          <Link href={link.href}>
            <a>
              {link.icon}
              <span>{link.label}</span>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MainMenu;
