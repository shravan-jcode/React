import { useState, useEffect } from "react";

function LoadingandError() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      // check server response
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      // convert response to data
      const data = await res.json();

      console.log("Response:", res);   // see full response object
      console.log("Data:", data);      // actual users array

      setUsers(data); // ✅ correct
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // always runs
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // UI states
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <p><strong>{user.name}</strong></p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default LoadingandError;