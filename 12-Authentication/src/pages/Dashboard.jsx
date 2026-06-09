
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Dashboard = () => {
    const {user,token,logout} =useContext(AuthContext)

  return (
    <div>
        <h2>Dashboard</h2>
        <h3>Welcome {user.name}</h3>
        <p>{user.email}</p>
        <p>Token : {token}</p>

        <button onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Dashboard