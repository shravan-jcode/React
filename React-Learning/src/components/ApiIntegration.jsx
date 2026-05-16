import { useEffect, useState } from "react";

function ApiIntegration() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 🔹 GET USERS
  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // 🔹 ADD USER (POST)
  const addUser = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
    };

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      const data = await res.json();

      // add to UI
      setUsers([...users, data]);

      // clear inputs
      setName("");
      setEmail("");
    } catch (err) {
      setError("Failed to add user");
    }
  };

  // 🔹 DELETE USER
  const deleteUser = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      });

      // remove from UI
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError("Failed to delete user");
    }
  };

  // 🔹 UI STATES
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>

      {/* 🔹 ADD USER FORM */}
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Add User</button>
      </form>

      <hr />

      {/* 🔹 USER LIST */}
      {users.map((user) => (
        <div key={user.id} style={{ margin: "10px 0" }}>
          <p>
            <strong>{user.name}</strong>
          </p>
          <p>{user.email}</p>

          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ApiIntegration;