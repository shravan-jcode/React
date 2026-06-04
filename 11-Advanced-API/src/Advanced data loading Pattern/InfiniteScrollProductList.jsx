import { useEffect, useState } from "react";

function InfiniteScrollProductList() {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const [loadingMore, setLoadingMore] =
    useState(false);

  const [error, setError] = useState("");

  const limit = 10;

  async function getProducts() {
    try {
      setError("");

      if (page === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const skip = (page - 1) * limit;

      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      setProducts((prevProducts) => [
        ...prevProducts,
        ...data.products,
      ]);
    } catch (error) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      if (loadingMore) return;

      const reachedBottom =
        window.innerHeight +
          window.scrollY >=
        document.documentElement
          .scrollHeight - 100;

      if (reachedBottom) {
        setPage(
          (prevPage) =>
            prevPage + 1
        );
      }
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [loadingMore]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (products.length === 0) {
    return <h1>No Products Found</h1>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>

          <p>
            Price: ${product.price}
          </p>
        </div>
      ))}

      {loadingMore && (
        <p>
          Loading more products...
        </p>
      )}
    </div>
  );
}

export default InfiniteScrollProductList;