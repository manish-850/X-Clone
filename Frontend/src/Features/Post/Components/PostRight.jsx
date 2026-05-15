import React from "react";
import {
  followHandler,
  unfollowHandler,
  getFollowingHandler,
} from "../../User/Services/user.api";
import { UserDataContext } from "../../../Context/UserContext";
import { useContext } from "react";
import { useEffect, useState } from "react";

const PostRight = ({ postData }) => {
  const { user, following, setFollowing } = useContext(UserDataContext);
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
  }, [isFollowing, user]);
  return (
    <div className="post-right">
      <div className="post-right-top">
        {user.username !== postData.user.username && (
          <button
            onClick={async () => {
              try {
                if (isFollowed()) {
                  await unfollowHandler(postData.user._id);
                  setIsFollowing(false);
                } else {
                  await followHandler(postData.user._id);
                  setIsFollowing(true);
                }
              } catch (error) {
                console.error("Error following user:", error);
              }
            }}
          >
            {isFollowed() ? "Following" : "Follow"}
          </button>
        )}
      </div>
      <div className="post-right-bottom"></div>
    </div>
  );
};

export default PostRight;
