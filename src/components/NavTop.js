import Image from "next/image";
import Link from "next/link";
import styles from "styles/Nav.module.scss";
import IconButton from "./IconButton";
import BarsIcon from "./icons/BarsIcon";
import SearchIcon from "./icons/SearchIcon";
import MainMenu from "./MainMenu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const NavTop = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={`${styles["nav"]} ${styles["top"]}`}>
      <IconButton
        icon={<BarsIcon />}
        onClick={() => setMenuOpen((prev) => !prev)}
      />
      <Link href="/">
        <a>
          <Image
            src="/assets/logos/brandmark.svg"
            layout="intrinsic"
            width="30"
            height="30"
            alt=""
          />
        </a>
      </Link>
      <IconButton icon={<SearchIcon />} />
      <AnimatePresence>
        {isMenuOpen && (
          <MainMenu key={isMenuOpen} closeMenu={() => setMenuOpen(false)} />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavTop;
