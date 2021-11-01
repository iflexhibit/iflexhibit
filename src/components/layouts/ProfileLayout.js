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

const ProfileLayout = () => {
  const [tabs] = useState(["About", "Works"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [user] = useState({
    bannerImg: "/assets/temp/posts/1.jpg",
    avatarImg: "/assets/temp/hmm.jpg",
    likes_count: 15,
    views_count: 300365,
    date_joined: new Date(),
    displayName: "nikkieyabs",
    realName: "Mary Nicole Yabut",
    email: "address@example.com",
    contact: "09123456789",
    bio: `I think johnpaul5202 shows a lot of creativity in my class. I love the effort he puts forth whenever he participates during my lessons.
    He usually seems to be quite cheerful in class. He loves when he can use new words he learned in class.
    I always try to encourage him to practice his speaking in class, so he can continue to improve his speaking skills. I am quite happy with the effort he puts into reading in the classroom. He applies the grammar he knows well when he is writing in English.
    I am cheering johnpaul5202 on to do well in his English studies.`,
    posts: [
      { imgSrc: "/assets/temp/posts/1.jpg" },
      { imgSrc: "/assets/temp/posts/2.jpg" },
      { imgSrc: "/assets/temp/posts/3.jpg" },
      { imgSrc: "/assets/temp/posts/4.jpg" },
      { imgSrc: "/assets/temp/posts/5.jpg" },
      { imgSrc: "/assets/temp/posts/6.jpg" },
      { imgSrc: "/assets/temp/posts/7.jpg" },
      { imgSrc: "/assets/temp/posts/8.jpg" },
      { imgSrc: "/assets/temp/posts/9.jpg" },
      { imgSrc: "/assets/temp/posts/10.jpg" },
    ],
  });
  const sortOptions = ["most viewed", "newest", "most popular"];
  const [activeSort, setActiveSort] = useState(sortOptions[0]);
  const handleSortChange = (e) => setActiveSort(e.target.value);
  return (
    <Layout
      title="User | iFlexhibit"
      description="A content sharing platform for iACADEMY students"
      canonical="https://iflexhibit.com/profile"
    >
      <div className={styles["profile"]}>
        <ProfileBanner bannerImg={user?.bannerImg} />
        <ProfileAvatar avatarImg={user?.avatarImg} />
        <ProfileDisplayName displayName={user?.displayName} />
        <ProfileStats
          likes_count={user?.likes_count}
          views_count={user?.views_count}
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
              realName={user?.realName}
              email={user?.email}
              contact={user?.contact}
              bio={user?.bio}
              date={user?.date_joined}
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

const AboutSection = ({ realName, email, contact, bio, date }) => {
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
        <span>{realName}</span>
      </div>
      <div className={styles["info"]}>
        <small className={styles["label"]}>Email</small>
        <span>{email}</span>
      </div>
      <div className={styles["info"]}>
        <small className={styles["label"]}>Contact</small>
        <span>{contact}</span>
      </div>
      <div className={styles["info"]}>
        <small className={styles["label"]}>Bio</small>
        <div className={styles["bio"]}>
          {bio.split("\n").map((b, i) => (
            <p key={i}>{b}</p>
          ))}
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
      <Posts posts={posts} />
    </motion.div>
  );
};
export default ProfileLayout;
