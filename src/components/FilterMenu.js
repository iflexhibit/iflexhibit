import styles from "styles/FilterMenu.module.scss";
import Button from "./Button";
import Checkbox from "./Checkbox";
import IconButton from "./IconButton";
import TimesIcon from "./icons/TimesIcon";

const FilterMenu = ({
  tags,
  closeMenu,
  handleFilterChange,
  handleFilterReset,
}) => {
  return (
    <div className={styles["filters"]}>
      <button className={styles["underlay"]} onClick={closeMenu}></button>
      <div className={styles["menu"]}>
        <div className={styles["top"]}>
          <Button
            label="Reset filters"
            text="uppercase"
            variant="outlined"
            fullWidth
            onClick={handleFilterReset}
            rounded
          />
          <IconButton icon={<TimesIcon />} variant="text" onClick={closeMenu} />
        </div>
        <div className={styles["tags"]}>
          {Object.entries(tags).map((tag) => (
            <Checkbox
              key={tag[0]}
              id={tag[0]}
              checked={tag[1]}
              label={tag[0]}
              onChange={handleFilterChange}
            />
          ))}
        </div>
        <div className={styles["bottom"]}>
          <Button
            label="apply filter"
            text="uppercase"
            variant="contained"
            fullWidth
            rounded
          />
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
