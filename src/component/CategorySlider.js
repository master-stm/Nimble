import React, { useState } from 'react';
import ProductCard from '../component/ProductCard';

const CategorySlider = ({ title, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <div className="category-slider">
      <h3 className="category-title">{title}</h3>
      <div
        className={`product-carousel ${showArrows ? 'show-arrows' : ''}`}
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
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
