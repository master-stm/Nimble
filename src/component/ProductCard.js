// ProductCard.js (Reusable component)
import React from 'react';
import '../styles/ProductCard.css'
const ProductCard = ({ image, name, size, link }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h4>{name}</h4>
        <p className="product-size">{size}</p>
        <a href={link} className="product-link" target="_blank" rel="noreferrer">
          Click here to find out more
        </a>
      </div>
    </div>
  );
};

export default ProductCard;


