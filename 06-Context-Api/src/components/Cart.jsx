import { useContext } from "react";

import { CartContext }
from "../context/CartContext";

function Cart() {

  const {
    cartItems,
    removeFromCart,
  } = useContext(CartContext);

  return (
    <div>

      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <h3>Cart Empty</h3>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button
              onClick={() =>
                removeFromCart(index)
              }
            >
              Remove
            </button>

            <hr />

          </div>
        ))
      )}

    </div>
  );
}

export default Cart;