import React,{useContext} from "react";
import { UserContext } from "./UserContext";
const UserProfile =()=>{
    const user=useContext(UserContext);
    return(
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Qualification: {user.qualification}</p>
        </div>
    );
};
export default UserProfile;