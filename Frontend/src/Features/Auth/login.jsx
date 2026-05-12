import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginHandler } from "./Services/auth.api";
import { feedHandler } from "../Post/Services/post.api";
import "./Styles/form.scss";
const Login = () => {
  const [userCredential, setUserCredential] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const formHandler = async (e) => {
    e.preventDefault();
    const data = await loginHandler(userCredential, password);
    console.log(data);
    navigate("/");
    const PostData = await feedHandler();
    console.log(PostData)
  }
  return (
    <main className="form-wrapper">
      <div className="form-container">
        <h3>Welcome back</h3>
        <form
          className="auth-form"
          onSubmit={(e) => {
            formHandler(e);
          }}
          action=""
        >
          <div className="input-container">
            <p>Email or Username</p>
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
            <p>Password</p>
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
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
