import React from 'react';
import '../styles/AppFooter.css';
import StoreButton from './StoreButton';
import appStoreBadge from '../images/apple.png';
import playStoreBadge from '../images/playstore.png';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
//  border: 5px solid black;
const AppFooter = () => {
  return (
  <footer className="app-footer">
    <div className='app-footer-inside'>
      {/* Column 1: Shop links */}
      <div className="footer-col footer-links"
      style={{
        fontWeight: 600,
        fontSize: '1rem',
        color: '#074F51',
        
      }}
      >
        <p>Shop Fast</p>
        <p>Shop Smart</p>
        <p>Shop Nimble</p>
      </div>

      {/* Column 2: Store badges */}
      <div className="footer-download-outer">
      <p style={{ color: 'black' ,
                  fontWeight: 600 , marginBottom: '1.2em'
                  
                  }}>Get the app</p>
  <div className='footer-download-outer'>
      <div className="footer-col footer-download">
   
   
          <StoreButton
  logo={appStoreBadge}
  line1="Download on"
  line2="App Store"
  link="https://apps.apple.com"
/>

   
        <StoreButton
  logo={playStoreBadge}
  line1="Download on"
  line2="Google Play"
  link="https://play.google.com/store/"
/>
</div>
      </div>
      </div>
      {/* Column 3: Text links + email */}
    <div className='footer-contact-outer'>
    <div className='footer-contact-outer2'>
    <div className="footer-col footer-contact">
  <p className="footer-contact-heading">Contact us</p>
  <p className="footer-contact-text">
    Need help with the app? Reach out<br />
    anytime — we're happy to assist
  </p>
  <a href="mailto:sales@getnimbleapp.com" className="footer-contact-email">
    sales@getnimbleapp.com
  </a>
</div>

      </div>
    </div>


      {/* Column 4: Social icons */}
<div className='footer-social-outer'>
<p style={{ color: 'black' ,
                  fontWeight: 600 
                  
                  }}>Socials</p>
              <ul className="footer-social">


              <li><a href="https://www.linkedin.com/company/getnimbleapp/"target="_blank" rel="noreferrer" ><FaLinkedin /></a></li>
                <li><a href="https://www.instagram.com/getnimbleapp"target="_blank" rel="noreferrer" ><FaInstagram /></a></li>


              </ul>
              </div>
      </div>
    </footer>
  );
};

export default AppFooter;
