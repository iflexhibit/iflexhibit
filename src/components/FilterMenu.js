import styles from "styles/FilterMenu.module.scss";
import Button from "./Button";
import Checkbox from "./Checkbox";
import IconButton from "./IconButton";
import TimesIcon from "./icons/TimesIcon";
import { motion } from "framer-motion";

const FilterMenu = ({
  tags,
  closeMenu,
  handleFilterChange,
  handleFilterReset,
  resetButtonLabel,
  applyButtonLabel,
  hideApplyButton,
  handleApply,
}) => {
  return (
    <div className={styles["filters"]}>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={styles["underlay"]}
        onClick={closeMenu}
      ></motion.button>
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        exit={{ height: "0%", opacity: [1, 1, 0] }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={styles["menu"]}
      >
        <div className={styles["top"]}>
          <Button
            label={resetButtonLabel || "Reset Filters"}
            variant="secondary"
            fullWidth
            onClick={handleFilterReset}
          />
          <IconButton icon={<TimesIcon />} onClick={closeMenu} />
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
        {!hideApplyButton && (
          <div className={styles["bottom"]}>
            <Button
              label={applyButtonLabel || "Apply Filter"}
              variant="primary"
              fullWidth
              onClick={handleApply}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default FilterMenu;
