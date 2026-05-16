import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Axios1 = () => {
    const [users,setUser] =useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUser(res.data))
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>
        <h1>Users</h1>
        {
            users.map((user)=>(
                <p key={user.id}>{user.name}</p>
            ))
        }

    </div>
  )
}

export default Axios1