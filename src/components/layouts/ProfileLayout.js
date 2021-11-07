import { useState } from "react";
import Image from "next/image";
import Layout from "components/Layout";
import styles from "styles/layouts/ProfileLayout.module.scss";
import Stat from "components/Stat";
import StarIcon from "components/icons/StarIcon";
import EyeIcon from "components/icons/EyeIcon";
import ButtonGroup from "components/ButtonGroup";
import Posts from "components/Posts";
import Select from "components/Select";
import { AnimatePresence, motion } from "framer-motion";

const ProfileLayout = ({ user }) => {
  const [tabs] = useState(["About", "Works"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const sortOptions = ["most viewed", "newest", "most popular"];
  const [activeSort, setActiveSort] = useState(sortOptions[0]);
  const handleSortChange = (e) => setActiveSort(e.target.value);
  return (
    <Layout
      title={user.username + " | iFlexhibit"}
      description="A content sharing platform for iACADEMY students"
      canonical={"https://iflexhibit.com/profile/" + user.id}
    >
      <div className={styles["profile"]}>
        <ProfileBanner bannerImg={user?.background} />
        <ProfileAvatar avatarImg={user?.avatar} />
        <ProfileDisplayName displayName={user?.username} />
        <ProfileStats likes_count={0} views_count={0} />
        <div className={`${styles["row"]} ${styles["tabs"]}`}>
          <ButtonGroup
            tabs={tabs}
            active={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <AnimatePresence>
          {activeTab === tabs[0] ? (
            <AboutSection
              givenName={user?.name?.given}
              familyName={user?.name?.family}
              email={user?.email}
              contact={user?.contact}
              bio={user?.bio}
              date={user?.createdAt}
            />
          ) : (
            <WorksSection
              posts={user?.posts}
              activeSort={activeSort}
              sortOptions={sortOptions}
              handleSortChange={handleSortChange}
            />
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

const ProfileBanner = ({ bannerImg }) => {
  return (
    <div className={`${styles["row"]} ${styles["banner"]}`}>
      <Image src={bannerImg} layout="fill" objectFit="cover" alt="" />
    </div>
  );
};

const ProfileAvatar = ({ avatarImg }) => {
  return (
    <div className={`${styles["row"]} ${styles["avatar"]}`}>
      <Image src={avatarImg} layout="fill" objectFit="cover" alt="" />
    </div>
  );
};

const ProfileDisplayName = ({ displayName }) => {
  return (
    <div className={`${styles["row"]} ${styles["user"]}`}>
      <h1>{displayName}</h1>
    </div>
  );
};

const ProfileStats = ({ likes_count, views_count }) => {
  return (
    <div className={`${styles["row"]} ${styles["stats"]}`}>
      <Stat icon={<StarIcon />} value={likes_count?.toLocaleString()} />
      <Stat icon={<EyeIcon />} value={views_count?.toLocaleString()} />
    </div>
  );
};

const AboutSection = ({ givenName, familyName, email, contact, bio, date }) => {
  return (
    <motion.div
      className={`${styles["row"]} ${styles["about"]}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.125 }}
    >
      <div className={styles["info"]}>
        <small className={styles["label"]}>Date Joined</small>
        <span>{new Date(date).toJSON().split("T")[0]}</span>
      </div>
      <div className={styles["info"]}>
        <small className={styles["label"]}>Name</small>
        <span>
          {givenName && familyName ? givenName + " " + familyName : "---"}
        </span>
      </div>
      <div className={styles["info"]}>
        <small className={styles["label"]}>Email</small>
        <span>{email || "---"}</span>
      </div>
      <div className={styles["info"]}>
        <small className={styles["label"]}>Contact</small>
        <span>{contact || "---"}</span>
      </div>
      <div className={styles["info"]}>
        <small className={styles["label"]}>Bio</small>
        <div className={styles["bio"]}>
          {bio?.split("\n").map((b, i) => <p key={i}>{b}</p>) || "---"}
        </div>
      </div>
    </motion.div>
  );
};

const WorksSection = ({ posts, sortOptions, activeSort, handleSortChange }) => {
  return (
    <motion.div
      className={`${styles["row"]} ${styles["works"]}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.125 }}
    >
      <Select
        onChange={handleSortChange}
        options={sortOptions}
        value={activeSort}
      />
      <Posts posts={posts || []} />
    </motion.div>
  );
};
export default ProfileLayout;
