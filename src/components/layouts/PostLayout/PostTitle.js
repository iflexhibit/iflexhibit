import styles from "styles/layouts/PostLayout.module.scss";
import IconButton from "components/IconButton";
import StarOutlineIcon from "components/icons/StarOutlineIcon";

export const PostTitle = ({ title }) => {
  return (
    <div className={`${styles["row"]} ${styles["title"]}`}>
      <h1>{title}</h1>
      <IconButton icon={<StarOutlineIcon />} variant="outlined" />
    </div>
  );
};
