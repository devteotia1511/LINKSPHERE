import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import RegistrationModal from "./RegistrationModal";
import "./Homepage.css";

const Homepage = () => {
  const [selectedService, setSelectedService] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
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
      // Ensure selectedService is passed as a query parameter to the route
      if (selectedService) {
        navigate(`/expert-list?service=${encodeURIComponent(selectedService)}`);
      } else {
        alert("Please select a service first.");
      }
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
                Register as Service Provider
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