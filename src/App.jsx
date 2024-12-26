import React from "react";
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import LoginSignup from "./components/LoginSignup";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Homepage setCurrentPage={setCurrentPage} />;
      case "login":
        return <LoginSignup setCurrentPage={setCurrentPage} />;
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