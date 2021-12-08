import styles from "styles/layouts/PostLayout.module.scss";
import IconButton from "components/IconButton";
import StarOutlineIcon from "components/icons/StarOutlineIcon";
import Button from "components/Button";

export const PostTitle = ({ title }) => {
  return (
    <div className={`${styles["row"]} ${styles["title"]}`}>
      <h1>{title}</h1>
      <Button startIcon={<StarOutlineIcon />} variant="primary" label="Like" />
    </div>
  );
};
