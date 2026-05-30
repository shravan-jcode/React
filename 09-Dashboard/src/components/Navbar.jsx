import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

function Navbar({
  sidebarOpen,
  setSidebarOpen,
}) {

  const { logout } =
    useContext(AuthContext);

  return (
    <div
      style={{
        borderBottom: "1px solid black",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >

      <div>

        <button
          onClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
        >
          Toggle Sidebar
        </button>

      </div>

      <div>

        <input
          type="text"
          placeholder="Search"
        />

      </div>

      <div>

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;