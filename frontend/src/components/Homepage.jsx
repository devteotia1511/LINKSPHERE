import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import RegistrationModal from "./RegistrationModal";
import "./Homepage.css";

const Homepage = () => {
  const [selectedService, setSelectedService] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const navigate = useNavigate(); 

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleOptionSelect = (option) => {
    setIsModalOpen(false);
    if (option === "register") {
      setShowRegistrationModal(true);
    } else if (option === "connect") {
      if (selectedService) {
        setShowPaymentPopup(true);
      } else {
        alert("Please select a service first.");
      }
    }
  };

  const handlePaymentPopupContinue = () => {
    if (isCheckboxChecked) {
      setShowPaymentPopup(false);
      navigate(`/expert-list?service=${encodeURIComponent(selectedService)}`); // Ensure navigation
    } else {
      alert("Please agree to the terms before continuing.");
    }
  };

  const handleRegistrationClose = () => {
    setShowRegistrationModal(false);
  };

  return (
    <div className="homepage">
      <video autoPlay loop muted className="background-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-overlay">
        <h1 className="homepage-title">LINKSPHERE</h1>
        <p className="homepage-subtitle">
          A Platform connecting Service Providers and Seekers!
        </p>
        <div id="services" className="services">
          <div className="service-list">
            {[
              "Web Development",
              "App Development",
              "Video Editing",
              "Content Writing",
              "Content Creation",
              "Graphic Designing",
            ].map((service) => (
              <button
                key={service}
                className="service-button"
                onClick={() => handleServiceClick(service)}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="modal-title">What would you like to do?</h2>
            <p className="selected-service">You selected: {selectedService}</p>
            <div className="modal-buttons">
              <button
                className="primary-button"
                onClick={() => handleOptionSelect("register")}
              >
                Register as {selectedService} Service Provider
              </button>
              <button
                className="secondary-button"
                onClick={() => handleOptionSelect("connect")}
              >
                Connect with Registered {selectedService} Expert
              </button>
            </div>
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showPaymentPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Payment Confirmation</h2>
            <p>
              You have to pay a minimum fee for this service, which is 
              <strong> Fully Refundable</strong> if you are not satisfied 
              after discussing your project with a freelancer expert of <strong>{selectedService}</strong>.
            </p>
            <div className="popup-checkbox">
              <input
                type="checkbox"
                id="agree"
                checked={isCheckboxChecked}
                onChange={(e) => setIsCheckboxChecked(e.target.checked)}
              />
              <label htmlFor="agree">
                I agree to the terms and conditions
              </label>
            </div>
            <div className="popup-buttons">
              <button
                className="primary-button"
                onClick={handlePaymentPopupContinue}
              >
                Continue
              </button>
              <button
                className="secondary-button"
                onClick={() => setShowPaymentPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showRegistrationModal && (
        <RegistrationModal
          service={selectedService}
          onClose={handleRegistrationClose}
        />
      )}

      <footer id="footer" className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} LINKSPHERE. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;