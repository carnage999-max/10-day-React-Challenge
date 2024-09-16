import profileImage from "./../assets/profile_img.jpg";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="picture">
            <img src={profileImage} alt="Profile Image" />
            <p>
              <b>{props.name}</b>
              <br />
              <span>{props.position}</span>
              <p className="bio">{props.bio}</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
