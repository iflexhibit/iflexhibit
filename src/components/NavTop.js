import styles from "styles/Nav.module.scss";
import Icon from "./Icon";
import IconButton from "./IconButton";
import Image from "next/image";

const NavTop = () => {
  return (
    <nav className={`${styles["nav"]} ${styles["top"]}`}>
      <IconButton icon={<Icon icon="bars" />} />
      <Image
        src="/assets/logos/brandmark.png"
        layout="intrinsic"
        width="30"
        height="30"
      />
      <IconButton icon={<Icon icon="search" />} />
    </nav>
  );
};

export default NavTop;
