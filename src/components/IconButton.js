import styles from "styles/IconButton.module.scss";
import PropTypes from "prop-types";
import Link from "next/link";

const IconButton = ({
  icon,
  variant,
  href,
  onClick,
  fullWidth,
  fullHeight,
  rounded,
  type,
  disabled,
}) => {
  const classes =
    `${styles["btn"]} ${styles[variant]}` +
    (fullWidth ? ` ${styles["fullWidth"]}` : "") +
    (fullHeight ? ` ${styles["fullHeight"]}` : "") +
    (rounded ? ` ${styles["rounded"]}` : "") +
    (disabled ? ` ${styles["disabled"]}` : "");

  return href ? (
    <Link href={href}>
      <a className={classes}>{icon}</a>
    </Link>
  ) : (
    <button className={classes} onClick={onClick} type={type}>
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.element,
  variant: PropTypes.oneOf(["primary", "secondary", "default", "warning"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  rounded: PropTypes.bool,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  disabled: PropTypes.bool,
};

IconButton.defaultProps = {
  variant: "default",
  fullWidth: false,
  fullHeight: false,
  rounded: false,
  onClick: () => {},
  type: "button",
  disabled: false,
};

export default IconButton;
