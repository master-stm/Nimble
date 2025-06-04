import React , { useEffect, useState }from 'react';
import './Hero2.css';

const Hero2 = ({
  image,              // phone image
  image2,
  image2Mobile, 
  firstline,          // heading text
  secondline,         // subtext
  firstLineColor,     // heading color
  secondLineColor,     // subtext color
  buttontextC,
  buttonbg
}) => {
  const [bgImage, setBgImage] = useState(image2);
  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth <= 768 ? image2Mobile : image2);
    };

    handleResize(); // Set initially
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize);
  }, [image2, image2Mobile]);


  return (
    <section
      className="hero2"
    >
<div
  className="hero2-container"
  style={{ backgroundImage: `url(${bgImage})` }}
>

        {/* Left Text Side */}
        <div className="hero2-text-wrapper">
          <h1 className="hero2-heading" style={{ color: firstLineColor }}>
            {firstline}
          </h1>
          <p className="hero2-subtext" style={{ color: secondLineColor }}>
            {secondline}
          </p>
          <a href="/" className="hero2-btn"style={{
                backgroundColor: buttonbg,
                
                color: buttontextC,
              }}>
            Download Now
          </a>
        </div>

        {/* Right Image */}
        <div className="hero2-image-wrapper">
          <img src={image} alt="phone" className="hero2-image" />
        </div>

      </div>
    </section>
  );
};

export default Hero2;
