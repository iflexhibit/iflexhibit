import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import styles from "styles/layouts/PostLayout.module.scss";
import IconButton from "components/IconButton";
import CommentIcon from "components/icons/CommentIcon";
import TimesIcon from "components/icons/TimesIcon";
import SendIcon from "components/icons/SendIcon";
import TextArea from "components/TextArea";
import { useSelector } from "react-redux";
import Button from "components/Button";
import FlagIcon from "components/icons/FlagIcon";
import ReportModal from "components/ReportModal";
import { useState } from "react";
import TrashIcon from "components/icons/TrashIcon";

export const CommentsSection = ({
  comments,
  isCommentFieldOpen,
  setCommentFieldOpen,
  newComment,
  handleNewCommentSubmit,
  handleNewCommentChange,
  handleDeleteComment,
}) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const [isReportOpen, setReportOpen] = useState(false);
  return (
    <>
      <motion.div
        className={`${styles["row"]} ${styles["comments"]}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.125 }}
      >
        <AnimatePresence>
          {!isAuthenticated ? (
            <Button
              variant="primary"
              label="Sign In to Comment"
              fullWidth
              href="/login"
            />
          ) : (
            <form
              key={isCommentFieldOpen}
              className={`${styles["new-comment"]} ${styles["field"]} ${styles["desktop"]}`}
              onSubmit={handleNewCommentSubmit}
            >
              <div>
                <div className={styles.avatar}>
                  <Image
                    src={user?.avatar || "/assets/noavatar.jpg"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <TextArea
                  id="new_comment"
                  value={newComment}
                  onChange={handleNewCommentChange}
                  placeholder="Write a comment..."
                  autoFocus
                />
              </div>
              <Button
                startIcon={<SendIcon />}
                type="submit"
                disabled={newComment === ""}
                variant="primary"
                label="Comment"
              />
            </form>
          )}
          {comments?.map((comment) => (
            <motion.div
              key={comment?.id}
              className={styles["comment"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              id={comment?.id}
            >
              {isReportOpen && (
                <ReportModal
                  closeModal={() => setReportOpen(false)}
                  reportType="COMMENT"
                  targetId={comment?.id}
                />
              )}
              <div className={styles["header"]}>
                <Link href={"/profile/" + comment?.author?.id}>
                  <a className={styles["commenter"]}>
                    <div className={styles["avatar"]}>
                      <Image
                        src={comment?.author?.avatar || "/assets/noavatar.jpg"}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                    <div className={styles["info"]}>
                      <span className={styles["author"]}>
                        <b>{comment?.author?.username}</b>
                      </span>
                      <span className={styles["date"]}>
                        {new Date(comment?.createdAt).toJSON().split("T")[0]}
                      </span>
                    </div>
                  </a>
                </Link>
                <div className={styles["controls"]}>
                  {comment?.author?.id === user?.id ? (
                    <IconButton
                      icon={<TrashIcon />}
                      onClick={() => handleDeleteComment(comment?.id)}
                      variant="warning"
                    />
                  ) : (
                    <IconButton
                      icon={<FlagIcon />}
                      onClick={() => setReportOpen(true)}
                    />
                  )}
                </div>
              </div>
              <div className={styles["body"]}>
                {comment?.body.split("\n").map((c, i) => (
                  <p key={i}>{c}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {isAuthenticated &&
        (!isCommentFieldOpen ? (
          <motion.div
            key={isCommentFieldOpen}
            className={`${styles["new-comment"]} ${styles["control"]}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1.25 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.125 }}
          >
            <IconButton
              icon={<CommentIcon />}
              variant="primary"
              onClick={() => setCommentFieldOpen(true)}
            />
          </motion.div>
        ) : (
          <motion.form
            key={isCommentFieldOpen}
            className={`${styles["new-comment"]} ${styles["field"]}`}
            initial={{ y: 75 }}
            animate={{ y: 0 }}
            exit={{ y: 75 }}
            transition={{ duration: 0.125 }}
            onSubmit={handleNewCommentSubmit}
          >
            <IconButton
              icon={<TimesIcon />}
              onClick={() => setCommentFieldOpen(false)}
            />
            <TextArea
              id="new_comment"
              value={newComment}
              onChange={handleNewCommentChange}
              placeholder="Write a comment..."
              autoFocus
            />
            <IconButton
              icon={<SendIcon />}
              type="submit"
              disabled={newComment === ""}
              variant="primary"
            />
          </motion.form>
        ))}
    </>
  );
};
