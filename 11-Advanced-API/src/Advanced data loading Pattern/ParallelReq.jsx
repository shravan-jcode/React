import { useEffect, useState } from "react";

function ParallelReq() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const [usersLoading, setUsersLoading] =
    useState(false);
  const [productsLoading, setProductsLoading] =
    useState(false);

  async function getData() {
    try {
      setUsersLoading(true);
      setProductsLoading(true);

      const [usersResponse, productsResponse] =
        await Promise.all([
          fetch("https://dummyjson.com/users"),
          fetch("https://dummyjson.com/products"),
        ]);

      const [usersData, productsData] =
        await Promise.all([
          usersResponse.json(),
          productsResponse.json(),
        ]);

      setUsers(usersData.users);
      setProducts(productsData.products);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setUsersLoading(false);
      setProductsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>
        Users:{" "}
        {usersLoading
          ? "Loading..."
          : users.length}
      </h2>

      <h2>
        Products:{" "}
        {productsLoading
          ? "Loading..."
          : products.length}
      </h2>
    </div>
  );
}

export default ParallelReq;