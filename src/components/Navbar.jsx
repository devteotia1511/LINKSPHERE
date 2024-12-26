import React from "react";
import "./Navbar.css";
// Import Font Awesome for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img
          src="/logo.png"
          alt="LinkSphere Logo"
          className="navbar-logo"
        />
      </div>

      <div className="navbar-buttons">
        {/* Home Button */}
        <button
          className="navbar-button"
          onClick={() => setCurrentPage("home")}
          title="Home"
        >
          <FontAwesomeIcon icon={faHome} className="navbar-icon" />
        </button>

        {/* Login/Signup Button */}
        <button
          className="navbar-button"
          onClick={() => setCurrentPage("login")}
        >
          Login/Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;