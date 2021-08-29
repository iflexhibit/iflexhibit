const SearchBar = ({ id, name, value, handleInput, placeholder, icon }) => {
  return (
    <div className="textfield">
      <i className={icon}></i>
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

export default SearchBar;
