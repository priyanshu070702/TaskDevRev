

// import React from "react";
// import "../styles/cart.css";
// import { signOut } from "./firebase.js";
// import { NavLink } from "react-router-dom";
// import Books from "./books";

// function Cart() {
//   // Retrieve cart items from local storage
//   const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

//   return (
//     <div className="section">
//       <div className="userInfo">
//         <div id="userData">
//           <div id="userDetails">
//             <p id="userName">{localStorage.getItem("userName")}</p>
//             <p id="userId">{localStorage.getItem("id")}</p>
//             <p id="userEmail">{localStorage.getItem("email")}</p>
//           </div>
//           <div>
//             <h2>Cart Items</h2>
//             <div className="cart-items">
//               {cartItems.map((item, index) => (
//                 <div className="cart-item" key={index}>
//                   <h3>{item.title}</h3>
//                   <p>Author: {item.author}</p>
//                   <p>Year of Publishing: {item.synopsis}</p>
//                   {/* Display other book information as needed */}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="signButton">
//           <NavLink to="/">
//             <button onClick={signOut}>Sign Out</button>
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }

//export default Cart;

import React from "react";
import "../styles/cart.css";
import { signOut } from "./firebase.js";
import { NavLink } from "react-router-dom";

function Cart() {
  // Retrieve cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Function to remove an item from the cart and update local storage
  const removeFromCart = (itemIndex) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(itemIndex, 1); // Remove the item at the specified index
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload(); // Reload the page to reflect the updated cart
  };

  return (
    <div className="cartSection">
        <h2>My Cart</h2>
      <div className="userInfo">
        <div id="userData">
            <p id="userEmail">Account: {localStorage.getItem("email")}</p>
          <div>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <h3>Book Title : {item.title}</h3>
                  <h3>Book Author: {item.author}</h3>
                  <p>Price: {item.price}</p>
                  {/* Display other book information as needed */}
                  <button
                    className="button"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="signButton">
          <NavLink to="/">
            <button onClick={signOut}>Sign Out</button>
          </NavLink>
        </div> */}
      </div>
    </div>
  );
}

export default Cart;
