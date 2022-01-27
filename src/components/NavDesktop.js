import Image from "next/image";
import Link from "next/link";
import styles from "styles/Nav.module.scss";
import IconButton from "./IconButton";
import MainMenu from "./MainMenu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Button from "./Button";
import PlusIcon from "./icons/PlusIcon";
import UserIcon from "./icons/UserIcon";
import HomeIcon from "./icons/HomeIcon";
import TextInput from "./TextInput";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const NavDesktop = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    router.push({
      pathname: "/",
      query: { ...router.query, title: search },
    });
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  return (
    <nav className={`${styles["nav"]} ${styles["desktop"]}`}>
      <div className={styles["controls"]}>
        <IconButton icon={<HomeIcon />} href="/" />
        <Link href="/">
          <a>
            <Image
              src="/assets/logos/lettermark.svg"
              layout="intrinsic"
              width="120"
              height="30"
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className={styles["controls"]}>
        <TextInput
          id="title"
          placeholder="Search by post title..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onEnterKey={handleSearch}
        />
        <Button
          startIcon={<PlusIcon />}
          href="/upload"
          label="Upload"
          variant="secondary"
        />
        <Button
          startIcon={<UserIcon />}
          label={isAuthenticated ? user.username : "Account"}
          onClick={() => setMenuOpen((prev) => !prev)}
        />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <MainMenu key={isMenuOpen} closeMenu={() => setMenuOpen(false)} />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavDesktop;
