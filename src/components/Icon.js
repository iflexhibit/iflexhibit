import Image from "next/image";
import styles from "styles/Icon.module.scss";
import PropTypes from "prop-types";

const Icon = ({ icon, variant }) => {
  return (
    <div className={`${styles["icon"]} ${styles[variant]}`}>
      <Image
        src={`/assets/icons/${icon}.svg`}
        layout="fill"
        objectFit="contain"
        quality="100"
        alt=""
      />
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOf([
    "bars",
    "chevron-down",
    "comment",
    "ellipsis-h",
    "ellipsis-v",
    "eye",
    "filter",
    "flag",
    "home",
    "plus",
    "search",
    "send",
    "star-outline",
    "star",
    "times",
    "user",
  ]).isRequired,
};
export default Icon;
