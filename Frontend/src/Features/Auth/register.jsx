import { useState } from 'react'
import axios from 'axios'
import "./Styles/form.scss";
const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formHandler = async (e)=>{
        e.preventDefault();
        const response = await axios.post(
          "http://localhost:3000/api/auth/register",
          { username, email, password },
          { withCredentials: true }
        );
        console.log(response.data)
    }
  return (
    <main>
      <div className="form-container">
        <h3>Create your account</h3>
        <form
        onSubmit={(e)=>{
            formHandler(e);
        }} 
        action="">
          <div className="input-container">
            <p>Username : </p>
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
            <p>Email : </p>
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
          <button type="submit">Register</button>
        </form>
        <p>
          Don't have an account? <a href="/login">Login</a>
        </p>
      </div>
    </main>
  );
}

export default Register