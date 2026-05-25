import { useContext } from "react";

import { CartContext }
from "../context/CartContext";

import { ThemeContext }
from "../context/ThemeContext";

function Navbar() {

  const { cartItems } =
    useContext(CartContext);

  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <div>

      <h1>Store App</h1>

      <h2>Theme: {theme}</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      <h2>
        Cart Count: {cartItems.length}
      </h2>

      <hr />

    </div>
  );
}

export default Navbar;