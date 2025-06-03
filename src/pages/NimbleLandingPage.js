import React, { useState, useEffect,useCallback } from 'react';
import logo_img from '../images/logo_white.png';

import phone0 from '../images/phone1.png';
import slide2 from '../images/logo.svg'; 
import feature1 from '../images/feature1.png'; 
import women from '../images/women.png'; 
import feature2 from '../images/feature2.png'; 
import back_frame from '../images/rectangle.png'; 
import feature3 from '../images/feature3.png'; 
import '../styles/NLP_Islider.css'
import FeatureBlock from '../component/FeatureBlock';
import HeroSection from '../component/HeroSection';
import Footer from '../pages/Footer';
import AppFooter from '../component/AppFooter';
const NimbleLandingPage = () => {

  const slides = [
    {
      headline: "Get your free goodie bag only on launch day",
      subtext: "Spend $25 or more and get it today",
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
            <header className="sticky-top bg-teal-900">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container d-flex align-items-center justify-content-between">

          {/* ─── Logo ─── */}
          <a className="navbar-brand me-4" href="/">
            <img src={logo_img} alt="Nimble Logo" height="30" />
          </a>

          {/* ─── Desktop‐only Links (hidden on <lg) ─── */}
          <div className="d-none d-lg-flex align-items-center">
            <a
              className="nav-link text-white fw-semibold me-3"
              href="#features"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Features
            </a>
            <a
              className="nav-link text-white fw-semibold"
              href="#offers"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Offers
            </a>
          </div>

          {/* ─── Download button (always visible) ─── */}
          <a
            href="/"
            className="btn fw-semibold px-4 py-2 rounded-pill mx-2"
            style={{
              backgroundColor: '#BBF7D0',
              color: '#064E3B',
              border: 'none',
              fontSize: '0.9rem',
            }}
          >
            Download Now
          </a>

          {/* ─── Hamburger Toggler (visible only on mobile <lg) ─── */}
          <button
            className="navbar-toggler d-lg-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNav"
            aria-controls="mobileNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="#fff"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 12a.5.5 0 010-1h13a.5.5 0 010 1h-13zm0-3.5a.5.5 0 010-1h13a.5.5 0 010 1h-13zm0-3.5a.5.5 0 010-1h13a.5.5 0 010 1h-13z"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* ─── Collapsed Mobile Menu (<lg) ─── */}
        <div className="collapse navbar-collapse d-lg-none" id="mobileNav">
          <ul className="navbar-nav ps-3">
            <li className="nav-item">
              <a
                className="nav-link text-white fw-semibold"
                href="#features"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fw-semibold"
                href="#offers"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Offers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

            {/* You can now continue with the rest of the page sections below */}
            {/* Hero Section */}
            <section
  className="hero-section text-white"
  style={{
   backgroundColorw:'#fffff',
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

  {/* Middle: Image */}
  <div className="mb-4 mb-md-0 text-center text-md-start">
    <img
      className="image_banner-1"
      src={phone0}
      alt="phone"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
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
                      <p className="terms">*T&C apply</p>
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
              <h2 className="features-heading">Features of Nimble</h2>

              <FeatureBlock
                icon={slide2}
                title="Snap, pay & go"
                text="Skip the checkout lines! Simply scan items with your phone..."
                image={feature1}
              />
              <FeatureBlock
                icon={slide2}
                title="Smart Suggestions"
                text="Get personalized recommendations while you shop."
                image={feature2}
                reverse
              />
              <FeatureBlock
                icon={slide2}
                title="Exclusive Launch Offers"
                text="Access special deals available only during launch week."
                image={feature3}
              />
            </section>

    
      <HeroSection image={women} colors={["#fffff", "#fffff"]} image2={back_frame} firstline ="Grocery shopping,
now fun & quicker" secondline="Download the Nimble app and be among the first to shop at Neighbors Market" />
<AppFooter />
      <Footer bgColor="#A4EC8A" textColor="#064E3B" />

    </div>
  );
};

export default NimbleLandingPage;
