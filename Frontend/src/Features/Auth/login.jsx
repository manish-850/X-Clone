import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginHandler } from "./Services/auth.api";
import "./Styles/form.scss";
import { UserDataContext } from "../../Context/UserContext";
import { LoadingDataContext } from "../../Context/LoadingContext";
import { useEffect } from "react";

const Login = () => {
  const [userCredential, setUserCredential] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const { loading, setLoading } = useContext(LoadingDataContext);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await loginHandler(userCredential, password);
      setUser(data.user);
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <h2
        style={{
          backgroundColor: "black",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          justifyContent: "center",
        }}
      >
        User Logging in....
      </h2>
    );

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
