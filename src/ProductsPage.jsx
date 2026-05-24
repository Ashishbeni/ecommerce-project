import Footer from "./footer";
import style from "./ProductsPage.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductsPage({ AddToCart, cartItems = [] }) {

  const [products, setProducts] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState({});

  // GET PRODUCTS FROM BACKEND
  useEffect(() => {

    fetch("https://ecommerce-backend-e4yh.onrender.com/api/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div>

      <h1>All Products</h1>

      <div className={style.main}>

        {
          products.map((item) => (

            <div className={style.productDetails} key={item.id}>

              <img src={item.image} alt="productImg" />

              <h5>{item.productName}</h5>

              <h5>₹{item.price}</h5>

              <select
                onChange={(e) =>
                  setOrderQuantity({
                    ...orderQuantity,
                    [item.id]: Number(e.target.value)
                  })
                }
              >

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

              </select>

              <button
                onClick={() =>
                  AddToCart({
                    ...item,
                    name: item.productName,
                    quantity: orderQuantity[item.id] || 1
                  })
                }
              >
                Add To Cart
              </button>

              <Link to={`/product/${item.id}`}>
                <button>View Details</button>
              </Link>

            </div>

          ))
        }

      </div>

      <Footer />

    </div>
  );
}

export default ProductsPage;