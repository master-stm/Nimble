import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer({ bgColor = "#fff", textColor = "#064E3B" }) {
  return (
    <footer className="footer" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="footer-content text-center">
        {/* <p className="footer-tagline" style={{ color: textColor }}>
          Shop fast, shop smart, shop Nimble
        </p> */}
        <p className="footer-copyright" style={{ color: textColor }}>
          © {new Date().getFullYear()} Motura Inc., Operating under the trade name Nimble. All rights reserved
        </p>
        <ul className="footer-social">
          <li><a href="/" ><FaInstagram /></a></li>

          <li><a href="/"><FaLinkedinIn /></a></li>
        </ul>
        <ul className="footer-legal">
          <li><a href="/PrivacyPolicies">Privacy</a></li>
          <li><a href="/Terms">Terms</a></li>
        </ul>

      </div>
    </footer>
  );
}
