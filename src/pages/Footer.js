import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Nimble. All rights reserved
          </div>
          <ul className="footer-nav">
            <li><a href="/PrivacyPolicies">Privacy</a></li>
            <li><a href="/Terms">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
