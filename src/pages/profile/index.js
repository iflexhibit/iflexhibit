import Layout from "components/Layout";
import ProfileBanner from "components/ProfileBanner";
import ProfileDetails from "components/ProfileDetails";
import ProfileGallery from "components/ProfileGallery";
import { useEffect, useState } from "react";

export default function Home() {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    setProfile(userProfile);
  }, []);
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
              <ProfileDetails profile={profile} />
              <ProfileGallery />
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
