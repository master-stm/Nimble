import React, { useEffect, useState } from 'react';
import '../styles/Hero2.css';

const Hero2 = ({
  image,        // phone mockup
  image2,       // (no longer used for .hero2 on desktop)
  image2Mobile, // mobile background
  firstline,
  secondline,
  firstLineColor,
  secondLineColor,
  buttontextC,
  buttonbg,
  handleDownloadClick
}) => {
  // Track whether viewport is "mobile" (≤768px)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // run it once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only build a style‐object if we're on mobile
  const mobileBgStyle = isMobile
    ? { backgroundImage: `url(${image2Mobile})` }
    : { backgroundImage: `url(${image2})`};

  return (
    <section
      className="hero2"
      style={{
        /* desktop: {} (no background), mobile: {  } */
        ...(firstline === "Ready to try Nimble?" ? { height: '454px', padding: '0 24px' } : {}),
        ...(isMobile ? { height: '80vh', padding: 0 } : {}),
        ...mobileBgStyle
      }}
    >
      {/* Left Text Side */}
      <div className={`${firstline === "Ready to try Nimble?" ? "hero3-text-wrapper" : "hero2-text-wrapper"}`}>
        <h1 className={`${firstline === "Ready to try Nimble?" ? "hero3-heading" : "hero2-heading"}`} style={{ color: firstLineColor }}>
          {firstline}
        </h1>
        <p className={`${firstline === "Ready to try Nimble?" ? "hero3-subtext" : "hero2-subtext"}`} style={{ color: secondLineColor }}>
          {secondline}
        </p>
        <a
          onClick={(e) => { e.preventDefault(); handleDownloadClick() }}
          className={`${firstline === "Ready to try Nimble?" ? "hero3-btn" : "hero2-btn"}`}
          style={{
            backgroundColor: buttonbg,
            color: buttontextC
          }}
        >
          Download Now
        </a>
      </div>

      {/* Right Image (phone mockup) */}
      <div className="hero2-image-wrapper">
        <img src={image} alt="phone" className={`${firstline === "Ready to try Nimble?" ? "hero3-image" : "hero2-image"}`} />
      </div>
    </section>
  );
};

export default Hero2;
