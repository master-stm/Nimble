import React, { useState, useEffect } from "react";
import "../styles/CarouselComponent.css";

 
const CarouselComponent = ({
  slides = [],
  currentSlide = 0,
  setCurrentSlide = () => {},
  nextSlide = () => {},
  prevSlide = () => {},
  handleDownloadClick
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // set initial
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="carousel-viewport">
      <section className={`carousel-wrapper slide-${currentSlide}`}>
        <div className="carousel-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide slide-${index} ${index === currentSlide ? 'active' : ''}`}
            >

              <div className="slide-content">
                <div className="left-side">
                            {(
                              <img
                              src={isMobile ? slide.m_vector : slide.vector1}
                                alt="Background Curve"
                                className={`background-curve background-curve-${index}`}
                              />
                            )}

                      <div className={`slide-image-wrapper slide-image-wrapper-${index}`}>
                      <img
                                    src={isMobile ? slide.imageMobile : slide.imageDesktop}
                                    alt="Hero"
                                    className="slide-text-outer"
                                  />
                                </div>
                </div>
                  <div className={`slide-text slide-text-${index}`}>
                    <h2>{slide.headline}</h2>
                    <p>{slide.subtext}</p>
                      {/* Apply the slide‐specific colors here: */}
                      <a onClick={(e) => { e.preventDefault(); handleDownloadClick() }}>
                      <button
                      className="download-btn"
                      style={{
                        backgroundColor: slide.buttonBg,
                        color: slide.buttonTextColor
                      }}
                    >
                      Download Now
                    </button>
                    </a>
                  </div>
                
              </div>
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="carousel-btn prev">&#10094;</button>
        <button onClick={nextSlide} className="carousel-btn next">&#10095;</button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CarouselComponent;
