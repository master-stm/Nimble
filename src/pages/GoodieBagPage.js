import React, { useState } from 'react';
// import ProductCard from '../component/ProductCard';
import Footer from './Footer';
import '../styles/GoodieBagPage.css';
import CategorySlider from '../component/CategorySlider.js';

const GoodieBagPage = () => {
  const categories = [
    {
      categoryName: 'Sparkling Beverages',
      products: [
        { 
          name: 'Rubicon Sparkling Guava', 
          size: '355 ml', 
          image: '../images/logo.svg', 
          link: '#' 
        }
      ]
    },{
      categoryName: 'Sparkling Beverages',
      products: [
        { 
          name: 'Rubicon Sparkling Guava', 
          size: '355 ml', 
          image: '../images/logo.svg', 
          link: '#' 
        }
      ]
    },
    {
      categoryName: 'Healthy Snacks',
      products: [
        { name: 'Bassé Nuts Premium Mix', size: '600 g', image: '../images/logo.svg', link: '#' },
        { name: 'Trail Mix Supreme', size: '400 g', image: '../images/logo.svg', link: '#' },
        { name: 'Roasted Chickpeas', size: '250 g', image: '../images/logo.svg', link: '#' }
      ]
    },
    {
      categoryName: 'Sparkling Beverages',
      products: [
        { 
          name: 'Rubicon Sparkling Guava', 
          size: '355 ml', 
          image: '../images/logo.svg', 
          link: '#' 
        }
      ]
    }
    
  ];


  return (
    <div className="goodie-bag-wrapper">
      <div className="goodie-center-wrapper">
        <div className="goodie-card-container">
          <div className="logo-wrapper">
            <img src="../images/logo.svg" alt="Nimble Logo" className="logo-centered" />
          </div>
          <div className="goodie-bag-card">
            <div className="goodie-header">
              <h2>Goodie Bag</h2>
              <p className="subtitle">What's in my goodie bag?</p>
            </div>
            {categories.map((category, index) => (
              <CategorySlider
                key={index}
                title={category.categoryName}
                products={category.products}
              />
            ))}
            
          </div>
        </div>
      </div>
      <Footer bgColor="#074F51" textColor="#FFFFFF" />
    </div>
  );
};

export default GoodieBagPage;
