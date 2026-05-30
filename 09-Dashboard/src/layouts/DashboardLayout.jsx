import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout() {

  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  return (
    <div style={{ display: "flex" }}>

      <Sidebar
        sidebarOpen={sidebarOpen}
      />

      <div style={{ flex: 1 }}>

        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;