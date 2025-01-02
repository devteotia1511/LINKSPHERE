import React, { useState } from "react";
import "./LoginSignup.css";
import { FaGoogle, FaApple } from "react-icons/fa";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle state

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-container">
      {/* Toggle Buttons */}
      <div className="form-toggle">
        <button
          className={`toggle-button ${isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`toggle-button ${!isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          Signup
        </button>
      </div>

      {/* Login Form */}
      {isLogin ? (
        <div className="form-content">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="form-button">
              Login
            </button>
          </form>

          <div className="social-login">
            <p >Or login with</p>
            <div className="social-icons">
              <button className="social-button google">
                <FaGoogle /> Google
              </button>
              <button className="social-button apple">
                <FaApple /> Apple
              </button>
            </div>
          </div>

          <button className="forgot-password">Forgot Password?</button>
        </div>
      ) : (
        /* Signup Form */
        <div className="form-content">
          <h2>Signup</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <button type="submit" className="form-button">
              Signup
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;