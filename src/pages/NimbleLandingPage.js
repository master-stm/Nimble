import React, { useState, useEffect } from 'react';
import logo_img from '../images/logo_white.png';
import Header from '../component/Header'

import slide2 from '../images/logo.svg';
import feature1 from '../images/feature1.png';
import image2 from '../images/women.png';

import feature2 from '../images/feature2.png';

import feature3 from '../images/feature3.png';
import '../styles/NLP_Islider.css'
import '../styles/QrPopup.css'
import FeatureBlock from '../component/FeatureBlock';

import Footer from '../pages/Footer';
import AppFooter from '../component/AppFooter';
import Countdown from '../component/Countdown';
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import totebag from '../images/tote_bag.png';
import two_g from '../images/two_g.png';
import three_g from '../images/three_g.png';
import Hero2 from '../component/Hero2';
import imageA from '../images/phone1.svg';

import imagebackA from '../images/bg.png';
import image_mobilebg from '../images/m_bg.png';
import CarouselComponent from '../component/CarouselComponent';
import one1 from "../images/vector2.png";
import two2 from "../images/vector1.png";
import three3 from "../images/vector.png";
import totebag_mobile from "../images/totebag_mobile.png";
import m_vector1 from "../images/m_vector.png";
import m_vector2 from "../images/m_vector1.png";

import m_two_g from "../images/m_twog.png";
import mvector3 from "../images/mvector3.png";
import { QRCodeCanvas } from 'qrcode.react';


const slidesData = [
  {
    headline: "Get your free goodie bag only on launch day",
    subtext: "Spend $25 or more and get it today",
    imageDesktop: totebag,
    vector1: one1,
    m_vector: m_vector1,
    imageMobile: totebag_mobile,
    buttonBg: "#A6EC8A",
    buttonTextColor: "#074F51"
  },
  {
    headline: "Refer 5 & get 15% off!",
    subtext: "Offer valid on purchases over $25 on June 14th",
    imageDesktop: two_g,
    vector1: two2,
    m_vector: m_vector2,
    imageMobile: m_two_g,
    buttonBg: "#074F51",
    buttonTextColor: "#A6EC8A"
  },
  {
    headline: "Students, stock up!",
    subtext: "Get upto 20% off groceries for next 3 months",
    imageDesktop: three_g,
    vector1: three3,
    m_vector: mvector3,
    imageMobile: three_g,
    buttonBg: "#A6EC8A",
    buttonTextColor: "#074F51"
  },
];
const NimbleLandingPage = () => {


  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);

  const handleDownloadClick = () => {
    setShowPopup(true);
  };

  // Function to handle closing the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Function to close the popup if clicked outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      closePopup();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4000ms = 4 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <Header image={logo_img} handleDownloadClick={handleDownloadClick} />

      {/* You can now continue with the rest of the page sections below */}
      {/* Hero Section */}
      <Hero2
        handleDownloadClick={handleDownloadClick}
        image={imageA}
        buttontextC="#fff"
        buttonbg="#074F51"
        firstLineColor="#074F51"
        secondLineColor="#7A7A7A"
        firstline="Grocery shopping, now fun & quicker"
        secondline="Download the Nimble app and be among the first to shop at Neighbors Market"
      />

      {/* Countdown Section */}
      <Countdown />
      {/* Custom Promo Slider */}
      <CarouselComponent
        slides={slidesData}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        handleDownloadClick={handleDownloadClick}
      />

      <section id="hiw" className="features-wrapper">
        <h2 className="features-heading">
          How it Works
        </h2>

        <FeatureBlock
          icon={slide2}
          title="Snap, pay & go"
          text="Skip the checkout lines! Simply scan items with your phone as you shop, pay through the app, and walk out. Shopping made effortless."
          image={feature1}
          sicon={one}
        />
        <FeatureBlock
          icon={slide2}
          title="Order & pickup"
          text="Shop online, we'll prepare your order. Drive up to our convenient pickup spots and we'll load your groceries straight into your car."
          image={feature2}
          sicon={two}
          reverse
        />
        <FeatureBlock
          icon={slide2}
          title="Recipe based shopping"
          text="Discover new meals and add all ingredients to your cart with one tap. Turn dinner inspiration into a complete shopping list instantly."
          image={feature3}
          sicon={three}
        />
      </section>

      <Hero2
        image={image2}
        image2={imagebackA}
        image2Mobile={image_mobilebg}
        buttontextC="#064E3B"
        buttonbg="#A4EC8A"
        firstLineColor="#fff"
        secondLineColor="#fff"
        firstline="Ready to try Nimble?"
        secondline="Download now and get a free goodie bag at Neighbors Market on June 14th!"
        handleDownloadClick={handleDownloadClick}
      />
      <AppFooter />
      <div id="cu">
        <Footer bgColor="#A4EC8A" textColor="#064E3B" />
      </div>
      {showPopup && (
        <div className="popup-overlay" onClick={handleOutsideClick}>
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>×</button>
            <h2 className="popup-title">Scan to Download</h2>
            <QRCodeCanvas value={`${window.location.origin}/Download`} size={256} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NimbleLandingPage;
