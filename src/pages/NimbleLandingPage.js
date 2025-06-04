import React, { useState, useEffect,useCallback } from 'react';
import logo_img from '../images/logo_white.png';
import Header from '../component/Header'
import phone0 from '../images/phone1.png';
import slide2 from '../images/logo.svg'; 
import feature1 from '../images/feature1.png'; 
import image2 from '../images/women.png'; 
import feature2 from '../images/feature2.png'; 
import back_frame from '../images/bg.png'; 
import feature3 from '../images/feature3.png'; 
import '../styles/NLP_Islider.css'
import FeatureBlock from '../component/FeatureBlock';
import HeroSection from '../component/HeroSection';
import Footer from '../pages/Footer';
import AppFooter from '../component/AppFooter';
import Countdown from '../component/Countdown';
import one from '../images/one.png'
import two from '../images/two.png'

const NimbleLandingPage = () => {

  const slides = [
    {
      headline: "Grocery shopping, now fun & quicker",
      subtext: "Download the Nimble app and be the among first to shop at Neighbors Market",
    },
    {
      headline: "Refer 5 & get 15% off",
      subtext: "offer valid on purchase over $25 on June 14th.",
    },
    {
      headline: "Students, stock up!",
      subtext: "get upto 20% off groceries for next 3 months.",
    }
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // auto-slide every 4 sec
    return () => clearInterval(interval);
  }, [nextSlide]);
  
  return (
    <div className="font-sans">
            {/* Navigation Bar */}
              <Header image={logo_img} />

            {/* You can now continue with the rest of the page sections below */}
            {/* Hero Section */}
            <section
                  className="hero-section text-white"
                  style={{
                  backgroundColor:'#fffff',
                    backgroundSize: 'cover',
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat',
                    padding: '5rem 0',
                  }}
                >
<div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
  {/* Left Content: Heading, Subheading, (Desktop-only) Download Button */}
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
    {/* Desktop-only Download Button (hidden on mobile <md) */}
    <a
      href="/"
      className="btn px-4 py-3 rounded-pill d-none d-md-inline-block"
      style={{
        backgroundColor: '#004C45',
        color: '#fff',
        fontWeight: 600,
        fontSize: '1.1rem',

      }}
    >
      Download Now
    </a>
  </div>
        {/* Mobile-only Download Button (visible <md) */}
  <div className="d-block d-md-none text-center">
    <a
      href="/"
      className="btn px-4 py-3 rounded-pill"
      style={{
        backgroundColor: '#004C45',
        color: '#fff',
        fontWeight: 600,
        fontSize: '1.1rem',
      }}
    >
      Download Now
    </a>
  </div>
  {/* Middle: Image */}
  <div className="mb-4 mb-md-0 text-center text-md-start">
    <img
      className="image_banner-1"
      src={phone0}
      alt="phone"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  </div>

  
</div>

</section>

      {/* Countdown Section */}
      <Countdown />
      {/* Custom Promo Slider */}
      <div className="carousel-viewport">
        <section className={`carousel-wrapper slide-${currentSlide}`}>
          <div className="carousel-slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide slide-${index} ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="slide-content">

                    <div className="slide-text">
                      <h2>{slide.headline}</h2>
                      <p>{slide.subtext}</p>
                      <button className="download-btn">Download Now</button>
                      {/* <p className="terms">*T&C apply</p> */}
                    </div>
                   
                </div>

              </div>
            ))}
          </div>

          {/* Navigation */}
          <button onClick={prevSlide} className="carousel-btn prev">&#10094;</button>
          <button onClick={nextSlide} className="carousel-btn next">&#10095;</button>

          {/* Dots */}
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


      <section className="features-wrapper">
              <h2 className="features-heading">How it Works</h2>

              <FeatureBlock
                icon={slide2}
                title="Snap, pay & go"
                text="Skip the checkout lines! Simply scan items with your phone as you shop, pay through the app, and walk out. Shopping made effortless."
                image={feature1}
                sicon={one}
              />
              <FeatureBlock
                icon={slide2}
                title="Smart Suggestions"
                text="Get personalized recommendations while you shop."
                image={feature2}
                sicon={two}
                reverse
              />
              <FeatureBlock
                icon={slide2}
                title="Exclusive Launch Offers"
                text="Access special deals available only during launch week."
                image={feature3}
                sicon={two}
              />
            </section>

    
      <HeroSection image={image2} colors={["#fffff", "#fffff"]} image2={back_frame} firstline ="Ready to try Nimble?" secondline="Download now and get a free goodie bag at Neighbors Market on June 14th!" />
<AppFooter />
      <Footer bgColor="#A4EC8A" textColor="#064E3B" />

    </div>
  );
};

export default NimbleLandingPage;
