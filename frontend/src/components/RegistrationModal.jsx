import React from "react";
import { FaUser, FaPhone, FaEnvelope, FaBriefcase, FaDollarSign, FaLock } from "react-icons/fa";
import "./RegistrationModal.css";

const RegistrationModal = ({ service, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="registration-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Register for {service}</h2>
        <form className="registration-form">
          <div className="form-group">
            <FaUser className="form-icon" />
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <FaPhone className="form-icon" />
            <input type="text" placeholder="Contact Number" required />
          </div>
          <div className="form-group">
            <FaEnvelope className="form-icon" />
            <input type="email" placeholder="Email ID" required />
          </div>
          <div className="form-group">
            <FaBriefcase className="form-icon" />
            <input type="text" placeholder="Work Experience" required />
          </div>
          <div className="form-group">
            <FaDollarSign className="form-icon" />
            <input type="number" placeholder="Minimum Fee per Project" required />
          </div>
          <div className="form-group">
            <FaLock className="form-icon" />
            <input type="password" placeholder="Set Password" required />
          </div>
          <div className="form-group">
            <FaLock className="form-icon" />
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;