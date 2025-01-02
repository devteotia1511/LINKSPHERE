import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import LoginSignup from "./components/LoginSignup";
import Dashboard from "./components/Dashboard";
import ExpertListPage from "./components/ExpertListPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); 
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Homepage setCurrentPage={setCurrentPage} />;
      case "login":
        return <LoginSignup />;
      case "dashboard":
        return <Dashboard />;
      case "expert-list":
        return <ExpertListPage />
      default:
        return <Homepage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;