import React, { useEffect, useState } from 'react'

const CRUD_Task = () => {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] =useState(true);
  const [error,setError] =useState("")
  const [name,setName] =useState("")
  const [editingId,setEditingId] =useState(true)

  // fallback local data

  const localData =[
    {id:1,name:"Local User 1"},
    {id:2,name:"Local User 2"}
  ]

  const getUsers =async()=>{
    try {
      setLoading(true);
      setError("")

       const res = await fetch("https://jsonplaceholder.typicode.com/users");

       if(!res.ok){
        throw new Error("server problem")
       }

       const data = await res.json();

       const formatted =data.map((u)=>({
        id:u.id,
        name:u.name
       }))

       setUsers(formatted)
      
    } catch (error) {
      setError("Network problem - using offline data")
      setUsers(localData)
      
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  const addUser =()=>{
    if(!name.trim()) return
    const newUser ={
      id:Date.now(),
      name
    }

    setUsers([...users,newUser])
    setName("")
  }

  const  deleteUser =(id)=>{
    const updated =users.filter((u)=>u.id !==id)
    setUsers(updated)
  }

  const startEdit =(user)=>{
    setName(user.name)
    setEditingId(user.id)
  }

  const updateUser =()=>{
    const updated =users.map((u)=>{
      u.id===editingId ?{...u,name}:u
    })
    setUsers(updated)
    setName("")
    setEditingId(null)
  }
  if(loading) return <h2>Loading...</h2>


  return (
    <div style={{padding:"20px"}}>
      <h1>CRUD</h1>

      {error && <p style={{color:"red"}}>{error}</p>}

<input value={name}
onChange={(e)=>setName(e.target.value)}
placeholder='Enter name'
/>
{editingId ? (<button onClick={updateUser}>Update</button>):<button onClick={addUser}>Add</button>
}

{/* LIST */}
      {users.map((user) => (
        <div key={user.id} style={{ marginTop: "10px" }}>
          <span>{user.name}</span>

          <button onClick={() => startEdit(user)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default CRUD_Task