import Image from "next/image";
import Link from "next/link";
import styles from "styles/Nav.module.scss";
import IconButton from "./IconButton";
import BarsIcon from "./icons/BarsIcon";
import SearchIcon from "./icons/SearchIcon";
import MainMenu from "./MainMenu";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";

const NavTop = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setMenuOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <nav className={`${styles["nav"]} ${styles["top"]}`}>
      <IconButton
        icon={router.pathname === "/" ? <BarsIcon /> : <ArrowLeftIcon />}
        onClick={() =>
          router.pathname === "/" ? setMenuOpen((prev) => !prev) : router.back()
        }
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
