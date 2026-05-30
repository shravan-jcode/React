import { useState } from "react";

function Settings() {

  const [formData, setFormData] =
    useState({
      username: "",
      email: "",
    });

  function handleChange(event) {

    const { name, value } =
      event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {

    event.preventDefault();

    console.log(formData);
  }

  return (
    <div>

      <h1>Settings</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Save
        </button>

      </form>

    </div>
  );
}

export default Settings;