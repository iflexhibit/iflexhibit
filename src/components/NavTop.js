import Image from "next/image";
import Link from "next/link";
import styles from "styles/Nav.module.scss";
import IconButton from "./IconButton";
import BarsIcon from "./icons/BarsIcon";
import SearchIcon from "./icons/SearchIcon";

const NavTop = () => {
  return (
    <nav className={`${styles["nav"]} ${styles["top"]}`}>
      <IconButton icon={<BarsIcon />} />
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
    </nav>
  );
};

export default NavTop;
