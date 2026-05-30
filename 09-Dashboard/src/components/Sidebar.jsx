import { NavLink } from "react-router-dom";

function Sidebar({ sidebarOpen }) {

  if (!sidebarOpen) {
    return null;
  }

  return (
    <div
      style={{
        width: "200px",
        borderRight: "1px solid black",
        padding: "20px",
        minHeight: "100vh",
      }}
    >

      <h2>Admin Panel</h2>

      <nav>

        <NavLink to="/">
          Dashboard
        </NavLink>

        <br />
        <br />

        <NavLink to="/users">
          Users
        </NavLink>

        <br />
        <br />

        <NavLink to="/products">
          Products
        </NavLink>

        <br />
        <br />

        <NavLink to="/settings">
          Settings
        </NavLink>

      </nav>

    </div>
  );
}

export default Sidebar;