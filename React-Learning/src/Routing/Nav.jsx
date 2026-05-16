import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

function Nav() {

  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <nav>

      <button onClick={goToHome}>
        Go To Home
      </button>

      <br /><br />

      <h3>Link</h3>

      <Link to="/">Home</Link>
      <br />

      <Link to="/about">About</Link>
      <br />

      <Link to="/contact">Contact</Link>

      <br /><br />

      <h3>NavLink</h3>

      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black"
        })}
      >
        Home
      </NavLink>

      <br />

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black"
        })}
      >
        About
      </NavLink>

      <br />

      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black"
        })}
      >
        Contact
      </NavLink>

      <hr />

    </nav>
  );
}

export default Nav;