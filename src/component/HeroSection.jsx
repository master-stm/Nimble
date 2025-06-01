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
        style={{ fontSize: '2.5rem', color: '#004C45' }}
      >
        Grocery shopping,<br />now fun & quicker
      </h1>
      <p className="text-muted mb-4">
        Download the Nimble app and be among the first to shop at Neighbors Market
      </p>
      <a
        href="/"
        role="link"
        className="btn px-4 py-3 rounded-pill"
        style={{
          backgroundColor: '#004C45',
          color: '#fff',
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
