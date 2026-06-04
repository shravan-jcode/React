import { useEffect, useState } from "react";

function SequentialReq() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  async function getData() {
    try {
      const usersResponse = await fetch(
        "https://dummyjson.com/users"
      );
      const usersData = await usersResponse.json();

      const productsResponse = await fetch(
        "https://dummyjson.com/products"
      );
      const productsData = await productsResponse.json();

      setUsers(usersData.users);
      setProducts(productsData.products);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Users: {users.length}</h2>
      <h2>Products: {products.length}</h2>
    </div>
  );
}

export default SequentialReq;