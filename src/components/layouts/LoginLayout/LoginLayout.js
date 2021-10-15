import styles from "styles/layouts/LoginLayout.module.scss";
import Layout from "components/Layout";
import { AnimatedBackground } from "./AnimatedBackground";
import { NoticeSection } from "./NoticeSection";
import { LoginControls } from "./LoginControls";
import { LogoSection } from "./LogoSection";

const LoginLayout = () => {
  return (
    <Layout
      title="Join the Community | iFlexhibit"
      canonical="https://iflexhibit.com/login"
      description="A content-sharing platform made for game changers"
      fullscreen
    >
      <div className={styles["login"]}>
        <LogoSection />
        <div className={styles["body"]}>
          <h1 className={styles["tagline"]}>
            A content-sharing platform made for <span>game changers</span>
          </h1>
          <LoginControls />
          <NoticeSection />
        </div>
        <AnimatedBackground />
      </div>
    </Layout>
  );
};

export default LoginLayout;
