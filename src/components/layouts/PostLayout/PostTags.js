import styles from "styles/layouts/PostLayout.module.scss";
import Tag from "components/Tag";

export const PostTags = ({ tags }) => {
  return (
    <div className={`${styles["row"]} ${styles["tags"]}`}>
      {tags.map((tag) => tag && <Tag key={tag} tag={tag} />)}
    </div>
  );
};
