import styles from "styles/layouts/LoginLayout.module.scss";
import Layout from "components/Layout";
import { AnimatedBackground } from "./AnimatedBackground";
import { NoticeSection } from "./NoticeSection";
import { LoginControls } from "./LoginControls";
import { LogoSection } from "./LogoSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { authUser } from "redux/actions/authAction";
import { usePageVisibility } from "components/hooks/usePageVisiblity";

const LoginLayout = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const isVisible = usePageVisibility();
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      return;
    if (isAuthenticated) return router.replace("/");
    if (isVisible) return dispatch(authUser());
  }, [isAuthenticated, isVisible]);

  return (
    <Layout
      title="Join the Community | iFlexhibit"
      canonical="https://iflexhibit.com/login"
      description="A content sharing platform for students of iACADEMY"
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
