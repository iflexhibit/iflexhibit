import Button from "./Button";
import TextField from "./TextField";
import CheckList from "./CheckList";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FilterPanel = ({ tags }) => {
  const [text, setText] = useState("");
  const [checklistItems, setChecklistItems] = useState({});
  useEffect(() => {
    setChecklistItems(
      tags.reduce((obj, cur, i) => {
        return { ...obj, [cur]: false };
      }, {})
    );
  }, []);

  const handleChange = (e) => {
    setChecklistItems({ ...checklistItems, [e.target.name]: e.target.checked });
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="filters">
      <Button
        variant="contained"
        icon="fas fa-check"
        label="APPLY FILTERS"
        fullWidth
      />
      <TextField
        handleInput={handleInput}
        placeholder="Search tags..."
        icon="fas fa-search"
        id="tag"
        name="tag"
        value={text}
      />
      {checklistItems && (
        <CheckList items={checklistItems} handleChange={handleChange} />
      )}
    </div>
  );
};

FilterPanel.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default FilterPanel;
