import styles from "styles/Select.module.scss";
import PropTypes from "prop-types";
import { CaretDownIcon } from "./icons/CaretDownIcon";

const Select = ({ options, onChange, value, fullWidth, small, id }) => {
  return (
    <div
      className={`${styles["select"]} ${fullWidth ? styles["fullWidth"] : ""} ${
        small ? styles["small"] : ""
      }`}
    >
      <select value={value} onChange={onChange} id={id} name={id}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <div className={styles["arrow"]}>
        <CaretDownIcon />
      </div>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Select.defaultProps = {
  options: [],
};

export default Select;
