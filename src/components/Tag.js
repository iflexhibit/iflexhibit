import PropTypes from "prop-types";
import styles from "styles/Tag.module.scss";

const Tag = ({ tag }) => <span className={styles["tag"]}>{tag}</span>;

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
