import React from "react";
import { useLocation } from "react-router-dom"; 
import "./ExpertListPage.css";

const experts = [
  {
    name: "Dev Teotia",
    contact: "9311031192",
    email: "devteotia1511@gmail.com",
    fee: "$5",
    experience: "5 Months of Freelancing and I had worked on many projects",
    services: ["Web Development", "App Development"],
  },
  {
    name: "Anshika",
    contact: "9876543210",
    email: "anshika27@gmail.com",
    fee: "$8",
    experience: "1 Year, I have expertise in this field",
    services: ["Video Editing", "Content Creation"],
  },
  {
    name: "Divyanka",
    contact: "9856667774",
    email: "divyankapandey59@gmail.com",
    fee: "$7",
    experience: "3 years",
    services: ["Content Writing", "Graphic Designing"],
  },
  {
    name: "Bob Brown",
    contact: "8889990000",
    email: "bob564@example.com",
    fee: "$6",
    experience: "2 years",
    services: ["Web Development", "Graphic Designing"],
  },
  {
    name: "Eve Davis",
    contact: "222-333-4444",
    email: "eve@example.com",
    fee: "$800",
    experience: "8 years",
    services: ["App Development", "Video Editing"],
  },
];

const ExpertListPage = () => {
  const location = useLocation();
  const serviceFromUrl = new URLSearchParams(location.search).get("service"); 

  const filteredExperts = experts.filter((expert) =>
    expert.services.includes(serviceFromUrl)
  );

  return (
    <div className="expert-list-page">
      <h1>Experts of {serviceFromUrl}</h1>
      {filteredExperts.length > 0 ? (
        <div className="expert-list">
          {filteredExperts.map((expert, index) => (
            <div key={index} className="expert-card">
              <h2>{expert.name}</h2>
              <p>Contact: {expert.contact}</p>
              <p>Email: {expert.email}</p>
              <p>Minimum Fee: {expert.fee}</p>
              <p>Experience: {expert.experience}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No experts found for this service.</p>
      )}
    </div>
  );
};

export default ExpertListPage;