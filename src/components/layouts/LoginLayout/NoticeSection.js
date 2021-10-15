import styles from "styles/layouts/LoginLayout.module.scss";
import Link from "next/link";

export const NoticeSection = () => {
  return (
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
  );
};
