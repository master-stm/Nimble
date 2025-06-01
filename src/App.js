// Import React and necessary libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Terms from "./pages/Terms";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import DeleteAccount from "./pages/DeleteAccount";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/root.css";
import "./font/font.css";
import NimbleLandingPage from "./pages/NimbleLandingPage";
import GoodieBagPage from "./pages/GoodieBagPage";

// const Navbar = () => (
//   // <header class="sticky-top">
//   //   <nav className="navbar navbar-expand-lg">
//   //     <div className="container">
//   //       <a className="navbar-brand" href="/">
//   //         <img src={require("./images/logo.svg").default} alt="Nimble Logo" />
//   //       </a>
//   //       <button className="navbar-toggler text-white p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
//   //         <span className="navbar-toggler-icon"></span>
//   //       </button>
//   //       <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
//   //         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//   //           <li className="nav-item">
//   //             <a className="nav-link" href="/">
//   //               Home
//   //             </a>
//   //           </li>
//   //           <li className="nav-item">
//   //             <a className="nav-link" href="about">
//   //               About Us
//   //             </a>
//   //           </li>
//   //           <li className="nav-item">
//   //             <a className="nav-link" href="contact">
//   //               Contact Us
//   //             </a>
//   //           </li>
//   //         </ul>
//   //       </div>
//   //     </div>
//   //   </nav>
//   // </header>
// );


const App = () => {
  return (
    <Router>
      <div className="app-container">
        
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/PrivacyPolicies" element={<PrivacyPolicies />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/NimbleLandingPage" element={<NimbleLandingPage />} />
            <Route path="/NimbleLandingPage2" element={<NimbleLandingPage />} />
            <Route path="/totebag1" element={<GoodieBagPage />} />
            <Route path="/DeleteAccount" element={<DeleteAccount />} />
          </Routes>
        </div>
       
      </div>
    </Router>
  );
};

export default App;
