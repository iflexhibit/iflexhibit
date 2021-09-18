import styles from "styles/IconButton.module.scss";
import PropTypes from "prop-types";

const IconButton = ({
  icon,
  variant,
  href,
  onClick,
  fullWidth,
  fullHeight,
}) => {
  const classes =
    `${styles["btn"]} ${styles[variant]}` +
    (fullWidth ? ` ${styles["fullWidth"]}` : "") +
    (fullHeight ? ` ${styles["fullHeight"]}` : "");
  return href ? (
    <a className={classes} href={href}>
      {icon}
    </a>
  ) : (
    <button className={classes} onClick={onClick}>
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.element,
  variant: PropTypes.oneOf(["contained", "outlined", "text", "round"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
};

IconButton.defaultProps = {
  variant: "text",
  fullWidth: false,
  fullHeight: false,
};

export default IconButton;
