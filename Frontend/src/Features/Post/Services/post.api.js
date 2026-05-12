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

