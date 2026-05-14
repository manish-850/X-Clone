import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../Styles/post.scss";
import { UserDataContext } from "../../../Context/UserContext";
import { followHandler, getFollowingHandler, getMeHandler } from "../../User/Services/user.api";
const Post = ({ postData }) => {
  const { user,setUser, following, setFollowing } = useContext(UserDataContext);

  const [isFollowing, setIsFollowing] = useState(false);
  const isFollowed = () => {
    return following.some((u) => {
      return u.followee === postData.user._id;
    });
  };
  useEffect(() => {
    const fetchFollowing = async () => {
      const res = await getFollowingHandler();
      setFollowing(res.following);
    };
    fetchFollowing();
  }, [isFollowing]);

  return (
    <div className="post">
      <div className="post-left">
        <div className="img-container">
          <img src={postData.user.profileImg} alt="" />
        </div>
      </div>
      <div className="post-center">
        <div className="post-center-top">
          <div className="post-center-top-left">
            <p className="name">Manish</p>
            <p className="username">{"@" + postData.user.username}</p>
            <p className="time">20m</p>
          </div>
          <div className="post-center-top-right"></div>
        </div>
        <div className="post-center-center">
          <p className="post-text">{postData.caption}</p>

          {postData.url && (
            <img src={postData.url} alt="" className="post-img" />
          )}
        </div>
      </div>
      <div className="post-right">
        <div className="post-right-top">
          {user.username !== postData.user.username && (
            <button
              onClick={async () => {
                const res = await followHandler(postData.user._id);
                if (res.follow) setIsFollowing(true);
              }}
            >
              {isFollowed() ? "Following" : "Follow"}
            </button>
          )}
        </div>
        <div className="post-right-bottom"></div>
      </div>
    </div>
  );
};

export default Post;
