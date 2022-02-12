import Image from "next/image";
import styles from "styles/layouts/PostLayout.module.scss";

export const PostMedia = ({ vidSrc, imgSrc, alt }) => {
  return (
    <div className={styles["image-container"]}>
      {imgSrc && (
        <Image
          src={imgSrc}
          layout="fill"
          className={styles["image"]}
          alt={alt}
        />
      )}
      {vidSrc && (
        <video controls width="100%" height="auto">
          <source src={vidSrc} />
        </video>
      )}
    </div>
  );
};
