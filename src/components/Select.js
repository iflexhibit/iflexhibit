import styles from "styles/Select.module.scss";
import Icon from "./Icon";
import PropTypes from "prop-types";

const Select = ({ options, onChange, value }) => {
  return (
    <div className={styles["select"]}>
      <select value={value} onChange={onChange}>
        {options.map((o, index) => (
          <option key={index} value={o}>
            {o}
          </option>
        ))}
      </select>
      <div className={styles["arrow"]}>
        <Icon icon="chevron-down" />
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
