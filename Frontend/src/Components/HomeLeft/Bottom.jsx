import React, { useContext } from "react";
import { RiLogoutCircleRLine } from "@remixicon/react";
import { logoutHandler } from "../../Features/Auth/Services/auth.api";
import { useNavigate } from "react-router-dom";
import { LoadingDataContext } from "../../Context/LoadingContext";
import { UserDataContext } from "../../Context/UserContext";

const Bottom = () => {
  const navigate = useNavigate();
  const {setLoading} = useContext(LoadingDataContext);
  const { user, setUser } = useContext(UserDataContext);
  const logout = async () => {
    try {
      setLoading(true);
      await logoutHandler();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Error occurred while logging out:", error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="bottom">
      <div className="bottom-left">
        <div className="user-info">
          <div className="profile-pic">
            <img
              src={user?.profileImg}
              alt=""
            />
          </div>
          <div className="user-details">
            <div className="name">{user?.name}</div>
            <div className="username">{user?.username}</div>
          </div>
        </div>
      </div>
      <div className="bottom-right">
        <div onClick={logout} className="logoutBtn">
          <RiLogoutCircleRLine />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
