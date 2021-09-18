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
      />
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOf(["bars", "filters", "home", "plus", "search", "user"])
    .isRequired,
};

export default Icon;
