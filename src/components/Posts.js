import PropTypes from "prop-types";
import Image from "next/image";
import styles from "styles/Posts.module.scss";

const Posts = ({ posts }) => {
  return (
    <div className={styles["posts"]}>
      {posts.map((post, index) => (
        <Image
          src={post.imgSrc}
          layout="responsive"
          width="150"
          height="100"
          objectFit="cover"
          className={styles["post"]}
          key={index}
        />
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
