import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  const statusHandler = (e) => {
    e.preventDefault();
    setIsOnline(!isOnline);
  };
  return (
    <>
      <div>
        User is <b> {isOnline ? "Online" : "Offline"}</b>
      </div>

      <button onClick={statusHandler}>click to change user status</button>
    </>
  );
}

export default UserProfile;