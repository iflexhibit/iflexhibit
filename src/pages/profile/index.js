import Layout from "components/Layout";
import ProfileBanner from "components/ProfileBanner";
import ProfileBio from "components/ProfileBio";
import SortControls from "components/SortControls";
import Gallery from "components/Gallery";
import Pagination from "@material-ui/lab/Pagination";
import { useEffect, useState } from "react";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [sort, setSort] = useState(sortItems[0]);
  useEffect(() => {
    setProfile(userProfile);
  }, []);
  const handleSort = (e) => {
    setSort(e.target.name);
  };
  return (
    <Layout
      title="sosig69 | iFLEXHIBIT"
      description="sosig69's iFLEXHIBIT profile page."
    >
      <div className="profile-container">
        {profile && (
          <>
            <ProfileBanner profile={profile} />
            <div className="profile-body-container">
              <ProfileBio profile={profile} />
              <div className="posts-container">
                {sortItems.length > 0 && (
                  <SortControls
                    items={sortItems}
                    sortBy={sort}
                    handleSort={handleSort}
                  />
                )}
                {userPosts.length > 0 && <Gallery posts={userPosts} grid={2} />}
                <Pagination
                  count={10}
                  color="primary"
                  style={{ display: "flex", justifyContent: "center" }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

const userProfile = {
  profileBackground: "/img/cards/card4.png",
  profileAvatar: "/img/boi.jpg",
  username: "sosig69",
  likesCount: 11,
  viewsCount: 900000,
  dateJoined: new Date(),
  firstName: "John Paul",
  lastName: "Ong",
  email: "example@email.com",
  contact: "09123456789",
  bio: "I think johnpaul5202 shows a lot of creativity in my class. I love the effort he puts forth whenever he participates during my lessons. He usually seems to be quite cheerful in class. He loves when he can use new words he learned in class. I always try to encourage him to practice his speaking in class, so he can continue to improve his speaking skills. I am quite happy with the effort he puts into reading in the classroom. He applies the grammar he knows well when he is writing in English. I am cheering johnpaul5202 on to do well in his English studies.",
};

const userPosts = [
  {
    author: {
      avatar: "/img/boi.jpg",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Kirk Sawyer",
    image: "/img/cards/card4.png",
  },
  {
    author: {
      avatar: "/img/boi.jpg",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Cloud Girl",
    image: "/img/cards/card2.png",
  },
  {
    author: {
      avatar: "/img/boi.jpg",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Kerry Eurodyne",
    image: "/img/cards/card3.png",
  },
];

const sortItems = ["MOST RECENT", "MOST VIEWED", "MOST LIKED"];
