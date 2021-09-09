import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";

const CheckList = ({ items, handleChange }) => {
  const classes = (item) => `item ${items[item] ? " checked" : null}`;
  return (
    <div className="checklist">
      {Object.keys(items)?.map((item, index) => (
        <div className={classes(item)} key={index}>
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
  items: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CheckList;
