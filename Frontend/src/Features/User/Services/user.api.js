import axios from 'axios';
const api = axios.create({
    baseURL: "https://x-clone-0boc.onrender.com/api/user",
    withCredentials: true
})

// get me
export const getMeHandler = async () => {
    const response = await api.get("/me");
    return response.data;
}


// follow user
export const followHandler = async (userId) => {
    const response = await api.post(`/follow/${userId}`);
    return response.data;
}

// unfollow user
export const unfollowHandler = async (userId) => {
    const response = await api.post(`/unfollow/${userId}`);
    return response.data;
}

// get following
export const getFollowingHandler = async () => {
    const response = await api.get("/following");
    return response.data;
}