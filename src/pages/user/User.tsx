import Single from "../../components/single/Single";
import "./user.scss";
import { singleUser } from "../../data";

const User = () => {
  // Make API request to fetch user data and send it to Single component.

  return (
    <div className="user">
      <Single {...singleUser }/>
    </div>
  );
};

export default User;
