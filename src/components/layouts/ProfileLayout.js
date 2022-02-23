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
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchMyPosts } from "redux/actions/userAction";
import { useEffect } from "react";
import Toggle from "components/Toggle";
import PenIcon from "components/icons/PenIcon";
import FeedbackModal from "components/FeedbackModal";

const ProfileLayout = ({ user, posts, results }) => {
  const router = useRouter();
  const [tabs] = useState(["About", "Works"]);
  const [activeTab, setActiveTab] = useState(router.query.tab || tabs[0]);
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, tab },
      },
      undefined,
      { scroll: false }
    );
  };
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
  const {
    user: currentUser,
    posts: myPosts,
    results: myResults,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser?.id === user?.id)
      dispatch(
        fetchMyPosts({ page: router.query.page, sort: router.query.sort })
      );
  }, [user, currentUser]);

  const [hideNonApproved, setHideNonApproved] = useState(true);
  const handlePostDelete = (id, title) => {
    if (confirm(`Delete \'${title}\'?`)) return dispatch(deletePost(id));
  };
  const { deleteAction } = useSelector((state) => state.user);
  return (
    <Layout
      title={user.username + " | iFlexhibit"}
      description={user.bio}
      canonical={`https://iflexhibit.com/profile/${user.id}/${user.username}`}
    >
      {deleteAction.feedbackMsg && (
        <FeedbackModal
          info={deleteAction.feedbackMsg}
          variant={deleteAction.msgType}
        />
      )}
      <div className={styles["profile"]}>
        <div className={styles.controls}>
          {currentUser?.id === user?.id ? (
            <IconButton icon={<PenIcon />} href="/account" />
          ) : (
            <IconButton
              icon={<FlagIcon />}
              onClick={() => setReportOpen(true)}
            />
          )}
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
            setActiveTab={handleTabSwitch}
          />
        </div>
        <AnimatePresence>
          {activeTab === tabs[0] ? (
            <AboutSection
              user={user}
              givenName={user?.name?.given}
              familyName={user?.name?.family}
              email={user?.email}
              contact={user?.contact}
              bio={user?.bio}
              date={user?.createdAt}
            />
          ) : (
            <WorksSection
              handlePostDelete={handlePostDelete}
              results={
                currentUser?.id === user?.id
                  ? hideNonApproved
                    ? results
                    : myResults
                  : results
              }
              posts={
                currentUser?.id === user?.id
                  ? hideNonApproved
                    ? posts
                    : myPosts
                  : posts
              }
              personal={currentUser?.id === user?.id}
              activeSort={activeSort}
              sortOptions={sortOptions}
              handleSortChange={handleSortChange}
              hideNonApproved={hideNonApproved}
              setHideNonApproved={setHideNonApproved}
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

const AboutSection = ({
  user,
  givenName,
  familyName,
  email,
  contact,
  bio,
  date,
}) => {
  return (
    <motion.div
      className={`${styles["row"]} ${styles["about"]}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.125 }}
    >
      {user?.bans && (
        <div className={`${styles["info"]} ${styles["warning"]}`}>
          <small className={styles["label"]}>
            Banned until {new Date(user?.banExpire).toLocaleDateString()} for
          </small>
          {user?.bans.map((b, i) => (
            <span key={i}>{b}</span>
          ))}
        </div>
      )}
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
  personal,
  hideNonApproved,
  setHideNonApproved,
  handlePostDelete,
}) => {
  return (
    <motion.div
      className={`${styles["row"]} ${styles["works"]}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.125 }}
    >
      <div className={styles.controls}>
        {personal && (
          <Toggle
            checked={hideNonApproved}
            right="Show approved only"
            onChange={(e) => setHideNonApproved(e.target.checked)}
          />
        )}
        <Select
          onChange={handleSortChange}
          options={sortOptions}
          value={activeSort}
        />
      </div>
      <Posts posts={[]} results={results} handlePostDelete={handlePostDelete} />
    </motion.div>
  );
};
export default ProfileLayout;
