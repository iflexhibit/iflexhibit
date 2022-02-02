import styles from "styles/layouts/PostLayout.module.scss";
import StarOutlineIcon from "components/icons/StarOutlineIcon";
import Button from "components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserPostInteraction } from "redux/actions/postAction";
import { viewPost } from "redux/actions/userAction";

export const PostTitle = ({ postId, title, handlePostLike }) => {
  const dispatch = useDispatch();
  const { isLiked } = useSelector((state) => state.post);
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(viewPost(postId));
      dispatch(fetchUserPostInteraction(postId));
    }
  }, [isAuthenticated]);
  return (
    <div className={`${styles["row"]} ${styles["title"]}`}>
      <h1>{title}</h1>
      <Button
        startIcon={<StarOutlineIcon />}
        variant="primary"
        label="Like"
        onClick={handlePostLike}
        disabled={isLiked !== null ? isLiked : true}
      />
    </div>
  );
};
