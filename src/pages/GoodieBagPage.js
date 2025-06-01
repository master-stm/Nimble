import React from 'react';
// import ProductCard from '../component/ProductCard';
import Footer from './Footer';
import '../styles/GoodieBagPage.css';
import CategorySlider from '../component/CategorySlider.js';
import n_logo from '../images/n_logo.png'
import prod from '../images/prod_img.png'
import bev from '../images/bev.png'
const GoodieBagPage = () => {
  const categories = [
    {
      categoryName: 'Sparkling Beverages',
      products: [
        { 
          name: 'Rubicon Sparkling Guava', 
          size: '355 ml', 
          image: prod, 
          link: '#' 
        }
      ]
    },{
      categoryName: 'Sparkling Beverages',
      products: [
        { 
          name: 'Rubicon Sparkling Guava', 
          size: '355 ml', 
          image: prod, 
          link: '#' 
        }
      ]
    },
    {
      categoryName: 'Healthy Snacks',
      products: [
        { name: 'Bassé Nuts Premium Mix', size: '600 g', image: prod, link: '#' },
        { name: 'Trail Mix Supreme', size: '400 g', image: prod, link: '#' },
        { name: 'Roasted Chickpeas', size: '250 g', image: prod, link: '#' }
      ]
    },
    {
      categoryName: 'Sparkling Beverages',
      products: [
        { 
          name: 'Rubicon Sparkling Guava', 
          size: '355 ml', 
          image: bev, 
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
            <img src={n_logo} alt="Nimble Logo" className="logo-centered" />
            
          </div>
          <div className="goodie-header">
              <h2 >Goodie Bag</h2>
              <p className="subtitle">What's in my goodie bag?</p>
            </div>
          <div className="goodie-bag-card">

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
