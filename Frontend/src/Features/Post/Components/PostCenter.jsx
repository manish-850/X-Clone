import React from "react";
import { useEffect, useState } from "react";
import {
  likePostHandler,
  dislikePostHandler,
  getLikedPostHandler,
  getLikeCountHandler,
} from "../Services/post.api";
import "../Styles/post.scss";
import { UserDataContext } from "../../../Context/UserContext";
import { RiHeart3Fill, RiHeart3Line } from "@remixicon/react";
import { useContext } from "react";

const PostCard = ({ postData }) => {
  const [isLiked, setIsLiked] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const { user, likedPost, setLikedPost } = useContext(UserDataContext);

  useEffect(() => {
  const fetchLikedPosts = async () => {
    try {
      const res = await getLikedPostHandler();
      setLikedPost(res.likedPosts);
    } catch (error) {
      console.log(error);
    }
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

  useEffect(() => {
    const checkIfLiked = () => {
      const liked = likedPost.some(
        (post) => post.post.toString() === postData._id.toString(),
      );
      setIsLiked(liked);
    };
    checkIfLiked();
  }, [likedPost, postData._id]);
  return (
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

        {postData.url && <img src={postData.url} alt="" className="post-img" />}
      </div>
      <div className="post-center-bottom">
        <div className="likeBtn">
          <button
            onClick={async () => {
              try {
                if (isLiked) {
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
            {isLiked ? <RiHeart3Fill color="red" /> : <RiHeart3Line />}
          </button>
          <small>{likeCount}</small>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
