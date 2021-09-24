import styles from "styles/Nav.module.scss";
import IconButton from "./IconButton";
import Image from "next/image";
import BarsIcon from "./icons/BarsIcon";
import SearchIcon from "./icons/SearchIcon";

const NavTop = () => {
  return (
    <nav className={`${styles["nav"]} ${styles["top"]}`}>
      <IconButton icon={<BarsIcon />} />
      <Image
        src="/assets/logos/brandmark.png"
        layout="intrinsic"
        width="30"
        height="30"
        alt=""
      />
      <IconButton icon={<SearchIcon />} />
    </nav>
  );
};

export default NavTop;
