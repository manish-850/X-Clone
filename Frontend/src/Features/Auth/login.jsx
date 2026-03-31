import { useState } from "react";
import "./Styles/form.scss";
import axios from 'axios'
const Login = () => {
  const [userCredential, setUserCredential] = useState("");
  const [password, setPassword] = useState("");
  const formHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      { userCredential, password },
      { withCredentials: true }
    );
    console.log(response.data)
  };
  return (
    <main>
      <div className="form-container">
        <h3>Welcome back</h3>
        <form
          onSubmit={(e) => {
            formHandler(e);
          }}
          action=""
        >
          <div className="input-container">
            <p>Email or Username : </p>
            <input
              onInput={(e) => {
                setUserCredential(e.target.value);
              }}
              name="userCredential"
              type="text"
              placeholder="Email or Username"
            />
          </div>
          <div className="input-container">
            <p>Password : </p>
            <input
              onInput={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>{" "}
        </p>
      </div>
    </main>
  );
};

export default Login;
