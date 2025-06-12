
import "../styles/Footer.css";

export default function Footer({ bgColor = "#fff", textColor = "#064E3B" }) {
  return (
    <footer className="footer" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="footer-content">
        {/* <p className="footer-tagline" style={{ color: textColor }}>
          Shop fast, shop smart, shop Nimble
        </p> */}
        <p className="footer-copyright footer-desktop" style={{ color: textColor }}>
          © {new Date().getFullYear()} Motura Inc. Operating under the trade name Nimble. All rights reserved
        </p>
        <p className="footer-copyright footer-mobile" style={{ color: textColor }}>
          © {new Date().getFullYear()} Motura Inc.
        </p>
        <p className="footer-copyright footer-mobile" style={{ color: textColor }}>
          Operating under the trade name Nimble.
        </p>
        <p className="footer-copyright footer-mobile" style={{ color: textColor }}>
          All rights reserved
        </p>
        <ul className="footer-legal">
          <li><a href="/PrivacyPolicies">Privacy</a></li>
          <li><a href="/Terms">Terms</a></li>
        </ul>
      </div>
    </footer>
  );
}
