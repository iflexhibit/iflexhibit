import Image from "next/image";
import Button from "components/Button";

const ProfileBanner = ({ profile }) => {
  return (
    profile && (
      <div className="profile-banner">
        <div className="profile-background">
          <Image
            src={profile.profileBackground}
            alt="Profile Background"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/img/blur.jpg"
          />
        </div>
        <div className="profile">
          <div className="profile-avatar">
            <Image
              src={profile.profileAvatar}
              alt="Profile Avatar"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/img/blur.jpg"
            />
          </div>
          <div className="profile-info">
            <div className="profile-display-name">
              <h1>sosig69</h1>
            </div>
            <div className="profile-stats">
              <div className="row">
                <div className="group">
                  <i className="fas fa-thumbs-up"></i>
                  <b>{profile.likesCount.toLocaleString()}</b>
                  <span>Likes</span>
                </div>
                <div className="group">
                  <i className="fas fa-eye"></i>
                  <b>{profile.viewsCount.toLocaleString()}</b>
                  <span>Views</span>
                </div>
              </div>
              <div className="row">
                <div className="group">
                  <span>Joined</span>
                  <b>{new Date(profile.dateJoined).toJSON().split("T")[0]}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-controls">
          <Button icon="fas fa-flag" color="light" />
        </div>
      </div>
    )
  );
};

export default ProfileBanner;
