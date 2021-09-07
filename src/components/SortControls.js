import PropTypes from "prop-types";

const SortControls = ({ items, sortBy, handleSort }) => {
  return (
    <div className="sort">
      {items.map((item, index) => (
        <button
          key={index}
          name={item}
          className={sortBy === item ? "active" : null}
          onClick={handleSort}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

SortControls.propTypes = {
  items: PropTypes.array.isRequired,
  sortBy: PropTypes.string.isRequired,
  handleSort: PropTypes.func.isRequired,
};

SortControls.defaultProps = {
  items: [],
  sortBy: "",
};

export default SortControls;
