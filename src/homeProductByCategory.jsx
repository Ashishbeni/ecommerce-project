import { Link } from "react-router-dom";
import style from "./homeProductByCategory.module.css";
import { useEffect, useRef, useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function HomeProductByCategory({ AddToCart }) {

  const [productByCategory, setProductByCategory] = useState({});
  const [selectedQuantity, setSelectedQuantity] = useState({});

  const sliderRefs = useRef({});

  useEffect(() => {

    fetch("https://ecommerce-backend-e4yh.onrender.com/api/product-by-category")

      .then((res) => res.json())

      .then((data) => {

        console.log(data);

        setProductByCategory(data);

      })

      .catch((err) => {
        console.log(err);
      });

  }, []);

  // LEFT SCROLL
  const scrollLeft = (category) => {

    const container = sliderRefs.current[category];

    if (container) {

      container.scrollBy({
        left: -300,
        behavior: "smooth",
      });

    }

  };

  // RIGHT SCROLL
  const scrollRight = (category) => {

    const container = sliderRefs.current[category];

    if (container) {

      container.scrollBy({
        left: 300,
        behavior: "smooth",
      });

    }

  };

  return (

    <div className={style.mainContainer}>

      {

        Object.keys(productByCategory).map((category) => (

          <div
            key={category}
            className={style.categorySection}
          >

            {/* CATEGORY HEADING */}
            <div className={style.headingContainer}>

              <h2 className={style.categoryHeading}>
                {category}
              </h2>

              {/* SLIDER BUTTONS */}
              <div className={style.sliderBtns}>

                <button
                  className={style.arrowBtn}
                  onClick={() => scrollLeft(category)}
                >
                  <FaChevronLeft />
                </button>

                <button
                  className={style.arrowBtn}
                  onClick={() => scrollRight(category)}
                >
                  <FaChevronRight />
                </button>

              </div>

            </div>

            {/* PRODUCTS */}
            <div
              className={style.productContainer}
              ref={(el) => {
                if (el) {
                  sliderRefs.current[category] = el;
                }
              }}
            >

              {

                productByCategory[category].map((item) => (

                  <div
                    key={item.id}
                    className={style.productCard}
                  >

                    {/* PRODUCT NAME */}
                    <h3 className={style.productName}>
                      {item.productName}
                    </h3>

                    {/* PRODUCT IMAGE */}
                    <img
                      src={item.image}
                      alt={item.productName}
                      className={style.productImage}
                    />

                    {/* PRICE */}
                    <p className={style.price}>
                      ₹{item.price}
                    </p>

                    {/* QUANTITY SELECT */}
                    <select
                      className={style.select}
                      value={selectedQuantity[item.id] || 1}
                      onChange={(e) =>
                        setSelectedQuantity({
                          ...selectedQuantity,
                          [item.id]: Number(e.target.value),
                        })
                      }
                    >

                      {

                        [...Array(item.quantity)].map((_, index) => (

                          <option
                            key={index + 1}
                            value={index + 1}
                          >
                            {index + 1}
                          </option>

                        ))

                      }

                    </select>

                    {/* BUTTON CONTAINER */}
                    <div className={style.buttonContainer}>

                      {/* ADD TO CART */}
                      <button
                        className={style.cartBtn}
                        onClick={() =>
                          AddToCart({
                            ...item,
                            quantity: selectedQuantity[item.id] || 1,
                          })
                        }
                      >
                        🛒 Cart
                      </button>

                      {/* VIEW DETAILS */}
                      <Link
                        to={`/product/${item.id}`}
                        className={style.detailsLink}
                      >

                        <button className={style.btn}>
                          👁 Details
                        </button>

                      </Link>

                    </div>

                  </div>

                ))

              }

            </div>

          </div>

        ))

      }

    </div>

  );
}

export default HomeProductByCategory;