import React, { useEffect, useState } from "react";
import { getMeHandler } from "../Features/User/Services/user.api";
import { LoadingDataContext } from "./LoadingContext";
import { useContext } from "react";

export const UserDataContext = React.createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const { setLoading } = useContext(LoadingDataContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getMeHandler();
        setUser(res.user);
      } catch (error) {
        console.log(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        user,
        setUser,
        following,
        setFollowing,
        followers,
        setFollowers,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
