import CartProvider from "./context/CartContext";
import ThemeProvider from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {

  return (
    <ThemeProvider>

      <CartProvider>

        <Navbar />

        <Products />

        <Cart />

      </CartProvider>

    </ThemeProvider>
  );
}

export default App;