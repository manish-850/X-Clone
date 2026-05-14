import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { registerHandler } from "./Services/auth.api";
import "./Styles/form.scss";
import { UserDataContext } from "../../Context/UserContext";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setUser} = useContext(UserDataContext);
  const formHandler = async (e) => {
    e.preventDefault();
    const data = await registerHandler(username, email, password);
    setUser(data.user);
    navigate("/");
  };
  return (
    <main className="form-wrapper">
      <div className="form-container">
        <h3>Create your account</h3>
        <form className="auth-form"
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
            />
          </div>
          <div className="input-container">
            <p>Email</p>
            <input
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              type="text"
              placeholder="Email"
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
