import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "./axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/login", formData);
      console.log(response.data);
      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      alert(response.data.message);

      // Redirect to Profile
      navigate("/profile");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server Error", error);
      }
    }
  }

  return (
    <div className="login-container ">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <button type="submit" className="l-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
