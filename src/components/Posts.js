import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/Posts.module.scss";
import Pagination from "./Pagination";
import StarIcon from "./icons/StarIcon";
import EyeIcon from "./icons/EyeIcon";
import CommentIcon from "./icons/CommentIcon";
import Stat from "./Stat";
import IconButton from "./IconButton";
import TrashIcon from "./icons/TrashIcon";
import { useState } from "react";
import { useRouter } from "next/router";

const Posts = ({ posts, results, handlePostDelete }) => {
  const [postSelected, setPostSelected] = useState("");
  const handlePostSelected = (id) => {
    setPostSelected(id);
    setTimeout(() => setPostSelected(""), 5000);
  };
  const router = useRouter();
  const postBadge = (post) => {
    if (post.status && post.status !== "approved") return post.status;
    else if (post.tags.includes("schoolwork") && router.pathname !== "/")
      return "schoolwork";
    else return "";
  };
  return (
    <div className={styles["posts"]}>
      {posts.length === 0 && (
        <div>
          <strong>No posts found</strong>
        </div>
      )}
      {posts.map((post, i) => (
        <div className={styles.post} key={i}>
          <div className={styles.header}>
            {post.status && post.status !== "approved" ? (
              <IconButton
                icon={<TrashIcon />}
                onClick={() => handlePostDelete(post.id, post.title)}
                variant="warning"
              />
            ) : (
              <span></span>
            )}
            <div className={`${styles.status} ${styles[postBadge(post)]}`}>
              {postBadge(post)}
            </div>
          </div>
          <Link href={`/post/${post.id}`} key={post.id}>
            <a
              className={`${styles.post} ${
                post.id === postSelected ? styles.pressed : ""
              }`}
              onClick={() => handlePostSelected(post.id)}
            >
              <Image
                src={post.image}
                layout="responsive"
                width="150"
                height="100"
                objectFit="cover"
                alt={post.title}
              />
            </a>
          </Link>
          <div className={styles.overlay}>
            <div className={styles.title}>{post?.title}</div>
            <div className={styles.info}>
              <Link href={`/profile/${post.author.id}/${post.author.username}`}>
                <a className={styles.author}>
                  <div className={styles.avatar}>
                    <Image
                      src={post.author.avatar || "/assets/noavatar.jpg"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.username}>{post.author.username}</div>
                </a>
              </Link>
              <div className={styles.stats}>
                <Stat
                  icon={<StarIcon />}
                  value={post.statistics.likes.toLocaleString()}
                />
                <Stat
                  icon={<CommentIcon />}
                  value={post.statistics.comments.toLocaleString()}
                />
                <Stat
                  icon={<EyeIcon />}
                  value={post.statistics.views.toLocaleString()}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <Pagination totalCount={results} itemsPerPage={15} />
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
