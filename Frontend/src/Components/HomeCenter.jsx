import "../Styles/feed.scss"
import Post from '../Features/Post/Components/Post'
import PostForm from '../Features/Post/Components/PostForm'
import {feedHandler} from '../Features/Post/Services/post.api'
import { useEffect, useState } from "react"
import AddPost from "../Features/Post/Components/AddPost"
const HomeCenter = () => {
    const [posts, setPosts] = useState([]);
    const [showPostForm, setShowPostForm] = useState(false);
    const [refreshFeed, setRefreshFeed] = useState(false);
    useEffect(() => {
        const fetchFeed = async () => {
            const feed = await feedHandler();
            setPosts(feed.posts.reverse());
        };
        fetchFeed();
    }, [refreshFeed])  
  return (
    <div className='home-center'>
      {
    showPostForm? <PostForm setShowPostForm={setShowPostForm} setRefreshFeed={setRefreshFeed} /> : null
}

      {posts.map((postData) => (
        <div key={postData._id} className="post-wrapper">
          <Post postData={postData} />
        </div>
      ))}
      <AddPost setShowPostForm={setShowPostForm}/>
    </div>
  )
}


export default HomeCenter