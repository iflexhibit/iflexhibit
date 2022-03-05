import styles from "styles/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const links = [
    { label: "Home", link: "/" },
    { label: "Submit Feedback", link: "https://tinyurl.com/iflexhibit-betafb" },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.map}>
        <Image
          src="/assets/logos/lettermark.svg"
          width="120"
          height="30"
          layout="intrinsic"
          alt=""
        />
        <div className={styles.links}>
          {links.map(({ label, link }, i) => (
            <Link href={link} key={i}>
              <a className={styles.link}>{label}</a>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.support}>
        <a
          href="https://ko-fi.com/M4M6ADCO0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            <strong>Support Us</strong>
          </p>
          <img
            src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>
      </div>
      <div className={styles.legal}>
        <p>
          <Link href="/legal#terms">
            <a>
              <b>Terms and Conditions</b>
            </a>
          </Link>{" "}
          |{" "}
          <Link href="/legal#privacy">
            <a>
              <b>Privacy Policy</b>
            </a>
          </Link>
        </p>
        <small>
          <center>Copyright © 2021 iFlexhibit. All rights reserved.</center>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
