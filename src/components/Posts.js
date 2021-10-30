import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/Posts.module.scss";

const Posts = ({ posts }) => {
  return (
    <div className={styles["posts"]}>
      {posts.map((post) => (
        <Link href={`/post/${post.id}`} key={post.id}>
          <a>
            <Image
              src={post.image}
              layout="responsive"
              width="150"
              height="100"
              objectFit="cover"
              className={styles["post"]}
              alt={post.title}
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
