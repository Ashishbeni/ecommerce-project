import { useState } from "react"; // 1. useState import karein
import style from "./Cart.module.css";
import Footer from "./footer";

function Cart({ cartItems, RemoveFromCart }) {
  // 2. Address ke liye state
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    address: "",
    landmark: ""
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deleveryCharge = totalPrice < 500 && totalPrice > 0 ? 50 : 0;
  const finalPrice = totalPrice + deleveryCharge;

  const whatsappMessage = cartItems
    .map(
      (item) =>
        `🛒 ${item.productName} | Qty: ${item.quantity} | ₹${item.price * item.quantity}`
    )
    .join("\n");

  // 3. WhatsApp URL mein Address details add karein
  const whatsappURL = `https://wa.me/917056523602?text=${encodeURIComponent(
    `🥛 *HerbAmrit - New Order*
    
*Customer Details:*
👤 Name: ${userDetails.name}
📍 Address: ${userDetails.address}
🏠 Landmark: ${userDetails.landmark}

*Order Items:*
${whatsappMessage}

-------------------
*Total Price:* ₹${totalPrice}
*Delivery Charge:* ₹${deleveryCharge}
*Final Price:* ₹${finalPrice}`
  )}`;

  return (
    <>
      <h1 className={style.cartTitle}>HerbAmrit Customer orders details:- 🥛</h1>

      <div className={style.cart}>
        {cartItems.map((item, index) => (
          <div key={index} className={style.cartItemBox}>
            <img src={item.image} alt={item.name} />
            <h5>{item.name}</h5>
            <h5>Price: <span className={style.value}>₹{item.price}</span></h5>
            <h5>Qty: <span className={style.value}>{item.quantity}</span></h5>
            <h5>Sub Total: <span className={style.value}>₹{item.price * item.quantity}</span></h5>
            <button
              id={style.removeBtn}
              className="btn btn-danger"
              onClick={() => RemoveFromCart(item.name)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* 4. Address Form Section */}
      {cartItems.length > 0 && (
        <div className={style.addressSection} style={{ padding: '20px', backgroundColor: '#f9f9f9', margin: '20px', borderRadius: '10px' }}>
          <h3>Delivery Details</h3>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Your Full Name" 
              className="form-control mb-2"
              onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
            />
            {/* <input 
              type="text" 
              placeholder="Phone Number" 
              className="form-control mb-2"
              onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
            /> */}
            <textarea 
              placeholder="Full Delivery Address" 
              className="form-control mb-2"
              onChange={(e) => setUserDetails({...userDetails, address: e.target.value})}
            ></textarea>
            <input 
              type="text" 
              placeholder="Landmark (Optional)" 
              className="form-control mb-2"
              onChange={(e) => setUserDetails({...userDetails, landmark: e.target.value})}
            />
          </div>
        </div>
      )}

      <div className={style.summarySection} style={{ padding: '20px' }}>
        <h5>Total Price: <span className={style.value}>₹{totalPrice}</span></h5>
        <h5>Delivery Charge: <span className={style.value}>₹{deleveryCharge}</span></h5>
        <h5>Final Price: <span className={style.value}>₹{finalPrice}</span></h5>

        <a
          href={whatsappURL}
          target="_blank"
          rel="noreferrer"
          className={`btn btn-success ${(!userDetails.name || !userDetails.address) ? 'disabled' : ''}`}
          style={{ marginTop: "10px", width: "100%", maxWidth: "300px" }}
          onClick={(e) => {
            if (!userDetails.name || !userDetails.address) {
              e.preventDefault();
              alert("Please fill Name and Address before ordering!");
            }
          }}
        >
          Order on WhatsApp
        </a>
      </div>

      <Footer />
    </>
  );
}

export default Cart;