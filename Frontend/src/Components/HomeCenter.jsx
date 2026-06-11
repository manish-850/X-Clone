import "../Styles/feed.scss";
import Post from "../Features/Post/Components/Post";
import PostForm from "../Features/Post/Components/PostForm";
import { feedHandler,getLikedPostHandler } from "../Features/Post/Services/post.api";
import { useEffect, useState, useContext } from "react";
import AddPost from "../Features/Post/Components/AddPost";
import { LoadingDataContext } from "../Context/LoadingContext";
import { UserDataContext } from "../Context/UserContext";
import { getFollowingHandler } from "../Features/User/Services/user.api";

const HomeCenter = () => {
  const [posts, setPosts] = useState([]);
  const [showPostForm, setShowPostForm] = useState(false);
  const [refreshFeed, setRefreshFeed] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, setLikedPost, setFollowing } = useContext(UserDataContext);

  useEffect(() => {
    try {
      const fetchFollowing = async () => {
        const res = await getFollowingHandler();
        setFollowing(res.following);
      };
      fetchFollowing();
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setLoading(true);
        const feed = await feedHandler();
        setPosts([...feed.posts].reverse());
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [refreshFeed]);

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
  }, []);

  if (loading)
    return (
      <h2
        style={{
          backgroundColor: "black",
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          justifyContent: "center",
        }}
      >
        Feed Loading....
      </h2>
    );

  return (
    <div className="home-center">
      {showPostForm ? (
        <PostForm
          setShowPostForm={setShowPostForm}
          setRefreshFeed={setRefreshFeed}
        />
      ) : null}

      {posts.map((postData) => (
        <div key={postData._id} className="post-wrapper">
          <Post postData={postData} />
        </div>
      ))}
      <AddPost setShowPostForm={setShowPostForm} />
    </div>
  );
};

export default HomeCenter;
