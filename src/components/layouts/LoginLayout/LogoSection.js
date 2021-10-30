import styles from "styles/layouts/LoginLayout.module.scss";
import Image from "next/image";
import Link from "next/link";

export const LogoSection = () => {
  return (
    <Link href="/">
      <a className={styles["header"]}>
        <div className={styles["brandmark"]}>
          <Image
            src="/assets/logos/brandmark_alt.svg"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
        <div className={styles["lettermark"]}>
          <Image
            src="/assets/logos/lettermark.svg"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
      </a>
    </Link>
  );
};
