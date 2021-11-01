import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import styles from "styles/layouts/PostLayout.module.scss";
import IconButton from "components/IconButton";
import EllipsisHIcon from "components/icons/EllipsisHIcon";
import CommentIcon from "components/icons/CommentIcon";
import TimesIcon from "components/icons/TimesIcon";
import SendIcon from "components/icons/SendIcon";
import TextArea from "components/TextArea";

export const CommentsSection = ({
  comments,
  isCommentFieldOpen,
  setCommentFieldOpen,
  newComment,
  handleNewCommentSubmit,
  handleNewCommentChange,
}) => {
  return (
    <>
      <motion.div
        className={`${styles["row"]} ${styles["comments"]}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.125 }}
      >
        <AnimatePresence>
          {comments?.map((comment) => (
            <motion.div
              key={comment.id}
              className={styles["comment"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className={styles["header"]}>
                <Link href="/profile">
                  <a className={styles["commenter"]}>
                    <div className={styles["avatar"]}>
                      <Image
                        src={comment?.author?.avatar}
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
                        {new Date(comment?.createdAt).toUTCString()}
                      </span>
                    </div>
                  </a>
                </Link>
                <div className={styles["controls"]}>
                  <IconButton icon={<EllipsisHIcon />} />
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
      {!isCommentFieldOpen ? (
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
            variant="contained"
            rounded
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
            variant="contained"
            rounded
            type="submit"
            disabled={newComment === ""}
          />
        </motion.form>
      )}
    </>
  );
};
