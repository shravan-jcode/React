import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Login() {

  const { login } =
    useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogin() {

    login();

    navigate("/");
  }

  return (
    <div>

      <h1>Login Page</h1>

      <input
        type="email"
        placeholder="Email"
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
      />

      <br />
      <br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default Login;