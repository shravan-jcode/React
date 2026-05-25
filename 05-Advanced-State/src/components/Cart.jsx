function Cart({ cart, removeFromCart }) {

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>

      <h2>Cart</h2>

      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        cart.map((item, index) => (
          <div key={index}>

            <h4>{item.name}</h4>

            <p>₹{item.price}</p>

            <button
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>

            <hr />

          </div>
        ))
      )}

      <h3>Total Price: ₹{totalPrice}</h3>

    </div>
  );
}

export default Cart;