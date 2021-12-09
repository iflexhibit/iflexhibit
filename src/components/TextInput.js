import styles from "styles/TextInput.module.scss";
import PropTypes from "prop-types";

const TextInput = ({ type, value, onChange, id, placeholder, autoFocus }) => {
  return (
    <input
      className={styles["textinput"]}
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      name={id}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
};

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "password", "email", "number"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  id: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoFocus: PropTypes.bool,
};

TextInput.defaultProps = {
  type: "text",
  value: "",
  id: "",
  placeholder: "",
  onChange: () => {},
  autoFocus: false,
};

export default TextInput;
