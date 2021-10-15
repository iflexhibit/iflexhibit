import styles from "styles/layouts/PostLayout.module.scss";
import Stat from "components/Stat";
import CommentIcon from "components/icons/CommentIcon";
import StarIcon from "components/icons/StarIcon";
import EyeIcon from "components/icons/EyeIcon";

export const PostStats = ({ likes_count, comments_count, views_count }) => {
  return (
    <div className={`${styles["row"]} ${styles["stats"]}`}>
      <Stat icon={<StarIcon />} value={likes_count.toLocaleString()} />
      <Stat icon={<CommentIcon />} value={comments_count.toLocaleString()} />
      <Stat icon={<EyeIcon />} value={views_count.toLocaleString()} />
    </div>
  );
};
