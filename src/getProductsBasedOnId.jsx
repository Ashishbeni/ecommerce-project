import style from "./getProductsBasedOnId.modulse.css"; // Path sahi kar lena agar zaroorat ho
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // URL se ID lene ke liye useParams add kiya

function GetProductDetail() {
  const { id } = useParams(); // Yeh URL se id nikaal lega (Jaise: /product/5 mein se 5)
  const navigate = useNavigate();
  const [product, setProduct] = useState(null); // Default state null rakhi hai
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Backend ka sahi URL aur query parameter (?id=) paas kiya hai
    fetch(`https://ecommerce-backend-e4yh.onrender.com/api/getProductBasedOnId?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Agar database se array mil raha hai toh pehla element set karenge
        if (Array.isArray(data)) {
          setProduct(data[0]);
        } else {
          setProduct(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]); // Jab bhi ID badlegi, yeh fir se fetch karega

  if (loading) {
    return <div className={style.loading}>Loading product details...</div>;
  }

  if (!product) {
    return <div className={style.error}>Product nahi mila!</div>;
  }

  return (
    <div className={style.container}>
      <button onClick={() => navigate(-1)} className={style.backBtn}>
        Go Back
      </button>
      
      <div className={style.productCard}>
        {/* Aapke database mein jo bhi column ke naam hain, unhe yahan use karein */}
        <h1 className={style.title}>{product.name || product.title}</h1>
        <p className={style.price}>Price: ₹{product.price}</p>
        <p className={style.description}>{product.description}</p>
        
        {product.image && (
          <img 
            src={`http://localhost:5000/uploads/${product.image}`} 
            alt={product.name} 
            className={style.productImage}
          />
        )}
      </div>
    </div>
  );
}

export default GetProductDetail;