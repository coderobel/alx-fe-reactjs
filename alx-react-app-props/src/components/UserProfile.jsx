import UserContext from "./UserContext";
import { useContext } from "react";
export default function UserProfile() {
    const data = useContext(UserContext);
  return (
      <div>
        <h2>{data.name}</h2>
        <p>Age: {data.age}</p>
        <p>Bio: {data.bio}</p>
      </div>  
    );
};