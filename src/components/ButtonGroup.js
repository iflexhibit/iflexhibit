import styles from "styles/ButtonGroup.module.scss";
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
  tabs: PropTypes.array,
  active: PropTypes.oneOfType([PropTypes.string]),
  setActiveTab: PropTypes.func,
};

ButtonGroup.defaultProps = {
  tabs: [],
  active: "",
  setActiveTab: () => {},
};

export default ButtonGroup;
