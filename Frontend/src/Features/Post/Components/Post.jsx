import React from 'react'
import "../Styles/post.scss"
const Post = ({postData}) => {
  return (
    <div className="post">
      <div className="post-left">
        <div className="img-container">
          <img
            src={postData.user.profileImg}
            alt=""
          />
        </div>
      </div>
      <div className="post-center">
        <div className="post-center-top">
          <div className="post-center-top-left">
            <p className="name">Manish</p>
            <p className="username">{postData.user.username}</p>
            <p className="time">20m</p>
          </div>
          <div className="post-center-top-right"></div>
        </div>
        <div className="post-center-center">
          <p className="post-text">
            {postData.caption}
          </p>
          <img src={postData.postImg} alt="" className="post-img" />
        </div>
      </div>
      <div className="post-right"></div>
    </div>
  );
}

export default Post