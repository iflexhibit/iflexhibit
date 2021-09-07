import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";

const CheckList = ({ list, items, handleChange }) => {
  return (
    <div className="checklist">
      {list?.map((item, index) => (
        <div
          className={`checklist-item${items[item] ? " checked" : ""}`}
          key={index}
        >
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChange}
                color="primary"
                name={item}
                checked={items[item] ?? false}
              />
            }
            label={item}
          />
        </div>
      ))}
    </div>
  );
};

CheckList.propTypes = {
  list: PropTypes.array.isRequired,
  items: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

CheckList.defaultProps = {
  list: [],
  items: {},
};

export default CheckList;
