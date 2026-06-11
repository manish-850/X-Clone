import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
})

// register
export const registerHandler = async (username,name, email, password) => {
    const response = await api.post("/register", { username, name, email, password });
    return response.data;
}


// login
export const loginHandler = async (userCredential, password) => {
    const response = await api.post("/login", { userCredential, password });
    return response.data;
}

// logout
export const logoutHandler = async () => {
    const response = await api.post("/logout");
    return response.data;
}
