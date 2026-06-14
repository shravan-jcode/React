import ProductsPage from "./pages/ProductsPage";
import ErrorBoundary from "./utils/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <ProductsPage />
    </ErrorBoundary>
  );
}

export default App;