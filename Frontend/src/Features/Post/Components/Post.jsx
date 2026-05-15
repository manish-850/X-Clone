import React, { useContext, useState, useEffect } from "react";
import "../Styles/post.scss";
import { UserDataContext } from "../../../Context/UserContext";
import {
  followHandler,
  unfollowHandler,
  getFollowingHandler,
} from "../../User/Services/user.api";
import {
  likePostHandler,
  dislikePostHandler,
  getLikedPostHandler,
  getLikeCountHandler,
} from "../Services/post.api";
import { RiHeart3Fill, RiHeart3Line } from "@remixicon/react";

const Post = ({ postData }) => {
  const { user, following, setFollowing, likedPost, setLikedPost } =
    useContext(UserDataContext);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

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

  const isLikedPost = () => {
    return likedPost.some((p) => {
      return p._id === postData._id;
    });
  };
  useEffect(() => {
    const fetchLikedPosts = async () => {
      const res = await getLikedPostHandler();
      setLikedPost(res.likedPosts);
    };
    fetchLikedPosts();
  }, [isLiked, user]);

  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const res = await getLikeCountHandler(postData._id);
        setLikeCount(res.likeCount);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLikeCount();
  }, [isLiked]);

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
        <div className="post-center-bottom">
          <div className="likeBtn">
            <button
              onClick={async () => {
                try {
                  if (isLikedPost()) {
                    await dislikePostHandler(postData._id);
                    setIsLiked(false);
                  } else {
                    await likePostHandler(postData._id);
                    setIsLiked(true);
                  }
                } catch (error) {
                  console.error("Error liking post:", error);
                }
              }}
            >
              {isLikedPost() ? <RiHeart3Fill /> : <RiHeart3Line />}
            </button>
            <small>{likeCount}</small>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Post;
