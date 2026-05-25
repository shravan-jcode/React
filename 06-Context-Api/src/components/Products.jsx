import { useContext } from "react";

import { CartContext }
from "../context/CartContext";

function Products() {

  const { addToCart } =
    useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Phone",
      price: 20000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
    },
  ];

  return (
    <div>

      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>

          <h3>{product.name}</h3>

          <p>₹{product.price}</p>

          <button
            onClick={() =>
              addToCart(product)
            }
          >
            Add To Cart
          </button>

          <hr />

        </div>
      ))}

    </div>
  );
}

export default Products;