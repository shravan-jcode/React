import { useEffect, useState } from "react";

function SearchableUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  async function getUsers() {
    try {
      setLoading(true);

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

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Search Users</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <hr />

      {filteredUsers.length === 0 ? (
        <h2>No Users Found</h2>
      ) : (
        filteredUsers.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchableUsers;