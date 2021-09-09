import PropTypes from "prop-types";

const TextField = ({ id, name, value, handleInput, placeholder, icon }) => {
  return (
    <div className="textfield">
      {icon && <i className={icon} aria-hidden></i>}
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
      />
    </div>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

TextField.defaultProps = {
  id: "",
  name: "",
  value: "",
  placeholder: "",
  icon: null,
};

export default TextField;
