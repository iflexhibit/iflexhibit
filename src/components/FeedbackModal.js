import styles from "styles/FeedbackModal.module.scss";
import InfoIcon from "./icons/InfoIcon";
import PropTypes from "prop-types";

const FeedbackModal = ({ info, variant }) => {
  return (
    <div className={`${styles.feedback} ${styles[variant]}`}>
      <div className={styles.icon}>
        <InfoIcon />
      </div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

FeedbackModal.propTypes = {
  info: PropTypes.string,
  variant: PropTypes.oneOf(["success", "warning", "error"]),
};

export default FeedbackModal;
