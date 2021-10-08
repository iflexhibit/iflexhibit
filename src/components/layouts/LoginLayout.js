import styles from "styles/layouts/LoginLayout.module.scss";
import GoogleButton from "components/GoogleButton";
import Image from "next/image";
import Link from "next/link";
import Button from "components/Button";

const LoginLayout = () => {
  return (
    <div className={styles["login"]}>
      <Link href="/">
        <a className={styles["header"]}>
          <div className={styles["brandmark"]}>
            <Image
              src="/assets/logos/brandmark.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles["lettermark"]}>
            <Image
              src="/assets/logos/lettermark.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </a>
      </Link>
      <div className={styles["body"]}>
        <h1 className={styles["tagline"]}>
          A content-sharing platform made for <span>game changers</span>
        </h1>
        <div className={styles["controls"]}>
          <GoogleButton fullWidth />
          <Button
            href="/"
            label="Continue as Guest"
            variant="outlined"
            rounded
            fullWidth
          />
        </div>
        <div className={styles["notice"]}>
          By continuing, you agree to iFlexhibit's{" "}
          <Link href="/">
            <a>
              <b>Terms and Conditions</b>
            </a>
          </Link>{" "}
          and acknowledge you've read our{" "}
          <Link href="/">
            <a>
              <b>Privacy Policy</b>
            </a>
          </Link>
          .
        </div>
      </div>

      <div className={styles["background"]}>
        <div className={styles["circle1"]}></div>
        <div className={styles["circle2"]}></div>
        <div className={styles["circle3"]}></div>
        <div className={styles["circle4"]}></div>
      </div>
    </div>
  );
};

export default LoginLayout;
