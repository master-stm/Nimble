"use client"

import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import ProductCard from "../component/ProductCard"


const arrowStyle = {
  backgroundColor: "#004C45",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  position: "absolute",
  zIndex: 10,
}

const iconStyle = {
  fontSize: "1rem",
}

const CategorySlider = ({ title, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  return (
    <div
      style={{
        marginBottom: "2.5rem",
        position: "relative",
        maxWidth: "700px",
        margin: "0 auto",
        padding: "0 10px",
      }}
    >
      {/* <h3 style={{ fontSize: '1rem', fontWeight: 600, textAlign: 'center' }}>{title}</h3> */}

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 15px",
        }}
      >
        {products.length > 1 && (
          <button onClick={handlePrev} style={{ ...arrowStyle, left: "0" }} aria-label="Previous product">
            <FaChevronLeft style={iconStyle} />
          </button>
        )}

        <div
          style={{
            flex: 1,
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <ProductCard
            image={products[currentIndex].image}
            name={products[currentIndex].name}
            size={products[currentIndex].size || products[currentIndex].volume}
            link={products[currentIndex].link || "#"}
          />
        </div>

        {products.length > 1 && (
          <button onClick={handleNext} style={{ ...arrowStyle, right: "0" }} aria-label="Next product">
            <FaChevronRight style={iconStyle} />
          </button>
        )}
      </div>
    </div>
  )
}

export default CategorySlider
