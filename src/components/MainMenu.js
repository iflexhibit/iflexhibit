import styles from "styles/MainMenu.module.scss";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import UserStatus from "./UserStatus";
import UserIcon from "./icons/UserIcon";
import CogIcon from "./icons/CogIcon";
import BlocksIcon from "./icons/BlocksIcon";
import FlagIcon from "./icons/FlagIcon";
import { motion } from "framer-motion";

const MainMenu = ({ closeMenu }) => {
  const [{ username, usertype }] = useState({
    username: "nikkieyabs",
    usertype: "administrator",
  });
  const [links] = useState([
    { href: "/profile", label: "My Profile", icon: <UserIcon /> },
    { href: "/account", label: "Account Settings", icon: <CogIcon /> },
    { href: "/", label: "System Dashboard", icon: <BlocksIcon /> },
    { href: "/", label: "Report", icon: <FlagIcon /> },
  ]);
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
        <div className={styles["top"]}>
          <div className={styles["avatar"]}>
            <Image
              src="/assets/temp/hmm.jpg"
              layout="fill"
              objectFit="cover"
              alt="avatar"
            />
          </div>
          <div className={styles["info"]}>
            <div className={styles["user"]}>{username}</div>
            <UserStatus status={usertype} color="green" />
          </div>
        </div>
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
        <div className={styles["bottom"]}>
          <Button
            label="sign out"
            variant="contained"
            fullWidth
            href="/login"
            text="uppercase"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default MainMenu;
