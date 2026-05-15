import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:3000/api/posts",
    withCredentials: true
})


// fetching feed
export const feedHandler = async () => {
    const response = await api.get("/feed");
    return response.data;
}

// creating post
export const postCreationHandler = async (formData) => {
    const response = await api.post("/", formData);
    return response.data;
}


// like post
export const likePostHandler = async (postId) => {
    const response = await api.post(`/like/${postId}`);
    return response.data;
}

// dislike post
export const dislikePostHandler = async (postId) => {
    const response = await api.post(`/dislike/${postId}`);
    return response.data;
}

// get liked post by user
export const getLikedPostHandler = async () => {
    const response = await api.get("/liked");
    return response.data;
}

// get like count
export const getLikeCountHandler = async (postId) => {
    const response = await api.get(`/likeCount/${postId}`);
    return response.data;
}
