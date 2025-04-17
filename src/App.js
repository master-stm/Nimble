// Import React and necessary libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/root.css";
import "./font/font.css";

const Navbar = () => (
  <header class="sticky-top">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={require("./images/logo.svg").default} alt="Nimble Logo" />
        </a>
        <button className="navbar-toggler text-white p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
const Footer = () => (
  <footer>
    <span id="year-container">©️ {new Date().getFullYear()} Nimble. All rights reserved</span>
  </footer>
);
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
