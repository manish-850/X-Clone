import "../Styles/post.scss";
import PostCenter from "./PostCenter";
import PostLeft from "./PostLeft";
import PostRight from "./PostRight";

const Post = ({ postData }) => {
  return (
    <div className="post">
      <PostLeft postData={postData} />
      <PostCenter postData={postData} />
      <PostRight postData={postData} />
    </div>
  );
};

export default Post;
