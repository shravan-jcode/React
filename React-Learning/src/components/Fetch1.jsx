import React, { useEffect, useState } from 'react'

const Fetch1 = () => {
    const [users,setUsers] =useState([]);

    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users")
       .then((res)=>res.json())
       .then((data)=>setUsers(data))
       .catch((err)=>console.log(err))

    },[])
  return (
    <div>
        <h1>Users</h1>
        {
            users.map((user)=>(
                <p key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </p>
            ))
        }


    </div>
  )
}

export default Fetch1