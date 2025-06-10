import React, { useState, useEffect } from 'react';
import heroImage from '../images/background.svg';
import slide1 from '../images/hero-image-frame.svg'; 
import slide2 from '../images/logo.svg'; 
import '../styles/NLP_Islider.css'
import FeatureBlock from '../component/FeatureBlock';
import HeroSection from '../component/HeroSection';
import Footer from '../pages/Footer';
const NimbleLandingPage2 = () => {
  const slides = [slide1, slide2];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // auto-slide every 4 sec
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="font-sans">
            {/* Navigation Bar */}
            <header className="sticky-top bg-teal-900 ">
              <nav className="navbar navbar-expand-lg">
                <div className="container d-flex justify-content-between align-items-center">
                  {/* Left: Logo + Nav Links */}
                  <div className="d-flex align-items-center">
                    <a className="navbar-brand me-4" href="/">
                      <img
                        src={require("../images/logo.svg").default}
                        alt="Nimble Logo"
                        height="30"
                      />
                    </a>
                    <a
                      className="nav-link text-white fw-semibold me-3"
                      href="#features"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      Features
                    </a>
                    <a
                      className="nav-link text-white fw-semibold me-3"
                      href="#offers"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      Offers
                    </a>
                    
                  </div>

                  {/* Right: Download Button */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nimble.snap.pay"
                    className="btn btn-success fw-semibold px-4 py-2 rounded-pill"
                    style={{ backgroundColor: '#BBF7D0', color: '#064E3B', border: 'none' }}
                  >
                    Download Now
                  </a>
                </div>
              </nav>
            </header>

            {/* You can now continue with the rest of the page sections below */}
            {/* Hero Section */}
      <section className="py-5 bg-white">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* Left Content */}
          <div className="mb-4 mb-md-0" style={{ maxWidth: '500px' }}>
            <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '2.5rem', color: '#004C45' }}>
              Grocery shopping,<br />now fun & quicker
            </h1>
            <p className="text-muted mb-4">
              Download the Nimble app and be among the first to shop at Neighbors Market
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.nimble.snap.pay"
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

          {/* Right Image */}
          <div className="text-center">
            <img
              src={heroImage}  // <-- Replace with your image path
              alt="App Preview"
              className="img-fluid"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </section>
      {/* Countdown Section */}
      <section
        className="py-5 text-center"
        style={{
          backgroundColor: '#E8F8E4',
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.01) 10px, rgba(0,0,0,0.01) 20px)',
        }}
      >
        <h2 className="fw-bold mb-4" style={{ fontSize: '1.8rem' }}>
          We are launching soon! <span role="img" aria-label="rocket">🚀</span>
        </h2>

        <div className="d-flex justify-content-center gap-4">
          {/* Day Box */}
          <div className="px-4 py-3 rounded" style={{ backgroundColor: '#DFF3E2' }}>
            <h3 className="fw-bold text-dark mb-0" style={{ color: '#004C45', fontSize: '2rem' }}>24</h3>
            <small className="text-muted">Days</small>
          </div>

          {/* Hour Box */}
          <div className="px-4 py-3 rounded" style={{ backgroundColor: '#DFF3E2' }}>
            <h3 className="fw-bold text-dark mb-0" style={{ color: '#004C45', fontSize: '2rem' }}>18</h3>
            <small className="text-muted">Hours</small>
          </div>

          {/* Minute Box */}
          <div className="px-4 py-3 rounded" style={{ backgroundColor: '#DFF3E2' }}>
            <h3 className="fw-bold text-dark mb-0" style={{ color: '#004C45', fontSize: '2rem' }}>35</h3>
            <small className="text-muted">Minutes</small>
          </div>
        </div>
      </section>
      {/* Custom Promo Slider */}
      
      <FeatureBlock
        icon={heroImage}
        title="Snap, pay & go"
        text="Skip the checkout lines! Simply scan items with your phone..."
        image={slide1}
      />
      <FeatureBlock
        icon={slide1}
        title="Order & pickup"
        text="Shop online, pick up fast. We’ll load it into your car..."
        image={heroImage}
        reverse // this flips layout
      />
      <FeatureBlock
        icon={heroImage}
        title="Snap, pay & go"
        text="Skip the checkout lines! Simply scan items with your phone..."
        image={slide1}
      />
      <FeatureBlock
        icon={slide1}
        title="Order & pickup"
        text="Shop online, pick up fast. We’ll load it into your car..."
        image={heroImage}
        reverse // this flips layout
      />
      <HeroSection image={heroImage} />
      <Footer /> 
    </div>
  );
};

export default NimbleLandingPage2;
