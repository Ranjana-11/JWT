import { useState } from "react";
import axios from "axios";
import api from "./axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/signup", {
        username,
        email,
        password,
      });

      alert(response.data.message);

      // Optional: form clear karna
      setUsername("");
      setEmail("");
      setPassword("");

      //navigate to login
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Signup Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Signup</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <br />
          <br />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <br />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          <br />

          <button type="submit" className="l-btn">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
