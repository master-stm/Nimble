// Header.js
import React from 'react';
import './header.css';

const Header = ({ image }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          {/* Left Side: Logo + Desktop Nav */}
          <div className="navbar-left">
            <a className="navbar-brand" href="/">
              <img src={image} alt="Nimble Logo" height="30" />
            </a>
            <div className="navbar-links-desktop">
              <a className="nav-link" href="#features">Features</a>
              <a className="nav-link" href="#offers">Offers</a>
            </div>
          </div>

          {/* Right Side: Download + Hamburger */}
          <div className="navbar-right">
            <a href="/" className="header-download-btn">Download Now</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileNavLinks"
              aria-controls="mobileNavLinks"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.5 12a.5.5 0 010-1h13a.5.5 0 010 1h-13zm0-3.5a.5.5 0 010-1h13a.5.5 0 010 1h-13zm0-3.5a.5.5 0 010-1h13a.5.5 0 010 1h-13z" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Collapsed Nav */}
        <div className="navbar-collapse collapse" id="mobileNavLinks">
          <ul className="navbar-nav-mobile">
            <li><a className="nav-link" href="#features">Features</a></li>
            <li><a className="nav-link" href="#offers">Offers</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
