import React from "react";
// import ProductCard from '../component/ProductCard';
import Footer from "./Footer.js";
import "../styles/GoodieBagPage.css";
import CategorySlider from "../component/CategorySlider.js";
import n_logo from "../images/n_logo.png";

const vibe = {
  delight: require("../images/products/vibe-delight.png"),
  peppers: require("../images/products/vibe-peppers.png"),
  dill: require("../images/products/vibe-dill.png"),
  chickpea: require("../images/products/vibe-chickpea.png"),
};
const martins = {
  groove: require("../images/products/martins-groove.png"),
  apple: require("../images/products/martins-apple.png"),
  maple: require("../images/products/martins-maple.png"),
  oats: require("../images/products/martins-oats.png"),
};
const farmers = {
  beans: require("../images/products/farmers-beans.png"),
};
const crazy = {
  Lemonade: require("../images/products/crazy-lemonade.png"),
  soda: require("../images/products/crazy-soda.png"),
};
const Sobrii = {
  cocktail: require("../images/products/sobril-cocktail.png"),
};
const rubicon = {
  guava: require("../images/products/guava-cocktail.png"),
  passion: require("../images/products/guava-passion.png"),
  mango: require("../images/products/guava-mango.png"),
  dragon: require("../images/products/guava-dragon.png"),
};
const basse = {
  bagel: require("../images/products/basse-bagel.png"),
  pickle: require("../images/products/basse-pickle.png"),
  praline: require("../images/products/basse-praline.png"),
};

const GoodieBagPage = () => {
  const categories = [
    {
      categoryName: "Vibe Kale Chips",
      products: [
        {
          name: "Kale Chips Vegan Cheesy Delight",
          size: "75 g",
          image: vibe.delight,
          link: "https://bit.ly/vibekalechips04",
        },
        {
          name: "Kale Chips Jalapeno Peppers",
          size: "75 g",
          image: vibe.peppers,
          link: "https://bit.ly/vibekalechips04",
        },
        {
          name: "Kale Chips Garlic & Dill",
          size: "75 g",
          image: vibe.dill,
          link: "https://bit.ly/vibekalechips04",
        },
        {
          name: "Kale Chips Himalian Salt & chickpea Miso",
          size: "75 g",
          image: vibe.chickpea,
          link: "https://bit.ly/vibekalechips04",
        },
      ],
    },
    {
      categoryName: "Martins Apple Chips",
      products: [
        {
          name: "Crispy Apple Chips Cinnamon groove",
          size: "22 g",
          image: martins.groove,
          link: "https://bit.ly/martins05",
        },
        {
          name: "Crispy Apple chips Nothin' but apple",
          size: "22 g",
          image: martins.apple,
          link: "https://bit.ly/martins05",
        },
        {
          name: "Apple Smash - Smashed apple + maple",
          size: "120 g",
          image: martins.maple,
          link: "https://bit.ly/martins05",
        },
        {
          name: "Apple Smash - Smashed apple + oats",
          size: "120 g",
          image: martins.oats,
          link: "https://bit.ly/martins05",
        },
      ],
    },
    {
      categoryName: "Three Farmers",
      products: [
        { 
          name: "Fava Beans Zesty Cheddar", 
          size: "40 g", 
          image: farmers.beans, 
          link: "https://bit.ly/threefarmers07" 
        },
      ],
    },
    {
      categoryName: "Crazy D",
      products: [
        {
          name: "Crazy D’s Twisted Citrus Sparkling Prebiotic Soda",
          size: "355 ml",
          image: crazy.Lemonade,
          link: "https://bit.ly/crazydlabs01",
        },
        {
          name: "Crazy D’s Thrilla in Vanilla Sparkling Prebiotic Soda",
          size: "355 ml",
          image: crazy.soda,
          link: "https://bit.ly/crazydlabs01",
        },
      ],
    },
    {
      categoryName: "Sobrii",
      products: [
        {
          name: "Sobrii Zero Paloma Non Alcoholic Cocktail",
          size: "355 ml",
          image: Sobrii.cocktail,
          link: "https://bit.ly/sobrii02",
        },
      ],
    },
    {
      categoryName: "Rubicon",
      products: [
        {
          name: "Rubicon Exotic Sparkling Guava Beverage",
          size: "355 ml",
          image: rubicon.guava,
          link: "https://bit.ly/rubicon06",
        },
        {
          name: "Rubicon Exotic Sparkling Passion Fruit Beverage",
          size: "355 ml",
          image: rubicon.passion,
          link: "https://bit.ly/rubicon06",
        },
        {
          name: "Rubicon Exotic Sparkling Mango Beverage",
          size: "355 ml",
          image: rubicon.mango,
          link: "https://bit.ly/rubicon06",
        },
        {
          name: "Rubicon Exotic Sparkling Dragon Beverage",
          size: "355 ml",
          image: rubicon.dragon,
          link: "https://bit.ly/rubicon06",
        },
      ],
    },
    {
      categoryName: "Basse Nuts",
      products: [
        {
          name: "Basse Nuts Everything Bagel seasoned Cashews",
          size: "45 g",
          image: basse.bagel,
          link: "https://bit.ly/bassenuts03",
        },
        {
          name: "Basse Nuts Dill Pickle Cashews",
          size: "45 g",
          image: basse.pickle,
          link: "https://bit.ly/bassenuts03",
        },
        {
          name: "Basse Nuts Praline Peanuts",
          size: "75 g",
          image: basse.praline,
          link: "https://bit.ly/bassenuts03",
        },
      ],
    },
  ];

  return (
    <div className="goodie-bag-wrapper">
      <div className="goodie-center-wrapper">
        <div className="goodie-card-container">
          <div className="logo-wrapper">
            <img src={n_logo} alt="Nimble Logo" className="logo-centered" />
          </div>
          <div className="goodie-header">
            <h2>Goodie Bag 1</h2>
            <p className="subtitle">What's in my goodie bag?</p>
          </div>
          <div className="goodie-bag-card">
            {categories.map((category, index) => (
              <CategorySlider key={index} title={category.categoryName} products={category.products} />
            ))}
          </div>
        </div>
      </div>

      <div id="cu">
        <Footer bgColor="#A4EC8A" textColor="#064E3B" />
      </div>
    </div>
  );
};

export default GoodieBagPage;
