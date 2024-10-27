import {UserContext} from "./UserContext";
import UserProfile from "./UserProfile";
const Parent =()=>{
    const user={name:'Mohan',qualification:'M.Tech'};
    return(
        <UserContext.Provider value={user}>
            <UserProfile/>
        </UserContext.Provider>
    )
}
export default Parent;