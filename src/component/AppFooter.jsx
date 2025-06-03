import React from 'react';
import './AppFooter.css'; // Make sure to import the CSS file

import appStoreBadge from '../images/bev.png';
import playStoreBadge from '../images/bev.png';
import linkedinIcon from '../images/bev.png';
import instagramIcon from '../images/bev.png';

const AppFooter = () => {
  return (
    <footer className="app-footer">
      {/* ─── Top Links: Shop Fast / Shop Smart / Shop Nimble ─── */}
      <nav className="footer-top-links">
        <a href="/shop-fast" className="footer-link">Shop Fast</a>
        <a href="/shop-smart" className="footer-link">Shop Smart</a>
        <a href="/shop-nimble" className="footer-link">Shop Nimble</a>
      </nav>

      {/* ─── “Get the app” Section ─── */}
      <section className="footer-get-app">
        <h4 className="footer-heading">Get the app</h4>
        <div className="store-buttons">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="store-badge"
          >
            <img src={appStoreBadge} alt="Download on App Store" />
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="store-badge"
          >
            <img src={playStoreBadge} alt="Get it on Google Play" />
          </a>
        </div>
      </section>

      {/* ─── “Contact us” Section ─── */}
      <section className="footer-contact">
        <h4 className="footer-heading">Contact us</h4>
        <p className="contact-text">
          Need help with the app? Reach out anytime—we’re happy to assist!
        </p>
        <a href="mailto:sales@getnimbleapp.com" className="contact-email">
          sales@getnimbleapp.com
        </a>
      </section>

      {/* ─── “Socials” Section ─── */}
      <section className="footer-socials">
        <h4 className="footer-heading">Socials</h4>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default AppFooter;
