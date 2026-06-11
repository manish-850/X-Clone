import React, { useEffect } from "react";
import {
  followHandler,
  unfollowHandler
} from "../../User/Services/user.api";
import { UserDataContext } from "../../../Context/UserContext";
import { useContext } from "react";
import { useState } from "react";

const PostRight = ({ postData }) => {
  const { user, following } = useContext(UserDataContext);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const checkIfFollowing = () => {
      console.log("Checking if following:", following, postData.user._id);
      const followingUser = following.some(
        (follow) => follow.followee.toString() === postData.user._id.toString(),
      );
      setIsFollowing(followingUser);
    };
    checkIfFollowing();
  }, [isFollowing, postData.user._id]);
  return (
    <div className="post-right">
      <div className="post-right-top">
        {user.username !== postData.user.username && (
          <button
            onClick={async () => {
              try {
                if (isFollowing) {
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
            {isFollowing ? "Following" : "Follow"}
          </button>
        )}
      </div>
      <div className="post-right-bottom"></div>
    </div>
  );
};

export default PostRight;
