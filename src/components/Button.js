import PropTypes from "prop-types";

const Button = ({ color, fullWidth, href, icon, label, variant }) => {
  const classes = () => `btn ${variant} ${color} ${fullWidth ? "fill" : null}`;
  return href ? (
    <a href={href} className={classes}>
      {icon && <i className={icon} aria-hidden></i>}
      {label}
    </a>
  ) : (
    <button className={classes()}>
      {icon && <i className={icon} aria-hidden></i>}
      {label}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  color: "",
  fullWidth: false,
  href: null,
  icon: null,
  label: null,
  variant: "text",
};

export default Button;
