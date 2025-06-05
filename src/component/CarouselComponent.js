import React from 'react';
import './CarouselComponent.css';

 
const CarouselComponent = ({
  slides = [],
  currentSlide = 0,
  setCurrentSlide = () => {},
  nextSlide = () => {},
  prevSlide = () => {},
}) => {
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
                  src={slide.vector1}
                  alt="Background Curve"
                  className={`background-curve background-curve-${index}`}
                />
              )}

<div className={`slide-image-wrapper slide-image-wrapper-${index}`}>
                    <img src={slide.image} className="slide-text-outer" alt="Hero" />
                  </div>
</div>
                  <div className={`slide-text slide-text-${index}`}>
                    <h2>{slide.headline}</h2>
                    <p>{slide.subtext}</p>
                    <button className="download-btn">Download Now</button>
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
