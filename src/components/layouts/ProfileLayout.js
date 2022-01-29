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
import { useRouter } from "next/router";
import IconButton from "components/IconButton";
import FlagIcon from "components/icons/FlagIcon";
import ReportModal from "components/ReportModal";

const ProfileLayout = ({ user, posts, results }) => {
  const router = useRouter();
  const [tabs] = useState(["About", "Works"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const sortOptions = [
    { value: "date", label: "Most Recent" },
    { value: "views", label: "Most Views" },
    { value: "likes", label: "Top Rated" },
    { value: "comments", label: "Most Discussed" },
  ];
  const [activeSort, setActiveSort] = useState(router.query.sort);
  const handleSortChange = (e) => {
    setActiveSort(e.target.value);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sort: e.target.value },
    });
  };

  const [isReportOpen, setReportOpen] = useState(false);
  return (
    <Layout
      title={user.username + " | iFlexhibit"}
      description={user.bio}
      canonical={`https://iflexhibit.com/profile/${user.id}/${user.username}`}
    >
      <div className={styles["profile"]}>
        <div className={styles.controls}>
          <IconButton icon={<FlagIcon />} onClick={() => setReportOpen(true)} />
          {isReportOpen && (
            <ReportModal
              closeModal={() => setReportOpen(false)}
              reportType="USER"
              targetId={user.id}
            />
          )}
        </div>
        <ProfileBanner bannerImg={user?.background} userId={user?.id} />
        <ProfileAvatar avatarImg={user?.avatar} />
        <ProfileDisplayName displayName={user?.username} />
        <ProfileStats
          likes_count={parseInt(user?.statistics?.likes)}
          views_count={parseInt(user?.statistics?.views)}
        />
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
              results={results}
              posts={posts}
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
      <Image
        src={bannerImg || "/assets/nobg.jpg"}
        layout="fill"
        objectFit="cover"
        alt=""
      />
    </div>
  );
};

const ProfileAvatar = ({ avatarImg }) => {
  return (
    <div className={`${styles["row"]} ${styles["avatar"]}`}>
      <Image
        src={avatarImg || "/assets/noavatar.jpg"}
        layout="fill"
        objectFit="cover"
        alt=""
      />
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

const WorksSection = ({
  results,
  posts,
  sortOptions,
  activeSort,
  handleSortChange,
}) => {
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
      <Posts posts={posts || []} results={results} />
    </motion.div>
  );
};
export default ProfileLayout;
