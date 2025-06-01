import React, { useState, useRef, useEffect } from 'react';
import ProductCard from '../component/ProductCard';

const CategorySlider = ({ title, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const containerRef = useRef(null);

  // Show arrows temporarily on scroll
  const handleScroll = () => {
    setShowArrows(true);

    clearTimeout(containerRef.current._scrollTimer);
    containerRef.current._scrollTimer = setTimeout(() => {
      setShowArrows(false);
    }, 2000); // arrows disappear after 2 seconds
  };

  useEffect(() => {
    const cardContainer = document.querySelector('.goodie-bag-card');
    if (!cardContainer) return;

    cardContainer.addEventListener('scroll', handleScroll);
    return () => cardContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <div className="category-slider" ref={containerRef}>
      <h3 className="category-title">{title}</h3>
      <div className={`product-carousel ${showArrows ? 'show-arrows' : ''}`}>
        {products.length > 1 && (
          <button onClick={handlePrev} className="arrow-btn">{'<'}</button>
        )}
        <ProductCard {...products[currentIndex]} />
        {products.length > 1 && (
          <button onClick={handleNext} className="arrow-btn">{'>'}</button>
        )}
      </div>
    </div>
  );
};

export default CategorySlider;
