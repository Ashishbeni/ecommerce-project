import style from "./showProductBasedOnId.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails({ AddToCart }) {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {

    fetch(`https://ecommerce-backend-e4yh.onrender.com/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => {

        setProduct(data[0]);

      });

  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (

    <div className={style.main}>

      <div className={style.productContainer}>

        <div className={style.imageSection}>

          <img
            src={product.image}
            alt="productImg"
          />

        </div>

        <div className={style.detailsSection}>

          <h1>{product.productName}</h1>

          <p>{product.description}</p>

          <h2>₹{product.price}</h2>

          <h3>Available Quantity: {product.quantity}</h3>

          <select
            onChange={(e) =>
              setQuantity(Number(e.target.value))
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
                ...product,
                name: product.productName,
                quantity: quantity
              })
            }
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>

  );
}

export default ProductDetails;