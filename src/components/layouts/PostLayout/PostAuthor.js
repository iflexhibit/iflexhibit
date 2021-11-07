import Image from "next/image";
import Link from "next/link";
import styles from "styles/layouts/PostLayout.module.scss";
import IconButton from "components/IconButton";
import EllipsisVIcon from "components/icons/EllipsisVIcon";

export const PostAuthor = ({
  userId,
  avatar,
  displayName,
  givenName,
  familyName,
}) => {
  return (
    <div className={`${styles["row"]} ${styles["user"]}`}>
      <Link href={"/profile/" + userId}>
        <a className={styles["profile"]}>
          <div className={styles["avatar"]}>
            <Image src={avatar} layout="fill" objectFit="cover" alt="" />
          </div>
          <div className={styles["creator"]}>
            <div className={styles["display-name"]}>{displayName}</div>
            <div className={styles["real-name"]}>
              {givenName && familyName && givenName + " " + familyName}
            </div>
          </div>
        </a>
      </Link>
      <IconButton icon={<EllipsisVIcon />} />
    </div>
  );
};
