import PropTypes from "prop-types";

const Button = ({ icon, variant, label, href, color }) => {
  return !href ? (
    <button className={`btn ${variant} ${color}`}>
      {icon && <i className={icon} aria-hidden></i>}
      {label}
    </button>
  ) : (
    <a href={href} className={`btn ${variant} ${color}`}>
      {icon && <i className={icon} aria-hidden></i>}
      {label}
    </a>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  variant: PropTypes.string.isRequired,
  label: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  variant: "text",
  label: null,
  href: null,
  color: "",
};

export default Button;
