import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import {
  Navigate,
} from "react-router-dom";

const Login = () => {

    const {login,isLoggedIn} =useContext(AuthContext)
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")

    function handleLogin(){
        if(!email || !password){
            alert("Fill all Filds")
            return
        }
        login()
    }

    if(isLoggedIn){
        return(
            <Navigate to="/dashboard" />
        )
    }


  return (
     <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default Login