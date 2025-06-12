// Import React and necessary libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Download from "./pages/Download";
import Terms from "./pages/Terms";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import DeleteAccount from "./pages/DeleteAccount";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/root.css";
import "./font/font.css";
import NimbleLandingPage from "./pages/NimbleLandingPage";

const App = () => {
  return (
    <Router>
      <div className="app-container">

        <div className="main">
          <Routes>
            <Route path="/" element={<NimbleLandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/PrivacyPolicies" element={<PrivacyPolicies />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/download" element={<Download />} />
            <Route path="/DeleteAccount" element={<DeleteAccount />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
};

export default App;
