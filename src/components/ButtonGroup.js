import styles from "styles/ButtonGroup.module.scss";
import PropTypes from "prop-types";

const ButtonGroup = ({ tabs, active, setActiveTab }) => {
  return (
    <div className={styles["btn-group"]}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles["btn"]} ${
            tab === active ? styles["active"] : ""
          }`}
          onClick={() => setActiveTab(tab)}
        >
          <span>{tab}</span>
        </button>
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  items: PropTypes.array,
  active: PropTypes.oneOfType([PropTypes.string]),
};

ButtonGroup.defaultProps = {
  items: [],
};

export default ButtonGroup;
