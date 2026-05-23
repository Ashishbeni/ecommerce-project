import { Link } from "react-router-dom";
import style from "./homeProductByCategory.module.css";
import { useEffect, useState } from "react";

function HomeProductByCategory({ AddToCart }) {

  const [productByCategory, setProductByCategory] = useState({});
  const [selectedQuantity, setSelectedQuantity] = useState({});

  useEffect(() => {

    fetch("http://localhost:5000/api/product-by-category")

      .then((res) => res.json())

      .then((data) => {

        console.log(data);

        setProductByCategory(data);

      })

      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (

    <div className={style.mainContainer}>

      {

        Object.keys(productByCategory).map((category) => (

          <div
            key={category}
            className={style.categorySection}
          >

            <h2 className={style.categoryHeading}>
              {category}
            </h2>

            <div className={style.productContainer}>

              {

                productByCategory[category].map((item) => (

                  <div
                    key={item.id}
                    className={style.productCard}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className={style.productImage}
                    />

                    {/* PRODUCT NAME */}
                    <h3 className={style.productName}>
                      {item.name}
                    </h3>

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
                      Add To Cart
                    </button>

                    {/* VIEW DETAILS */}
                    <Link to={`/product/${item.id}`}>

                      <button className={style.btn}>
                        View Details
                      </button>

                    </Link>

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