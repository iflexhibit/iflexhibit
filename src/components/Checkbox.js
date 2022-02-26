import styles from "styles/Checkbox.module.scss";
import PropTypes from "prop-types";

const Checkbox = ({ id, label, checked, onChange, nowrap }) => {
  return (
    <label
      className={`${styles["container"]} ${nowrap ? styles["nowrap"] : ""}`}
    >
      <input
        id={id}
        name={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={styles["checkmark"]}></span>
      {label}
      <div className={styles["underlay"]}></div>
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  onChange: () => {},
};

export default Checkbox;
