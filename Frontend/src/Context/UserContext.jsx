import React, { useEffect, useState } from 'react'
import { getMeHandler } from '../Features/User/Services/user.api';
export const UserDataContext = React.createContext();


const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);
    useEffect(()=>{
        const fetchUser = async () => {
        const res = await getMeHandler();
        setUser(res.user);
    }
    fetchUser();
    },[])
  return (
    <UserDataContext.Provider value={{user,setUser,following,setFollowing,followers,setFollowers}}>
        {children}
    </UserDataContext.Provider>
  )
}

export default UserContext