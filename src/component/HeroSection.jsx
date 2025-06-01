import React from 'react';
const HeroSection = ({ image }) => {
  return (
    <section
  className="hero-section text-white"
  style={{
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left center',
    backgroundRepeat: 'no-repeat',
    padding: '5rem 0',
  }}
>
  <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
    {/* Left Content */}
    <div className="mb-4 mb-md-0" style={{ maxWidth: '500px' }}>
      <h1
        className="fw-bold mb-3"
        style={{ fontSize: '2.5rem', color: '#fffff' }}
      >
        Ready to try Nimble?
      </h1>
      <p className="mb-4" style={{  color: '#FFFFFF' }}>
        Download now and get a free goodie bag at Neighbors Market on June 14th!
      </p>
      <a
        href="/"
        className="btn px-4 py-3 rounded-pill"
        style={{
          backgroundColor: '#A4EC8A',
          color: '#064E3B',
          fontWeight: 600,
          fontSize: '1.1rem'
        }}
      >
        Download Now
      </a>
    </div>
  </div>
</section>
  );
};

export default HeroSection;
