import PropTypes from "prop-types";
function Profile({ userPhoto }) {
  return (
    <div
      style={{
        backgroundImage: `url(${userPhoto})`,
        height: "200px",
        width: "200px",
        backgroundRepeat:"no-repeat",
        backgroundSize:"contain",
      }}
    ></div>
  );
}

Profile.propTypes = {
  userPhoto: PropTypes.string,
};

export default Profile;
