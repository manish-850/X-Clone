const PostLeft = ({ postData }) => {
  return (
    <div className="post-left">
        <div className="img-container">
          <img src={postData.user.profileImg} alt="" />
        </div>
      </div>
  )
}

export default PostLeft