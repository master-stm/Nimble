import React from 'react';
import '../styles/FeatureBlock.css';

const FeatureBlock = ({ icon, title, text, image, reverse }) => {
  return (
    <section className="feature-section-wrapper">
      <div className={`feature-container ${reverse ? 'reverse' : ''}`}>
        
        {/* Left: Icon + Text */}
        <div className="feature-left">
          <div className="icon-box">
            
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>

        {/* Right: Image + Floating Icon if reverse */}
        <div className="feature-right">
          {reverse && (
            <div className="floating-icon">
              
            </div>
          )}
          <img src={image} alt="Feature Visual" className="main-mockup" />
        </div>

      </div>
    </section>
  );
};

export default FeatureBlock;
