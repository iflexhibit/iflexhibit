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

export default SortControls;
