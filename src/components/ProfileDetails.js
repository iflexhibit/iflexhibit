const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>About {profile.username}</h2>
      <hr />
      <div className="group">
        <div className="label">MY NAME</div>
        <div className="content">
          {profile.firstName + " " + profile.lastName}
        </div>
      </div>
      <div className="group">
        <div className="label">MY EMAIL</div>
        <div className="content">{profile.email}</div>
      </div>
      <div className="group">
        <div className="label">MY CONTACT</div>
        <div className="content">{profile.contact}</div>
      </div>
      <div className="group">
        <div className="label">MY BIO</div>
        <div className="content">{profile.bio}</div>
      </div>
    </div>
  );
};

export default ProfileDetails;
