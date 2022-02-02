import Image from "next/image";
import styles from "styles/GoogleButton.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const GoogleButton = ({ fullWidth }) => {
  const [image, setImage] = useState("google_default.png");
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      setIsMobile(true);
  }, []);

  return (
    <Link href="/api/auth/login">
      <a
        target={isMobile ? "" : "_blank"}
        className={`${styles["google"]} ${
          fullWidth ? styles["fullWidth"] : ""
        }`}
      >
        <Image
          src={"/assets/google/" + image}
          layout="fill"
          objectFit="contain"
          alt="Continue with Google"
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
