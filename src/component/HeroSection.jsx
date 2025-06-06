// HeroSection.js
import React, {useEffect,useRef} from 'react';
import '../styles/hero.css';

const HeroSection = ({
  image,
  image2,
  image2Mobile,
  firstline,
  secondline,
  firstLineColor,
  secondLineColor
}) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.setProperty('--mobile-hero-background', `url(${image2Mobile})`);
    }
  }, [image2Mobile]);
  return (
    <section
      ref={sectionRef}
      className="hero-section text-white"
style={{
        backgroundImage: `url(${image2})`
      }}
    >
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Left Content */}
        <div className="hero-text mb-4 mb-md-0 text-start" style={{ maxWidth: '520px' }}>
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: firstLineColor }}>
            {firstline}<br />
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

        {/* Mobile Placeholder */}
        <div className="d-block d-md-none text-center hero-image-placeholder"></div>
      </div>
    </section>
  );
};

export default HeroSection;
