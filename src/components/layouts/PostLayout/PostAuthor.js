import Image from "next/image";
import Link from "next/link";
import styles from "styles/layouts/PostLayout.module.scss";
import IconButton from "components/IconButton";
import ReportModal from "components/ReportModal";
import { useState } from "react";
import FlagIcon from "components/icons/FlagIcon";
import { useSelector } from "react-redux";
import TrashIcon from "components/icons/TrashIcon";

export const PostAuthor = ({
  authorId,
  postId,
  avatar,
  displayName,
  date,
  handlePostDelete,
}) => {
  const [isReportOpen, setReportOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  return (
    <div className={`${styles["row"]} ${styles["user"]}`}>
      {isReportOpen && (
        <ReportModal
          closeModal={() => setReportOpen(false)}
          reportType="POST"
          targetId={postId}
        />
      )}
      <Link href={"/profile/" + authorId}>
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
      {authorId === user?.id ? (
        <IconButton
          icon={<TrashIcon />}
          onClick={handlePostDelete}
          variant="warning"
        />
      ) : (
        <IconButton icon={<FlagIcon />} onClick={() => setReportOpen(true)} />
      )}
    </div>
  );
};
