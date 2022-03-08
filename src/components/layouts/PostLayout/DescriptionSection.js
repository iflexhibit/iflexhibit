import { motion } from "framer-motion";
import styles from "styles/layouts/PostLayout.module.scss";

export const DescriptionSection = ({ description }) => {
  return (
    <motion.div
      className={`${styles["row"]} ${styles["description"]}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.125 }}
    >
      {description ? (
        description
          .split("\n")
          .map((p, index) => p?.trim().length !== 0 && <p key={index}>{p}</p>)
      ) : (
        <p>
          <small>
            <i>No description provided.</i>
          </small>
        </p>
      )}
    </motion.div>
  );
};
