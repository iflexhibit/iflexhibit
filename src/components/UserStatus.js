import styles from "styles/UserStatus.module.scss";
import PropTypes from "prop-types";

const UserStatus = ({ status }) => {
  return (
    <div className={`${styles["status"]} ${styles[status]}`}>{status}</div>
  );
};

UserStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

UserStatus.defaultProps = {
  status: "guest",
};

export default UserStatus;
