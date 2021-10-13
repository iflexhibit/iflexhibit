import PropTypes from "prop-types";
import styles from "styles/Tag.module.scss";

const Tag = ({ tag }) => <div className={styles["tag"]}>{tag}</div>;

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
