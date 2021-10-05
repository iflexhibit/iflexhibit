import styles from "styles/MainMenu.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import IconButton from "./IconButton";
import TimesIcon from "./icons/TimesIcon";

const MainMenu = () => {
  return (
    <div className={styles["mainmenu"]}>
      <div className={styles["menu"]}>
        <div className={styles["top"]}>
          <Link href="/">
            <a>
              <Image
                src="/assets/logos/lettermark.png"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
        <div className={styles["bottom"]}>
          <Button
            href="/"
            variant="contained"
            label="Sign in to iflexhibit"
            fullWidth
          />
        </div>
        <div className={styles["exit"]}>
          <IconButton icon={<TimesIcon />} variant="outlined" />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
