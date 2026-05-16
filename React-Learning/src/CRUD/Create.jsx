import React, { useState } from "react";

const Create = ({ users, setUsers }) => {
  const [name, setName] = useState("");

  const addUser = () => {
    if (!name.trim()) return;

    const newUser = {
      id: Date.now(),
      name: name,
    };

    setUsers([...users, newUser]);
    setName("");
  };

  return (
    <div>
      <h2>Create User</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button onClick={addUser}>Add</button>
    </div>
  );
};

export default Create;