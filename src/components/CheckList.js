import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckList = ({ list = [], items = {}, handleChange }) => {
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

export default CheckList;
