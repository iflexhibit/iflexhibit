import styles from "styles/Button.module.scss";
import PropTypes from "prop-types";

const ButtonGroup = ({ tabs, active, setActiveTab }) => {
  return (
    <div className={styles["btn-group"]}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles["btn"]} ${
            styles[tab === active ? "active" : "inactive"]
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
