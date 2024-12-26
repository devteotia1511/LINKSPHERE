import React, { useState } from "react";
import RegistrationModal from "./RegistrationModal";
import "./Homepage.css";

const Homepage = () => {
  const [selectedService, setSelectedService] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="homepage">
      
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="content-overlay">
        <h1 className="homepage-title">LINKSPHERE</h1>
        <p className="homepage-subtitle">
          A Platform connecting Service Providers and Seekers!
        </p>
        <div id="services" className="services">
          <div className="service-list">
            <button
              className="service-button"
              onClick={() => handleServiceClick("Web Development")}
            >
              Web Development
            </button>
            <button
              className="service-button"
              onClick={() => handleServiceClick("App Development")}
            >
              App Development
            </button>
            <button
              className="service-button"
              onClick={() => handleServiceClick("Video Editing")}
            >
              Video Editing
            </button>
            <button
              className="service-button"
              onClick={() => handleServiceClick("Content Writing")}
            >
              Content Writing
            </button>
            <button
              className="service-button"
              onClick={() => handleServiceClick("Content Creation")}
            >
              Content Creation
            </button>
            <button
              className="service-button"
              onClick={() => handleServiceClick("Graphic Designing")}
            >
              Graphic Designing
            </button>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {isModalOpen && (
        <RegistrationModal
          service={selectedService}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Footer Section */}
      <footer id="footer" className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} LINKSPHERE. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;