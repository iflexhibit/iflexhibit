import styles from "styles/Toggle.module.scss";
import PropTypes from "prop-types";

const Toggle = ({ left, right, checked, id, onChange }) => {
  return (
    <div className={styles["toggle"]}>
      {left && <label htmlFor={id}>{left}</label>}
      <label className={styles["track"]}>
        <input
          type="checkbox"
          checked={checked}
          id={id}
          name={id}
          onChange={onChange}
        />
        <span className={`${styles["slider"]}`} />
      </label>
      {right && <label htmlFor={id}>{right}</label>}
    </div>
  );
};

Toggle.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

Toggle.defaultProps = {
  left: null,
  right: null,
  checked: null,
  id: null,
  onChange: () => {},
};

export default Toggle;
