import Single from "../../components/single/Single";
import "./user.scss";

const User = () => {
  // Make API request to fetch user data and send it to Single component.

  return (
    <div className="user">
      <Single />
    </div>
  );
};

export default User;
