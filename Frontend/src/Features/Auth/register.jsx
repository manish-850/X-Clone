import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { registerHandler } from "./Services/auth.api";
import { UserDataContext } from "../../Context/UserContext";
import { LoadingDataContext } from "../../Context/LoadingContext";
import { useEffect } from "react";
import "./Styles/form.scss";
const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserDataContext);
  const { loading, setLoading } = useContext(LoadingDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await registerHandler(username, name, email, password);
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
        User Registering....
      </h2>
    );

  return (
    <main className="form-wrapper">
      <div className="form-container">
        <h3>Create your account</h3>
        <form
          className="auth-form"
          onSubmit={(e) => {
            formHandler(e);
          }}
          action=""
        >
          <div className="input-container">
            <p>Username</p>
            <input
              onInput={(e) => {
                setUsername(e.target.value);
              }}
              name="username"
              type="text"
              placeholder="Username"
              value={username}
            />
          </div>
          <div className="input-container">
            <p>Name</p>
            <input
              onInput={(e) => {
                setName(e.target.value);
              }}
              name="name"
              type="text"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="input-container">
            <p>Email</p>
            <input
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              type="email"
              placeholder="Email"
              value={email}
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
              value={password}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
