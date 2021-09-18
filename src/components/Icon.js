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
    "filter",
    "home",
    "plus",
    "search",
    "user",
    "chevron-down",
  ]),
};

export default Icon;
