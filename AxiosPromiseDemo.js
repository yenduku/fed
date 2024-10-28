import React,{useEffect,useState} from "react";
import axios from "axios";
export default function AxiosPromiseDemo(){
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const url = "https://jsonplaceholder.typicode.com/users";
   const fetchUsers = ()=>{
       axios.get(url)
       .then((response)=> {
           setUsers(response.data);
           setLoading(false);
       })
       .catch(error => {
           setError(error.message);
           setLoading(false);
       })
   };
   useEffect(()=>{
       fetchUsers();
   },[]);
   if (loading) {
       return <p>Loading...</p>;
   }
   
   if (error) {
       return <p>Error: {error}</p>;
   }


   return (
       <div>
           <h2>Users List</h2>
           <ul>
               {users.map(user => (
                   <li key={user.id}>
                       {user.name} - {user.email}
                   </li>
               ))}
           </ul>
       </div>
   );
}

