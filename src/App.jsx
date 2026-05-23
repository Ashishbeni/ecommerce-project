import Home from "./Home";
import Header from "./header";
import About from "./about";
import ProductsPage from "./ProductsPage";
import Contact from "./Contact";
import Cart from "./Cart";

// Admin Panel
import AddProducts from "./AdminPanel/AddProducts";
import AdminHome from "./AdminPanel/AdminHome";
import Login from "./AdminPanel/Login";
import ProductDetails from "./showProductBasedOnId";
import AdminProductsPage from "./AdminPanel/AllProducts";



import { Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {

  const [cartItems, setCartItems] = useState([]);

  // ADD TO CART
  const AddToCart = (Product) => {

    const alreadyExistItems = cartItems.find(
      (item) => item.id === Product.id
    );

    const availableStock = Product.stock;

    // PRODUCT ALREADY EXISTS
    if (alreadyExistItems) {

      const newQuantity =
        alreadyExistItems.quantity + Product.quantity;

      // STOCK CHECK
      if (newQuantity > availableStock) {

        alert(`Only ${availableStock} items available in stock`);

        return;
      }

      const updatedCart = cartItems.map((item) =>

        item.id === Product.id

          ? {
              ...item,
              quantity: item.quantity + Product.quantity
            }

          : item
      );

      setCartItems(updatedCart);

      alert("Product quantity updated in cart");

    } else {

      // FIRST TIME STOCK CHECK
      if (Product.quantity > availableStock) {

        alert(`Only ${availableStock} items available`);

        return;
      }

      setCartItems([...cartItems, Product]);

      alert("Product added to cart successfully.");
    }
  };


  // REMOVE FROM CART
  const RemoveFromCart = (productName) => {

    const updatedCart = cartItems.filter(
      (item) => item.name !== productName
    );

    setCartItems(updatedCart);

    alert("Product removed from cart");
  };


  return (

    <div>

      <Header />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home AddToCart={AddToCart} />}
        />

        <Route
          path="/home"
          element={<Home AddToCart={AddToCart} />}
        />                                   

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* PRODUCTS PAGE */}
        <Route
          path="/products"
          element={
            <ProductsPage
              AddToCart={AddToCart}
              cartItems={cartItems}
            />
          }
        />

       <Route
  path="/product/:id"
  element={
    <ProductDetails
      AddToCart={AddToCart}
    />
  }
/>
     

      

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              RemoveFromCart={RemoveFromCart}
            />
          }
        />

        {/* ADMIN PANEL */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/add-product" element={<AddProducts />} />
        <Route path="/admin/view-product" element={<AdminProductsPage/>}/>

      </Routes>

    </div>
  );
}

export default App;