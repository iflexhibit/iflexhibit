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
      {description.split("\n").map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </motion.div>
  );
};
