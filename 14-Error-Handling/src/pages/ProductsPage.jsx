import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";
import SuccessMessage from "../components/SuccessMessage";
import ProductList from "../components/ProductList";

function ProductsPage() {
  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  const [products, setProducts] =
    useState([]);

  const fetchProducts = () => {
    setLoading(true);
    setError(false);

    setTimeout(() => {

      // CHANGE THESE LINES TO TEST

      // SUCCESS
      setProducts([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" },
      ]);

      // EMPTY
      // setProducts([]);

      // ERROR
      // setError(true);

      setLoading(false);

    }, 2000);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <ErrorMessage
        retry={fetchProducts}
      />
    );
  }

  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <SuccessMessage />
      <ProductList
        products={products}
      />
    </>
  );
}

export default ProductsPage;