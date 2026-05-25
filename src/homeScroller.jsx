import React, { useState, useEffect } from "react";
import style from "./homeScroller.module.css";
import scroller1 from "./ProductsImages/img1.png";
import scroller2 from "./ProductsImages/img2.png";
import scroller4 from "./ProductsImages/img4.png";
import { Link } from "react-router-dom";

function HomeImagesScroller() {
  // Yahan variables ko bina quotes ("") ke rakha hai taaki imported images load hon
  const images = [scroller1, scroller2, scroller4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Hover state track karne ke liye

  // Agli image par jaane ke liye
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Pichli image par waapas jaane ke liye
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll Logic (Jab tak hover nahi hai, tab tak har 3 second mein slide change hogi)
  useEffect(() => {
    if (isHovered) return; // Agar user ne hover kiya hai toh auto-scroll rok do

    const slideInterval = setInterval(nextSlide, 3000); // 3000ms = 3 Seconds

    return () => clearInterval(slideInterval); // Cleanup memory leak se bachne ke liye
  }, [currentIndex, isHovered]);

  return (
    <div 
      className={style.container}
      onMouseEnter={() => setIsHovered(true)}  // Mouse aane par pause
      onMouseLeave={() => setIsHovered(false)} // Mouse jaane par resume
    >
      {/* Left Arrow Button */}
      <button className={`${style.arrowBtn} ${style.leftArrow}`} onClick={prevSlide}>
        &#10094;
      </button>

      {/* Current Image Display */}
      <Link to="/products">
      <img 
        src={images[currentIndex]} 
        alt={`scroller-${currentIndex + 1}`} 
        className={style.scrollerImage} 
      />
      </Link>

      {/* Right Arrow Button */}
      <button className={`${style.arrowBtn} ${style.rightArrow}`} onClick={nextSlide}>
        &#10095;
      </button>

      {/* Bottom Dots (Indicators) */}
      <div className={style.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${style.dot} ${index === currentIndex ? style.activeDot : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HomeImagesScroller;