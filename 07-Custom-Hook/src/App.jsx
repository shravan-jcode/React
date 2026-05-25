import React from 'react'
import useToggle from './hooks/useToggle'
import useFetch from './hooks/useFetch'
import useForm from './hooks/useForm';

const App = () => {

  const [darkMode, toggleDarkMode] = useToggle(false);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const {
    values,
    handleChange,
    resetForm
  } = useForm({
    email: "",
    password: ""
  });

  function handleSubmit(event) {
    event.preventDefault();

    console.log(values);

    resetForm();
  }

  if (loading) {
    return <h1>Loading....</h1>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div>

      {/* Toggle Theme */}

      <h1>
        Theme: {darkMode ? "Dark" : "Light"}
      </h1>

      <button onClick={toggleDarkMode}>
        Toggle Theme
      </button>

      <hr />

      {/* Fetch API */}

      <h1>Users</h1>

      {
        data.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>

            <p>{user.email}</p>

            <hr />
          </div>
        ))
      }

      {/* Login Form */}

      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={values.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={values.password}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  )
}

export default App