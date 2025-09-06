import { useContext } from "react";
import UserContext from "../assets/UserContext";

function UserDetails() {
    const data = useContext(UserContext);
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}

export default UserDetails;