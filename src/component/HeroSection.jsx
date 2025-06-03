import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = ({
  image,
  image2,
  firstline,
  secondline,
  firstLineColor,
  secondLineColor,
}) => {
  return (
    <section
      className="hero-section text-white"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        padding: '5rem 0',
      }}
    >
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Left Content */}
        <div className="hero-text mb-4 mb-md-0" style={{ maxWidth: '500px' }}>
          <h1
            className="fw-bold mb-3"
            style={{ fontSize: '2.5rem', color: firstLineColor }}
          >
            {firstline},<br />
            <span style={{ color: secondLineColor }}>now fun & quicker</span>
          </h1>
          <p className="hero-subtext mb-4" style={{ color: secondLineColor }}>
            {secondline}
          </p>
          {/* Download button visible on all breakpoints */}
          <a
            href="/"
            className="btn hero-download px-4 py-3 rounded-pill"
          >
            Download Now
          </a>
        </div>

        {/* Image: will center on mobile, align right on desktop */}
        <div className="hero-image-wrapper">
          <img
            className="image_banner-1"
            src={image}
            alt="phone mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
