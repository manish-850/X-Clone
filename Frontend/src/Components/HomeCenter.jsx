import "../Styles/feed.scss"
import Post from '../Features/Post/Components/Post'
import {feedHandler} from '../Features/Post/Services/post.api'
import { useEffect, useState } from "react"
const HomeCenter = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchFeed = async () => {
            const feed = await feedHandler();
            setPosts(feed.posts);
            console.log(feed.posts)
        };
        fetchFeed();
    }, [])  
  return (
    <div className='home-center'>
      {posts.map((postData) => (
        <Post key={postData._id} postData={postData} />
      ))}
    </div>
  )
}


export default HomeCenter