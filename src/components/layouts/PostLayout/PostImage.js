import Image from "next/image";
import styles from "styles/layouts/PostLayout.module.scss";

export const PostImage = ({ imgSrc, alt }) => {
  return (
    <div className={styles["image-container"]}>
      <Image src={imgSrc} layout="fill" className={styles["image"]} alt={alt} />
    </div>
  );
};
