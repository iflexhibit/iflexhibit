import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "styles/layouts/PostLayout.module.scss";
import IconButton from "components/IconButton";
import Layout from "components/Layout";
import Tag from "components/Tag";
import Stat from "components/Stat";
import StarOutlineIcon from "components/icons/StarOutlineIcon";
import EllipsisHIcon from "components/icons/EllipsisHIcon";
import CommentIcon from "components/icons/CommentIcon";
import TimesIcon from "components/icons/TimesIcon";
import SendIcon from "components/icons/SendIcon";
import EllipsisVIcon from "components/icons/EllipsisVIcon";
import StarIcon from "components/icons/StarIcon";
import EyeIcon from "components/icons/EyeIcon";
import ButtonGroup from "components/ButtonGroup";
import TextArea from "components/TextArea";

const PostLayout = () => {
  const [isCommentFieldOpen, setCommentFieldOpen] = useState(false);
  const [post, setPost] = useState({
    title: "The quick brown fox is over the lazy dog jumping!",
    likes_count: 123,
    comments_count: 3,
    views_count: 69131,
    user: { displayName: "nikkieyabs", realName: "Mary Nicole Yabut" },
    description: `It's not his fault. I know you're going to want to, but you can't blame him. He really has no idea how it happened.
      I kept trying to come up with excuses I could say to mom that would keep her calm when she found out what happened, but the more I tried, the more I could see none of them would work.
      He was going to get her wrath and there was nothing I could say to prevent it.`,
    tags: [
      "3D",
      "Artistic",
      "Game",
      "Photography",
      "Typography",
      "Video",
      "Vintage",
    ],
    comments: [
      {
        id: 1,
        author: "japlong",
        date: new Date(),
        body: `johnpaul5202 is a very creative student. He loves
      participating when he knows the answer. It's always great to
      see him determined to do well in his studies. I can see him
      use new words he has learned in class constantly. I love when
      he practices his speaking during my lessons. He seems to enjoy
      the stories that we read in the classroom. His writing grammar
      is more careful than his grammar when speaking. I think
      johnpaul5202 only needs to study a little harder to achieve
      his full potential as an excellent student.`,
        avatar: "/assets/temp/boi.jpg",
      },
      {
        id: 2,
        author: "grnd",
        date: new Date(),
        body: `MyFamilyPies numbah 1!!`,
        avatar: "/assets/temp/boi.jpg",
      },
      {
        id: 3,
        author: "gordonramsi",
        date: new Date(),
        body: `xD`,
        avatar: "/assets/temp/boi.jpg",
      },
    ],
    avatar: "/assets/temp/boi.jpg",
  });
  const [tabs] = useState(["Description", "Comments"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [newComment, setNewComment] = useState("");
  const handleNewCommentChange = (e) => setNewComment(e.target.value);
  const handleNewCommentSubmit = (e) => {
    e.preventDefault();
    setPost((prev) => ({
      ...prev,
      comments: [
        ...prev.comments,
        {
          id: prev.comments.length + 1,
          author: "Duterte",
          date: new Date(),
          body: newComment,
          avatar: "/assets/temp/hmm.jpg",
        },
      ],
    }));
    setNewComment("");
    setCommentFieldOpen(false);
  };
  return (
    <Layout
      title="iFLEXHIBIT"
      description="A content sharing platform for iACADEMY students"
      canonical="https://iflexhibit.com/post"
    >
      <div className={styles["post"]}>
        <PostImage imgSrc="/assets/temp/posts/2.jpg" />
        <PostStats
          likes_count={post?.likes_count}
          comments_count={post?.comments_count}
          views_count={post?.views_count}
        />
        <PostTitle title={post?.title} />
        <PostTags tags={post?.tags} />
        <PostAuthor
          avatar={post?.avatar}
          displayName={post?.user?.displayName}
          realName={post?.user?.realName}
        />
        <div className={`${styles["row"]} ${styles["tabs"]}`}>
          <ButtonGroup
            tabs={tabs}
            active={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <AnimatePresence>
          {activeTab === tabs[0] ? (
            <DescriptionSection
              activeTab={activeTab}
              description={post?.description}
            />
          ) : (
            <CommentsSection
              activeTab={activeTab}
              comments={[...post?.comments].reverse().map((c) => c)}
              isCommentFieldOpen={isCommentFieldOpen}
              setCommentFieldOpen={setCommentFieldOpen}
              newComment={newComment}
              handleNewCommentSubmit={handleNewCommentSubmit}
              handleNewCommentChange={handleNewCommentChange}
            />
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

const PostImage = ({ imgSrc }) => {
  return (
    <div className={styles["image-container"]}>
      <Image src={imgSrc} layout="fill" className={styles["image"]} alt="" />
    </div>
  );
};

const PostStats = ({ likes_count, comments_count, views_count }) => {
  return (
    <div className={`${styles["row"]} ${styles["stats"]}`}>
      <Stat icon={<StarIcon />} value={likes_count.toLocaleString()} />
      <Stat icon={<CommentIcon />} value={comments_count.toLocaleString()} />
      <Stat icon={<EyeIcon />} value={views_count.toLocaleString()} />
    </div>
  );
};

const PostTitle = ({ title }) => {
  return (
    <div className={`${styles["row"]} ${styles["title"]}`}>
      <h1>{title}</h1>
      <IconButton icon={<StarOutlineIcon />} variant="outlined" />
    </div>
  );
};

const PostTags = ({ tags }) => {
  return (
    <div className={`${styles["row"]} ${styles["tags"]}`}>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
};

const PostAuthor = ({ avatar, displayName, realName }) => {
  return (
    <div className={`${styles["row"]} ${styles["user"]}`}>
      <div className={styles["avatar"]}>
        <Image src={avatar} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className={styles["creator"]}>
        <div className={styles["display-name"]}>{displayName}</div>
        <div className={styles["real-name"]}>{realName}</div>
      </div>
      <IconButton icon={<EllipsisVIcon />} />
    </div>
  );
};

const DescriptionSection = ({ activeTab, description }) => {
  return (
    <motion.div
      key={activeTab}
      className={`${styles["row"]} ${styles["description"]}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.125 }}
    >
      {description.split("\n").map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </motion.div>
  );
};

const CommentsSection = ({
  activeTab,
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
        key={activeTab}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
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
                <div className={styles["avatar"]}>
                  <Image
                    src={comment?.avatar}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
                <div className={styles["info"]}>
                  <span className={styles["author"]}>
                    <b>{comment?.author}</b>
                  </span>
                  <span className={styles["date"]}>
                    {new Date(comment?.date).toUTCString()}
                  </span>
                </div>
                <div className={styles["controls"]}>
                  <IconButton icon={<EllipsisHIcon />} />
                </div>
              </div>
              <div className={styles["body"]}>
                <p>{comment?.body}</p>
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

export default PostLayout;
