import Image from "next/image";
import styles from "styles/GoogleButton.module.scss";
import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";

const GoogleButton = ({ fullWidth }) => {
  const [image, setImage] = useState("google_default.png");
  return (
    <Link href="https://iflexhibit-api.herokuapp.com/api/auth/google">
      <a
        className={`${styles["google"]} ${
          fullWidth ? styles["fullWidth"] : ""
        }`}
      >
        <Image
          src={"/assets/google/" + image}
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </a>
    </Link>
  );
};

GoogleButton.propTypes = {
  fullWidth: PropTypes.bool,
};

GoogleButton.defaultProps = {
  fullWidth: false,
};

export default GoogleButton;
