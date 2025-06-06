import React from 'react';
import '../styles/StoreButton.css';

const StoreButton = ({ logo, line1, line2, link }) => {
  return (
    <a href={link} className="store-button" target="_blank" rel="noreferrer">
      <div className="store-outer">
      <img src={logo} alt="Store Logo" className="store-icon" />
      </div>
      <div className="store-text">
        <span className="line1">{line1}</span>
        <span className="line2">{line2}</span>
      </div>
    </a>
  );
};

export default StoreButton;
