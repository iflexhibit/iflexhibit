import { useState } from "react";
import styles from "styles/layouts/PostLayout.module.scss";
import Layout from "components/Layout";
import ButtonGroup from "components/ButtonGroup";
import { PostImage } from "./PostImage";
import { PostStats } from "./PostStats";
import { PostTitle } from "./PostTitle";
import { PostTags } from "./PostTags";
import { PostAuthor } from "./PostAuthor";
import { DescriptionSection } from "./DescriptionSection";
import { CommentsSection } from "./CommentsSection";

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
        body: `johnpaul5202 is a very creative student. He loves participating when he knows the answer. It's always great to see him determined to do well in his studies. I can see him use new words he has learned in class constantly. I love when he practices his speaking during my lessons. He seems to enjoy the stories that we read in the classroom. His writing grammar is more careful than his grammar when speaking. I think johnpaul5202 only needs to study a little harder to achieve his full potential as an excellent student.`,
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
        {activeTab === tabs[0] ? (
          <DescriptionSection description={post?.description} />
        ) : (
          <CommentsSection
            comments={[...post?.comments].reverse().map((c) => c)}
            isCommentFieldOpen={isCommentFieldOpen}
            setCommentFieldOpen={setCommentFieldOpen}
            newComment={newComment}
            handleNewCommentSubmit={handleNewCommentSubmit}
            handleNewCommentChange={handleNewCommentChange}
          />
        )}
      </div>
    </Layout>
  );
};

export default PostLayout;
