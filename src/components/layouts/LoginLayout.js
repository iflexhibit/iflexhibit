import styles from "styles/layouts/LoginLayout.module.scss";
import GoogleButton from "components/GoogleButton";
import Image from "next/image";
import Link from "next/link";
import Button from "components/Button";
import Layout from "components/Layout";

const LoginLayout = () => {
  return (
    <Layout
      title="Join the Community | iFlexhibit"
      canonical="https://iflexhibit.com/login"
      description="A content-sharing platform made for game changers"
      fullscreen
    >
      <div className={styles["login"]}>
        <Link href="/">
          <a className={styles["header"]}>
            <div className={styles["brandmark"]}>
              <Image
                src="/assets/logos/brandmark.svg"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <div className={styles["lettermark"]}>
              <Image
                src="/assets/logos/lettermark.svg"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
          </a>
        </Link>
        <div className={styles["body"]}>
          <h1 className={styles["tagline"]}>
            A content-sharing platform made for <span>game changers</span>
          </h1>
          <div className={styles["controls"]}>
            <div className={styles["cta"]}>
              Join us using your <b>iACADEMY</b> email!
            </div>
            <GoogleButton fullWidth />
            <div className={styles["choice"]}>
              <span>or skip and</span>
            </div>
            <Button
              href="/"
              label="Continue as Guest"
              variant="outlined"
              rounded
              fullWidth
            />
          </div>
          <div className={styles["notice"]}>
            By continuing, you agree to iFlexhibit&apos;s{" "}
            <Link href="/legal#terms">
              <a>
                <b>Terms and Conditions</b>
              </a>
            </Link>{" "}
            and acknowledge you&apos;ve read our{" "}
            <Link href="/legal#privacy">
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
    </Layout>
  );
};

export default LoginLayout;
