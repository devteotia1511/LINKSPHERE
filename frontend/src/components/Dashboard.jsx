import React, { useState } from "react";
import "./Dashboard.css";
import { FaUserCircle } from "react-icons/fa";

const Dashboard = ({ setCurrentPage }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn"); // Remove user login status
    setCurrentPage("login"); // Redirect to login page
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="logo">LOGO</div>
        <div className="profile-icon" onClick={toggleProfileMenu}>
          <FaUserCircle size={30} />
        </div>
        {isProfileMenuOpen && (
          <div className="profile-menu">
            <button onClick={() => setCurrentPage("profile")}>Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </header>

      <div className="main-content">
        <h1>Welcome to Your Dashboard</h1>
        <div className="past-works">
          <h2>Your Past Works</h2>
          <div className="work-blocks">
            <div className="work-block">
              <h3>Web Development Project</h3>
              <p>Details of the work...</p>
            </div>
            <div className="work-block">
              <h3>App Development Project</h3>
              <p>Details of the work...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;