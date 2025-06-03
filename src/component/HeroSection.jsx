import React from 'react';

const HeroSection = ({
  image,
  image2,
  firstline,
  secondline,
  firstLineColor ,
  secondLineColor 
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
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between" >
        {/* Left Content */}
        <div className="mb-4 mb-md-0" style={{ maxWidth: '500px' }}>
          <h1
            className="fw-bold mb-3"
            style={{ fontSize: '2.5rem', color: firstLineColor }}
          >
            {firstline},<br />
            <span >now fun & quicker</span>
          </h1>
          <p className="mb-4" style={{ color: secondLineColor }}>{secondline} </p>
          <a
            href="/"
            className="btn px-4 py-3 rounded-pill"
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
        <div>
          <img className="image_banner-1"  src={image} alt="phone" height="30" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
