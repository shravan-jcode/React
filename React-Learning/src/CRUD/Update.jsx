import React, { useState } from "react";

const Update = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  const startEdit = (user) => {
    setName(user.name);
    setEditingId(user.id);
  };

  const updateUser = () => {
    if (!name.trim()) return;

    const updatedUsers = users.map((u) =>
      u.id === editingId ? { ...u, name } : u
    );

    setUsers(updatedUsers);
    setName("");
    setEditingId(null);
  };

  // ✅ DELETE FUNCTION
  const deleteUser = (id) => {
    const updatedUsers = users.filter((u) => u.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>Update / Delete User</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Edit name"
      />

      <button onClick={updateUser}>Update</button>

      {users.map((user) => (
        <div key={user.id}>
          {user.name}

          <button onClick={() => startEdit(user)}>Edit</button>

          {/* ✅ DELETE BUTTON */}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Update;