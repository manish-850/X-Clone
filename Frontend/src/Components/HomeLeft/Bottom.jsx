import React, { useContext } from "react";
import { RiLogoutCircleRLine } from "@remixicon/react";
import { logoutHandler } from "../../Features/Auth/Services/auth.api";
import { useNavigate } from "react-router-dom";
import { LoadingDataContext } from "../../Context/LoadingContext";
import { UserDataContext } from "../../Context/UserContext";

const Bottom = () => {
  const navigate = useNavigate();
  const {setLoading} = useContext(LoadingDataContext);
  const { setUser } = useContext(UserDataContext);
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
              src="https://i.pinimg.com/736x/71/72/dd/7172ddc09dfbd4cc627ab217e84eb159.jpg"
              alt=""
            />
          </div>
          <div className="user-details">
            <div className="name">Manish</div>
            <div className="username">@ManishDot_Dev</div>
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
