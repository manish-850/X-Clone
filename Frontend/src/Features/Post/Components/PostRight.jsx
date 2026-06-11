import { useContext } from "react";
import { followHandler, unfollowHandler,getFollowingHandler } from "../../User/Services/user.api";
import { UserDataContext } from "../../../Context/UserContext";

const PostRight = ({ postData }) => {
  const { user, following, setFollowing } = useContext(UserDataContext);

  const isFollowed = () => {
    return following.some(
      (followedUser) =>
        followedUser.followee.toString() === postData.user._id.toString(),
    );
  };

  return (
    <div className="post-right">
      <div className="post-right-top">
        {user.username !== postData.user.username && (
          <button
            onClick={async () => {
              try {
                if (isFollowed()) {
                  await unfollowHandler(postData.user._id);
                } else {
                  await followHandler(postData.user._id);
                }
                const res = await getFollowingHandler();
                setFollowing(res.following);
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
