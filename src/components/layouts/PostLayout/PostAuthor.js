import Image from "next/image";
import Link from "next/link";
import styles from "styles/layouts/PostLayout.module.scss";
import IconButton from "components/IconButton";
import ReportModal from "components/ReportModal";
import { useState } from "react";
import FlagIcon from "components/icons/FlagIcon";

export const PostAuthor = ({ userId, postId, avatar, displayName, date }) => {
  const [isReportOpen, setReportOpen] = useState(false);
  return (
    <div className={`${styles["row"]} ${styles["user"]}`}>
      {isReportOpen && (
        <ReportModal
          closeModal={() => setReportOpen(false)}
          reportType="POST"
          targetId={postId}
        />
      )}
      <Link href={"/profile/" + userId}>
        <a className={styles["profile"]}>
          <div className={styles["avatar"]}>
            <Image
              src={avatar || "/assets/noavatar.jpg"}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className={styles["creator"]}>
            <div className={styles["display-name"]}>{displayName}</div>
            <div className={styles["upload-date"]}>{date}</div>
          </div>
        </a>
      </Link>
      <IconButton icon={<FlagIcon />} onClick={() => setReportOpen(true)} />
    </div>
  );
};
