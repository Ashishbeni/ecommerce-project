import style from "./UpdateProduct.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    image: "",
    price: "",
    category: "",
    quantity: ""
  });

  // GET PRODUCT BY ID
  useEffect(() => {

    const getProduct = async () => {

      try {

        const response = await fetch(
          `https://ecommerce-backend-e4yh.onrender.com/api/product/${id}`
        );

        // CHECK RESPONSE
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        console.log("GET PRODUCT:", data);

        // AGAR ARRAY AA RAHI HAI
        const product = Array.isArray(data)
          ? data[0]
          : data;

        // FORM DATA SET
        setFormData({
          productName: product.productName || "",
          description: product.description || "",
          image: product.image || "",
          price: product.price || "",
          category: product.category || "",
          quantity: product.quantity || ""
        });

      } catch (error) {

        console.log(error);

        alert("Product fetch failed");

      } finally {

        setLoading(false);

      }

    };

    getProduct();

  }, [id]);

  // HANDLE INPUTS
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // UPDATE PRODUCT
  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        `https://ecommerce-backend-e4yh.onrender.com/api/updateProducts/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );

      // RESPONSE CHECK
      if (!response.ok) {
        throw new Error("Update failed");
      }

      const data = await response.json();

      console.log("UPDATE RESPONSE:", data);

      alert(data.msg);

      navigate("/admin/view-product");

    } catch (error) {

      console.log(error);

      alert("Product update failed");

    }

  };

  // LOADING
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (

    <div className={style.main}>

      <form
        className={style.form}
        onSubmit={handleUpdate}
      >

        <h2 className={style.heading}>
          Update Product
        </h2>

        {/* PRODUCT NAME */}
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          required
          className={style.input}
        />

        {/* DESCRIPTION */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className={style.textarea}
        />

        {/* IMAGE */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
          className={style.input}
        />

        {/* PRICE */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className={style.input}
        />

        {/* CATEGORY */}
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className={style.input}
        />

        {/* QUANTITY */}
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          className={style.input}
        />

        {/* BUTTON */}
        <button
          type="submit"
          className={style.button}
        >
          Update Product
        </button>

      </form>

    </div>

  );

}

export default UpdateProduct;