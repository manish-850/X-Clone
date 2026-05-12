import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
})
export const registerHandler = async (username, email, password) => {
    const response = await api.post("/register", { username, email, password });
    return response.data;
}

export const loginHandler = async (userCredential, password) => {
    const response = await api.post("/login", { userCredential, password });
    return response.data;
}
