import Button from "components/Button";
import Layout from "components/Layout";
import styles from "styles/layouts/UserNotFoundLayout.module.scss";

const UserNotFoundLayout = ({ search }) => {
  return (
    <Layout
      title={"User not found | iFlexhibit"}
      description={""}
      canonical={`https://iflexhibit.vercel.app/profile/not-found`}
    >
      <div className={styles["message"]}>
        <div>
          <strong>User {search && `"${search}"`} could not be found</strong>
          <p>
            <small>
              Make sure it&apos;s the correct spelling and letter casing
            </small>
          </p>
        </div>
        <Button label="Back to Home" variant="primary" href="/" />
      </div>
    </Layout>
  );
};

export default UserNotFoundLayout;
