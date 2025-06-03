import React from 'react';
import './header.css';

const Header = ({ image }) => {
  return (
    <header className="sticky-top bg-teal-900">
      <nav className="navbar navbar-dark p-2">
        <div
          className="
            container-fluid px-2
            d-flex
            flex-row
            flex-nowrap
            align-items-center
            justify-content-between
          "
        >
          {/* ─── LEFT GROUP: Logo + Desktop Links ─── */}
          <div className="d-flex align-items-center">
            {/* Logo */}
            <a className="navbar-brand me-3" href="/">
              <img src={image} alt="Nimble Logo" height="30" />
            </a>

            {/* Desktop-only Links */}
            <div className="d-none d-lg-flex align-items-center">
              <a
                className="nav-link text-white fw-semibold me-3"
                href="#features"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Features
              </a>
              <a
                className="nav-link text-white fw-semibold"
                href="#offers"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Offers
              </a>
            </div>
          </div>

          {/* ─── RIGHT GROUP: Download + Hamburger ─── */}
          <div className="d-flex align-items-center">
            {/* Download button */}
            <a
              href="/"
              className="btn fw-semibold header-download-btn"
            >
              Download Now
            </a>

            {/* Hamburger toggler (always visible on all screens) */}
            <button
              className="navbar-toggler border-0 ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileNavLinks"
              aria-controls="mobileNavLinks"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="#fff"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 12a.5.5 0 010-1h13a.5.5 0 010 1h-13zm0-3.5a.5.5 0 010-1h13a.5.5 0 010 1h-13zm0-3.5a.5.5 0 010-1h13a.5.5 0 010 1h-13z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* ─── Collapsed Mobile Menu (Features/Offers) ─── */}
        <div className="collapse navbar-collapse" id="mobileNavLinks">
          <ul className="navbar-nav px-3">
            <li className="nav-item">
              <a
                className="nav-link text-white fw-semibold"
                href="#features"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fw-semibold"
                href="#offers"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Offers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
