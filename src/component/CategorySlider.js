import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from '../component/ProductCard';

const arrowStyle = {
  backgroundColor: '#004C45',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  fontWeight: 400, 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  fontSize: '1.1rem',
};

const iconStyle = {
  fontSize: '1rem',
  fontWeight: 400,
};

const CategorySlider = ({ title, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
      <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{title}</h3>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '1rem',
        }}

      >
        {products.length > 1 && (
          <button onClick={handlePrev} style={arrowStyle}>
            <FaChevronLeft style={iconStyle} />
          </button>
        )}

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <ProductCard {...products[currentIndex]} />
        </div>

        {products.length > 1 && (
          <button onClick={handleNext} style={arrowStyle}>
            <FaChevronRight style={iconStyle} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategorySlider;
