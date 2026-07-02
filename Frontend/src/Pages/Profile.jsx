import { useEffect, useState } from "react";
import api from "./axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data.user);
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  function handlelogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>Profile</h1>

        {user ? (
          <>
            <div className="user-info">
              <h3>User ID: {user.id}</h3>
              <h3>Email: {user.email}</h3>
            </div>
          </>
        ) : (
          <h3>Loading...</h3>
        )}

        <button onClick={handlelogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
