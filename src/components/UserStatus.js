import styles from "styles/UserStatus.module.scss";
import PropTypes from "prop-types";

const UserStatus = ({ status, color }) => {
  return <div className={`${styles["status"]} ${styles[color]}`}>{status}</div>;
};

UserStatus.propTypes = {
  status: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["green"]),
};

UserStatus.defaultProps = {
  color: "",
};

export default UserStatus;
