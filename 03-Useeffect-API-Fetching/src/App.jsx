import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading users...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>User Dashboard</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>

          <p>Email: {user.email}</p>

          <p>Company: {user.company.name}</p>

          <p>City: {user.address.city}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;