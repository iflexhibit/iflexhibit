import styles from "styles/Button.module.scss";
import PropTypes from "prop-types";
import Link from "next/link";

const Button = ({
  startIcon,
  endIcon,
  label,
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
    <Link href={href}>
      <a className={classes}>
        {startIcon}
        {label && <span>{label}</span>}
        {endIcon}
      </a>
    </Link>
  ) : (
    <button className={classes} onClick={onClick}>
      {startIcon}
      {label && <span>{label}</span>}
      {endIcon}
    </button>
  );
};

Button.propTypes = {
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
};

Button.defaultProps = {
  variant: "text",
  fullWidth: false,
  fullHeight: false,
  onClick: () => {},
};

export default Button;
