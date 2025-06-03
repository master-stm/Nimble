import React from 'react';
import './hero.css';

const HeroSection = ({
  image,
  image2,
  firstline,
  secondline,
  firstLineColor,
  secondLineColor
}) => {
  return (
    <section
      className="hero-section text-white"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '454px',
        backgroundRepeat: 'no-repeat',
        padding: '3rem 1.5rem'
      }}
    >
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Left Content */}
        <div className="hero-text mb-4 mb-md-0 text-start" style={{ maxWidth: '520px' }}>
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: firstLineColor }}>
            {firstline}<br />
            {/* <span style={{ color: firstLineColor }}>now fun & quicker</span> */}
          </h1>
          <p className="mb-4" style={{ color: secondLineColor, fontSize: '1.1rem' }}>
            {secondline}
          </p>
          <a
            href="/"
            className="btn px-4 py-3 rounded-pill mb-4 mb-md-0"
            style={{
              backgroundColor: '#A4EC8A',
              color: '#004C45',
              fontWeight: 600,
              fontSize: '1.1rem'
            }}
          >
            Download Now
          </a>
        </div>

        {/* Desktop Image */}
        <div
          className="hero-image d-none d-md-block"
          style={{
            alignSelf: 'flex-end',
            position: 'relative',
            right: '200px',
            bottom: '-80px'
          }}
        >
          <img
            src={image}
            alt="Hero phone"
            style={{ height: '390px', objectFit: 'contain' }}
          />
        </div>

        {/* Mobile Image */}
        <div className="d-block d-md-none text-center">
          <img
            src={image}
            alt="Hero phone"
            style={{ height: '330px', objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
