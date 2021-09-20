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
}) => {
  const classes =
    `${styles["btn"]} ${styles[variant]}` +
    (fullWidth ? ` ${styles["fullWidth"]}` : "") +
    (fullHeight ? ` ${styles["fullHeight"]}` : "") +
    (rounded ? ` ${styles["rounded"]}` : "");

  return href ? (
    <Link href={href}>
      <a className={classes}>{icon}</a>
    </Link>
  ) : (
    <button className={classes} onClick={onClick}>
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.element,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  rounded: PropTypes.bool,
};

IconButton.defaultProps = {
  variant: "text",
  fullWidth: false,
  fullHeight: false,
  rounded: false,
  onClick: () => {},
};

export default IconButton;
