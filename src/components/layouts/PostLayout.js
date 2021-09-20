import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "styles/PostLayout.module.scss";
import Icon from "components/Icon";
import IconButton from "components/IconButton";
import Layout from "components/Layout";
import Tag from "components/Tag";
import Stat from "components/Stat";
import Button from "components/Button";

const PostLayout = () => {
  const [post] = useState({
    title: "The quick brown fox is over the lazy dog jumping!",
    likes_count: 123,
    comments_count: 3,
    views_count: 69131,
    user: { displayName: "nikkieyabs", realName: "Mary Nicole Yabut" },
    description: `It's not his fault. I know you're going to want to, but you can't blame him. He really has no idea how it happened.
      I kept trying to come up with excuses I could say to mom that would keep her calm when she found out what happened, but the more I tried, the more I could see none of them would work.
      He was going to get her wrath and there was nothing I could say to prevent it.`,
  });
  const [tab, setTab] = useState(true);
  const [tags] = useState([
    "3D",
    "Artistic",
    "Game",
    "Photography",
    "Typography",
    "Video",
    "Vintage",
  ]);
  const [comments] = useState([
    {
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
    },
    {
      author: "grnd",
      date: new Date(),
      body: `MyFamilyPies numbah 1!!`,
    },
    {
      author: "gordonramsi",
      date: new Date(),
      body: `xD`,
    },
  ]);
  return (
    <Layout
      title="iFLEXHIBIT"
      description="A content sharing platform for iACADEMY students"
      canonical="https://iflexhibit.com/post"
    >
      <div className={styles["post"]}>
        <div className={styles["image-container"]}>
          <Image
            src="/assets/temp/posts/2.jpg"
            layout="fill"
            className={styles["image"]}
            alt=""
          />
        </div>
        <div className={`${styles["row"]} ${styles["stats"]}`}>
          <Stat icon={"star"} value={post.likes_count.toLocaleString()} />
          <Stat icon={"comment"} value={post.comments_count.toLocaleString()} />
          <Stat icon={"eye"} value={post.views_count.toLocaleString()} />
        </div>
        <div className={styles["row"]}>
          <h1>{post.title}</h1>
          <IconButton icon={<Icon icon="star-outline" />} variant="outlined" />
        </div>
        <div className={`${styles["row"]} ${styles["tags"]}`}>
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <div className={`${styles["row"]} ${styles["user"]}`}>
          <div className={styles["avatar"]}>
            <Image
              src="/assets/temp/boi.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className={styles["creator"]}>
            <div className={styles["display-name"]}>
              {post.user.displayName}
            </div>
            <div className={styles["real-name"]}>{post.user.realName}</div>
          </div>
          <IconButton icon={<Icon icon="ellipsis-v" />} />
        </div>
        <div className={`${styles["row"]} ${styles["tabs"]}`}>
          <Button
            label="Description"
            variant={!tab ? "contained" : "text"}
            fullWidth
            rounded
            onClick={() => setTab(false)}
          />
          <Button
            label="Comments"
            variant={tab ? "contained" : "text"}
            fullWidth
            rounded
            onClick={() => setTab(true)}
          />
        </div>
        <AnimatePresence>
          {!tab ? (
            <motion.div
              key={tab}
              className={`${styles["row"]} ${styles["description"]}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.125 }}
            >
              {post.description.split("\n").map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className={`${styles["row"]} ${styles["comments"]}`}
              key={tab}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.125 }}
            >
              {comments.map((comment, index) => (
                <div className={styles["comment"]} key={index}>
                  <div className={styles["header"]}>
                    <div className={styles["avatar"]}>
                      <Image
                        src="/assets/temp/boi.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                    <div className={styles["info"]}>
                      <span className={styles["author"]}>
                        <b>{comment.author}</b>
                      </span>
                      <span className={styles["date"]}>
                        {new Date(comment.date).toUTCString()}
                      </span>
                    </div>
                    <div className={styles["controls"]}>
                      <IconButton icon={<Icon icon="ellipsis-h" />} />
                    </div>
                  </div>
                  <div className={styles["body"]}>
                    <p>{comment.body}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default PostLayout;
