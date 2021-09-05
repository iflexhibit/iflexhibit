import Image from "next/image";
import { useEffect, useState } from "react";

const ProfileBanner = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    setProfile(userProfile);
  }, []);
  return (
    profile && (
      <div className="profile-banner">
        <div className="profile-background">
          {/* <Image
            src={profile.profileBackground}
            alt="Profile Background"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/img/blur.jpg"
          /> */}
        </div>
      </div>
    )
  );
};

const userProfile = {
  profileBackground: "/img/cards/card4.png",
};

export default ProfileBanner;
