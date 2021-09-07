import PropTypes from "prop-types";

const Button = ({ icon, variant, label, href }) => {
  return !href ? (
    <button className={"btn " + variant}>
      {icon && <i className={icon} aria-hidden></i>}
      {label}
    </button>
  ) : (
    <a href={href} className={"btn " + variant}>
      {icon && <i className={icon} aria-hidden></i>}
      {label}
    </a>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  variant: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  variant: "text",
  label: "BUTTON",
  href: null,
};

export default Button;
