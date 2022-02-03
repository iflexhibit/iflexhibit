import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "redux/actions/postAction";
import {
  deleteComment,
  deletePost,
  likePost,
  postComment,
} from "redux/actions/userAction";
import FeedbackModal from "components/FeedbackModal";

const PostLayout = ({ post }) => {
  const dispatch = useDispatch();
  const [isCommentFieldOpen, setCommentFieldOpen] = useState(false);
  const [tabs] = useState(["Description", "Comments"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [newComment, setNewComment] = useState("");
  const handleNewCommentChange = (e) => setNewComment(e.target.value);
  const handleNewCommentSubmit = (e) => {
    e.preventDefault();
    setCommentFieldOpen(false);
    setNewComment("");
    dispatch(postComment(post.id, newComment));
  };
  useEffect(() => {
    dispatch(fetchComments(post.id));
  }, [dispatch, post]);
  const { comments } = useSelector((state) => state.post);
  const handlePostLike = () => dispatch(likePost(post?.id));
  const handlePostDelete = () => {
    if (confirm(`Delete \'${post?.title}\'?`))
      return dispatch(deletePost(post?.id));
  };
  const { deleteAction } = useSelector((state) => state.user);
  const handleDeleteComment = (commentId) => {
    if (confirm("Delete this comment?"))
      dispatch(deleteComment(commentId, post.id));
  };
  return (
    <Layout
      title={`${post.title} by ${post.author.username} | iFlexhibit`}
      description={post.body}
      canonical={`https://iflexhibit.com/post/${post.id}/${post.title
        .split(" ")
        .join("-")}`}
    >
      {deleteAction.feedbackMsg && (
        <FeedbackModal
          info={deleteAction.feedbackMsg}
          variant={deleteAction.msgType}
        />
      )}
      <div className={styles["post"]}>
        <PostImage imgSrc={post?.image} alt={post?.title} />
        <PostStats
          likes_count={post?.statistics.likes}
          comments_count={post?.statistics.comments}
          views_count={post?.statistics.views}
        />
        <PostTitle
          authorId={post?.author?.id}
          postId={post?.id}
          title={post?.title}
          handlePostLike={handlePostLike}
          handlePostDelete={handlePostDelete}
        />
        <PostTags tags={post?.tags} />
        <PostAuthor
          postId={post?.id}
          authorId={post?.author?.id}
          avatar={post?.author?.avatar}
          displayName={post?.author?.username}
          date={new Date(post?.createdAt).toJSON().split("T")[0]}
          handlePostDelete={handlePostDelete}
        />
        <div className={`${styles["row"]} ${styles["tabs"]}`}>
          <ButtonGroup
            tabs={tabs}
            active={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        {activeTab === tabs[0] ? (
          <DescriptionSection description={post?.body} />
        ) : (
          <CommentsSection
            comments={comments}
            isCommentFieldOpen={isCommentFieldOpen}
            setCommentFieldOpen={setCommentFieldOpen}
            newComment={newComment}
            handleNewCommentSubmit={handleNewCommentSubmit}
            handleNewCommentChange={handleNewCommentChange}
            handleDeleteComment={handleDeleteComment}
          />
        )}
      </div>
    </Layout>
  );
};

export default PostLayout;
