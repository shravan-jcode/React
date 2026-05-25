import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>

      <h1>Dashboard</h1>

      <Link to="profile">Profile</Link>
      <br />

      <Link to="settings">Settings</Link>

      <hr />

      <Outlet />

    </div>
  )
}

export default DashboardLayout