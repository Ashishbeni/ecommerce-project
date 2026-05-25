import style from "./AddProducts.module.css";
import { useState } from "react";


function AddProducts() {
  const [product, setProduct] = useState({
        productName: "",
        description: "",
        image: "",
        price: 0,
        category: "",
        quantity: 0
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  // --- YAHA SE COPY KAREIN ---

// 1. URL check: Kya link http ya https se shuru ho raha hai?
if (!product.image.startsWith("http://") && !product.image.startsWith("https://")) {
  alert("Please enter a valid Image URL (starting with http:// or https://)");
  return;
}

// 2. Size check: 100KB se kam hona chahiye
try {
  const imgCheck = await fetch(product.image, { method: "HEAD" });
  const sizeInBytes = imgCheck.headers.get("content-length");

  if (sizeInBytes) {
    const sizeInKB = sizeInBytes / 1024;

    if (sizeInKB > 100) {
      alert(`Image size is too large (${sizeInKB.toFixed(2)} KB). It must be less than 100 KB.`);
      return; // Form submit rok dega
    }
  }
} catch (error) {
  console.log("Image size validation skipped due to CORS or network error:", error);
  // Agar link check nahi ho paya (CORS error ki wajah se), toh ye aage badhne dega.
}

// --- YAHA TAK COPY KAREIN ---

  await fetch("https://ecommerce-backend-e4yh.onrender.com/api/add", {
        method: "POST",
        headers: {
              "Content-Type": "application/json"
            },
        body: JSON.stringify(product)
  });
       alert("Product Added");
       setProduct({
       productName: "",
       description: "",
       image: "",
       price: "",
       category: "",
       quantity: ""
     });
};


  return(
    <div className={style.formContainer}>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}  className={style.form}>

        <input type="text" placeholder="Product Name" value={product.productName} required    
        onChange={(e) =>
           setProduct({
                 ...product,
                 productName: e.target.value
               })
              }
        />

        <input type="text" placeholder="Description" value={product.description} required
        onChange={(e) =>
           setProduct({
                 ...product,
                 description: e.target.value
               })
              }
        />

        <input type="number" placeholder="Price" value={product.price} required
        onChange={(e) =>
           setProduct({
                 ...product,
                 price: e.target.value
               })
              }        
        />

            <input
              type="text"
              placeholder="Image URL" value={product.image}
              required
              onChange={(e) =>
                setProduct({
                  ...product,
                  image: e.target.value
                })
              }
       />

       <select name="Category" value={product.category} required onChange={(e)=>{setProduct({...product, category:e.target.value})}}>
        <option value="Select Category">Select Category</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="G">G</option>
        <option value="H">H</option>
        <option value="I">I</option>
        <option value="J">J</option>
       </select>
{/* 
        <input type="text" placeholder="Category" required 
        onChange={(e) =>
           setProduct({
                 ...product,
                 category: e.target.value
               })
              }
        /> */}


        <input type="number" placeholder="Quantity" value={product.quantity} required
        onChange={(e) =>
           setProduct({
                 ...product,
                 quantity: e.target.value
               })
              }
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProducts;